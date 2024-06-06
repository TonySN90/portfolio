import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";

function AnimationShowElement({
  children,
}: {
  children: React.ReactNode;
  extras?: string;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  if (inView && !hasAnimated) setHasAnimated(true);

  return (
    <motion.div
      className="z-30 bg-transparent"
      ref={ref}
      initial={{ opacity: 0, x: 35 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 35 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      {children}
      {/* <AnimationHideBanner /> */}
    </motion.div>
  );
}

export default AnimationShowElement;
