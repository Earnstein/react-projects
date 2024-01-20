import Container from "@/components/Container";
import { ModeToggle } from "@/components/mode-toggle";
import { FaShopify, FaUser } from "react-icons/fa";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className=" bg-teal-50 dark:bg-background flex items-center h-16 backdrop-blur-0 border-b ">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FaShopify className="w-10 h-10 rounded-full" />
            <h1 className="text-xl font-playfair font-medium">eShop</h1>
          </div>
          <div className="hidden md:flex md:gap-4">
            <Button size="sm" className="bg-blue-400 hover:bg-blue-500 px-5 py-2.5 text-sm font-medium font-montserrat"> <FaUser className="mr-2 text-white"/> Sign up</Button>
            <ModeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
// #23074d #E0EAFC