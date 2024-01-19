
import Logo from "@/assets/images/logo.svg";
import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const LandingPageNavbar = () => {
  return (
    <header className="shadow-md sticky">
      <div className="container flex h-20 justify-between items-center gap-8 padding">
        <Button >
          <Link to="/">
            <img
              src={Logo}
              alt="Nav-Logo"
              className={cn("w-28 h-12 md:h-16")}
            />
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 hidden">
            <Button
              className={cn(
                " text-sm border rounded-sm font-medium font-montserrat transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none active:text-indigo-500 btn"
              )}
            >
              <Link to="/login"> Login</Link>
            </Button>

            <Button
              className={cn(
                " text-sm border rounded-sm font-medium font-montserrat transition-all duration-250 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white focus:outline-none active:text-indigo-500 btn"
              )}
            >
              <Link to="/register"> Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingPageNavbar;
