import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./Hero/components/Home";
import Tile from "./components/Tile";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event) => {
      event.preventDefault();

      const delta = event.deltaY;
      const scrollAmount = delta > 0 ? window.innerHeight : -window.innerHeight;
      const scrollToPosition = container.scrollTop + scrollAmount;

      container.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div className="section-container" ref={containerRef}>
        <div className="hero-background">
          {Array.from(Array(20 * 12), (i) => (
            <Tile key={i} />
          ))}
        </div>
        <Home />
        <section>ABOUT</section>
        <section>PROJECTS</section>
        <section>CONTACT</section>
      </div>
    </>
  );
}

export default App;
