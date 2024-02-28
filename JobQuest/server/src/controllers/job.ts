import type { Context } from "hono";
import { jobs } from "../constants/job";
import Job from "../models/job";

// POST: CREATE NEW JOB
async function httpCreateJob(c: Context) {
  const { position, company } = await c.req.json();

  if (!company || !position) {
    throw new Error("Missing property");
  }
  const job = new Job({
    position: position,
    company: company,
  });
  await job.save();
  const newJob = await Job.findById(
    {
      _id: job._id,
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
      job: newJob,
    },
    201
  );
}

//GET: FETCH ALL JOB
async function httpGetAllJob(c: Context) {
  const allJobs = await Job.find(
    {},
    {
      _id: 1,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  if (allJobs.length != 0) {
    return c.json(
      {
        message: "ok",
        data: allJobs,
      },
      200
    );
  }
  return c.json(
    {
      message: "ok",
      data: "Your job list is Empty",
    },
    200
  );
}

// GET: FETCH JOB BY ID

async function httpGetJob(c: Context) {
  const id = c.req.param("id");
  if (!id) {
    return c.json({ message: "Provide Job Id" }, 401);
  }
  const job = await Job.findById(id, {
    _id: 1,
    __v: 0,
    createdAt: 0,
    updatedAt: 0,
  });
  if (!job) {
    return c.json({ message: "Job does not exist" }, 401);
  }
  return c.json({ message: "success",status: "ok", data: job }, 200);
}



// PATCH: EDIT JOB BY ID
async function httpEditJob(c: Context) {
  const { position, company } = await c.req.json();
  const id = c.req.param("id");
  if (!company && !position) {
    throw new Error("Missing property");
  }
  if (!id) {
    return c.json({ message: "Provide Job Id" }, 401);
  }
  const job = await Job.findByIdAndUpdate(
    id,
    {
      position: position,
      company: company,
    },
    {
      returnDocument: "after",
      select: {
        _id: 1,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    }
  );
  if (!job) {
    return c.json({ message: "Job does not exist" }, 401);
  }
  return c.json({ message: "success",status: "ok", data: job }, 200);
}

// PUT: EDIT ALL JOB FIELD

async function httpEditAJob(c: Context) {
  const { position, company } = await c.req.json();
  const id = c.req.param("id");

  if (!company || !position) {
    throw new Error("Provide both company and position value");
  }
  if (!id) {
    return c.json({ message: "Provide Job Id" }, 401);
  }
  const job = await Job.findByIdAndUpdate(
    id,
    {
      position: position,
      company: company,
    },
    {
      returnDocument: "after",
      select: {
        _id: 1,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    }
  );
  if (!job) {
    return c.json({ message: "Job does not exist" }, 401);
  }
  return c.json({ message: "success",status: "ok", data: job });
}


// DELETE: DELETE A JOB BY ID

async function httpDeleteJob(c: Context) {
  const id = c.req.param("id");
  if (!id) {
    return c.json({ message: "Provide Job Id" }, 401);
  }
  const job = await Job.findByIdAndDelete(id,{
    returnDocument: "after",
    select: {
      _id: 1,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    },
  });
  if (!job) {
    return c.json({ message: "Job does not exist" }, 401);
  }
  return c.json({ message: "deleted", status: "ok", data: job }, 200);
}

async function httpDeleteAllJob(c: Context) { 
  const job = await Job.deleteMany({});
  if (job.deletedCount === 0) {
    return c.json({ message: "Empty" }, 401);
  }
  return c.json({ message: "deleted", status: "ok", data: job }, 200);
}


export { httpCreateJob, httpGetAllJob, httpGetJob, httpEditJob, httpEditAJob, httpDeleteJob,httpDeleteAllJob };
