import { interviewLogo, pendingLogo, successLogo } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "./ui/separator";
import { useGetJobs } from "@/hooks/useGetJobs";
import JobLoader from "./JobLoader";
import { JobBody } from "@/constants/types";
import { cn } from "@/lib/utils";
import DeleteModal from "@/components/delete-modal";
import EditModal from "@/components/edit-modal";
import { Briefcase, MapPin, PieChart } from "lucide-react";

const JobCards = () => {
  const { data, isLoading } = useGetJobs();
  

  return (
    <div className="mt-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

                <div className="space-y-3 py-6 rounded-b-[--card-border-radius]">
                  <p className="flex items-center font-palanquin capitalize text-gray-700 dark:text-gray-300">
                   <PieChart className="h-4 w-4 mr-2"/> {job.jobStatus}
                  </p>

                  <p className="flex items-center font-palanquin capitalize text-gray-700 dark:text-gray-300">
                  <Briefcase className="h-4 w-4 mr-2"/>  {job.jobType}
                  </p>

                  <p className="flex items-center font-palanquin capitalize text-gray-700 dark:text-gray-300">
                   <MapPin className="h-4 w-4 mr-2"/> {job.jobLocation}
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
                    <EditModal id={job._id}/>
                    <DeleteModal id={job._id}/>
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
