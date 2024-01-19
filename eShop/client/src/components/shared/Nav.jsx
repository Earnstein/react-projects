import { useState } from "react";
import { FaCartPlus, FaSignInAlt } from "react-icons/fa";
import { TfiAlignLeft, TfiClose } from "react-icons/tfi";
import { twMerge } from "tailwind-merge";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

const Nav = () => {
  const isAboveSmallerScreen = useMediaQuery("(min-width: 768px)");
  const [isToggle, setisToggle] = useState(false);

  return (
    <nav className={twMerge(`flex gap-4 justify-center items-center`)}>
      <ModeToggle />
      {isAboveSmallerScreen ? (
        <>
          <Button
            variant="link"
            className={twMerge(`text-sm bg-white text-black`)}
          >
            <a href="/cart" className="flex justify-center items-center">
              <FaCartPlus className="mr-2 h-4 w-4" /> Cart
            </a>
          </Button>

          <Button
            className={twMerge(
              `text-sm font-medium px-4 py-2.5 bg-blue text-white flex gap-1`
            )}
          >
            <a
              href="/signin"
              className="flex justify-center items-center gap-2"
            >
              <FaSignInAlt /> Sign In
            </a>
          </Button>
        </>
      ) : (
        <TfiAlignLeft
          onClick={() => setisToggle((prev) => !prev)}
          className="w-[24px] h-[24px]  hover:opacity-80 hover:cursor-pointer"
        />
      )}

      {!isAboveSmallerScreen && isToggle && (
        <>
          <div
            className="fixed top-0 right-0 w-full h-full bg-gray-600/50 z-[1]"
            onClick={() => setisToggle((prev) => !prev)}
          />
          <div className="fixed right-0 top-0 bg-black/80 h-full w-[240px] max-w-sm z-10">
            <div className="flex justify-end mt-5 mr-7">
              <Button
                className="bg-black hover:opacity-100 hover:cursor-pointer"
                onClick={() => setisToggle((prev) => !prev)}
              >
                <TfiClose className="w-[24px] h-[24px] object-contain rounded-full" />
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
