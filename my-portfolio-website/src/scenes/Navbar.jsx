import { useState } from "react";
import { closeIcon, menuIcon } from "../assets/icons";
import Link from "../components/Link";
import { navLinks } from "../constants";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navBarBg = isTopOfPage ? "" : "bg-red";

  return (
    <header>
      <nav className={` ${navBarBg} z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between m-auto w-5/6">
          <h4 className="font-playfair text-4xl font-bold">DB</h4>
          {/* Desktop nav*/}
          {isAboveSmallScreens ? (
            <div className="flex justify-between gap-14 font-opensans text-sm font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  page={link.href}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          ) : (
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src={menuIcon} alt="menu-icon" />
            </button>
          )}

          {/* MOBILE MENU POPUP*/}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 top-0 bg-blue h-full w-[300px] max-[425px]:w-[200px]">
              {/*close icon */}
              <div className="flex justify-end p-8">
                <button
                  className="rounded-full bg-red p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <img src={closeIcon} alt="close-icon" className="h-6 w-6" />
                </button>
              </div>
              {/* MENU ITEMS */}
              <div
                className="flex flex-col items-center justify-center 
              gap-10 text-xl leading-normal text-deep-blue font-bold mt-16"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    page={link.href}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
