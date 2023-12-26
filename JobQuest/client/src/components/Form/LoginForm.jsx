import { cn } from "@/utils";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as yup from "yup";
import { Formik } from "formik";
import Input from "./Input";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    // FORM SUBMISSION LOGIC HERE
    console.log(values);
    resetForm();
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
        <form onSubmit={handleSubmit} className={cn("grid grid-cols-6 gap-6")}>
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

          <div className="col-span-6 flex justify-center items-center sm:flex-row sm:items-center sm:gap-4 font-montserrat">
            <Button
              className={cn(
                " inline-block px-12 py-3 text-sm border shrink-0 rounded-sm font-medium transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none active:text-indigo-500"
              )}
              type="submit"
            >
              Login
            </Button>

            <p className="inline-block text-center text-gray-700 text-[12px] mt-4 sm:mt-0 sm:text-sm sm:block sm:ml-0 w-full">
              Don&apos;t have an account?{" "}
              <span className="underline font-medium text-blue-400">
                <Link to="/register">Sign up</Link>
              </span>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
