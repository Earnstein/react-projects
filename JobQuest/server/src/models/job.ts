import { Schema, Document, model } from "mongoose";

enum jobStatus {
  interview = "interview",
  declined = "declined",
  pending = "pending"
}

enum jobType {
  fullTime = "full-time",
  partTime = "part-time",
  internship = "internship"
}
interface Job extends Document {
  company: string,
  position: string,
  jobStatus: string,
  jobType: string,
  jobLocation: string
}

const JobSchema = new Schema<Job>(
  {
    company: {
      type:String,
      required: true
    },
    position: {
      type:String,
      required: true
    },
    jobStatus: {
      type: String,
      enum: Object.values(jobStatus),
      default: jobStatus.pending,
    },
    jobType: {
      type: String,
      enum: Object.values(jobType),
      default: jobType.fullTime,
    },
    jobLocation: {
      type: String,
      default: "Nigeria",
    },
  },
  {
    timestamps: true,
  }
);

const Job = model<Job>('Job', JobSchema);
export default Job;