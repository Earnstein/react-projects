import { NextFunction, Request, Response } from "express";
import configOpenAi from "../config/openai-config.js";
import User from "../models/schema/user.mongo.js";

interface UserChat {
  role: any;
  content: any;
}



async function httpGenerateChat(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // config open ai api

  try {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Invalid token" });
    }

    // retrive user chat
    const userChats: UserChat[] = user.chats.map(({ role, content }) => ({
      role,
      content,
    }));
    userChats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // send all chat with the new one from open ai
    const openai = await configOpenAi();
    const newchatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: userChats,
    });
    user.chats.push(newchatResponse.choices[0].message);
    console.log(newchatResponse.choices[0]);
    await user.save();
    return res.status(200).json({ userChats: user.chats });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}

async function systemConfig() {}

export { httpGenerateChat };
