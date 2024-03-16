import type { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import { BadRequest, NotFound, Unauthenticated, Unauthorized } from "../middleware/error";
import { verify } from "hono/jwt";
import Job from "../models/job";

export const authMiddleware = async (c: Context, next: Next) => {
  const cookie = getCookie(c, "auth_token");
  if (!cookie) {
    throw new Unauthenticated("User not Authenticated");
  }
  const token = await verify(cookie, Bun.env.JWT_SECRET!);
  c.set("jwtPayload", token);
  await next();
};

export const validateUser = async (c: Context, next: Next) => {
  const id = c.req.param("id");
  if (!id) {
    throw new BadRequest("Provide Job Id");
  }
  const { role, userId } = c.get("jwtPayload");
  const job = await Job.findById(id);
  if (!job) {
    throw new NotFound("Job does not exist");
  }
  const isAdmin = role === "admin";
  const isUser = job?.createdBy.toString() === userId;
  if(!isAdmin && !isUser){
    throw new Unauthorized("Permission denied")
  }
  await next();
};
