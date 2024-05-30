function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-bold text-[1.2rem] flex items-center gap-2 bg-transparent mb-3">
      {children}
    </div>
  );
}

export default SubTitle;
