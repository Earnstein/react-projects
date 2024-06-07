import { Outlet } from "react-router";
import Header from "./components/Header"
import {Container } from 'react-bootstrap';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default App