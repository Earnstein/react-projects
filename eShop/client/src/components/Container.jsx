import { cn } from "@/lib/utils"

const Container = ({children}) => {
  return (
    <section className={cn("mx-auto max-w-screen-2xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8")}>
        {children}
    </section>
  )
}

export default Container