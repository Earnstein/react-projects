import * as z from 'zod';

export const schema = z.object({
    position: z.string()
    .min(1, "Username must be at least 3 character")
    .max(50)
})