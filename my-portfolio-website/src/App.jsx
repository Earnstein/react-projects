import { useState, useEffect } from "react"
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Navbar from "./scenes/Navbar";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 ){
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0){
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <main className="app bg-deep-blue">

      <section id="Navbar">
        <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      </section>

      <section className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />}
        <Landing setSelectedPage={setSelectedPage}/>
      </section>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
            <MySkills/>
      </div>
    </main>
  )
};

export default App;