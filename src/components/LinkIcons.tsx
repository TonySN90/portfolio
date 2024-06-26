import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

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
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            className="hover:opacity-50 transition-opacity"
            href="https://github.com/TonySN90"
            target="_blank"
          >
            <FiGithub className="w-5 h-5 cursor-pointer bg-transparent" />
          </a>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            className="hover:opacity-50 transition-opacity"
            href="https://www.linkedin.com/in/tony-heider-29a0a1313/"
            target="_blank"
          >
            <FaLinkedinIn className="w-5 h-5 cursor-pointer bg-transparent" />
          </a>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a
            className="hover:opacity-50 transition-opacity"
            href="mailto:tony.heider90@gmail.com"
          >
            <MdEmail className="w-5 h-5 cursor-pointer bg-transparent" />
          </a>
        </motion.span>
      </motion.div>
    </div>
  );
}

export default LinkIcons;
