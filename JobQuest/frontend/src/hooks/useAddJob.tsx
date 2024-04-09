import { useMutation } from "@tanstack/react-query";
import { addJob } from "@/lib/requests";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { JobBody } from "@/constants/types";

export const useAddJob = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ["addjob"],
        mutationFn: (body: JobBody) => addJob(body),
        onSuccess: () => {
            toast.success("Job added successfully");
            navigate("/dashboard/all-jobs");
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message);
        }
    })
}
