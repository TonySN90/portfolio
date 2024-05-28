import { motion, useAnimation, Target } from "framer-motion";
import { useEffect } from "react";

interface CustomTarget extends Target {
  "--pos-1"?: string[];
  "--pos-2"?: string[];
  "--pos-3"?: string[];
}

function RadialBackground() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      "--pos-1": ["0%", "100%"],
      "--pos-2": ["100%", "0%"],
      "--pos-3": ["100%", "120%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    } as CustomTarget);
  }, [controls]);

  return (
    <motion.div
      style={{
        pointerEvents: "none",
        backgroundColor: "transparent",
        backgroundImage:
          "radial-gradient(circle at var(--pos-1) var(--pos-2), #FFFF0000 50%, var(--color-radial-background) 100%, #EE82EE00 var(--pos-3))",
      }}
      animate={controls}
      className="fixed h-screen w-screen z-20"
    ></motion.div>
  );
}

export default RadialBackground;
