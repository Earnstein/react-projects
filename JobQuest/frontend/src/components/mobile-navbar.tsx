import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {  MenuIcon } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavLinks from "@/components/Navlinks";
import { Separator } from "@/components//ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      {!isMobile && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <MenuIcon className="md:hidden block w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="font-playfair text-accent-foreground text-3xl tracking-widest py-6 px-8">LandIt</SheetTitle>
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
