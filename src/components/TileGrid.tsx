import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TileGrid() {
  const numRows = 26;
  const numCols = 12;
  const numTiles = numRows * numCols;
  const [triggeredTiles, setTriggeredTiles] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTile = Math.floor(Math.random() * numTiles);
      setTriggeredTiles((prevTiles) => [...prevTiles, newTile]);
      setTimeout(() => {
        setTriggeredTiles((prevTiles) =>
          prevTiles.filter((tile) => tile !== newTile)
        );
      }, 10000); // Dauer, für die die Kachel hervorgehoben bleibt
    }, 1500); // Intervall für die Hervorhebung einer neuen Kachel

    return () => clearInterval(interval);
  }, [numTiles]);

  return (
    <section
      style={{ pointerEvents: "none", backgroundColor: "transparent" }}
      className="fixed w-[2100px] h-screen grid grid-cols-20 z-20"
    >
      {Array.from({ length: numTiles }, (_, i) => (
        <Tile key={i} isTriggered={triggeredTiles.includes(i)} />
      ))}
    </section>
  );
}

export default TileGrid;

const Tile = ({ isTriggered }: { isTriggered: boolean }) => {
  return (
    <motion.div
      className="aspect-square border border-color_border_grid transition-all duration-1000 ease-out"
      whileHover={{
        // zIndex: 1,
        backgroundColor: "var(--color-primary)",
        border: "1px solid var(--color-primary-dark)",
      }}
      animate={{
        zIndex: isTriggered ? 1 : 0,
        backgroundColor: isTriggered
          ? "var(--color-primary-dark)"
          : "var(--color-background)",
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
    ></motion.div>
  );
};
