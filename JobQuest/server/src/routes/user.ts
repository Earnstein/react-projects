import { Hono } from "hono";
import { httpDeleteAllUsers, httpGetAllUsers } from "../controllers/user";

const userRouter = new Hono();
userRouter
  .route("/")
  .get(httpGetAllUsers)
  .delete("/delete", httpDeleteAllUsers);

export default userRouter;
