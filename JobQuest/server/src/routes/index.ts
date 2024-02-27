import { Hono } from "hono";
import jobRouter from "./job";
const api = new Hono();

api.route("/job", jobRouter)

export default api;