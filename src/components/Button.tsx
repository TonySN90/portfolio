function Button({
  children,
  bgColor,
  link,
}: {
  children: React.ReactNode;
  bgColor: string;
  link: string;
}) {
  return (
    <div
      className={`z-30 gap-1 bg-${bgColor} py-1 px-2 rounded-full cursor-pointer`}
    >
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default Button;
