import { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section>
      <div className="hero">
        <h1>
          Hey, Ich bin Tony <span className="hero-title-dot">.</span>
        </h1>
        <h2>front end developer</h2>
        <motion.p animate={{ opacity: isVisible ? 1 : 0 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          doloremque magni alias culpa perspiciatis iste iusto aut eum illo
          labore numquam facere repellendus deserunt officia fuga quia accusamus
          unde architecto!
        </motion.p>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="hero-button"
        >
          Kontakt
        </button>
      </div>
    </section>
  );
}

export default Home;
