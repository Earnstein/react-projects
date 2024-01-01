import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skillsImg } from "../assets/images";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="skills" className="pt-10 pb-24">
        {/* HEADER AND IMAGE SECTION */}
        <div className="md:flex md:justify-between md:flex-row-reverse md:gap-16
        mt-32">
            <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: 1}}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>

                <p 
                className="font-playfair font-semibold text-4xl
                mb-4 uppercase">
                    my <span className="text-red"> skills  </span>
                </p>
                <LineGradient width="w-1/3" styles="transition-all duration-500 hover:w-[40%]"/>
                <p className="mt-10 mb-7 max-w-[400px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eum ratione vel, architecto perspiciatis voluptatibus?
                </p>
            </motion.div>

            <div className="mt-16 md:mt-0">
                {isAboveMediumScreens ?
                 <div
                 className="relative z-0 ml-20 before:absolute 
                 before:mt-4 before:-top-10 before:-left-10 
                 before:w-full before:h-full 
                 before:border-2 before:border-blue 
                 before:z-[-1]
                 "
               >
                 <img
                   className="z-10"
                   src={skillsImg}
                   alt="skills"
                 />
               </div>
                 : <img
                 className="z-10"
                 src={skillsImg}
                 alt="skills"
               />}
            </div>
        </div>
        {/*SKILLLS*/}
        <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration: 0.5}}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}>
            <div className="relative h-32">
                <div className="z-10">
                    <h2 className="title">
                        01
                    </h2>
                    <p className="font-semibold
                    font-playfair text-3xl mt-4">
                        Experience
                    </p>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue 
                absolute right-0 top-0 z-[-1]"/>
                </div>
                <p className="mt-5 max-w-[380px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Explicabo consequuntur voluptate, animi reiciendis ad 
                    dignissimos?
                </p>
            </div>
        </motion.div>
        </div>
    </section>
  )
}

export default MySkills;