import { openaiImg } from "@/assets/index.js";
import { Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
const Logo = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  console.log(isNonMobileScreens);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img
          src={openaiImg}
          width={40}
          height={40}
          className="image-inverted"
        />
      </Link>
      {isNonMobileScreens && (
        <Typography
          fontWeight={"800"}
          mr={"auto"}
          sx={{ textShadow: "2px 2px 20px #000" }}
        >
          <span style={{ fontSize: "20px" }}>E</span>-GPT
        </Typography>
      )}
    </div>
  );
};

export default Logo;
