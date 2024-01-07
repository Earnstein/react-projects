import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }) => {
  const lowerCasePage = page.toLowerCase();
  const pageHandler = () => {
    setSelectedPage(lowerCasePage);
  };
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow hover:text-white" : ""
      } 
        transition duration-500 font-playfair relative before:absolute
        before:w-0 before:h-[2px] before:bg-blue before:top-full before:left-0
        after:absolute
        after:w-0 after:h-[2px] after:bg-red after:top-full after:right-0 
        hover:before:w-1/2 before:translate-x-full  before:transition-all before:duration-500
        hover:after:w-1/2 after:-translate-x-full  after:transition-all after:duration-500
        ${isTopOfPage ? "" : "after:bg-yellow "}
        `}
      href={`#${lowerCasePage}`}
      onClick={pageHandler}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
