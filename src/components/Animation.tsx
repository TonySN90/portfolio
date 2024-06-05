import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Animation({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <motion.div
      className="z-30 bg-transparent"
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default Animation;
