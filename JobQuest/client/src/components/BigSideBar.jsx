import useMediaQuery from "@/hooks/useMediaQuery";
import { useDashBoardContext } from "@/store/dashboard-context";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

const BigSideBar = () => {
  const isBigScreen = useMediaQuery("(min-width: 1000px)");
  const { showSidebar } = useDashBoardContext();
  return (
    <>
      {isBigScreen && !showSidebar && (
        <motion.aside
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "hidden md:flex basis-1/6 border-r-2 border-e min-h-screen shadow-shadow-3"
          )}
        >
          <div
            className={cn(
              "relative flex flex-col items-center duration-300 ease-out pt-20 px-10"
            )}
          >
            <span className="absolute top-8 left-4 grid h-10 w-24 place-content-center rounded-lg bg-white text-xs text-gray-600 font-playfair">
              BD
            </span>
            <NavLinks />
          </div>
        </motion.aside>
      )}
    </>
  );
};

export default BigSideBar;
