import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useMediaQuery from "@/hooks/useMediaQuery";
const JobLoader = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const numJobs = isDesktop ? 6 : 4;
  return (
    <>
      {[...Array(numJobs)].map((_, index) => (
        <Card
          key={index}
          className="flex flex-col space-y-3 rounded-sm h-full w-full p-4 overflow-hidden bg-white/60 dark:bg-black border border-teal-500 dark:border-white/[0.2] hover:border-teal-700 relative z-20 shadow-md cursor-pointer"
        >
          <div className="space-y-4">
            <Skeleton className="h-[8px] w-[200px]" />
            <Skeleton className="h-[8px] w-[100px]" />
          </div>
          <Skeleton className="h-[125px] w-full" />
        </Card>
      ))}
    </>
  );
};

export default JobLoader;
