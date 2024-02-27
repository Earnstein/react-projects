import { Hono } from "hono";
import { logger } from "hono/logger";
import api from "./routes";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";


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
    console.error(err)
    return c.json({
        message: "Internal server error"
    }, 500)
})

export default app;