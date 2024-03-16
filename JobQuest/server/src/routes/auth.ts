import { Hono } from "hono";
import { httpSignIn, httpSignUp } from "../controllers/user";
import { zValidator } from "@hono/zod-validator";
import { signUpSchema, signInSchema } from "../middleware";
import { StatusCodes } from "http-status-codes";

const authRouter = new Hono();

authRouter
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
  );


export default authRouter;