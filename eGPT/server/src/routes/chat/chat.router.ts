import express from "express";
import { httpGenerateChat } from "../../controllers/chats.controller.js";
import { chatValidator, validate } from "../../middlewares/validators.js";
import { verifyToken } from "../../utils/auth.js";

const chatRouter = express.Router();

// protected route
chatRouter.post("/new", validate(chatValidator), verifyToken, httpGenerateChat)

export default chatRouter;