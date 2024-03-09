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