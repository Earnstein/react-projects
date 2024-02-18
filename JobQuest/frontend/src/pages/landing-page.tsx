import LandingImg from "@/assets/images/LandIt.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section id="#Landingpage" className="min-h-screen w-full flex flex-1">
      <div className="container w-full h-full">
        <div className="max-w-6xl w-full mx-auto py-16 md:py-8">
          <div className="flex flex-col-reverse justify-center md:flex-row md:justify-between items-center gap-8">
            {/* HERO TEXTS */}
          <div className="flex flex-col gap-y-4 text-center md:text-start">
              <h1 className="text-2xl sm:text-4xl leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] font-playfair text-foreground font-black">
                Land It: Launch Your <span>Dream</span> Career
              </h1>
              <p className="max-w-2xl font-palanquin text-sm sm:text-xl text-muted-foreground tracking-tight">
                Your personalized job-hunting assistant, tracking your progress,
                reminding you of deadlines, and even using AI to craft powerful
                application letters.
              </p>
              <Link to="/signup">
              <Button size="lg" className="font-palanquin text-secondary bg-accent-foreground">Get Started</Button>
              </Link>
            </div>
            <div className="relative h-96 w-96 sm:h-[500px] sm:w-[600px]">
              <img
                src={LandingImg}
                alt="landing"
                className="absolute w-full h-full inset-0 object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
