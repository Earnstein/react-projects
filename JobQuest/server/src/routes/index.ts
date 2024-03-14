import { Hono, type Env } from "hono";
import jobRouter from "./job";
import userRouter from "./user";
import { getCookie } from 'hono/cookie'
import { Unauthenticated } from "../middleware/error";
import { verify } from "hono/jwt";
import type { ObjectId } from "mongoose";

const api = new Hono();

api.use("/job/*",  async (c, next) => {
   const cookie = getCookie(c, "auth_token")
   if (!cookie){
    throw new Unauthenticated("User not Authenticated")
   }
   const token = await verify(cookie,  Bun.env.JWT_SECRET!)
   c.set("jwtPayload", token)
   await next();
  })
api.route("/job", jobRouter)
api.route("/auth", userRouter)


export default api;