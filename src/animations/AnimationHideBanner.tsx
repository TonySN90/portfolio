import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";

function AnimationHideBanner({
  //   children,
  extras,
}: {
  //   children: React.ReactNode;
  extras?: string;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  //   if (inView && !hasAnimated) setHasAnimated(true);

  return (
    <motion.div
      className={`absolute bg-color_primary z-30 ${extras}`}
      style={{ top: "10%", right: "0%", bottom: "12%", left: "0px" }}
      ref={ref}
      initial={{ right: "0%" }}
      animate={{ right: inView ? "100%" : "0%" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    ></motion.div>
  );
}

export default AnimationHideBanner;
