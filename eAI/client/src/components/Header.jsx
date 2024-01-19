import { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { reset } from "../utils/api";

const Header = ({ setMessages }) => {
  const [isResetting, setisResetting] = useState(false);

  const resetChat = async () => {
    setisResetting(true);
    try {
      const data = await reset();
      if (data) {
      setMessages([])
    }
    } catch (error) {
      console.error("Error resetting chat:", error.message)
    }
    setisResetting(false)
  }
  return (
    <header className="z-10 flex justify-between items-center p-4 bg-black">
      <h1 className="font-playfair sm:text-3xl italic text-xl text-white-400">Naomi</h1>

      <button 
      onClick={resetChat}
      disabled={isResetting} 
      className={`w-8 h-8 rounded-full 
      transition-all duration-300 hover:rotate-180 text-red-300
      hover:text-green-300 ${isResetting && "animate-pulse"}
      
      `}>
        <HiOutlineRefresh size={28}/>
      </button>
    </header>
  );
};

export default Header;
