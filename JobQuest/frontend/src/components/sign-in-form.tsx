import { loginSchema } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import google from "@/assets/images/google.svg";

const initialValuesLogin = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValuesLogin,
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmitHandler = async (values: z.infer<typeof loginSchema>) => {
    try {
      console.log(values);
      form.reset();
    } catch (error) {
      console.error("Form submission", error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className={cn("grid grid-cols-6 gap-5")}
        >
          {/* EMAIL FIELD */}
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Email</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin"
                      )}
                      disabled={isLoading}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Password</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin"
                      )}
                      disabled={isLoading}
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6 font-montserrat space-y-4">
            <p className="text-end text-gray-700 text-sm w-full">
              Not registered?{" "}
              <span className="underline font-medium text-blue-400">
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
            <Button
              className={cn(
                "w-full text-lg border rounded-sm font-medium transition-all duration-250 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 active:text-indigo-500"
              )}
              type="submit"
            >
              Login
            </Button>

            <Button
              className={cn(
                "flex justify-center items-center gap-4 justify-self-center w-full bg-white text-blue-500 font-bold font-palanquin rounded focus:outline-none focus:shadow-outline hover:bg-white/20 shadow-md"
              )}
            >
              <img src={google} alt="googleImg" />
              <span className="text-secondary-foreground font-semibold font-opensans">
                Continue with Google
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
