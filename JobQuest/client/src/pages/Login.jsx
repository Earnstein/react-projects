import jobLogo from "@/assets/images/job.jpg";
import LoginForm from "@/components/Form/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Image Section */}
      <div className=" relative hidden md:block md:flex-[0.6] bg-background">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={jobLogo}
          alt="login Image"
        />
      </div>

      {/* Form Section */}
      <div className="w-full flex flex-1 md:flex-[0.4] items-center justify-center px-4">
        <div className="w-full max-w-md shadow-2xl padding rounded-sm">
          <h2 className="sm:text-xl text-lg title mb-8 font-playfair">Login</h2>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
