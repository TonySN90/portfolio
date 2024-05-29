import { motion } from "framer-motion";

function NavBar() {
  const navEntries = ["start", "über", "proj", "kont"];

  return (
    <>
      <motion.div
        animate={{ right: -1, transition: { duration: 1, ease: "easeInOut" } }}
        className="fixed right-[-3.5rem] sm:right-[-4rem] flex flex-col justify-center gap-3 w-[3rem] sm:w-[4rem] bg-color_background z-30 h-full pt-10 "
      >
        {navEntries.map((name) => (
          <NavEntry key={name} name={name} />
        ))}
      </motion.div>
    </>
  );
}

export default NavBar;

function NavEntry({ name }: { name: string }) {
  return (
    <a
      href={"#" + name}
      style={{
        writingMode: "vertical-rl",
        textOrientation: "upright",
        letterSpacing: "-0.15rem",
      }}
      className="text-stone-500 py-2 uppercase font-extrabold flex items-center cursor-pointer 
      hover:text-color_primary hover:border-l-2 border-rose-500 transition-colors"
    >
      {name}.
    </a>
  );
}
