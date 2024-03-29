import { Hono } from "hono";
import {
  httpDeleteAllUsers,
  httpEditUser,
  httpGetAllUsers,
  httpGetStats,
  httpGetUser,
} from "../controllers/user";
import { zValidator } from "@hono/zod-validator";
import { userPatchSchema } from "../middleware";
import { StatusCodes } from "http-status-codes";
import { validateAdmin } from "../middleware/auth";

const userRouter = new Hono();
userRouter
  .route("/")
  .get(validateAdmin, httpGetAllUsers)
  .delete(validateAdmin, httpDeleteAllUsers)
  .get("stats", validateAdmin, httpGetStats)
  .get("/current", httpGetUser)
  .patch(
    "/edituser",
    zValidator("json", userPatchSchema, (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error.issues }, StatusCodes.BAD_REQUEST);
      }
    }),
    httpEditUser
  );
export default userRouter;
