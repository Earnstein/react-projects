import { navLinks } from "@/constants";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils";
import { motion } from "framer-motion";

const NavLinks = () => {
  return (
    <div className="mt-20 flex flex-col gap-4">
      {navLinks.map((link) => (
        <motion.div
          key={link.title}
          whileHover={{ translateX: 20, color: "#fff" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            " text-gray-500 hover:bg-purple-500 hover:rounded-md gap-8 heading font-palanquin"
          )}
        >
          <NavLink
            to={link.path}
            className={cn("flex items-center py-4 px-8 gap-8")}
          >
            <span className={cn("text-sm")}>{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

export default NavLinks;
