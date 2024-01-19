import { cn } from "@/utils";
import { MdMenu } from "react-icons/md";
import { useDashBoardContext } from "@/store/dashboard-context";
import SmallSideBar from "./sidebar/SmallSidieBar";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const data = useDashBoardContext();
  return (
    <>
      <header className="h-20 shadow-shadow-1 sticky flex justify-center items-center md:top-0 w-full">
        <nav className="flex justify-between items-center w-4/5">
          <button
            className={cn(
              "flex items-center text-[1.5rem] text-indigo-600 cursor-pointer p-2"
            )}
            onClick={data.toggleSidebar}
          >
            <MdMenu className="w-full h-full" />
          </button>

          <h2
            className={cn(
              "font-playfair hidden ss:block text-black/80 font-medium text-[1.5rem] sm:text-lg"
            )}
          >
            Dashboard
          </h2>
          <div className="flexS">
            <ModeToggle />
            <Button
              size="sm"
              className={cn(
                "p-2 text-sm border rounded-sm font-medium font-palanquin transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 btn"
              )}
            >logout</Button>
          </div>
        </nav>
      </header>
      <SmallSideBar />
    </>
  );
};

export default Navbar;
