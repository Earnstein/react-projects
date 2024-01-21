import _ from "lodash";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const maxRating = 5; // Assuming a maximum rating of 5

  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars === 0.5;

    return _.map(_.range(1, maxRating + 1), (index) => (
      <span key={index}>
        {index <= filledStars ? (
          <FaStar className="text-yellow-500 dark:text-yellow-300 text-sm sm:text-xl" />
        ) : hasHalfStar && index === filledStars + 1 ? (
          <FaStarHalf className="text-yellow-500 dark:text-yellow-300 text-sm sm:text-xl"/>
        ) : (
          <FaRegStar />
        )}
      </span>
    ));
  };

  return (
    <div className="flex justify-start items-center gap-2 mt-6">
      {renderStars()} <span className="font-palanquin tracking-tight">{rating} reviews</span>
    </div>
  );
};

export default Rating;
