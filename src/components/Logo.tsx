import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      animate={{
        right: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="fixed right-[-4rem] top-[1.5rem] w-[3rem] sm:w-[4rem] flex justify-center items-center text-2xl z-40 bg-transparent"
    >
      <img className=" w-8 h-8" src="Logo.png" alt="" />
    </motion.div>
  );
}

export default Logo;
