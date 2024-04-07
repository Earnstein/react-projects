import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import api from "./routes";
import {
  BadRequest,
  NoContent,
  NotFound,
  Unauthenticated,
  Unauthorized
} from "./middleware/error";
import { MongooseError } from "mongoose";

const app = new Hono();

app.use(prettyJSON({ space: 4 }));
app.use(secureHeaders());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
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
    err instanceof NoContent ||
    err instanceof NotFound ||
    err instanceof BadRequest ||
    err instanceof Unauthenticated ||
    err instanceof Unauthorized
  ) {
    const message = err.message;
    const errorName = err.name;
    const statusCode = err.statusCode;
    return c.json(
      {
        message: message,
        status: errorName,
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
