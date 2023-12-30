import express from "express";
import { httpFailure, httpHomePage, httpLogin } from "../controllers/index.js";

import {
  passport_callback_validator,
  passport_login_validator,
} from "../middlewares/passport-middleware.js";

const userRouter = express.Router();

userRouter.get("/", httpHomePage);
userRouter.get("/auth/login", passport_login_validator);

userRouter.get("/auth/google/callback", passport_callback_validator, httpLogin);

userRouter.get("/failure", httpFailure);
export default userRouter;
