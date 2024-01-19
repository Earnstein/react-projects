
import { cn } from "@/utils";
import ErrorImg from "@/assets/images/error.svg"
import { Button } from "../ui/button";
const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
       <img src={ErrorImg} alt="" className="mx-auto h-56 w-auto text-black sm:h-64"/>

        <h1 className="mt-6 text-2xl font-bold font-opensans tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500 font-opensans">
          We can&apos;t find that page.
        </p>
      </div>

      <Button
        href="#"
        className={cn(
          "mt-6 inline-block rounded font-montserrat bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring place-self-center"
        )}
      >
        Go Back Home
      </Button>
    </div>
  )
}

export default NotFound