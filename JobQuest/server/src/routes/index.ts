import { Hono } from "hono";
import jobRouter from "./job";
import userRouter from "./user";
import authRouter from "./auth";
import { authMiddleware} from "../middleware/auth";

const api = new Hono();

api.route("/auth", authRouter);

api.use("/job/*", authMiddleware);
api.use("/user/*", authMiddleware);
api.route("/job", jobRouter);
api.route("/user", userRouter);

export default api;
