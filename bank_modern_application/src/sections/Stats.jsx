import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter}
    flex-row flex-wrap sm:mb:20 mb-6`}>
        {
          stats.map((stat) => (<div
            className={`flex-1 flex sm:justify-start justify-between
            items-center flex-row m-3 mx-auto`}
            key={stat.id}>
            <h4 className="font-poppins
            font-semibold xs:text-[40px] text-[30px]
            xs:leading-[52px] leading-[42px] text-white
            ">{stat.value}</h4>
            <p className="font-poppins
            font-semibold xs:text-[20px] sm:text-[16px] text-[14px]
            xs:leading-[26px] leading-[20px] text-gradient uppercase
            ml-4">{stat.title}</p>
          </div>))
        }
    </section>
  )
}

export default Stats