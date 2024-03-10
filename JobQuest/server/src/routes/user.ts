import { Hono } from "hono";
import {
  httpDeleteAllUsers,
  httpGetAllUsers,
  httpSignIn,
  httpSignUp,
} from "../controllers/user";
import { zValidator } from "@hono/zod-validator";
import { signUpSchema, signInSchema } from "../middleware";

const userRouter = new Hono();
userRouter
  .route("/")
  .post("/signup",zValidator("json", signUpSchema), httpSignUp)
  .post("/signin", zValidator("json", signInSchema), httpSignIn)
  .get("/users",httpGetAllUsers)
  .delete("/delete", httpDeleteAllUsers)
  

export default userRouter;
