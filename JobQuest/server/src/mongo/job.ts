import type { ObjectId } from "mongoose";
import Job from "../models/job";
import { NoContent } from '../middleware/error';

export interface BodyType {
  company: string;
  position: string;
  jobStatus?: string;
  jobType?: string;
  jobLocation?: string;
}
export interface Patch {
  company?: string;
  position?: string;
  jobStatus?: string;
  jobType?: string;
  jobLocation?: string;
}

export interface Put {
  company: string;
  position: string;
  jobStatus?: string;
  jobType?: string;
  jobLocation?: string;
}

const createJob = async (body: BodyType, createdBy: string) => {
  const job = new Job({
    ...body,
    createdBy: createdBy,
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

const getJobById = async (id: string) => {
  const job = await Job.findById(id, {
    _id: 1,
    __v: 0,
    createdAt: 0,
    updatedAt: 0,
  });
  return job;
};

const editJobById = async (id: string, body: Patch) => {
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

const editJob = async (id: string, body: Put) => {
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

export {
  createJob,
  getAllJob,
  deleteAllJob,
  getJobById,
  editJobById,
  editJob,
  deleteJob,
};
