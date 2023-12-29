import { cn } from "@/utils";


const Button = ({children, className, type }) => {
  const btnType = "button" || type
  return (
    <button
      className={cn("inline-block px-12 py-3", className)}
      type={btnType}
    >
      {children}
    </button>
  );
};

export default Button;
