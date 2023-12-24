import Button from "@/components/Button.jsx";
import { FaHamburger } from "react-icons/fa";
import Logo from "@/assets/images/logo.svg";
import { cn } from "@/utils";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  return (
    <header className="shadow-md sticky">
      <div className="container flex h-20 justify-between items-center gap-8 padding">
        <Button className="block" to="/">
          <img src={Logo} alt="Nav-Logo" className={cn("w-28 h-12 md:h-16")} />
        </Button>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 hidden">
            <Button
              to="/login"
              className={cn(
                " text-sm border rounded-sm font-medium font-montserrat transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none active:text-indigo-500"
              )}
            >
              Login
            </Button>

            <Button
              to="/register"
              className={cn(
                " text-sm border rounded-sm font-medium font-montserrat transition-all duration-250 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white focus:outline-none active:text-indigo-500"
              )}
            >
              Register
            </Button>
          </div>

          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <span className="sr-only">Toggle menu</span>
            <FaHamburger className="h-5 w-5" />
          </button>

          {/* MOBILE NAVBAR      */}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 top-0 bg-blue-100 h-full w-[300px] max-[425px]:w-[200px]">
              <div className="flex justify-end p-8">
                <button
                  className="rounded-full bg-red p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <FaHamburger className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
