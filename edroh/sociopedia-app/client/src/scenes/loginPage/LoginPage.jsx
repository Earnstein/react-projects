import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const isSmaillMobileScreen = useMediaQuery("(min-width: 426px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography  variant="h1" 
        fontWeight="bold" 
        fontSize="clamp(24px, 32px, 34px)" 
        color="primary">
          SavageConnect
        </Typography>
      </Box>

      <Box
      width={isNonMobileScreen ? "40%" : "94%"}
      p="1rem"
      m="2rem auto"
      borderRadius="4px"
      backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" marginBottom="1.5rem" variant="h5" sx={!isSmaillMobileScreen && {textAlign: "center"}} 
        fontSize={isSmaillMobileScreen ? "16px" : "12px"}>
          Welcome to SavageConnect, the Social App for  <span style={isSmaillMobileScreen ? {fontSize:"16px", fontWeight:"500"} : {textAlign:"center", fontSize:"12px", fontWeight:"500" , display:"block", marginTop:"1px"}}>Sociopaths!</span>
        </Typography>
        <Form/>
      </Box>
    </Box>
  );
};

export default LoginPage;
