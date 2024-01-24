import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <>
      <Card className="flex flex-col items-center space-y-12 border p-2">
        <Skeleton className="h-48 w-full" />
        <CardContent className="self-start w-full space-y-2 p-0">
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
        <Skeleton className=" self-start h-8 w-20" />
      </Card>
    </>
  );
};


export  const LoadingComponent = ({num}) => {
    return Array.from({ length: num }).map((_, index) => <Loader key={index} />);
  };


