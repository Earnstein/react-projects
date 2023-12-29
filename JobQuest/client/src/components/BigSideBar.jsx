import { cn } from "@/utils";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";


const BigSideBar = () => {
 
  return (
    <motion.aside
      className={cn(
        "hidden md:flex basis-1/6 border-r-2 border-e min-h-screen"
      )}
    >
      <div
        className={cn(
          "relative flex flex-col items-center duration-300 ease-out pt-10 px-10"
        )}
      >
        <span className="absolute top-8 left-8 grid h-10 w-24 place-content-center rounded-lg bg-white text-xs text-gray-600">
          L
        </span>
        <NavLinks/>
      </div>
    </motion.aside>
  );
};

export default BigSideBar;
