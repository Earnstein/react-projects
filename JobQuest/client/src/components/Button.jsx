import { cn } from "@/utils";
import { Link } from "react-router-dom";

const Button = ({ to, children, className }) => {
  return (
    <Link
      className={cn("inline-block px-12 py-3", className)}
      to={to}
    >
      {children}
    </Link>
  );
};

export default Button;
