import { twMerge } from "tailwind-merge";
const Logo = () => {
  return (
    <div className={twMerge(`flex-1`)}>
          <a
            href="/"
            className="font-playfair text-3xl text-black font-medium"
          >
            Eshop
          </a>
        </div>

  )
}

export default Logo