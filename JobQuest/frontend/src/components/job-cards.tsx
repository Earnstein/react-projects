import { interviewLogo, pendingLogo, successLogo } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "./ui/separator";
import { useGetJobs } from "../hooks/useGetJobs";
import JobLoader from "./JobLoader";
import { Button } from "./ui/button";
import { DeleteIcon, EditIcon } from "lucide-react";
import { JobBody } from "@/constants/types";
import { cn } from "@/lib/utils";
import { useDeleteJob } from "@/hooks/useDeleteJob";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const JobCards = () => {
  const { data, isLoading } = useGetJobs();
  const { mutate, isPending } = useDeleteJob();

  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {isLoading && <JobLoader />}
      {!isLoading && (
        <>
          {data?.data?.map((job: JobBody) => (
            <div
              key={job._id}
              className={cn(
                "relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 hover:shadow-lg  hover:shadow-gray-500/10 cursor-pointer",
                job.jobStatus === "pending" && "hover:shadow-yellow-500/10",
                job.jobStatus === "declined" && "hover:shadow-red-500/10"
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10",
                  job.jobStatus === "pending" &&
                    "from-yellow-500 to-white dark:from-white dark:to-white",
                  job.jobStatus === "declined" &&
                    "from-red-500 to-white dark:from-white dark:to-white"
                )}
              ></div>
              <div className="relative">
                <div className="flex flex-row-reverse items-center justify-between">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-8 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <Avatar>
                      <AvatarImage
                        src={
                          job.jobStatus === "pending"
                            ? pendingLogo
                            : job.jobStatus === "declined"
                            ? successLogo
                            : interviewLogo
                        }
                        alt="success logo"
                      />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="">
                    <h3 className="font-playfair text-[16px] sm:text-xl">
                      {job.position}
                    </h3>
                    <p className="font-palanquin text-sm">{job.company}</p>
                  </div>
                </div>
                <Separator className="mt-1" />

                <div className="mt-2 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    {job.jobStatus}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300">
                    {job.jobType}
                  </p>
                </div>

                <div className="space-y-2 xs:flex xs:items-center xs:justify-between -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    {new Date(job.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <div className="flex gap-2">
                    <Button className="group text-xs rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center  h-8 px-3.5 justify-center">
                      <span>Edit</span>
                      <EditIcon className="size-[1em]" />
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="group text-xs rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center  h-8 px-3.5 justify-center bg-gradient-to-l from-red-100 to-white dark:bg-none"
                          disabled={isPending}
                        >
                          <span>delete</span>
                          <DeleteIcon className="size-[1em]" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              mutate(job._id);
                            }}
                            disabled={isPending}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default JobCards;
