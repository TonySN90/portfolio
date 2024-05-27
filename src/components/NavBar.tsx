function NavBar() {
  const vavEntries = ["start", "über", "proj", "kont"];

  return (
    <>
      <div className="fixed flex flex-col justify-center gap-3 w-[4rem] z-30 h-full pt-10 border-color_primary">
        {vavEntries.map((name) => (
          <NavEntry key={name} name={name} />
        ))}
      </div>
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
      hover:text-color_primary hover:border-r-2 border-rose-500 transition-colors"
    >
      {name}.
    </a>
  );
}
