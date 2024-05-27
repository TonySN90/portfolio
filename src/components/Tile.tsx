import { motion } from "framer-motion";

function TileGrid() {
  return (
    <section className="fixed w-[2100px] h-screen grid grid-cols-20 overflow-hidden z-20">
      {Array.from(Array(26 * 12), (i) => (
        <Tile key={i} />
      ))}
    </section>
  );
}

export default TileGrid;

const Tile = () => {
  return (
    <motion.div
      className="aspect-square border border-color_border_grid"
      whileHover={{
        zIndex: 1,
        backgroundColor: "var(--color-primary)",
        border: "1px solid var(--color-primary-dark)",
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    ></motion.div>
  );
};
