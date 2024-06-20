import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import { editJobSchema, jobStatusOptions } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { useEditJob } from "@/hooks/useEditJob";

interface EditProp {
  id: string;
}

const initialValuesEditJob = {
  position: "",
  company: "",
  jobStatus: "pending",
};

const EditModal = ({ id }: EditProp) => {
  const { mutate, isPending } = useEditJob();
  const form = useForm<z.infer<typeof editJobSchema>>({
    resolver: zodResolver(editJobSchema),
    defaultValues: initialValuesEditJob,
  });

  const onSubmitHandler = async (values: z.infer<typeof editJobSchema>) => {
    mutate({ id: id, body: values });
    form.reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="group text-xs rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center  h-8 px-3.5 justify-center">
          <span>Edit</span>
          <EditIcon className="size-[1em]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] rounded-xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogDescription>
            Make changes to your job status here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="rounded-lg w-full grid grid-cols-1 gap-4"
          >
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
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

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
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
            <FormField
              control={form.control}
              name="jobStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-sm focus:border-teal-300 focus:border-1 focus:ring-0">
                        <SelectValue
                          placeholder="pending"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Job Status</SelectLabel>
                        {jobStatusOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="w-full col-span-1"
                  disabled={!form.formState.isValid || isPending}
                >
                  Save Changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
