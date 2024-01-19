import { twMerge } from "tailwind-merge";
import Logo from "./shared/Logo";
import Nav from "./shared/Nav";

const Header = () => {
  return (
    <section className="border-b sticky top-0 z-30 overflow-hidden shadow-sm bg-white">
      <header
        className={twMerge(
          `flex px-8 sm:pt-4 pt-4 pb-4 justify-between max-container w-full`
        )}
      >
        <Logo />
        <Nav />
      </header>
    </section>
  );
};

export default Header;
