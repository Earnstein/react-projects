import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavLinks from "@/components/Navlinks";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      {!isNotMobile && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden inline-flex items-center p-2 w-10 h-10 transition-all duration-100 rounded-full"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 sm:w-80 md:w-[350px]">
            <SheetHeader>
              <SheetTitle className="font-playfair text-accent-foreground text-xl tracking-widest text-start py-4 pl-4">
                LandIt
              </SheetTitle>
            </SheetHeader>
            <div
              className={cn(
                "relative flex flex-col min-w-full duration-300 ease-out"
              )}
            >
              <Separator />
              <NavLinks onOpenChange={setOpen} />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default MobileNavbar;
