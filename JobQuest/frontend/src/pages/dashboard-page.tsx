import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import DashBoardContext from "@/hooks/useDashboardContext";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const DashboardPage = () => {
  const user = { name: "Earnstein" };
  const [showSidebar, setshowSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setshowSidebar((prev) => !prev);
  };

  const logout = async () => {
    console.log("logout user");
  };

  return (
 <DashBoardContext.Provider
 value={{
  user,
  showSidebar,
  toggleSidebar,
  logout,
  
 }}>
     <div className="w-full h-full">
      <main className={cn("flex")}>
        <Sidebar/>
        <div className="flex-1">
          <Navbar/>
          <div className="py-16">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="p-10 bg-pink-700  w-full h-16 border-b-[1px] border-b-primary-foreground dark:border-b-accent  border-border/40 bg-background/95">
          Lore mus fugit quidem eveniet dignissimos impedit, deserunt quaerat!
          Delectus nostrum eius cumque molestiae recusandae, velit distinctio?
        </div>
    </div>
 </DashBoardContext.Provider>
  );
};

export default DashboardPage;
