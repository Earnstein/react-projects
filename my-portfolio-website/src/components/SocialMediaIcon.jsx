import { socialMedia } from "../constants"

const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center md:justify-start my-10
    gap-8">

        {socialMedia.map((link) => (
            <a
            className="hover:opacity-50 transition duration-500"
            key={link.alt} 
            href={link.href}
            target="_blank"
            rel="noreferrer"
            >
                <img src={link.src} alt={link.alt} />
            </a>
        ))}     
    </div>
  )
}

export default SocialMediaIcon