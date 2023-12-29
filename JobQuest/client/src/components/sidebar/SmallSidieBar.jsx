import { cn } from "@/utils";
import Button from "../Button";
import { FaTimes } from "react-icons/fa";
import Logo from "@/assets/images/logo.svg";
import { useDashBoardContext } from "@/store/dashboard-context";
import NavLinks from "../NavLinks";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashBoardContext();
  return (
    <section className={cn("md:hidden")}>
      {showSidebar && (
        <div
          className={cn(
            "fixed inset-0 bg-black/70 flex justify-center items-center z-[10]"
          )}
        >
          <div className="content bg-white/90 w-4/5 h-[90vh] rounded-sm px-8 py-16 relative flex items-center flex-col">
            <Button
              onClick={toggleSidebar}
              className={
                "close-btn absolute top-3 left-3 bg-transparent border-transparent text-[1.5rem] text-red-dark cursor-pointer "
              }
            >
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

              <NavLinks/>
            </header>
          </div>
        </div>
      )}
    </section>
  );
};

export default SmallSideBar;
