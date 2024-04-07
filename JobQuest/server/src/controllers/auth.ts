import type { Context } from "hono";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import type { Payload } from "../constants/types";
import { StatusCodes } from "http-status-codes";
import { createUser, findExistingUser } from "../mongo/user";

// POST: CREATE NEW USER

async function httpSignUp(c: Context) {
  const body = await c.req.json();
  
  await createUser(body);
  return c.json(
    {
      message: "created"
    },
    StatusCodes.CREATED
  );
}

// POST: SIGN IN USER

async function httpSignIn(c: Context) {
  const body = await c.req.json();
  const existingUser = await findExistingUser(body);

  const payload: Payload = {
    userId: existingUser._id,
    role: existingUser.role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    iat: Math.floor(Date.now() / 1000),
  };

  const token = await sign(payload, Bun.env.JWT_SECRET!);
  setCookie(c, "auth_token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    secure: Bun.env.NODE_ENV! === "production"
  });
  return c.json(
    {
      message: "Success, user logged in",
    },
    StatusCodes.OK
  );
}

// GET: LOG OUT USER
async function httpLogout(c: Context) {
  setCookie(c, "auth_token", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: Bun.env.NODE_ENV! === "production"
  });
  return c.json(
    {
      message: "Success, user logged out.",
    },
    StatusCodes.OK
  );
}

export { httpSignUp, httpSignIn, httpLogout };
