import { cn } from "@/utils";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
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
        <form onSubmit={handleSubmit} className={cn("grid grid-cols-6 gap-6")}>
          <div className="mb-1 col-span-6 sm:col-span-3">
            <label className="label-style" htmlFor="firstName">
              First name
            </label>
            <input
              className={cn(
                "input-style focus:outline-none focus:shadow-outline focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin"
              )}
              id="firstName"
              placeholder="First name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.firstName && errors.firstName && (
              <div className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              className="block text-grey-600 font-opensans font-bold mb-2"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              className={cn(
                "input-style focus:outline-none focus:shadow-outline shadow-sm placeholder:font-palanquin focus:border-indigo-300 focus:border-1"
              )}
              id="lastName"
              placeholder="Last name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.lastName && errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
            )}
          </div>

          <div className="col-span-6">
            <label className="label-style" htmlFor="email">
              Email
            </label>
            <input
              className={cn(
                "input-style focus:outline-none focus:shadow-outline shadow-sm placeholder:font-palanquin focus:border-indigo-300 focus:border-1",
                touched.email && errors.email && "border-red-500"
              )}
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          <div className="col-span-6">
            <label className="label-style" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className={cn(
                "input-style focus:outline-none focus:shadow-outline shadow-sm placeholder:font-palanquin focus:border-indigo-300 focus:border-1",
                touched.confirmPassword &&
                  errors.confirmPassword &&
                  "border-red-500"
              )}
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="col-span-6 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:gap-4 font-montserrat">
            <button
              className={cn(
                "inline-block px-4 py-3 text-sm border shrink-0 rounded-sm font-medium transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none active:text-indigo-500"
              )}
              type="submit"
            >
              Create your account
            </button>

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
