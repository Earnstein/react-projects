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

export interface Job_Sort_By {
    NEWEST: string,
    OLDEST: string,
    ASCENDING: string,
    DESCENDING: string
}

export interface JobBody {
  _id: string;
  company: string;
  position: string;
  jobStatus: string;
  jobType: string;
  jobLocation: string;
  createdAt: Date;
}
export interface JobPatch {
  position: string;
  company: string;
  jobStatus: string;
}


export interface SignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserPatch {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  location?: string;
}

export interface SignIn {
  email: string;
  password: string;
}
