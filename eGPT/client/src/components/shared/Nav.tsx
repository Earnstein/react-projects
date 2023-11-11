import { useAuth } from "@/states/AuthContext.js";
import { IconButton, useMediaQuery, Box } from "@mui/material";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import NavbarLink from "./NavbarLink.js";

const Nav = () => {
  const [isToggled, setIstoggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  const auth = useAuth();
  const isLoggedin = auth?.isLoggedIn;
  return (
    <>
      {isNonMobileScreens ? (
        <nav>
          {isLoggedin ? (
            <>
              <NavbarLink
                to="/chat"
                bg="#00fffc"
                text="Chats"
                textColor="white"
              />
              <NavbarLink
                to="/"
                bg="#51538f"
                text="Logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavbarLink
                to="/login"
                bg="#00fffc"
                text="Login"
                textColor="black"
              />
              <NavbarLink
                to="/signup"
                bg="#51538f"
                text="Signup"
                textColor="white"
              />
            </>
          )}
        </nav>
      ) : (
        /* NAV MOBILE ICONS */
        <IconButton
          onClick={() => {
            setIstoggled((prev) => !prev);
          }}
        >
          {!isToggled ? (
            <Menu sx={{ width: "34px", height: "34px", color: "white" }} />
          ) : (
            <Close sx={{ width: "34px", height: "34px", color: "white" }} />
          )}
        </IconButton>
      )}

      {/* NAVBAR POPUP*/}

      {isToggled && !isNonMobileScreens && (
        <Box
          position="fixed"
          top="150px"
          right="0"
          width="100px"
          marginRight={"10px"}
          zIndex={10}
        >
          <>
            <nav>
              {isLoggedin ? (
                <Box
                position="fixed"
                right="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="20px"
                padding="1rem 0"
               
                >
                  <NavbarLink
                    to="/chat"
                    bg="#00fffc"
                    text="Chats"
                    textColor="white"
                  />
                  <NavbarLink
                    to="/"
                    bg="#51538f"
                    text="Logout"
                    textColor="white"
                    onClick={auth.logout}
                  />
                </Box>
              ) : (
                <Box
                position="fixed"
                right="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="20px"
                padding="1rem 0"
                >
                  <NavbarLink
                    to="/login"
                    bg="#00fffc"
                    text="Login"
                    textColor="black"
                  />
                  <NavbarLink
                    to="/signup"
                    bg="#51538f"
                    text="Signup"
                    textColor="white"
                  />
                </Box>
              )}
            </nav>
          </>
        </Box>
      )}
    </>
  );
};

export default Nav;
