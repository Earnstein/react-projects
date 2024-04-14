import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addJobSchema,
  jobStatusOptions,
  jobTypeOptions,
} from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddJob } from "@/hooks/useAddJob";
import { Loader2 } from "lucide-react";

const initialValuesAddJob = {
  position: "",
  company: "",
  jobStatus: "pending",
  jobType: "remote",
  jobLocation: "",
};

const AddJobPage = () => {
  const {  mutate, isPending } = useAddJob()

  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
    defaultValues: initialValuesAddJob,
  });

  const onSubmitHandler = async (values: z.infer<typeof addJobSchema>) => {
    mutate(values);
    form.reset();
  };

  return (
   <div>
     <Card className="container mt-8 mx-auto py-6 sm:py-8 rounded-sm">
      <Form {...form}>
        <CardHeader>
          <CardTitle className="font-playfair text-2xl/relaxed">Add Job</CardTitle>
        </CardHeader>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="rounded-lg w-full py-2 px-3 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4"
        >
          <div>
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Position</FormLabel>
                  <FormControl>
                    <Input
                      className={
                        "focus:border-teal-300 focus:border-1 shadow-sm placeholder:font-palanquin"
                      }
                      placeholder="Devops"
                      autoComplete="position"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Company</FormLabel>
                  <FormControl>
                    <Input
                      className={
                        "focus:border-teal-300 focus:border-1 shadow-sm placeholder:font-palanquin rounded-sm"
                      }
                      placeholder="Google"
                      autoComplete="company"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="jobStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-sm focus:border-teal-300 focus:border-1 focus:ring-0">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-sm">
                      {jobStatusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-sm focus:border-teal-300 focus:border-1 focus:ring-0">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-sm">
                      {jobTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="jobLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label-style">Location</FormLabel>
                  <FormControl>
                    <Input
                      className={
                        "focus:border-teal-300 focus:border-1 shadow-sm placeholder:font-palanquin rounded-sm"
                      }
                      placeholder="remote"
                      autoComplete="location"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="w-full col-span-1">
            <Button className="mt-4 w-full text-white font-bold font-palanquin rounded-sm bg-teal-500 hover:bg-teal-600" type="submit" disabled={isPending}>
            {isPending ? (
                <>
                  please wait <Loader2 className="h-4 w-4 ms-2 animate-spin" />
                </>
              ) : (
                <>Submit </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
   </div>
  );
};

export default AddJobPage;
