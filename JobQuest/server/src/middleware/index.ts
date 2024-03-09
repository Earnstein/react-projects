import * as z from 'zod';
import { jobStatus, jobType } from '../constants/types';


export const JobSchema = z.object({
    position: z.string().min(1, "Position is required").max(50),
    company:  z.string().min(1, "Company is required").max(50),
    jobStatus:  z.enum([jobStatus.interview, jobStatus.declined, jobStatus.pending]).optional(),
    jobType:  z.enum([jobType.fullTime, jobType.internship, jobType.partTime, jobType.remote]).optional(),
    jobLocation: z.string().min(1, "Job location is required").optional(),

})

export const patchSchema = z.object({
    position: z.string().min(1, "Position is required").max(50).optional(),
    company: z.string().min(1, "Company is required").max(50).optional(),
    jobStatus: z.enum([jobStatus.interview, jobStatus.declined, jobStatus.pending]).optional(), 
    jobType: z.enum([jobType.fullTime, jobType.internship, jobType.partTime, jobType.remote]).optional(),
    jobLocation: z.string().min(1, "Job location is required").optional(),
}).refine(data => data.position || data.company || data.jobType || data.jobLocation || data.jobStatus, {
    message: "At least one of position, company, jobStatus, jobType, or jobLocation must be provided"
});