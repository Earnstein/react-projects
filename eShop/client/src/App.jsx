import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider.jsx";
import Product from "./pages/Product";


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <Header />
        <Product/>
      </main>
    </ThemeProvider>
  );
}

export default App;
