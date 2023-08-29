const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] 
    sm:min-w-[350px] w-full rounded-[16px] px-10
    py-16 shadow-3xl"
    >
      <div
        className="w-10 h-10 flex justify-center items-center
        bg-coral-red rounded-full"
      >
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3
        className="mt-4 font-palanquin font-bold
         leading-normal text-3xl"
      >
        {label}
      </h3>
      <p className="mt-4 break-words font-montserrat leading-normal
      text-lg text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
