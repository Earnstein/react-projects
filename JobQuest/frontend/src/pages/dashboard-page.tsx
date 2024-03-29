import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";


const DashboardPage = () => {
  return (
 <>
     <div className="w-full h-full">
      <main className={cn("flex")}>
        <Sidebar/>
        <div className="flex-1">
          <Navbar/>
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
 </>
  );
};

export default DashboardPage;
