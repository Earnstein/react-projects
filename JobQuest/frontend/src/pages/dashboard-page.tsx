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
        <Sidebar showSidebar={showSidebar}/>
        <div className="grow">
          <Navbar/>
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
 </DashBoardContext.Provider>
  );
};

export default DashboardPage;
