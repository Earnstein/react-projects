import express from "express";
import { httpGetAllUsers, httpUserLogin, httpUserSignUp, httpVerifyUser } from "../../controllers/user.controller.js";
import { loginValidator, signupValidator, validate } from "../../middlewares/validators.js";
import { verifyToken } from "../../utils/auth.js";

const userRouter = express.Router();

userRouter.get("/", httpGetAllUsers);
userRouter.post("/signup", validate(signupValidator),  httpUserSignUp);
userRouter.post("/login", validate(loginValidator),  httpUserLogin);
userRouter.get("/auth-status",verifyToken,  httpVerifyUser);


export default userRouter;