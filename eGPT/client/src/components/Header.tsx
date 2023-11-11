import { AppBar, Toolbar } from "@mui/material";
import { Logo } from "./shared/index.js";
import Nav from "./shared/Nav.js";
 
const Header = () => {
  return (
    <AppBar
      sx={{ position: "sticky", bgcolor: "transparent", boxShadow: "none", padding:"16px 48px" }}
    >
      <Toolbar
        sx={{
          display: "Flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Nav/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
