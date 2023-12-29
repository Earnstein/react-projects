import { cn } from "@/utils";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import Input from "./Input";
import Button from "../Button";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    // FORM SUBMISSION LOGIC HERE
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className={cn("grid grid-cols-6 gap-5")}>
          <Input
            label="First name"
            name="firstName"
            type="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName}
            styles="sm:col-span-3"
          />

          <Input
            label="Last name"
            name="lastName"
            type="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName}
            styles="sm:col-span-3"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmPassword && errors.confirmPassword}
          />

          <div className="col-span-6 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:gap-4 font-montserrat">
            <Button
              className={cn(
                "inline-block px-2 py-3 text-sm border shrink-0 rounded-sm font-medium transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none active:text-indigo-500 btn"
              )}
              type="submit"
            >
              Create your account
            </Button>

            <p className="inline-block text-center text-gray-700 text-[12px] mt-4 sm:mt-0 sm:text-sm sm:block sm:ml-0 sm:text-end w-full">
              Already signed up?{" "}
              <span className="underline font-medium text-blue-400">
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
