import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="flex items-baseline">
        <motion.h1
          style={{ backgroundColor: "transparent", pointerEvents: "none" }}
          className="font-bold text-[2rem] sm:text-[6vw] z-30 p-0 opacity-0"
          animate={{
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
        >
          Hey, Ich bin Tony{" "}
          <span className="text-color_primary bg-transparent">.</span>
        </motion.h1>
      </div>
      <h2
        style={{ backgroundColor: "transparent", pointerEvents: "none" }}
        className="text-[1.1rem] sm:text-[2.5vw] md:mt-[-15px] text-color_primary z-30"
      >
        front end developer
      </h2>

      <p
        style={{ backgroundColor: "transparent", pointerEvents: "none" }}
        className="w[60%] my-4 z-30"
      >
        Wer immer tut, was er schon kann, bleibt immer das, was er schon ist
        (Ford) ...
      </p>
      <button
        className="w-[9rem] py-[.8rem] px-[1rem] rounded-md z-20 bg-rose-600 text-color_background
           hover:text-white hover:bg-color_background outline outline-rose-600 transition-colors shadow-md shadow-red-600"
      >
        Kontakt
      </button>
    </>
  );
}

export default Hero;
