import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { JobPatch } from "@/constants/types";
import { editJob } from "@/lib/requests";

interface EditProp {
  id: string;
  body: JobPatch;
}

export const useEditJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-job"],
    mutationFn: ({ id, body }: EditProp) => editJob(id, body),
    onMutate: () => {
      toast.info("Saving...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Job Edited successfully");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });
};
