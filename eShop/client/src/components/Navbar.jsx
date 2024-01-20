import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className=" flex items-center h-14 backdrop-blur-0 border-b">
      <Container>
        <nav className="flex justify-between items-center">
        <div>
        <Button variant="link">
          eShop
        </Button>

        </div>
        <ModeToggle />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
