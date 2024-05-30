function Title({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      className="flex w-full items-center gap-6"
    >
      <h2 className="flex text-[2.4rem] sm:text-[3rem] font-bold z-30 bg-transparent mb-2">
        {children}
        <span className="text-color_primary bg-transparent">.</span>
      </h2>
      <div className="w-[100%] h-[1px] bg-stone-600 z-30"></div>
    </div>
  );
}

export default Title;
