import { allJob } from '@/lib/requests'
import { useQuery } from '@tanstack/react-query'

export const useGetJobs = () => {
   return useQuery({
    queryKey: ["jobs"],
    queryFn: () => allJob()
})
}