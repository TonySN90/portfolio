import { motion } from "framer-motion";
import { useObserver } from "../contexts/ObserverContext";

function NavBar() {
  const navEntries = ["start", "wer", "proj", "kont"];
  const { inView } = useObserver();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="fixed right-[0rem] sm:right-[0rem] flex flex-col justify-center gap-3 w-[3rem] sm:w-[4rem] bg-color_background z-30 h-full pt-10"
      >
        {navEntries.map((name) => (
          <NavEntry key={name} name={name} active={inView === name} />
        ))}
      </motion.div>
    </>
  );
}

export default NavBar;

function NavEntry({ name, active }: { name: string; active: boolean }) {
  return (
    <a
      href={"#" + name}
      style={{
        writingMode: "vertical-rl",
        textOrientation: "upright",
        letterSpacing: "-0.15rem",
        color: active ? "var(--color-primary)" : "",
        borderLeft: active ? "var(--color-secondary) 2px solid" : "",
      }}
      className="text-stone-500 py-2 uppercase font-extrabold flex items-center cursor-pointer 
      lg:hover:text-color_primary border-rose-500 transition-colors"
    >
      {name}.
    </a>
  );
}
