import { Hono } from "hono";
import jobRouter from "./job";
import userRouter from "./user";
const api = new Hono();



api.route("/user", userRouter);
api.route("/job", jobRouter)

export default api;