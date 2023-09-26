import express from "express";
import { verifyToken } from "../../middleware/auth.js";
import {
  httpGetUser,
  httpGetAllUsers,
  httpGetUserFriends,
  httpAddRemoveFriend,
} from "./user.controller.js";

const userRouter = express.Router();


/* READ */
userRouter.get("/users", httpGetAllUsers); // for testing purposes
userRouter.get("/:id", verifyToken, httpGetUser);
userRouter.get("/:id", verifyToken, httpGetUserFriends);


/* UPDATE */
userRouter.patch("/:id/:friendId", verifyToken, httpAddRemoveFriend);


export { userRouter };