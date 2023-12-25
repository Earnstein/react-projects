import { cn } from "@/utils";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as yup from "yup";
import { Formik } from "formik";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
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
          <div className="col-span-6">
            <label className="label-style" htmlFor="Email">
              Email
            </label>
            <input
              className={cn(
                "input-style focus:outline-none focus:shadow-outline shadow-sm placeholder:font-palanquin focus:border-indigo-300 focus:border-1",
                touched.email && errors.email && "border-red-500"
              )}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="email"
              required
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>
          <div className="col-span-6">
            <label className="label-style" htmlFor="password">
              Password
            </label>
            <input
              className={cn(
                "input-style focus:outline-none focus:shadow-outline focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin",
                touched.password && errors.password && "border-red-500"
              )}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

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
