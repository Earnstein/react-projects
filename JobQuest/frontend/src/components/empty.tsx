import emptyLogo from "@/assets/images/empty.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 space-y-12">
    <div className="h-96 w-96 md:h-[400px] md:w-[400px] relative">
      <img src={emptyLogo} alt="empty" className="h-full w-full" />
      <h1 className="text-center font-palanquin capitalize text-muted-foreground text-2xl sm:text-3xl">
        Your Job list is Empty 😢
      </h1>

      <Link to="/dashboard/add-job">
        <Button variant="link" className="w-full"> Click here to add a new job</Button>
      </Link>
    </div>
  </div>
  )
}

export default Empty;