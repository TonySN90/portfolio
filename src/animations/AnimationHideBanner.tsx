import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function AnimationHideBanner() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  if (inView && !hasAnimated) setHasAnimated(true);

  return (
    <motion.div
      className="absolute bg-color_primary z-30"
      style={{ top: "3%", right: "0%", bottom: "3%", left: "0px" }}
      ref={ref}
      initial={{ right: "0%" }}
      animate={{ right: hasAnimated ? "100%" : "0%" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    ></motion.div>
  );
}

export default AnimationHideBanner;
