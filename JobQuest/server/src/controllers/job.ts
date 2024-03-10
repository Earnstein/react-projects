import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../middleware/error";
import {
  createJob,
  deleteAllJob,
  deleteJob,
  editJob,
  editJobById,
  getAllJob,
  getJobById,
} from "../mongo/user";

// POST: CREATE NEW JOB

async function httpCreateJob(c: Context) {
  const body = await c.req.json();
  const newJob = await createJob(body);
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
  const allJobs = await getAllJob();
  if (allJobs.length != 0) {
    return c.json(
      {
        message: "ok",
        data: allJobs,
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

// GET: FETCH JOB BY ID

async function httpGetJob(c: Context) {
  const id = c.req.param("id");
  if (!id) {
    throw new BadRequest("Provide Job Id");
  }
  const job = await getJobById(id);
  if (!job) {
    throw new NotFound("Job does not exist");
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
    return c.json({ message: "Provide Job Id" }, 401);
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
