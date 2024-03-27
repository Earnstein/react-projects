import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import {
  createJob,
  deleteAllJob,
  deleteAllJobs,
  deleteJob,
  editJob,
  editJobById,
  getAllJob,
  getAllJobs,
  getJobById,
} from "../mongo/job";


// POST: CREATE NEW JOB

async function httpCreateJob(c: Context) {
  const { userId } = c.get("jwtPayload");
  const body = await c.req.json();
  const newJob = await createJob(body, userId);
  return c.json(
    {
      message: "created",
      job: newJob,
    },
    StatusCodes.CREATED
  );
}

//GET: FETCH ALL JOB

async function httpGetAllJob(c: Context) {
  const { userId } = c.get("jwtPayload");
  const allJobs = await getAllJob(userId);
  return c.json(
    {
      message: "ok",
      data: allJobs,
    },
    StatusCodes.OK
  );
}

// GET: FETCH JOB BY ID

async function httpGetJob(c: Context) {
  const id = c.req.param("id");
  const job = await getJobById(id);
  return c.json(
    { message: "success", status: "ok", data: job },
    StatusCodes.OK
  );
}

// PATCH: EDIT JOB BY ID

async function httpEditJob(c: Context) {
  const body = await c.req.json();
  const id = c.req.param("id");
  const job = await editJobById(id, body);
  return c.json(
    { message: "success", status: "ok", data: job },
    StatusCodes.OK
  );
}

// PUT: EDIT ALL JOB FIELD

async function httpEditAJob(c: Context) {
  const body = await c.req.json();
  const id = c.req.param("id");
  const job = await editJob(id, body);
  return c.json(
    { message: "success", status: "ok", data: job },
    StatusCodes.OK
  );
}

// DELETE: DELETE A JOB BY ID

async function httpDeleteJob(c: Context) {
  const id = c.req.param("id");
  const job = await deleteJob(id);
  return c.json(
    { message: "deleted", status: "ok", data: job },
    StatusCodes.OK
  );
}

// DELETE: DELETE ALL JOB
async function httpDeleteAllJob(c: Context) {
  const { userId } = c.get("jwtPayload");
  const job = await deleteAllJob(userId);
  return c.json(
    { message: "deleted", status: "ok", data: job },
    StatusCodes.OK
  );
}

//GET: FETCH ALL JOB - ADMIN

async function httpGetAllJobs(c: Context) {
  const allJobs = await getAllJobs();
  return c.json(
    {
      message: "ok",
      data: allJobs,
    },
    StatusCodes.OK
  );
}

// DELETE: DELETE ALL JOB - ADMIN

async function httpDeleteAllJobs(c: Context) {
  const job = await deleteAllJobs();
  return c.json(
    { message: "deleted", status: "ok", data: job },
    StatusCodes.OK
  );
}

export {
  httpCreateJob,
  httpGetAllJob,
  httpGetJob,
  httpEditJob,
  httpEditAJob,
  httpDeleteJob,
  httpDeleteAllJob,
  httpGetAllJobs,
  httpDeleteAllJobs,
};
