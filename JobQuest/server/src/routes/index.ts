import { Hono } from "hono";
import jobRouter from "./job";
import userRouter from "./user";
const api = new Hono();

api.route("/job", jobRouter)
api.route("/user", userRouter)


export default api;