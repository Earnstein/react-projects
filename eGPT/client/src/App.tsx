import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import { Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats.js";
import NotFound from "./pages/NotFound.js";
import { useAuth } from "./states/AuthContext.js";



const App = () => {
  console.log(useAuth()?.isLoggedIn)
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/chat" element={<Chats/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
};

export default App;
