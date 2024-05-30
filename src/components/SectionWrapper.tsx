function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col m-auto w-[90%] md:w-[80%] max-w-[900px]">
      {children}
    </section>
  );
}

export default SectionWrapper;
