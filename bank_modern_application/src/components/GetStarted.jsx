import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <button
      className={`${styles.flexCenter}
     w-[140px] h-[140px] rounded-full
     bg-blue-gradient p-[2px] cursor-pointer
     transform scale-100 hover:scale-110 transition-transform duration-300`}
    >
      <div
        className={`${styles.flexCenter} flex-col
        bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div
          className={`${styles.flexStart} flex-row
            `}
        >
          <p
            className="font-poppins font-medium
              text-[18px] leading-[24px] mr-1"
          >
            <span className="text-gradient object-contain">Get</span>
          </p>
          <img src={arrowUp} alt="arrowUP" width={24} height={24} />
        </div>
        <p
          className="font-poppins font-medium
              text-[18px] leading-[23px]"
        >
          <span className="text-gradient object-contain">Started</span>
        </p>
      </div>
    </button>
  );
};

export default GetStarted;
