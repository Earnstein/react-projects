import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-[100] w-full top-0 bg-white shadow-md">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal px-6 py-4 rounded-full text-lg text-slate-grey hover:text-white hover:bg-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamberger"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
