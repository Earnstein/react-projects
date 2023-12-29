import { cn } from "@/utils";
import Button from "./Button";
import { FaAlignLeft } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white h-20 shadow-shadow-1 md:sticky flex justify-center items-center md:top-0 w-full">
      <nav className="flex justify-between items-center w-4/5">
        <Button
          className={cn(
            "flex items-center bg-transparent border-transparent text-[1.25rem] text-indigo-500 cursor-pointer p-0"
          )}
        >
          <FaAlignLeft className="w-full h-full" />
        </Button>

        <h2 className={cn("font-montserrat text-sm sm:text-xl")}>dashboard</h2>

        <Button
          className={cn(
            "p-2 text-sm border rounded-sm font-medium font-montserrat transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none active:text-indigo-500 btn"
          )}
        >
        toggle
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
