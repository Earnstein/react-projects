import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Outlet, redirect } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLogOut } from "@/hooks/useLogOut";
import { getUser } from "@/lib/requests";
import { QueryClient } from "@tanstack/react-query";

const currentUser = {
  queryKey: ["user"],
  queryFn: getUser,
};

export const loader = (queryClient: QueryClient) => async () => {
  try {
    const query = await queryClient.ensureQueryData(currentUser);
    return query;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardPage = () => {
  const [authError, setAuthError] = useState(false);
  const { mutate } = useLogOut();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        toast.error(error?.response?.data?.message);
        setAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!authError) return;
    mutate();
  }, [authError]);

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
