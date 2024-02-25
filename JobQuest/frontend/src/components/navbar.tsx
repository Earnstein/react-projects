import logo from "@/assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="w-full h-16 border-b-[1px] border-b-primary-foreground dark:border-b-accent sticky top-0 z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-full flex justify-between items-center h-full mx-auto">
        <div className="flex items-center gap-x-2">
          <img src={logo} alt="logo" className="aspect-square w-8 h-8" />

          <h4 className="hidden sm:inline-block font-playfair text-accent-foreground text-2xl">
            LandIt
          </h4>
        </div>

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
