// import { motion } from "framer-motion";

// function TileGrid() {
//   return (
//     <section className="fixed w-[2100px] h-screen grid grid-cols-20 overflow-hidden z-20">
//       {Array.from(Array(26 * 12), (i) => (
//         <Tile key={i} />
//       ))}
//     </section>
//   );
// }

// export default TileGrid;

// const Tile = () => {
//   return (
//     <motion.div
//       className="aspect-square border border-color_border_grid"
//       whileHover={{
//         zIndex: 1,
//         backgroundColor: "var(--color-primary)",
//         border: "1px solid var(--color-primary-dark)",
//       }}
//       transition={{ duration: 1.5, ease: "easeInOut" }}
//     ></motion.div>
//   );
// };

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// function TileGrid() {
//   const numRows = 26;
//   const numCols = 12;
//   const numTiles = numRows * numCols;
//   const [triggeredTile, setTriggeredTile] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTriggeredTile(Math.floor(Math.random() * numTiles));
//       setTimeout(() => {
//         setTriggeredTile(null);
//       }, 500); // Duration the tile stays highlighted
//     }, 1500); // Interval for random tile highlight

//     return () => clearInterval(interval);
//   }, [numTiles]);

//   return (
//     <section className="fixed w-[2100px] h-screen grid grid-cols-20 overflow-hidden z-20">
//       {Array.from({ length: numTiles }, (_, i) => (
//         <Tile key={i} isTriggered={i === triggeredTile} />
//       ))}
//     </section>
//   );
// }

// export default TileGrid;

// const Tile = ({ isTriggered }) => {
//   return (
//     <motion.div
//       className="aspect-square border border-color_border_grid transition-all duration-1000 ease-in"
//       whileHover={{
//         zIndex: 1,
//         backgroundColor: "var(--color-primary)",
//         border: "1px solid var(--color-primary-dark)",
//       }}
//       animate={{
//         zIndex: isTriggered ? 1 : 0,
//         backgroundColor: isTriggered
//           ? "var(--color-primary-dark)"
//           : "transparent",
//       }}
//       transition={{ duration: 1.5, ease: "easeInOut" }}
//     ></motion.div>
//   );
// };

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
      }, 6000); // Dauer, für die die Kachel hervorgehoben bleibt
    }, 1500); // Intervall für die Hervorhebung einer neuen Kachel

    return () => clearInterval(interval);
  }, [numTiles]);

  return (
    <section className="fixed w-[2100px] h-screen grid grid-cols-20 overflow-hidden z-20">
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
      className="aspect-square border border-color_border_grid transition-all duration-1000 ease-in"
      whileHover={{
        zIndex: 1,
        backgroundColor: "var(--color-primary)",
        border: "1px solid var(--color-primary-dark)",
      }}
      animate={{
        zIndex: isTriggered ? 1 : 0,
        backgroundColor: isTriggered
          ? "var(--color-primary-dark)"
          : "var(--color-background)",
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    ></motion.div>
  );
};
