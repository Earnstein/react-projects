import { useMutation } from "@tanstack/react-query";
import { userLogout } from "../lib/requests";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: userLogout,
    onMutate: () => {
      toast.info("Logging Out..");
    },
    onSuccess: () => {
      toast.success("User signed out!");
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });
};
