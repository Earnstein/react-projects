import { useAuth } from "@/states/AuthContext.js";
import { IconButton, useMediaQuery, Box, Backdrop } from "@mui/material";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import NavbarLink from "./NavbarLink.js";

const Nav = () => {
  const [isToggled, setIstoggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  const auth = useAuth();
  const isLoggedin = auth?.isLoggedIn;

  const handleToggle = () => {
    setIstoggled((prev) => !prev);
  };
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
          <Menu sx={{ width: "34px", height: "34px", color: "white" }} />
        </IconButton>
      )}

      {/* NAVBAR POPUP*/}

      {isToggled && !isNonMobileScreens && (
        <>
          <Backdrop
            sx={{ zIndex: 9, color: "#fff", opacity: 0.8 }}
            open={isToggled}
            onClick={() => setIstoggled(false)}
          />
          <Box
            position="fixed"
            right="0"
            top="0"
            width="50vw"
            height="100%"
            bgcolor="#05101c"
            zIndex={10}
          >
            <Box
              display="flex"
              justifyContent="end"
              mt={2}
              mr={4}
            >
              <IconButton
                onClick={handleToggle}
              >
                <Close sx={{ width: "34px", height: "34px", color: "white" }} />
              </IconButton>
            </Box>
            {isLoggedin ? (
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  padding: "1rem 0",
                  margin: "8rem 0",
                }}
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
              </nav>
            ) : (
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  padding: "1rem 0",
                  margin: "8rem 0",
                }}
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
              </nav>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default Nav;
