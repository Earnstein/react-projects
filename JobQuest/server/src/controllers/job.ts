import type { Context } from "hono";
import { jobs } from "../constants/job";
import Job from "../models/job";


//CREATE NEW JOB
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
      "_id": 0,
      "__v": 0,
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


// GET ALL JOB
async function httpGetAllJob(c: Context) {
  const allJobs = await Job.find({},  {
    "_id": 0,
    "__v": 0,
    createdAt: 0,
    updatedAt: 0,
  })
  if (allJobs.length != 0){
    return c.json({
      message: "ok",
      data: allJobs
    }, 200)
  }
  return c.json({
    message: "ok",
    data: "Your job list is Empty"
  }, 200);
}


// GET JOB BY ID


async function httpGetJob(c: Context) {
  const id = c.req.param("id");
  if (!id) {
    return c.json({ message: "no id" }, 401);
  }
  const job = jobs.find((f) => f.id === id);
  if (!job) {
    return c.json({ message: "Job does not exist" }, 401);
  }
  return c.json({ message: "success", data: job });
}

export { httpCreateJob, httpGetAllJob, httpGetJob };
