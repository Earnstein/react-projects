import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "../components/GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} mt-[-8px] flex justify-center items-center md:flex-row flex-col`}
    >
      <div
        className={`${styles.flexStart} flex-1 flex-col xl:px-0
      sm:px-16 px-8`}
      >
        <div
          className="flex flex-row items-center py-[6px]
        px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" width={32} height={32} />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 month</span> Account
          </p>
        </div>

        <div
          className="flex flex-row justify-between items-center
        w-full"
        >
          <h1
            className="flex-1 font-poppins ss:text-[72px]
           text-white font-semibold text-[52px] ss:leading-[100px]
           leading-[74px] max-w-320px"
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation </span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1
          className="font-poppins ss:text-[68px]
           text-white font-semibold text-[52px] ss:leading-[100px]
           leading-[74px] w-full"
        >
          Payment method
        </h1>
        <p className={`${styles.paragraph} max-w-[480px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} 
      md:my-0 my-8 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[95%] h-[95%] relative z-[5]"
        />
        <div
          className="absolute z-0 w-[40%] h-[35%] 
        top-0 pink__gradient"
        />
        <div
          className="absolute z-1 w-[80%] h-[80%] 
        bottom-40 rounded-full white__gradient"
        />
        <div
          className="absolute right-20 bottom-20 z-0 
         w-[50%] h-[50%] blue__gradient"
        />
      </div>

      <div className={`${styles.flexCenter} ss:hidden mt-4`}>
        <GetStarted />
      </div>
    </section>
  );
};
export default Hero;
