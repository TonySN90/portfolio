import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

function LinkIcons() {
  return (
    <motion.div
      animate={{
        top: "2rem",
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="fixed flex gap-5 right-[2rem] top-[-2rem] z-30 bg-transparent"
    >
      <FiGithub className="w-6 h-6 cursor-pointer bg-transparent text-color_primary" />
      <FaLinkedinIn className="w-6 h-6 cursor-pointer bg-transparent text-color_primary" />
      <SiGmail className="w-6 h-6 cursor-pointer bg-transparent text-color_primary" />
    </motion.div>
  );
}

export default LinkIcons;
