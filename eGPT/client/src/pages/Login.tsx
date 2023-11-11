import { Box } from "@mui/material";
import LottieComponent from "@/components/LottieComponent.js";
import Form from "@/components/Form/Form.js";

const Login = () => {
  return (
    <Box
      height="100%"
      display="flex"
      flex={1}
      justifyContent="space-between"
      m={{ md: "8px 0", sm: "32px 0" }}
      p="16px 48px"
    >
      <Box
        display={{ md: "flex", sm: "none", xs: "none" }}
        width="600px"
        height="600px"
        justifyContent="center"
        p={2}
      >
        <LottieComponent />
      </Box>

      <Box
        display="flex"
        flex={{ xs: 1, md: 0.5 }}
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
