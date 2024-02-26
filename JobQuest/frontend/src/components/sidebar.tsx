import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import NavLinks from "./Navlinks";
import { useDashBoardContext } from "@/hooks/useDashboardContext";

const Sidebar = () => {
  const { showSidebar } = useDashBoardContext();

  return (
    <>
      {showSidebar && (
        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.25 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={cn("hidden md:flex md:basis-1/6 border-e min-h-screen ")}
        >
          <div
            className={cn(
              "relative flex flex-col min-w-full duration-300 ease-out"
            )}
          >
            <div className="grid place-content-start ml-8 py-[13.5px]">
              <div className="flex gap-x-2">
                <h4 className="hidden sm:inline-block font-playfair text-accent-foreground text-3xl tracking-widest">
                  LandIt
                </h4>
              </div>
            </div>

            <Separator />
            <NavLinks />
          </div>
        </motion.aside>
      )}
    </>
  );
};

export default Sidebar;
