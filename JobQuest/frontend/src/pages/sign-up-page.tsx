import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      SignUpPage
      <Link to="/signin">
        <Button variant="link" size="sm">Login</Button>
      </Link>
    </div>
  );
};

export default SignUpPage;
