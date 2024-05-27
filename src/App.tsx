import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./Hero/components/Home";
import TileGrid from "./components/Tile";
import RadialBackground from "./components/RadialBackground";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event: WheelEvent) => {
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
    <main>
      <div
        className="w-full relative h-screen overflow-hidden"
        ref={containerRef}
      >
        <TileGrid />
        <RadialBackground />
        <Logo />
        <NavBar />
        <Home />
        <section id="über">
          <p className="text-3xl" style={{ zIndex: 1000 }}>
            ABOUT
          </p>
        </section>
        <section id="proj">
          {" "}
          <p className="text-3xl" style={{ zIndex: 1000 }}>
            Projekte
          </p>
        </section>
        <section id="kont">
          {" "}
          <p className="text-3xl" style={{ zIndex: 1000 }}>
            Kontakt
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
