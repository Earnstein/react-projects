import express from "express";
import { httpGetAllUsers, httpSignUp } from "../../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", httpGetAllUsers);
userRouter.post("/signup", httpSignUp);


export default userRouter;