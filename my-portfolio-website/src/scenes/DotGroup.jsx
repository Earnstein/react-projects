import AnchorLink from "react-anchor-link-smooth-scroll";
import { navLinks } from "../constants";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6
    before:h-6 before:rounded-full before:border-2 before:border-yellow before:right-[-50%]
    before:top-[-50%]`;
  return (
    <section id="#link-navigations">
      <div className="flex flex-col gap-6 fixed top-[50%] right-7">
        {navLinks.map((link) => (
          <AnchorLink
            className={`${
              selectedPage === link.href.toLowerCase() ? selectedStyles : "bg-dark-grey"
            }
            w-3 h-3 rounded-full`}
            key={link.page}
            href={`#${link.href.toLowerCase()}`}
            onClick={() => setSelectedPage(link.href.toLowerCase())}
          />
        ))}
      </div>
    </section>
  );
};

export default DotGroup;
