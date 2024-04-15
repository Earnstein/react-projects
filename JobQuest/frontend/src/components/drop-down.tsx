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
import { useGetUser } from "@/hooks/useGetUser";
import { useLogOut } from "@/hooks/useLogOut";
import { Link } from 'react-router-dom';


const LogOutButton = () => {
  const { logout } = useDashboard();

  const { mutate } = useLogOut()
  
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
            <Link to={"/dashboard/profile"}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            </Link>
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
