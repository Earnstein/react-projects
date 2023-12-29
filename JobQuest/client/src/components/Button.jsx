import { cn } from "@/utils";


const Button = ({children, className, type, onClick }) => {
  const btnType = "button" || type
  return (
    <button
      className={cn("inline-block px-12 py-3", className)}
      type={btnType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
