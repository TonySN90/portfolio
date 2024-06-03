import { createContext, useContext, useEffect, useState } from "react";

const ObserverContext = createContext({});

function ObserverProvider({ children }: { children: React.ReactNode }) {
  const [inView, setInView] = useState("start");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleViewChange({
    ref,
    threshold = 0.6,
  }: {
    ref: React.RefObject<HTMLElement>;
    threshold?: number;
  }) {
    const options = {
      root: null, // viewport
      threshold: isMobile ? threshold : 0.6, // trigger when 60% of the element is visible
    };
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setInView(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (ref.current) observer.observe(ref.current);
  }

  return (
    <ObserverContext.Provider value={{ inView, handleViewChange }}>
      {children}
    </ObserverContext.Provider>
  );
}

const useObserver = () => {
  const context = useContext(ObserverContext);
  if (context === undefined) {
    throw new Error(
      "useObserver muss innerhalb eines Observer Providers verwendet werden"
    );
  }
  return context;
};

export { ObserverProvider, useObserver };
