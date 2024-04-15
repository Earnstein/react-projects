import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddJobPage,
  AdminPage,
  DashboardPage,
  ErrorPage,
  HomePage,
  JobsPage,
  LandingPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  StatsPage,
} from "@/pages/index.ts";
import { loader as dashboardLoader } from "@/pages/dashboard-page";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: dashboardLoader(queryClient),
        children: [
          {
            path: "admin",
            element: <AdminPage />,
          },
          {
            path: "all-jobs",
            element: <JobsPage />,
          },
          {
            path: "stats",
            element: <StatsPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            index: true,
            path: "add-job",
            element: <AddJobPage />,
          },
        ],
      },
    ],
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },

  {
    path: "signin",
    element: <SignInPage />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};

export default App;
