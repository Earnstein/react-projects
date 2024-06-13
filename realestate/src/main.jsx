import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SustainPage from "./pages/SustainPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HRPage from "./pages/HRpage.jsx";
import TeamPage from "./pages/Team.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/sustain" element={<SustainPage />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/hr" element={<HRPage />}></Route>
        <Route path="/teams" element={<TeamPage />}></Route>
        <Route path="/project/:name" element={<ProductPage />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
