import Button from "@/components/Button.jsx";
import { cn } from "@/utils";
import jobLogo from "@/assets/images/job.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* Image Section */}
      <div className=" relative hidden md:block md:flex-[0.6] bg-background">
        {/* You can add an image or any other content here */}
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={jobLogo}
          alt="login Image"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex md:flex-[0.4] items-center justify-center p-10">
        <div className="w-full max-w-md shadow-2xl px-8 py-16">
          <h2 className="text-2xl font-bold mb-8 font-montserrat">Sign Up</h2>

          <form className={cn("grid grid-cols-6 gap-6")}>
            <div className="mb-1 col-span-6 sm:col-span-3">
              <label
                className="block text-grey-600 font-opensans font-bold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-sm"
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-1 col-span-6 sm:col-span-3">
              <label
                className="block text-grey-600 font-opensans font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-sm"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="mb-1 col-span-6">
              <label
                className="block text-grey-600 font-opensans font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-sm"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-1 col-span-6">
              <label
                className="block text-grey-600 font-opensans font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-sm"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-1 col-span-6">
              <label
                className="block text-grey-600 font-opensans font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-sm"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <Button
                className={cn(
                  "text-sm border shrink-0 rounded-sm font-medium font-montserrat transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none active:text-indigo-500"
                )}
                type="submit"
              >
                Sign Up
              </Button>

              <p className="inline-block text-gray-700 sm:mt-0 text-sm ml-10 sm:block sm:ml-0">
                Not signed up?{" "}
                <span className="underline">
                  <Link to="/register">Log in</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
