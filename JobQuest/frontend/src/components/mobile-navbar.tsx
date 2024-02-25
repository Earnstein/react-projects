import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {  MenuIcon } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";

const MobileNavbar = () => {
  const isMobile = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      {!isMobile && (
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="md:hidden block w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default MobileNavbar;
