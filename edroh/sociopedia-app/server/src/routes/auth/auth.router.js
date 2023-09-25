import express from "express";
import { login } from "../auth/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", login)

export {
    authRouter
}