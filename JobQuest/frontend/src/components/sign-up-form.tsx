import { registerSchema } from "@/lib/constants";
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
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { userSignup } from "@/lib/requests";
import { SignUp } from "@/constants/types";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: (body: SignUp) => userSignup(body),
    onSuccess: () => {
      toast.success("success!");
      navigate("/signin");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialValuesRegister,
  });

  const onSubmitHandler = async (values: z.infer<typeof registerSchema>) => {
    const { confirmPassword, ...formValues } = values;
    mutate(formValues);
    form.reset();
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className={cn("grid grid-cols-6 gap-3")}
        >
          {/* FIRST NAME FIELD */}
          <div className="md:col-span-3 col-span-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">First Name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin"
                      )}
                      disabled={isPending}
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* LAST NAME FIELD */}
          <div className="md:col-span-3 col-span-6">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin"
                      )}
                      disabled={isPending}
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                      disabled={isPending}
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
                      disabled={isPending}
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

          {/* CONFIRM PASSWORD FIELD */}
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin"
                      )}
                      disabled={isPending}
                      placeholder="Confirm password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6 font-montserrat space-y-4">
            <p className="text-end  text-sm w-full">
              Already signed up?{" "}
              <span className="underline font-medium text-blue-400">
                <Link to="/signin">Log in</Link>
              </span>
            </p>
            <Button
              className={cn(
                "w-full px-2 py-3 text-sm border shrink-0 rounded-md font-medium text-white font-montserrat"
              )}
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <>
                please wait {" "}
                  <Loader2 className="h-4 w-4 ms-2 animate-spin" />
                </>
              ) : (
                <>Create your account </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
