function Chip({
  children,
  inverted,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  const invertedClass = inverted
    ? "text-color_primary bg-color_background border border-color_primary"
    : "text-color_background bg-color_primary";

  return (
    <div className={`px-3 py-1 rounded-full font-semibold ${invertedClass}`}>
      {children}
    </div>
  );
}

export default Chip;
