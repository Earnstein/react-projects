import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import { BadRequest, Unauthenticated } from "../middleware/error";
import User from "../models/user";
import { sign } from "hono/jwt";
import type { ObjectId } from "mongoose";
import { setCookie } from 'hono/cookie'


interface Payload {
  userId: ObjectId,
  role: string,
  exp: Number,
  iat: Number
}

// POST: CREATE NEW USER

async function httpSignUp(c: Context) {
  const body = await c.req.json();
  const existingUser = await User.findOne({ email: body.email });

  if (existingUser) {
    throw new BadRequest("User already Exists");
  }

  const user = new User({
    ...body,
  });
  await user.save();
  const newUser = await User.findById(
    {
      _id: user._id,
    },
    {
      _id: 1,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
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
  const existingUser = await User.findOne({ email: body.email });

  if (!existingUser) {
    throw new Unauthenticated("User does not Exist");
  }

  const isValidPassword = await Bun.password.verify(body.password, existingUser.password);
 if (!isValidPassword){
  throw new Unauthenticated("Invalid password");
 }

 const payload: Payload = {
  userId: existingUser._id,
  role: existingUser.role,
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
  iat: Math.floor(Date.now() / 1000)
}

  const token = await sign(payload, Bun.env.JWT_SECRET!)
  setCookie(c, 'auth_token', token, {
    httpOnly: true,
    expires: new Date(Date.now()  +  1000 * 60 * 60 * 24)
  })
  return c.json(
    {
      message: "Success, user logged in"
    },
    StatusCodes.OK
  );
}

//GET: FETCH ALL JOB

async function httpGetAllUsers(c: Context) {
  const users = await User.find(
    {},
    {
      _id: 1,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  if (users.length != 0) {
    return c.json(
      {
        message: "ok",
        data: users,
      },
      StatusCodes.NO_CONTENT
    );
  }
  return c.json(
    {
      message: "ok",
      data: "Your job list is Empty",
    },
    StatusCodes.OK
  );
}

// DELETE: DELETE ALL JOB 
async function httpDeleteAllUsers(c: Context) { 
  const user = await User.deleteMany({});
  if (user.deletedCount === 0) {
    throw new BadRequest("The user list is Empty");
  }
  return c.json({ message: "deleted", status: "ok", data: user }, StatusCodes.OK);
}


export { httpSignUp, httpGetAllUsers, httpDeleteAllUsers, httpSignIn };
