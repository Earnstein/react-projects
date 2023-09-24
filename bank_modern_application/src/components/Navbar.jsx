import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const navTogglerHandler = () => {
    settoggle((prev) => !prev);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden gap-10 items-center">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
          >
            <a href={`${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={navTogglerHandler}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-6 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none mx-auto flex flex-col justify-center items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
              >
                <a
                  className="hover:bg-slate-500 hover:rounded-md hover:p-2 transition duration-500 ease-in-out"
                  href={`${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
