import express from "express";
import { verifyToken } from "../../middleware/auth.js";
import { httpGetFeedPosts, httpGetUserPosts, httpGetLikePost } from "./post.contoller.js"

const postRouter = express.Router();

/* READ */
postRouter.get("/", verifyToken, httpGetFeedPosts);
postRouter.get("/:userId/posts", verifyToken, httpGetUserPosts);

/* UPDATE */
postRouter.patch("/:id/like", verifyToken, httpGetLikePost);



export {
    postRouter
}