import { cn } from "@/utils";
import Button from "../Button";
import { FaTimes } from "react-icons/fa";
import Logo from "@/assets/images/logo.svg";


const SmallSideBar = () => {
  const sidebarcontainer = "fixed inset-0 bg-black/70 flex justify-center items-center z-[-1] transitions opacity-0 hidden"
  const showsider = "opacity-1 visible z-10"
  return (
    <section className={cn("md:hidden")}>
      <div className={cn(`${sidebarcontainer}`, `${showsider}`)}>
        <div className="content bg-white w-4/5 h-[90vh] rounded-sm px-8 py-16 relative flex items-center flex-col">
          <Button className={"close-btn absolute top-3 left-3 bg-transparent border-transparent text-[1.5rem] text-red-dark cursor-pointer "}>
            <FaTimes />
          </Button>
          <header>
            <Button>
              <img
                src={Logo}
                alt="Nav-Logo"
                className={cn("w-28 h-12 md:h-16")}
              />
            </Button>

            <div className="nav-links pt-8 flex flex-col ">
              <nav className="nav-link flex items-center justify-center text-gray-500 py-4 px-0 capitalize transitions hover:text-indigo-500 gap-4">
               <span className="icon text-xl">icon</span>
               <p>link</p>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default SmallSideBar;
