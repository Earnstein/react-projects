import Container from "@/components/Container";
import { ModeToggle } from "@/components/mode-toggle";
import { Links } from "@/constants.js";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { FaShopify, FaUser } from "react-icons/fa";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center h-16 border-b bg-white dark:bg-background shadow-sm fixed top-0 right-0 w-full z-10">
      <Container>
        <div className="flex justify-between items-center px-8">
          {/* LOGO */}
          <Link to={"/"} className="flex items-center gap-1">
            <FaShopify className="hidden sm:block w-10 h-10 rounded-full" />
            <h1 className="text-xl font-playfair font-medium">eShop</h1>
          </Link>

          {/* LINKS */}
          <nav className="hidden lg:flex lg:items-center md:space-x-4 font-palanquin font-medium transition-colors">
            {Links.map((link) => (
              <Button
                className={cn("hover:scale-90 transition-all duration-500 ")}
                key={link.label}
                variant="ghost"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex space-x-2">
            <Link to={"/cart"}>
              <Button
                variant="ghost"
                className={cn(
                  "px-5 py-2.5 text-sm font-medium font-palanquin transition-all duration-100"
                )}
              >
                <ShoppingCart className="mr-2" />
                Cart
              </Button>
            </Link>
            <div className="hidden md:flex px-2">
              <Link to={"/login"}>
                <Button
                  
                  className={cn(
                    "px-5 py-2.5 text-sm font-medium font-palanquin"
                  )}
                >
                  <FaUser className="mr-2" /> Sign up
                </Button>
              </Link>
            </div>

            <Sidebar />
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
// #23074d #E0EAFC
