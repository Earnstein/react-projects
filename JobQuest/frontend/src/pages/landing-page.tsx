import LandingImg from "@/assets/images/LandIt.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

const LandingPage = () => {
  return (
   <>
    <Navbar/>
    <section id="#Landingpage" className="h-full w-full flex flex-1">
        
      <div className="container w-full h-full  md:mt-20">
        <div className="max-w-8xl w-full mx-auto sm:py-8">
          <div className="flex flex-col-reverse justify-center md:flex-row md:justify-between items-center gap-8">
            {/* HERO TEXTS */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col gap-y-4 text-center md:text-start">
              <h1 
              className="text-3xl sm:text-5xl leading-tight tracking-tighter md:text-8xl lg:leading-[1.1] font-playfair text-foreground font-black">
                Land It: Launch Your <span>Dream</span> Career
              </h1>
              <p className="max-w-2xl font-palanquin text-sm sm:text-xl text-muted-foreground tracking-tight">
                Your personalized job-hunting assistant, tracking your progress,
                reminding you of deadlines, and even using AI to craft powerful
                application letters.
              </p>
             <div className="flex gap-x-2 items-center justify-center md:justify-start">
             <Link to="/signup">
              <Button 
               variant="outline"
              className="font-palanquin sm:text-lg p-4 sm:px-20 sm:py-6">Quick Demo</Button>
              </Link>

              <Link to="/signup">
              <Button 
              className="font-palanquin text-secondary bg-accent-foreground sm:text-lg p-4 sm:px-20 sm:py-6">Get Started</Button>
              </Link>
             </div>
            </motion.div>
            {/*"IMAGE COMPONENT"*/}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
             className="relative h-80 w-80 sm:h-[500px] sm:w-[600px]">
              <img
                src={LandingImg}
                alt="landing"
                className="absolute w-full h-full inset-0 object-cover overflow-hidden"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default LandingPage;
