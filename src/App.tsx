import { useEffect, useRef, useState } from "react";
import Home from "./Home/Home";
import TileGrid from "./components/TileGrid";
import RadialBackground from "./components/RadialBackground";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import LinkIcons from "./components/LinkIcons";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startTouchY, setStartTouchY] = useState<number | null>(null);

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
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        setStartTouchY(event.touches[0].clientY);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1 && startTouchY !== null) {
        event.preventDefault();

        const innerContainer = containerRef.current;

        if (innerContainer) {
          const currentTouchY = event.touches[0].clientY;
          const delta = startTouchY - currentTouchY;
          const scrollAmount =
            delta > 0 ? window.innerHeight : -window.innerHeight;
          const scrollToPosition = innerContainer.scrollTop + scrollAmount;

          innerContainer.scrollTo({
            top: scrollToPosition,
            behavior: "smooth",
          });
          setStartTouchY(currentTouchY);
        }
      }
    };

    container && container.addEventListener("wheel", handleWheel);
    container && container.addEventListener("touchstart", handleTouchStart);
    container && container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container && container.removeEventListener("wheel", handleWheel);
      container &&
        container.removeEventListener("touchstart", handleTouchStart);
      container && container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [startTouchY]);

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
