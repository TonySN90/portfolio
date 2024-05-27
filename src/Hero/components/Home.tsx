import { useState } from "react";
import { motion } from "framer-motion";
import Astronaut from "../Astronaut";

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="relative" id="start">
      <div className="flex flex-col uppercase w-[60%]">
        <div className="flex items-baseline">
          <h1
            style={{ backgroundColor: "transparent", pointerEvents: "none" }}
            className="font-bold text-[6vw] z-30 p-0"
          >
            Hey, Ich bin Tony
          </h1>
          <div className="w-[1.6vw] h-[1.6vw] rounded-full bg-color_primary z-30"></div>
        </div>
        <h2
          style={{ backgroundColor: "transparent", pointerEvents: "none" }}
          className="text-[2vw] mt-[-15px] text-color_primary z-30"
        >
          front end developer
        </h2>

        <motion.p
          style={{ backgroundColor: "transparent", pointerEvents: "none" }}
          className="w[60%] my-4 z-30"
          animate={{ opacity: isVisible ? 1 : 0 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          doloremque magni alias culpa perspiciatis iste iusto aut eum illo
          labore numquam facere repellendus deserunt officia fuga quia accusamus
          unde architecto!
        </motion.p>
        <button
          className="w-[10vw] py-[.8rem] px-[1rem] rounded-md z-20 bg-color_primary text-color_background
           hover:text-color_primary hover:bg-color_background hover:outline-color_primary outline"
          onClick={() => setIsVisible(!isVisible)}
        >
          Kontakt
        </button>
      </div>
      <Astronaut />
    </section>
  );
}

export default Home;
