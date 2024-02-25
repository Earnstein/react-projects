import logo from "@/assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useDashBoardContext } from "@/hooks/useDashboardContext";
import { MenuIcon } from "lucide-react";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const data = useDashBoardContext();
  return (
    <div className="w-full h-16 border-b-[1px] border-b-primary-foreground dark:border-b-accent sticky top-0 z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-full flex justify-between items-center h-full mx-auto">
        {isHome ? (
          <div className="flex items-center gap-x-2">
            <img src={logo} alt="logo" className="aspect-square w-8 h-8" />

            <h4 className="hidden sm:inline-block font-playfair text-accent-foreground text-3xl">
              LandIt
            </h4>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-x-4">
              <MobileNavbar />
              <div className="flex items-center gap-x-4">
                <MenuIcon
                  className="hidden md:block w-8 h-8"
                  onClick={data.toggleSidebar}
                />
                <h4 className="hidden sm:inline-block font-playfair text-accent-foreground text-3xl">
                  LandIt
                </h4>
              </div>
            </div>
          </>
        )}

        <ul className="flex space-x-4 items-center font-palanquin text-sm">
          {isHome ? (
            <>
              <NavLink to="/signin">
                <li>
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </li>
              </NavLink>
              <NavLink to="/signup">
                <li>
                  <Button
                    className="font-palanquin text-secondary bg-accent-foreground"
                    size="sm"
                  >
                    Register
                  </Button>
                </li>
              </NavLink>
            </>
          ) : (
            <h4>dashboard links</h4>
          )}
          <ModeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
