import type { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";
import Job from "../models/job";
import {
  BadRequest,
  NotFound,
  Unauthenticated,
  Unauthorized,
} from "../middleware/error";

// VERIFY COOKIE MIDDLEWARE

export const authMiddleware = async (c: Context, next: Next) => {
  const cookie = getCookie(c, "auth_token");
  if (!cookie) {
    throw new Unauthenticated("User not Authenticated");
  }
  const token = await verify(cookie, Bun.env.JWT_SECRET!);
  c.set("jwtPayload", token);
  await next();
};

// VALIDATE OWNER MIDDLEWARE

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
  if (!isAdmin && !isUser) {
    throw new Unauthorized("Permission denied");
  }
  await next();
};

// VALIDATE ADMIN MIDDLEWARE

export const validateAdmin = async (c: Context, next: Next) => {
  const { role } = c.get("jwtPayload");
  const isAdmin = role === "admin";
  if (!isAdmin) {
    throw new Unauthorized("Permission denied");
  }
  await next();
};
