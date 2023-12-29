import Button from "@/components/Button.jsx";
import jobImage from "@/assets/images/Job.svg";
import { cn } from "@/utils";
import LandingPageNavbar from "@/components/LandingPageNavbar";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <>
      <LandingPageNavbar />
      <section
        id="home"
        className="md:flex md:justify-between md:items-center md:h-[80vh] gap-16 container mx-auto mb-8"
      >
        {/* IMAGE SECTION */}
        <div className="md:order-2 flex justify-center basis-3/5">
          {isAboveMediumScreens ? (
            <div className={`relative`}>
              <img
                className="max-w-[400px] md:max-w-[460px]"
                src={jobImage}
                alt="profile"
              />
            </div>
          ) : (
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[420px] mt-24 mb-8 px-4 sm:px-0"
              src={jobImage}
              alt="profile"
            />
          )}
        </div>
        {/* main section*/}
        <div className="z-30 basis-2/5 px-4 mb-4 sm:mb-0">
          {/*headings*/}
          <div className={cn("flex flex-col justify-center md:items-start items-center")}>
            <h2
              className={cn(
                "text-3xl font-bold md:text-6xl text-center md:text-start font-playfair"
              )}
            >
              Job <span className="text-indigo-300">Tracking</span> Application
            </h2>
            <p className="text-normal leading-normal my-4 text-center md:text-start ont-montserrat tracking-normal font-normal max-w-[80%]">
              Welcome to my personal job application journey!. This Application
              Tracker is designed to make career aspirations a reality. Tailor
              your path, celebrate your achievements, and conquer challenges –
              all in one place.
            </p>
          </div>

          {/*call to actions*/}
          <Link className="flex justify-center md:justify-start" to="/login">
            <Button
              className={cn(
                "inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none font-montserrat"
              )}
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Landing;
