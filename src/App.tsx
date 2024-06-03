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
import { ObserverProvider } from "./contexts/ObserverContext";
import ProjectModal from "./Projects/ProjectModal";

function App() {
  return (
    <ObserverProvider>
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
        // @ts-expect-error next-line theme is not typed
        <ProjectModal projektName="InnovaStay" />
      </main>
    </ObserverProvider>
  );
}

export default App;
