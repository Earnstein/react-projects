import emptyLogo from "@/assets/images/empty.jpg";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 space-y-12">
    <div className="h-72 w-72 md:h-96 md:w-96 relative">
      <img src={emptyLogo} alt="empty" className="h-full w-full" />
      <p className="text-center font-palanquin capitalize text-muted-foreground">
        Your Job list is Empty 😢
      </p>

      <Link to="/dashboard/add-job">
        <Button variant="link" className="mt-8 w-full"> Click here to add a new job</Button>
      </Link>
    </div>
  </div>
  )
}

export default Empty;