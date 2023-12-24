import Button from "@/components/Button.jsx";
import jobImage from "@/assets/images/Job.svg";
import { cn } from "@/utils";

const Landing = () => {
  return (
    <section className="container">
      <div
        className={cn(
          " mt-8 gap-16 w-full  padding-l flex flex-col flex-1 sm:flex-row m justify-center d:justify-between items-center"
        )}
      >
        <div className="max-w-md sm:order-2 basis-2/5">
          <img
            alt="JobImage"
            src={jobImage}
            className=" object-cover hover:filter hover:saturate-200 transition duration-500 z-10 w-full"
          />
        </div>
        <div className="sm:order-1 basis-3/5 flex flex-col justify-center items-center sm:justify-start sm:items-start">
          <h2 className={cn("text-3xl font-bold sm:text-6xl text-center sm:text-start font-playfair")}>
            Job <span className="text-indigo-300">Tracking</span> Application
          </h2>

          <p
            className={cn(
              "max-w-[480px] mt-4 sm:mt-8 text-gray-600 text-center sm:text-start font-montserrat tracking-normal text-normal sm:text-large font-normal"
            )}
          >
            Welcome to my personal job application journey!. This Application
            Tracker is designed to make career aspirations a reality. Tailor
            your path, celebrate your achievements, and conquer challenges – all
            in one place.
          </p>

          <Button
            to="/login"
            className={cn(
              "mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none font-montserrat"
            )}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
