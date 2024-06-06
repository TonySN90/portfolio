import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";

function AnimationShowElement({
  children,
  extras,
}: {
  children: React.ReactNode;
  extras?: string;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  //   if (inView && !hasAnimated) setHasAnimated(true);

  return (
    <motion.div
      className={`z-30 bg-transparent ${extras}`}
      ref={ref}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationShowElement;
