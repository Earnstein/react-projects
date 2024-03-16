import type { Context } from "hono";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import type { Payload } from "../constants/types";
import { StatusCodes } from "http-status-codes";
import {
  createUser,
  findAllUsers,
  findExistingUser,
  deleteAllUsers,
} from "../mongo/user";


// POST: CREATE NEW USER

async function httpSignUp(c: Context) {
  const body = await c.req.json();
  const newUser = await createUser(body);
  return c.json(
    {
      message: "created",
      job: newUser,
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
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
  return c.json(
    {
      message: "Success, user logged in",
    },
    StatusCodes.OK
  );
}

//GET: FETCH ALL JOB

async function httpGetAllUsers(c: Context) {
  const users = await findAllUsers();
  return c.json(
    {
      message: "ok",
      data: users,
    },
    StatusCodes.NO_CONTENT
  );
}

// DELETE: DELETE ALL JOB
async function httpDeleteAllUsers(c: Context) {
  const user = await deleteAllUsers();
  return c.json({ message: "deleted", data: user }, StatusCodes.OK);
}

export { httpSignUp, httpGetAllUsers, httpDeleteAllUsers, httpSignIn };
