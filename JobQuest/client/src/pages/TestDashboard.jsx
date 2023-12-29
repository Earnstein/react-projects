import Navbar from "@/components/Navbar";
import { navLinks } from "@/constants";
import DashBoardContext from "@/store/dashboard-context";
import { cn } from "@/utils";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const TestDashboard = () => {
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
      <div className="flex">
        <div
          className={cn("flex basis-1/6", {
            "hidden md:flex": !showSidebar,
          })}
        >
          <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
            <div className="flex px-4 py-6 gap-4">
            <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className={cn(
                      "flex items-center justify-center text-gray-500 py-4 px-0 capitalize hover:text-indigo-600 gap-4"
                    )}
                    style={({ isActive }) => {
                      return {
                        color: isActive && "indigo",
                      };
                    }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-5/6">
          <Navbar />
          <div className={cn("w-[90vw] md:w-[90%] mx-auto py-8")}>
            <Outlet />
          </div>
        </div>
      </div>
    </DashBoardContext.Provider>
  );
};

export default TestDashboard;
