import { navLinks } from "@/constants";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLink  {
  onOpenChange?: (open: boolean) => void
}
const NavLinks = ({onOpenChange}: NavLink) => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      {navLinks.map((link) => (
        <motion.div
          key={link.title}
          whileHover={{ translateX: 20}}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "text-muted-foreground dark:text-white/80 gap-y-8 font-palanquin"
          )}
        >
          <NavLink
            to={link.path}
            className={cn("flex items-center text-xl py-4 px-8 gap-8")}
            onClick={() => {onOpenChange?.(false)}}
          >
            <link.icon />
            <span>{link.title}</span>
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

export default NavLinks;
