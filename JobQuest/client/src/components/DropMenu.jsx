import { useDashBoardContext } from "@/store/dashboard-context";
import { cn } from "@/utils";
import { useState } from "react";
import Button from "./s";

const DropMenu = () => {
  const [toggle, setToggle] = useState(false);
  const data = useDashBoardContext();
  return (
    <div>
      <Button
        className={cn(
          "p-2 text-sm border rounded-sm font-medium font-palanquin transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none active:text-indigo-500 btn"
        )}
        type="button"
      >
        logout
      </Button>
    </div>
  );
};

export default DropMenu;
