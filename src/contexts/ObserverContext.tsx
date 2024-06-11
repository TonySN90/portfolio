import { createContext, useContext, useEffect, useState } from "react";

interface ObserverContextType {
  inView: string;
  setInView: React.Dispatch<React.SetStateAction<string>>;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isMobile: boolean;
}

const ObserverContext = createContext<ObserverContextType | undefined>(
  undefined
);

function ObserverProvider({ children }: { children: React.ReactNode }) {
  const [inView, setInView] = useState("start");
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function openModal() {
    setModalOpen(true);
    document.body.style.overflowY = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflowY = "scroll";
  }

  return (
    <ObserverContext.Provider
      value={{
        inView,
        setInView,
        isMobile,
        modalOpen,
        openModal,
        closeModal,
      }}
    >
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
