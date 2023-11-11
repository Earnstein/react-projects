import { Box } from "@mui/material";
import LottieComponent from "@/components/LottieComponent.js";
import Form from "@/components/Form/Form.js";

const Login = () => {
  return (
    <Box
      display="flex"
      flex={1}
      justifyContent={{md:"space-between", sm:"center", xs:"center"}}
      m="0 auto"
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
        p={2}
      >
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
