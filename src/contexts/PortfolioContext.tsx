import { createContext, useContext, useEffect, useState } from "react";

interface PortfolioContextType {
  inView: string;
  setInView: React.Dispatch<React.SetStateAction<string>>;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isMobile: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

function PortfolioProvider({ children }: { children: React.ReactNode }) {
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
    <PortfolioContext.Provider
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
    </PortfolioContext.Provider>
  );
}

const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error(
      "usePortfolio muss innerhalb eines Portfolio Providers verwendet werden"
    );
  }
  return context;
};

export { PortfolioProvider, usePortfolioContext };
