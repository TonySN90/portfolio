import { motion } from "framer-motion";

import "./Tile.css";

const Tile = () => {
  return (
    <motion.div
      className="tile"
      whileHover={{ zIndex: 1, backgroundColor: "var(--color-primary)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    ></motion.div>
  );
};

export default Tile;
