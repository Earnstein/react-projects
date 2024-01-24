import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ErrorMessage = ({ title, message, variant }) => {
  return (
    <div className="grid place-content-center">
      <Alert variant={variant || "default"}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{title}!</AlertTitle>
        <AlertDescription>{message}.</AlertDescription>
      </Alert>
    </div>
  );
};
export default ErrorMessage;
