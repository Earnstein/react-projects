import { Hono } from "hono";


const userRouter = new Hono();
userRouter.get("/", (c) => c.text("Welcome to user router"))

export default userRouter;