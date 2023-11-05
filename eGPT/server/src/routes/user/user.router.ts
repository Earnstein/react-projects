import express from "express";
import { httpGetAllUsers, httpUserLogin, httpUserSignUp } from "../../controllers/user.controller.js";
import { loginValidator, signupValidator, validate } from "../../middlewares/validators.js";

const userRouter = express.Router();

userRouter.get("/", httpGetAllUsers);
userRouter.post("/signup", validate(signupValidator),  httpUserSignUp);
userRouter.post("/login", validate(loginValidator),  httpUserLogin);


export default userRouter;