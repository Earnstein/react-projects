import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {

  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1);

  const changeShowHandler = (shoe) => {setbigShoeImage(shoe)}

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col
       justify-center items-start w-full 
       max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin
          text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap 
            relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-4 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div
          className="flex justify-start items-start
                  flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl 
              font-palanquin font-bold
              "
              >
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div
        className="relative 
      flex-1 flex justify-center
      xl:min-h-screen max-xl:py-40
       bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImage}
          alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div
          className="flex sm:gap-6 gap-4 absolute 
      -bottom-[6%] sm:left-[10%]
      max-sm: px-6 z-10
      "
        >
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={changeShowHandler}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
