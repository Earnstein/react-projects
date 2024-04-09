import type { ObjectId } from "mongoose";
import Job from "../models/job";
import { NoContent } from "../middleware/error";
import type { JobBody, JobPatch, JobPut } from "../constants/types";

const createJob = async (body: JobBody, createdBy: string) => {
  const job = new Job({
    ...body,
    createdBy: createdBy,
  });
  await job.save();
  const newJob = await Job.findById(
    {
      _id: job._id,
    },
  ).select("-__v -_id -createdBy -createdAt -updatedAt");


  return newJob;
};

const getAllJob = async (userId: ObjectId) => {
  const allJobs = await Job.find(
    { createdBy: userId },
    {
      __v: 0,
      updatedAt: 0,
      createdAt: 0,
    }
  ).populate({
      path: "createdBy",
      select: "-_id -__v -password -updatedAt -createdAt",
    })
    .exec();
  if (allJobs?.length === 0) {
    throw new NoContent("The job list is Empty");
  }
  return allJobs;
};

const getJobById = async (id: string) => {
  const job = await Job.findById(id, {

    __v: 0,
    createdAt: 0,
    updatedAt: 0,
  });
  return job;
};

const editJobById = async (id: string, body: JobPatch) => {
  const job = await Job.findByIdAndUpdate(
    id,
    {
      ...body,
    },
    {
      returnDocument: "after",
      select: {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    }
  );

  return job;
};

const editJob = async (id: string, body: JobPut) => {
  const job = await Job.findByIdAndUpdate(
    id,
    {
      ...body,
    },
    {
      returnDocument: "after",
      select: {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    }
  );

  return job;
};

const deleteJob = async (id: string) => {
  const job = await Job.findByIdAndDelete(id, {
    returnDocument: "after",
    select: {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    },
  });
  return job;
};

const deleteAllJob = async (userId: ObjectId) => {
  const job = await Job.deleteMany({ createdBy: userId });
  if (job.deletedCount === 0) {
    throw new NoContent("The job list is Empty");
  }
  return job;
};

// ADMIN FUNCTIONS
const getAllJobs = async () => {
  const allJobs = await Job.find(
    {},
    {
      __v: 0,
      updatedAt: 0,
      createdAt: 0,
    }
  )
    .populate({
      path: "createdBy",
      select: "-_id -__v -password -updatedAt -createdAt",
    })
    .exec();
  if (allJobs?.length === 0) {
    throw new NoContent("The job list is Empty");
  }
  return allJobs;
};

const deleteAllJobs = async () => {
  const job = await Job.deleteMany({});
  if (job.deletedCount === 0) {
    throw new NoContent("The job list is Empty");
  }
  return job;
};


const jobStats =async () => {
  const jobs = Job.countDocuments()
  return jobs
}

export {
  createJob,
  deleteAllJob,
  getJobById,
  editJobById,
  editJob,
  deleteJob,
  getAllJob,
  getAllJobs,
  deleteAllJobs,
  jobStats
};
