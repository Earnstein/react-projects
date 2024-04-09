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
import { ThemeProvider } from "./components/theme-provider";




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
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
