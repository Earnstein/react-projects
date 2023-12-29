import Button from "@/components/Button.jsx";
import { cn } from "@/utils";
import jobLogo from "@/assets/images/job.jpg";
import google from "@/assets/images/google.svg";
import RegisterForm from "@/components/Form/RegisterForm";
const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Image Section */}
      <div className="relative hidden md:block md:flex-[0.6] bg-background">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={jobLogo}
          alt="login Image"
        />
      </div>

      {/* Form Section */}
      <div className="w-full flex flex-1 md:flex-[0.4] items-center justify-center px-4">
        <div className="w-full max-w-md shadow-2xl padding rounded-sm">
          <h2 className="sm:text-xl text-lg title mb-8 font-playfair">
            Sign Up
          </h2>

          <Button
            className={cn(
              "col-span-4 flex justify-center items-center gap-4 justify-self-center w-full bg-white text-blue-500 font-bold py-2 px-4 shadow-sm font-palanquin rounded focus:outline-none focus:shadow-outline hover:opacity-80",
              "mb-4 btn shadow-shadow-1"
            )}
            type="button"
          >
            <img src={google} alt="googleImg" />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </Button>

          <p className="text-center font-bold font-montserrat text-sm mb-4">
            or
          </p>

         <RegisterForm/>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
