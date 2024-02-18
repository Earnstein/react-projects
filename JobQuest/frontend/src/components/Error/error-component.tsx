import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorComponent = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-[16rem] font-black text-gray-500">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-grey-400">Something Went Wrong.</p>

        <Link to="/">
          <Button className="mt-6 inline-block rounded font-palanquin bg-indigo-800 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-800/80">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
