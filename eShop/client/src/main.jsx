import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import Productpage from "./pages/Productpage.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// REACT ROUTER SETUP

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index="true" path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<Productpage />} />
    </Route>
  )
);

// REACT QUERY SETUP

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
