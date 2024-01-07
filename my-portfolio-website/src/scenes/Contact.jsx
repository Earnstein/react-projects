import { motion } from "framer-motion";
import { contact } from "../assets/images";
import ContactForm from "../components/ContactForm";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="contact" className="md:flex md:gap-4 md:py-48 py-8">
       {/* Image Section */}
       <div className="mt-8 md:order-1 md:mt-0">
          {isAboveMediumScreens ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative z-0 ml-20 before:absolute 
           before:mt-4 before:-top-10 before:-left-10 
           before:w-full before:h-full 
           before:border-2 before:border-blue 
           before:z-[-1]
           "
            >
              <img className="z-10" src={contact} alt="skills" />
            </motion.div>
          ) : (
            <img className="z-10" src={contact} alt="skills" />
          )}
        </div>

         {/* Form Section */}
      <div className="flex flex-1 md:order-2 flex-col md:basis-1/2 px-4">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p
              className="title
                mb-4 uppercase"
            >
              Contact <span className="text-red"> me</span>
            </p>
            <LineGradient width="w-1/2" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default Contact;
