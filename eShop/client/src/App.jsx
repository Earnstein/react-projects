import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";



const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-them">
      <main>
      <Navbar/>
      <Outlet/>
      </main>
    </ThemeProvider>
  );
};

export default App;
