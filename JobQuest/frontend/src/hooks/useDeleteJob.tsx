import { deleteJob } from "@/lib/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteJob = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-job"],
    mutationFn: (id: string) => deleteJob(id),
    onMutate: () => {
        toast.info("deleting...")
    },
    onSuccess: () => {
        queryClient.invalidateQueries()
        toast.dismiss();
        toast.success("Job deleted successfully");
    },
    onError: (error: any) => {
        toast.error(error?.response?.data?.message);
    }
})
}
