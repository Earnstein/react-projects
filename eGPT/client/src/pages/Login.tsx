import { Box } from "@mui/material";
import LottieComponent from "@/components/LottieComponent.js";
import LoginForm from "@/components/Form/LoginForm.js";

const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent={{md:"space-between", sm:"center", xs:"center"}}
      m="0 auto"
      alignItems="center"
      maxWidth="1400px"
      minHeight="82vh"
    >
      <Box
        display={{ md: "flex", sm: "none", xs: "none" }}
        width="650px"
        height="650px"
        justifyContent="center"
        p={2}
      >
        <LottieComponent />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
