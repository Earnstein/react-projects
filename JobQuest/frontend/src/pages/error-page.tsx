import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NotFoundPage from "@/components/Error/not-found-page";
import ErrorComponent from "@/components/Error/error-component";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
  
    return <>{error.status === 404 ? <NotFoundPage /> : <ErrorComponent />}</>;
};

export default ErrorPage;
