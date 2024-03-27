import type { ObjectId } from "mongoose";


export enum jobStatus {
  interview = "interview",
  declined = "declined",
  pending = "pending"
}

export enum jobType {
  fullTime = "full-time",
  partTime = "part-time",
  internship = "internship",
  remote = "remote"
}

export enum userRoleType {
  user = "user",
  admin = "admin"
}

export interface Job_Sort_By {
    NEWEST: string,
    OLDEST: string,
    ASCENDING: string,
    DESCENDING: string
}

export interface Payload {
  userId: ObjectId;
  role: string;
  exp: Number;
  iat: Number;
}

export interface JobBody {
  company: string;
  position: string;
  jobStatus?: string;
  jobType?: string;
  jobLocation?: string;
}
export interface JobPatch {
  company?: string;
  position?: string;
  jobStatus?: string;
  jobType?: string;
  jobLocation?: string;
}

export interface JobPut {
  company: string;
  position: string;
  jobStatus?: string;
  jobType?: string;
  jobLocation?: string;
}


export interface UserBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location?: string;
}

export interface UserPatch {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  location?: string;
}

export interface SignInType {
  email: string;
  password: string;
}
