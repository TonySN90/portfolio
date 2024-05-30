import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="z-30 bg-transparent bg-red-50 uppercase">
      <motion.h1
        style={{ backgroundColor: "transparent", pointerEvents: "none" }}
        className="font-bold text-[2.6rem] sm:text-[6vw] z-30 p-0 opacity-"
        animate={{
          opacity: 1,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      >
        Hey, Ich bin Tony{" "}
        <span className="text-color_primary bg-transparent">.</span>
      </motion.h1>
      <motion.h2
        style={{ backgroundColor: "transparent", pointerEvents: "none" }}
        className="text-[1.1rem] sm:text-[2.5vw] md:mt-[-15px] text-color_primary z-30"
        animate={{
          opacity: 1,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      >
        front end developer
      </motion.h2>

      <p
        style={{ backgroundColor: "transparent", pointerEvents: "none" }}
        className=" my-4 z-30"
      >
        {"<Willkommen />"}
      </p>
      <div className="w-full flex justify-end sm:justify-center pr-16 sm:p-0 mt-10 bg-transparent">
        <a
          href="#über"
          className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-red-600
        bg-rose-600 cursor-pointer z-50 hover:bg-transparent transition-colors animate-bounce"
        >
          <FaChevronDown className="bg-transparent text-xl" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
