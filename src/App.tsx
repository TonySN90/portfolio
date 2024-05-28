import { useEffect, useRef } from "react";
import Home from "./Home/Home";
import TileGrid from "./components/TileGrid";
import RadialBackground from "./components/RadialBackground";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import LinkIcons from "./Home/LinkIcons";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const innerContainer = containerRef.current;
      if (innerContainer) {
        const delta = event.deltaY;
        const scrollAmount =
          delta > 0 ? window.innerHeight : -window.innerHeight;
        const scrollToPosition = innerContainer.scrollTop + scrollAmount;

        innerContainer.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
        console.log(scrollToPosition);
      }
    };

    container && container.addEventListener("wheel", handleWheel);

    return () => {
      container && container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main
      className="w-full relative h-screen overflow-hidden"
      ref={containerRef}
    >
      <TileGrid />
      <RadialBackground />
      <LinkIcons />
      <Logo />
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
