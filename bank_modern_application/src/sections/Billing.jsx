import { apple, bill, google } from "../assets";
import styles, {layout} from "../style";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
          <img 
          src={bill} 
          alt="bill" 
          className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] top-0 -left-1/2 
          w-[50%] h-[50%] rounded-full white__gradient">
          </div>
          <div className="absolute z-[0] bottom-0 -left-1/2 
          w-[50%] h-[50%] rounded-full pink__gradient">
          </div>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden"/>
           billing & invoicing.
        </h2>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur a
          dipisicing elit. Vero tenetur delectus 
          assumenda consectetur, similique earum minus.
           Natus harum deleniti voluptas?
        </p>
        <div className="flex flex-row flex-wrap gap-5 sm:mt-10
        mt-6">
            <img 
            src={apple} 
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain 
            cursor-pointer" />
            <img 
            src={google} 
            alt="google_play"
            className="w-[128px] h-[42px] object-contain 
            cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing