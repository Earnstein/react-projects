import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useGetUser } from "@/hooks/useGetUser";
import { cn } from "@/lib/utils";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "sonner";

const DashboardPage = () => {
  const { isError, error } = useGetUser();
  if (isError) {
    toast.error(error?.response?.data?.message);
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="w-full h-full">
        <main className={cn("flex")}>
          <Sidebar />
          <div className="flex-1">
            <Navbar />
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
