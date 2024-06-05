function Title({
  children,
  reverse,
  center,
  size = 2.4,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  center?: boolean;
  size?: number;
}) {
  return (
    <div
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
        textAlign: center ? "center" : "left",
      }}
      className="flex w-full items-center gap-6 bg-transparent"
    >
      {center && <div className="w-[100%] h-[1px] bg-stone-600 z-30"></div>}
      <h2
        style={{ fontSize: `${size}rem` }}
        className="flex sm:text-[3rem] font-bold z-30 bg-transparent"
      >
        {children}
        <span className="text-color_primary bg-transparent">.</span>
      </h2>
      {!center && <div className="w-[100%] h-[1px] bg-stone-600 z-30"></div>}
    </div>
  );
}

export default Title;
