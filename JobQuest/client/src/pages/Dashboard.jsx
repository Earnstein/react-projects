import BigSideBar from "@/components/BigSideBar";
import Navbar from "@/components/NavBar";
import { cn } from "@/utils";
import DashBoardContext from "@/store/dashboard-context";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const user = { name: "Earnstein" };
  const [showSidebar, setshowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
    setIsDarkTheme(true);
  };

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
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logout,
      }}
    >
      <main className={cn("flex")}>
        <BigSideBar />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grow"
        >
          <Navbar />
          <div className={cn("mx-auto py-4")}>
            <Outlet />
          </div>
        </motion.div>
      </main>
    </DashBoardContext.Provider>
  );
};

export default Dashboard;
