import express from "express";
import chatRouter from "./chat/chat.router.js";
import userRouter from "./user/user.router.js";

const appRouter = express.Router();

appRouter.use("/user", userRouter)
appRouter.use("/chats", chatRouter)

export default appRouter;