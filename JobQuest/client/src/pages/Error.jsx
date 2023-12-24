import ErrorComponent from "@/components/Errors/ErrorComponent";
import NotFound from "@/components/Errors/NotFound";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status } = useRouteError();
  const isError404 = status === 404
 
  return (
    <>
    {(isError404 ? <ErrorComponent/> : <NotFound/>)}
    </>
  )
};

export default Error;
