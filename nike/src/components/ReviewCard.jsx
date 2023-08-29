import { star } from "../assets/icons";

const ReviewCard = ({imgURL, customerName, feedBack, rating}) => {
  return (
    <div className="flex justify-center bg-white-400
    items-center flex-col shadow-lg rounded-xl px-4 py-4
    ">
        <img 
        src={imgURL} 
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] mt-4" />

        <p className="mt-6 max-w-sm  text-center info-text">{feedBack}</p>
        <div className="flex flex-1 gap-4 justify-center items-center mt-4 ">
            <img src={star} alt="star" width={24} height={24} 
            className="object-contain m-0"/>
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>  
        <h3 className="mt-2 text-3xl font-palanquin text-center font-bold">{customerName}</h3>  
    </div>
  )
}

export default ReviewCard;