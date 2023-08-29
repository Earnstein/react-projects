import { socialMedia } from "../../constants";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4 mt-4">
      {socialMedia.map((icon) => (
        <div
          key={icon.alt}
          className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
        >
          <img src={icon.src} alt={icon.alt} width={24} height={24} />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
