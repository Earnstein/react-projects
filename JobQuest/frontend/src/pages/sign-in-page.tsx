import jobLogo from "@/assets/images/job.jpg";
import SignInForm from "@/components/sign-in-form";


const SignInPage = () => {
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
      <div className="w-full max-w-sm md:max-w-xl shadow-2xl padding rounded-sm">
       <div className="space-y-4">
       <h2 className="sm:text-4xl text-center text-3xl title font-playfair">
          Sign Up
        </h2>

       </div>

       <SignInForm/>
      </div>
    </div>
  </div>
  );
};

export default SignInPage;
