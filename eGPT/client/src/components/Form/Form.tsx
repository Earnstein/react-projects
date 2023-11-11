import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as yup from "yup";
import { Formik, FormikHelpers } from "formik";

// form values interface
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// yup validation schemas
const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("required"),
  password: yup
    .string()
    .required("required")
    .min(7, "Password must be at least 7 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("required"),
});

const loginSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("required"),
  password: yup.string().required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("required"),
});

const initialValuesRegister: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialValuesLogin: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Form = () => {
  // Define the submit handler function
  const handleFormSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // Your form submission logic here
    console.log(values);
    setSubmitting(false);
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
        setFieldValue,
        resetForm,
      }) => (
        <form
          style={{
            margin: "0 auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
          onSubmit={handleSubmit}
        >
          {
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              width={{md:"400px", sm:"200px"}}
              height={{md:"400px"}}
              p={1}
              mx="auto"
            >
              {
                <>
                  <Typography mb={4} fontSize="20px">LOGIN</Typography>

                  <TextField
                    label="Email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="name"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && touched.email}
                    InputLabelProps={{ style: { color: "whitesmoke" } }}
                    InputProps={{
                      style: {
                        borderRadius: 10,
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
                    name="name"
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && touched.password}
                    InputLabelProps={{ style: { color: "whitesmoke" } }}
                    InputProps={{
                      style: {
                        borderRadius: 10,
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
                    sx={{px: 2, py: 2, bgcolor: "#00fffc" , mt:2, borderRadius:2, ": hover":{
                      bgcolor:"white",
                    }}}
                  >
                    <Typography color="black" fontSize="14px">Login</Typography>
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

export default Form;
