function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-start uppercase w-[60%]">
      {children}
    </section>
  );
}

export default SectionWrapper;