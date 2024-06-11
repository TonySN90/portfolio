function Button({
  children,
  extras,
  link,
}: {
  children: React.ReactNode;
  extras?: string;
  link: string;
}) {
  return (
    <div
      className={`z-30 gap-1 ${extras} py-1 px-2 rounded-full cursor-pointer transition-all`}
    >
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default Button;
