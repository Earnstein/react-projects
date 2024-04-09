import { getUser } from "@/lib/requests"
import { useQuery } from "@tanstack/react-query"

export const useGetUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => getUser(),
        retry: 0,
    })
}


