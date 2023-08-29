import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomersReview = () => {
  return (
    <section className="max-container">

      <h3
        className="font-palanquin capitalize text-center 
        text-[44px] font-semibold max-md:text-3xl"
      >
        what our <span className="text-coral-red">Customers</span> say?
      </h3>

      <p className="info-text m-auto mt-4 text-center max-w-lg max-md:text-xl">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex flex-1 mt-24 justify-evenly 
      items-center max-lg:flex-col gap-12">
          {reviews.map((review) => (
           <ReviewCard 
           key={review.customerName}
           imgURL={review.imgURL}
           customerName={review.customerName}
           feedBack={review.feedback}
           rating={review.rating}
           />
          ))}
      </div>
    </section>
  );
};

export default CustomersReview;
