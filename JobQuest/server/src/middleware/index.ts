import * as z from 'zod';
import { jobStatus, jobType, userRoleType } from '../constants/types';


export const JobSchema = z.object({
    position: z.string().min(1, {message: "Position is required"}).max(50),
    company:  z.string().min(1, {message:"Company is required"}).max(50),
    jobStatus:  z.enum([jobStatus.interview, jobStatus.declined, jobStatus.pending]).optional(),
    jobType:  z.enum([jobType.fullTime, jobType.internship, jobType.partTime, jobType.remote]).optional(),
    jobLocation: z.string().min(1, "Job location is required").optional(),
})

export const jobPatchSchema = z.object({
    position: z.string().min(1, {message: "Position is required"}).max(50).optional(),
    company: z.string().min(1, {message:"Company is required"}).max(50).optional(),
    jobStatus: z.enum([jobStatus.interview, jobStatus.declined, jobStatus.pending]).optional(), 
    jobType: z.enum([jobType.fullTime, jobType.internship, jobType.partTime, jobType.remote]).optional(),
    jobLocation: z.string().min(1, "Job location is required").optional(),
}).refine(data => data.position || data.company || data.jobType || data.jobLocation || data.jobStatus, {
    message: "At least one of position, company, jobStatus, jobType, or jobLocation must be provided"
});


export const signUpSchema = z.object({
    firstName: z.string().min(1, "firstName is required").max(50),
    lastName:  z.string().min(1, "lastName is required").max(50),
    email:  z.string().email("Invalid email"),
    password:  z.string().min(8, "password must be at least 8 character long").max(50),
    location: z.string().min(1, "location is required").max(50).optional(),
    role: z.enum([userRoleType.user, userRoleType.admin]).optional(),
})

export const userPatchSchema = z.object({
    firstName: z.string().min(1, "firstName is required").max(50).optional(),
    lastName:  z.string().min(1, "lastName is required").max(50).optional(),
    email:  z.string().email("Invalid email").optional(),
    password:  z.string().min(8, "password must be at least 8 character long").max(50).optional(),
    location: z.string().min(1, "location is required").max(50).optional(),
    role: z.enum([userRoleType.user, userRoleType.admin]).optional(),
}).refine(data => data.firstName || data.lastName || data.email || data.password || data.location || data.role , {
    message: "At least one of firstname, lastName, email, password, or location must be provided"
})




export const signInSchema = z.object({
    email:  z.string().email("Invalid email"),
    password:  z.string().min(1, "password is required").max(50)
})
