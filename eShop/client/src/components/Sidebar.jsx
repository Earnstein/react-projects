import { Menu } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";


const Sidebar = () => {
  return (
    <Sheet >
      <SheetTrigger className="md:hidden block" asChild>
        <Button variant="outline" size="sm"><Menu className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all"/></Button>
      </SheetTrigger>
      <SheetContent  side="left">
       <div>
       <SheetHeader>
          <SheetTitle>
          <div className="flex items-center space-x-3">
            <FaShopify className="w-10 h-10 rounded-full" />
            <h1 className="text-xl font-playfair font-medium">eShop</h1>
          </div>
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
       </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar