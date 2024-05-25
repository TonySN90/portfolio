import { useEffect, useRef } from "react";

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
    <div className="section-container" ref={containerRef}>
      <section>HOME</section>
      <section>ABOUT</section>
      <section>PORTFOLIO</section>
      <section>CONTACT</section>
    </div>
  );
}

export default App;
