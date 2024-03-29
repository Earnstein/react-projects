import { navLinks } from "@/constants";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLink  {
  onOpenChange?: (open: boolean) => void
}
const NavLinks = ({onOpenChange}: NavLink) => {
  return (
    <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
      {navLinks.map((link) => (
       <motion.div
       whileHover={{ translateX: 5}}
       transition={{ duration: 0.25, ease: "easeInOut" }}
       key={link.title}
       className={cn(
         "text-muted-foreground dark:text-white/80 px-3 font-palanquin"
       )}
     >
       <NavLink
         to={link.path}
         onClick={() => {onOpenChange?.(false)}}
         className={({ isActive }) =>
         [
           "flex items-center text-lg py-2 px-2 gap-8",
           isActive ? "bg-teal-500 text-white font-bold rounded-md" : "",
         ].join(" ")
       }
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
