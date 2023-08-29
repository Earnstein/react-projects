import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
import { SocialIcons, FooterLinks} from "../components/footer";


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="nikelogo" width={150} height={46} />
          </a>
          <p className="text-white-400 info-text mt-6 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get rewards.
          </p>
          <SocialIcons />
        </div>
        <FooterLinks />
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            className="m-0 h-[20px] w-[20px]"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
