import * as z from "zod";

export const BASE_URL  = "http://localhost:5000/api/v1/"


enum jobStatus {
  interview = "interview",
  declined = "declined",
  pending = "pending"
}

enum jobType {
  fullTime = "full-time",
  partTime = "part-time",
  internship = "internship",
  remote = "remote"
}

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, "First name is required")
      .max(50, "First name must be less than 51 characters"),
    lastName: z
      .string()
      .trim()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 51 characters"),
    email: z.string().email("Enter a valid email"),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().trim(),
});

export const addJobSchema = z.object({
  position: z.string().min(1,  "Position is required").max(20, "Maximum of 20 characters allowed"),
  company:  z.string().min(1, "Company is required").max(20,  "Maximum of 20 characters allowed"),
  jobStatus: z.string().min(1),
  jobType:  z.string().min(1),
  jobLocation: z.string().min(1, "Job location is required").optional(),
})

export const jobStatusOptions = [
  {
      value: jobStatus.interview,
      label: "Interview"
  },
  {
      value: jobStatus.declined,
      label: "Declined"
  },
  {
      value: jobStatus.pending,
      label: "Pending"
  },
]

export const jobTypeOptions = [
  {
    value: jobType.fullTime,
    label: "Full-time"
  },
  {
    value: jobType.partTime,
    label: "Part-time"
  },
  {
    value: jobType.remote,
    label:"Remote"
  },
  {
    value: jobType.internship,
    label: "Internship"
  }
]