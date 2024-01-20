import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-them">
      <Navbar/>
    </ThemeProvider>
  );
};

export default App;
