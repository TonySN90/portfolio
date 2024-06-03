import { useEffect, useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";
import Astronaut from "./Astronaut";
import Hero from "./Hero";
import { useObserver } from "../contexts/ObserverContext";

function Home() {
  const { handleViewChange } = useObserver();
  const homeRef = useRef(null);

  useEffect(() => {
    handleViewChange({ ref: homeRef });
  });

  return (
    <section
      ref={homeRef}
      className="relative h-screen flex justify-center items-center 
      snap-start text-right sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
      id="start"
    >
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <Astronaut />
    </section>
  );
}

export default Home;
