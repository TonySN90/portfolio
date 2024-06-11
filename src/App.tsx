// import { useEffect, useRef, useState } from "react";
import Home from "./Home/Home";
import TileGrid from "./components/TileGrid";
import RadialBackground from "./components/RadialBackground";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import LinkIcons from "./components/LinkIcons";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { PortfolioProvider } from "./contexts/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <main className="w-full relative h-screen bg-transparent">
        <LinkIcons />
        <TileGrid />
        <RadialBackground />
        <Logo />
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </PortfolioProvider>
  );
}

export default App;
