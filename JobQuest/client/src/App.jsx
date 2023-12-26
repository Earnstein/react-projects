import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, ErrorPage, Home, Landing, Login, Register, Addjob, Stats, Alljobs, Admin, Profile } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children:[
          {
            index:true,
            element:<Addjob/>
          },
          {
            path:"stats",
            element:<Stats/>
          },
          {
            path:"all-jobs",
            element: <Alljobs/>,
          },
          {
            path:"profile",
            element:<Profile/>
          },
          {
            path:"admin",
            element:<Admin/>
          }
        ]
      },
    ],
  },
]);

const App = () => {
  
  return <RouterProvider router={router} />;
};

export default App;
