import Feedback from "../components/Feedback";
import { feedback } from "../constants";
import styles from "../style";

const Testimonials = () => {
  return (
    <section 
    className={`flex-col relative
     ${styles.paddingY} ${styles.flexCenter}`}>
        {/* Todo */}
      <div className="absolute z-0 w-[60%] 
      h-[60%] -right-1/2 blue__gradient rounded-full"/>

      <div  className="w-full flex justify-between
      items-center md:flex-row flex-col 
      sm:mb-16 mb-6 relative z-1">
          <h1 className={styles.heading2}>
            What are people <br className="sm:block hidden"/> saying
          </h1>
          <div className="w-full mb:mt-0 mt-6">
              <p className={`${styles.paragraph} 
              text-left max-w-[450px]`}>
                Everything you need to accept card payments and
                grow your business anywhere on the planet.
              </p>
          </div>
      </div>

      <div className="flex flex-wrap sm:justify-start 
      justify-center w-full feedback-container 
      relative z-1">
        {
          feedback.map((card) => (
            <Feedback
            key={card.id}
            {...card}/>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials