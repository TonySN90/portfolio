function Title({
  children,
  reverse,
  size,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  size?: number;
}) {
  return (
    <div
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
      }}
      className="flex w-full items-center gap-6 bg-transparent"
    >
      <h2
        style={{ fontSize: `${size}rem` }}
        className="flex text-[2.4rem] sm:text-[3rem] font-bold z-30 bg-transparent"
      >
        {children}
        <span className="text-color_primary bg-transparent">.</span>
      </h2>
      <div className="w-[100%] h-[1px] bg-stone-600 z-30"></div>
    </div>
  );
}

export default Title;
