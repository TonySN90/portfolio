import { createContext, useContext, useState } from "react";

const ObserverContext = createContext({});

function ObserverProvider({ children }: { children: React.ReactNode }) {
  const [inView, setInView] = useState("start");

  function handleViewChange({ ref }) {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 1, // trigger when 10% of the element is visible
    };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`${entry.target.id} is in view`);
          setInView(entry.target.id);
        }
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
