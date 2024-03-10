import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import api from "./routes";
import {
  NotFound,
  Unauthenticated,
  Unauthorized,
  BadRequest,
} from "./middleware/error";
import { MongooseError } from "mongoose";


const app = new Hono();

app.use(prettyJSON({ space: 4 }));
app.use(secureHeaders());
app.use(cors());
app.use(logger());
app.route("/api/v1", api);

app.notFound((c) => {
  return c.json(
    {
      message: "Not found",
    },
    404
  );
});

app.onError((err, c) => {
  if (err instanceof MongooseError && err.name === "CastError") {
    throw new BadRequest("Invalid id");
  }

  if (
    err instanceof NotFound ||
    err instanceof BadRequest ||
    err instanceof Unauthenticated ||
    err instanceof Unauthorized
  ) {
    const message = err.message;
    const statusCode = err.statusCode;
    return c.json(
      {
        message: message,
      },
      statusCode
    );
  }

  return c.json(
    {
      message: "Internal server error",
    },
    500
  );
});

export default app;
