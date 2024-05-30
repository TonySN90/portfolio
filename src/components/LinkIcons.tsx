import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

function LinkIcons() {
  return (
    <div className="fixed h-[5rem] w-full z-40 bg-black bg-opacity-5 backdrop-blur-sm">
      <motion.div
        animate={{
          top: "2rem",
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="fixed flex gap-5 left-[2rem] top-[-2rem] z-40 bg-transparent "
      >
        <FiGithub className="w-5 h-5 cursor-pointer bg-transparent " />
        <FaLinkedinIn className="w-5 h-5 cursor-pointer bg-transparent" />
        <SiGmail className="w-5 h-5 cursor-pointer bg-transparent" />
      </motion.div>
    </div>
  );
}

export default LinkIcons;
