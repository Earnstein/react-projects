import { LogOut, User, User2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDashboard } from "@/hooks/useDashboard";
import { useMutation } from "@tanstack/react-query";
import { userLogout } from "@/lib/requests";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGetUser } from "@/hooks/useGetUser";


const LogOutButton = () => {
  const navigate = useNavigate();
  const { logout } = useDashboard();

  const { mutate } = useMutation({
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
  
  const  { data } = useGetUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
        >
          <User2 className="w-4 h-4 mr-2" />{" "}
          <span className="text-sm font-palanquin">
            {data?.data?.firstName ? `${data?.data?.firstName}` : ""}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout(mutate)}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LogOutButton;
