import "./App.css";
import MainVisual from "./Components/MainVisual";
import BusinessSection from "./Components/BusinessSection";
import CareerSection from "./Components/CareerSection";
import EsgSection from "./Components/EsgSection";
import FooterSection from "./Components/FooterSection";
import Header from "./Components/Header";
import IrSection from "./Components/IrSection";
import PrCenterSection from "./Components/PrCenterSection";
import { useState, useEffect } from "react";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App overflow-x-clip">
      <Header />
      <MainVisual />
      <div className="w-full h-full bg-gradient-to-b from-black to-[#005bb5]">
        <BusinessSection />
        <IrSection />
        <CareerSection />
        <EsgSection />
        <PrCenterSection />
        <FooterSection />
      </div>
      <span
        className={`fixed w-[60px] h-[60px] bottom-[90px] right-[30px] z-50
    transition-opacity duration-500 ease-in-out
    ${showTopBtn ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <a href="#">
          <img src="/images/btn_top.png" alt="btn_top" className="block" />
        </a>
      </span>
    </div>
  );
}

export default App;
