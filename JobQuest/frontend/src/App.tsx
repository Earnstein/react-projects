import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AdminPage,
  DashboardPage,
  ErrorPage,
  HomePage,
  LandingPage,
  SignInPage,
  SignUpPage,
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
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
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
