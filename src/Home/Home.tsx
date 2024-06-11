import SectionWrapper from "../components/SectionWrapper";
import Astronaut from "./Astronaut";
import Hero from "./Hero";
import { useObserver } from "../contexts/ObserverContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Home() {
  const { setInView } = useObserver();

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    inView && setInView("start");
  }, [inView, setInView]);

  return (
    <section
      ref={ref}
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
