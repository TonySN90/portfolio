function About() {
  return (
    <section
      id="über"
      className="relative w-full h-screen flex justify-center items-center snap-start"
    >
      <div className="flex flex-col uppercase w-[60%]">
        <p
          className="bg-transparent z-30 text-center"
          style={{ pointerEvents: "none" }}
        >
          ...Das sage ich mir immer, wenn ich vor einer neuen Aufgabe stehe und
          unsicher bin, ob ich sie bewältigen kann.
        </p>
        <p className="text-3xl z-30 m-auto">Über Mich</p>
      </div>
    </section>
  );
}

export default About;
