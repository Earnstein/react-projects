import BigSideBar from "@/components/BigSideBar";
import Navbar from "@/components/NavBar";
import SmallSideBar from "@/components/sidebar/SmallSidieBar";
import { cn } from "@/utils";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className={cn("dashboard")}>
      <SmallSideBar />
      <BigSideBar />
      <div>
        <Navbar />
        <div className={cn("w-[90vw] md:w-[90%] mx-auto py-8")}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
