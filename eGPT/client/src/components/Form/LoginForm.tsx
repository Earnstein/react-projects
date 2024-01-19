import { Box, Button, TextField, Typography } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import * as yup from "yup";
import { Formik, FormikHelpers } from "formik";
import { useAuth } from "@/states/AuthContext.js";
import { toast } from "react-hot-toast";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

// yup validation schemas

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin: FormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(true);
  const auth = useAuth();

  //  SUBMIT HANDLER
  const handleFormSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    // FORM SUBMISSION LOGIC HERE
    const { email, password } = values;
    try {
      await auth?.login(email.toLowerCase(), password);
      {
        isLoading ? toast.loading("Signing In", { id: "1" }) : "";
      }
      toast.success("Signed In Successfully", { id: "1" });
      resetForm();
    } catch (error) {
      console.log(error);
      setisLoading(false);
      toast.error("Signing In failed");
    }
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form
          style={{
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          {
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              width={{ md: "25vw", sm: "50vw", xs: "70vw" }}
              height={{ md: "44vh" }}
              p={1}
              mx="auto"
            >
              {
                <>
                  <Typography mb={4} fontSize="20px">
                    LOGIN
                  </Typography>

                  <TextField
                    label="Email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && touched.email}
                    InputLabelProps={{ style: { color: "whitesmoke" } }}
                    InputProps={{
                      style: {
                        borderRadius: 4,
                        fontSize: "16px",
                        color: "whitesmoke",
                      },
                    }}
                    sx={{
                      ".MuiOutlinedInput-input-root.Mui-focused,.MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "white",
                        },
                    }}
                  />

                  <TextField
                    label="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="password"
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && touched.password}
                    InputLabelProps={{ style: { color: "whitesmoke" } }}
                    InputProps={{
                      style: {
                        borderRadius: 4,
                        fontSize: "16px",
                        color: "whitesmoke",
                      },
                    }}
                    sx={{
                      ".MuiOutlinedInput-input-root.Mui-focused,.MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "white",
                        },
                    }}
                  />
                  <Button
                    sx={{
                      px: 2,
                      py: 2,
                      bgcolor: "#00fffc",
                      mt: 2,
                      borderRadius: 1,
                      ": hover": {
                        bgcolor: "white",
                      },
                    }}
                    type="submit"
                    endIcon={<LoginOutlined />}
                  >
                    <Typography color="black" fontSize="14px">
                      Login
                    </Typography>
                  </Button>
                </>
              }
            </Box>
          }
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
