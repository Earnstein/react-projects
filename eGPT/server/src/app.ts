import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user/user.router.js";
import commentRouter from "./routes/comments/comment.router.js";
config();
const app = express();

//middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("comment", commentRouter);


export default app;