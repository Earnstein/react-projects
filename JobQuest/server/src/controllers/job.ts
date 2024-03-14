import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound, Unauthorized } from "../middleware/error";
import {
  createJob,
  deleteAllJob,
  deleteJob,
  editJob,
  editJobById,
  getAllJob,
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
  const { role, userId } = c.get("jwtPayload");
  const allJobs = await getAllJob(role, userId);

  if (allJobs?.length !== 0) {
    return c.json(
      {
        message: "ok",
        data: allJobs,
      },
      StatusCodes.OK
    );
  }
  return c.json(
    {
      message: "ok",
      data: "Your job list is Empty",
    },
    StatusCodes.NO_CONTENT
  );
}

// GET: FETCH JOB BY ID

async function httpGetJob(c: Context) {
  const id = c.req.param("id");
  const { role, userId } = c.get("jwtPayload");
  if (!id) {
    throw new BadRequest("Provide Job Id");
  }
  if (role === "admin") {
    const job = await getJobById(id);
    return c.json(
      { message: "success", status: "ok", data: job },
      StatusCodes.OK
    );
  }
  const job = await getJobById(id);

  if (!job) {
    throw new NotFound("Job does not exist");
  }

  if (job.createdBy != userId) {
    throw new Unauthorized("Permission denied!");
  }

  return c.json(
    { message: "success", status: "ok", data: job },
    StatusCodes.OK
  );
}

// PATCH: EDIT JOB BY ID

async function httpEditJob(c: Context) {
  const body = await c.req.json();
  const id = c.req.param("id");
  if (!id) {
    throw new BadRequest("Provide Job Id");
  }
  const job = await editJobById(id, body);
  if (!job) {
    throw new NotFound("Job does not exist");
  }
  return c.json(
    { message: "success", status: "ok", data: job },
    StatusCodes.OK
  );
}

// PUT: EDIT ALL JOB FIELD

async function httpEditAJob(c: Context) {
  const body = await c.req.json();
  const id = c.req.param("id");

  if (!id) {
    throw new BadRequest("Provide Job Id");
  }
  const job = await editJob(id, body);
  if (!job) {
    throw new NotFound("Job does not exist");
  }
  return c.json({ message: "success", status: "ok", data: job });
}

// DELETE: DELETE A JOB BY ID

async function httpDeleteJob(c: Context) {
  const id = c.req.param("id");
  if (!id) {
    throw new BadRequest("Provide Job Id");
  }
  const job = await deleteJob(id);
  if (!job) {
    throw new NotFound("Job does not exist");
  }
  return c.json(
    { message: "deleted", status: "ok", data: job },
    StatusCodes.OK
  );
}

// DELETE: DELETE ALL JOB
async function httpDeleteAllJob(c: Context) {
  const job = await deleteAllJob();
  if (job.deletedCount === 0) {
    throw new BadRequest("The job list is Empty");
  }
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
};
