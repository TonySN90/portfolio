import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="fixed right-[0rem] top-[1.5rem] w-[3rem] sm:w-[4rem] flex justify-center items-center text-2xl z-40 bg-transparent"
    >
      <img className=" w-8 h-8" src="Logo.png" />
    </motion.div>
  );
}

export default Logo;
