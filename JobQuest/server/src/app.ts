import { Hono } from "hono";
import { logger } from "hono/logger";
import userRouter from "./routes/user";

const app = new Hono();


app.onError((err, c) => {
    console.error(err)
    return c.text("ERROR")
})
app.get('/', (c)=> c.json({
    message: "Hello world"
}));

app.get("/earnstein", (C) => {
    return C.json({
        message: "welcome to earnstein"
    })
})

app.get("/earnstei", (C) => {
    return C.json({
        message: "wlcome to earnstei",
        path : C.req.path
    })
})
app.post("/create",(c)=> c.text("Post end point"))



app.use(logger())
app.route("/user", userRouter)

export default app;