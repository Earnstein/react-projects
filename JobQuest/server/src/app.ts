import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { config } from "dotenv";
import api from "./routes";
import { NotFound, Unauthenticated, Unauthorized, BadRequest } from './middleware/error';
import { MongooseError } from "mongoose";
config()

const app = new Hono();

app.use(prettyJSON({space: 4}))
app.use(secureHeaders())
app.use(cors())
app.use(logger())
app.route("/api/v1", api)

app.notFound((c) => {
    return c.json({
        message: "Not found"
    }, 404)
})

app.onError((err, c) => {
   if (err instanceof NotFound 
    || err instanceof BadRequest
    || err instanceof Unauthenticated
    || err instanceof Unauthorized) {
    const message = err.message;
    const statusCode = err.statusCode
    return c.json({
        message: message
    }, statusCode)
   }

   if( err instanceof MongooseError && err.name === "CastError"){
    return c.json({
        message: "Invalid Id",
        id: c.req.param("id")
    }, 404)
   }
    return c.json({
        message: "Internal server error"
    }, 500)
})


export default app;