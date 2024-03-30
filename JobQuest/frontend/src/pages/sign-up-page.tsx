import jobLogo from "@/assets/images/job.jpg";
import SignupForm from "@/components/sign-up-form";
import { Card, CardContent } from "@/components/ui/card";

const SignUpPage = () => {
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
        <Card className="w-full max-w-sm md:max-w-xl shadow-2xl padding rounded-md">
        <CardContent>
        <div className="mb-8">
            <h2 className="sm:text-3xl text-center text-2xl title font-playfair">
              Sign Up
            </h2>
          </div>

          <SignupForm />
        </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
