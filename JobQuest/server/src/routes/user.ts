import { Hono } from "hono";
import {
  httpDeleteAllUsers,
  httpGetAllUsers,
  httpSignIn,
  httpSignUp,
} from "../controllers/user";
import { zValidator } from "@hono/zod-validator";
import { signUpSchema, signInSchema } from "../middleware";
import { StatusCodes } from "http-status-codes";

const userRouter = new Hono();
userRouter
  .route("/")
  .post(
    "/signup",
    zValidator("json", signUpSchema, (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error.issues }, StatusCodes.BAD_REQUEST);
      }
    }),
    httpSignUp
  )
  .post(
    "/signin",
    zValidator("json", signInSchema, (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error.issues }, StatusCodes.BAD_REQUEST);
      }
    }),
    httpSignIn
  )
  .get("/users", httpGetAllUsers)
  .delete("/delete", httpDeleteAllUsers);

export default userRouter;
