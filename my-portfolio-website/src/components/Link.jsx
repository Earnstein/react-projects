import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    const pageHandler = () => {setSelectedPage(lowerCasePage)}
    return (
      <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-yellow hover:text-white"  : ""}
        hover:text-yellow transition duration-500 font-opensans`}
        href={`#${lowerCasePage}`}
        onClick={pageHandler}>
        {page}
        </AnchorLink>
    )
  };

export default Link;