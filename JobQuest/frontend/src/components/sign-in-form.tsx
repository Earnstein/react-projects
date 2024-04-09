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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { userSignIn } from "@/lib/requests";
import { SignIn } from "@/constants/types";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
const initialValuesLogin = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (body: SignIn) => userSignIn(body),
    onSuccess: () => {
      toast.success("success!");
      navigate("/dashboard/add");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValuesLogin,
  });

  const onSubmitHandler = async (values: z.infer<typeof loginSchema>) => {
    mutate(values);
    form.reset();
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
                      disabled={isPending}
                      placeholder="Email"
                      autoComplete="email"
                      type="email"
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
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6 font-montserrat space-y-4">
            <p className="text-end text-muted-foreground text-sm w-full">
              Not registered?{" "}
              <span className="underline font-medium text-white">
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
            <Button
              className="w-full px-2 py-3 text-sm border shrink-0 rounded-sm text-white font-palanquin font-bold"
              disabled={isPending}
              type="submit"
            >
              {isPending ? (
                <>
                  please wait <Loader2 className="h-4 w-4 ms-2 animate-spin" />
                </>
              ) : (
                <>Login </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
