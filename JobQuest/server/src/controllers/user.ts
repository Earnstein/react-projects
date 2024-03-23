import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import {
  createUser,
  findAllUsers,
  findExistingUser,
  deleteAllUsers,
} from "../mongo/user";


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

export { httpGetAllUsers, httpDeleteAllUsers};
