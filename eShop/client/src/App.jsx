import Header from "@/components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
    </>
  );
};

export default App;
