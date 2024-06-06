import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import AnimationHideBanner from "../animations/AnimationHideBanner";
import AnimationShowElement from "../animations/AnimationShowElement";

function Hero() {
  return (
    <div className="z-30 bg-transparent bg-red-50 uppercase">
      <div className="relative z-30 bg-transparent">
        <AnimationShowElement>
          <h1
            style={{ backgroundColor: "transparent", pointerEvents: "none" }}
            className="font-bold text-[2.6rem] sm:text-[6vw] z-30 p-0 opacity-"
          >
            Hey, Ich bin Tony
            <span className="text-color_primary bg-transparent">.</span>
          </h1>
        </AnimationShowElement>
        <AnimationHideBanner />
      </div>
      <div className="relative z-30 bg-transparent">
        <AnimationShowElement>
          <h2
            style={{ backgroundColor: "transparent", pointerEvents: "none" }}
            className="text-[1.1rem] sm:text-[2.5vw] md:mt-[-15px] text-color_primary z-30"
          >
            front end developer
          </h2>
        </AnimationShowElement>
        <AnimationHideBanner />
      </div>
      <div className="relative z-30 bg-transparent"></div>
      <div className="relative z-30 bg-transparent overflow-hidden">
        <AnimationShowElement>
          <p
            style={{ backgroundColor: "transparent", pointerEvents: "none" }}
            className="my-4 z-30"
          >
            {"<Willkommen />"}
          </p>
        </AnimationShowElement>
        <AnimationHideBanner />
      </div>

      <motion.div
        className="w-full flex justify-end sm:justify-center pr-16 sm:p-0 mt-10 bg-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <a
          href="#wer"
          className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-red-600
        bg-rose-600 cursor-pointer z-50 hover:bg-transparent transition-colors animate-bounce"
        >
          <FaChevronDown className="bg-transparent text-xl" />
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
