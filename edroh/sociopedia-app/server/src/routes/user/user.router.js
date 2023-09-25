import express  from "express";
import { login } from "../auth/auth.controller.js";

const userRouter = express.Router();

userRouter.post("/login", login)

export {
    userRouter
}