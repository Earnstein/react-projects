import Button from "@/components/Button";
import { cn } from "@/utils";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-[16rem] font-black text-gray-500">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-grey-400">Something Went Wrong.</p>

        <Button
          className={cn(
            "mt-6 inline-block rounded font-montserrat bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring place-self-center"
          )}
        >
          <Link to="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorComponent;
