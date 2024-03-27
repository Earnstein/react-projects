import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import {
  findAllUsers,
  deleteAllUsers,
  getUserById,
  editUserById,
} from "../mongo/user";


//GET: FETCH ALL USERS

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


// GET: FETCH CURRENT USER BY ID

async function httpGetUser(c: Context) {
  const { userId } = c.get("jwtPayload");
  const user = await getUserById(userId);
  return c.json(
    { message: "success", status: "ok", data: user },
    StatusCodes.OK
  );
}

// PATCH: EDIT USER BY ID

async function httpEditUser(c: Context) {
  const body = await c.req.json();
  console.log(body)
  const { userId }= c.get("jwtPayload");
  const user = await editUserById(userId, body);
  return c.json(
    { message: "success", status: "ok", data: user },
    StatusCodes.OK
  );
}

// DELETE: DELETE ALL JOB

async function httpDeleteAllUsers(c: Context) {
  const user = await deleteAllUsers();
  return c.json({ message: "deleted", data: user }, StatusCodes.OK);
}

export { httpGetAllUsers, httpDeleteAllUsers, httpGetUser, httpEditUser};
