import { Link } from "react-router-dom";
import {useMediaQuery} from "@mui/material";


type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void> | null;
};
const NavbarLink = ({ to, bg, textColor, text }: Props) => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  return (
    <Link
      to={to}
      style={{
        background: bg,
        color: textColor,
        fontWeight: "600",
        textTransform: "uppercase",
        margin:"0 10px",
        padding: "8px 16px",
        textDecoration:"none",
        borderRadius:"8px",
        letterSpacing: "2px",
        fontSize: isNonMobileScreens ? "16px" :"12px"
      }}
    >
      {text}
    </Link>
  );
};

export default NavbarLink;
