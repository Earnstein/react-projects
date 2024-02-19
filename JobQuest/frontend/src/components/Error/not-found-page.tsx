import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-[6rem] sm:text-[10rem] font-black text-muted-foreground">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
          Whoops!
        </p>

        <p className="mt-4 text-muted-foreground font-palanquin">
          Page Not Found !!!
        </p>
        <Link to="/">
          <Button className="mt-6 inline-block rounded font-palanquin bg-indigo-800 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-800/80">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
