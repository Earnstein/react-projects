import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div>
      SignInPage
      <Link to="/signup">
        <Button variant="link" size="sm">
          Signup
        </Button>
      </Link>
    </div>
  );
};

export default SignInPage;
