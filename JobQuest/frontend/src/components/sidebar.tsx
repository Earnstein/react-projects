import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
interface Sidebar {
  showSidebar: boolean
}

const Sidebar = ({showSidebar} : Sidebar) => {
  return (
   <>
   {
    showSidebar &&  <motion.aside
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.25 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    className={cn(
      "hidden md:flex basis-1/6 border-e min-h-screen"
    )}
  >
    <div
      className={cn(
        "relative flex flex-col items-center duration-300 ease-out pt-10 px-10"
      )}
    >
      <span className="absolute top-8 left-8 grid h-10 w-24 place-content-center rounded-lg bg-white text-xs text-gray-600">
        L
      </span>
    </div>
  </motion.aside>
   }
   </>
  )
}

export default Sidebar