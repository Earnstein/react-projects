import express from "express";
import { httpCreateUser } from "./user.controller.js";

const userRouter = express.Router()

userRouter.post("/", httpCreateUser);

export default userRouter