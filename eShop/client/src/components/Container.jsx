import { cn } from "@/lib/utils"

const Container = ({children}) => {
  return (
    <section className={cn("mx-auto max-w-7xl w-full")}>
        {children}
    </section>
  )
}

export default Container