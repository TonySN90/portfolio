import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      animate={{ left: "1rem", transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed left-[-3rem] top-3 flex justify-center items-center text-2xl z-40"
    >
      <img className="w-12 h-12" src="Logo.png" alt="" />
    </motion.div>
  );
}

export default Logo;
