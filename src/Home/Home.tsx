import SectionWrapper from "../components/SectionWrapper";
import Astronaut from "./Astronaut";
import Hero from "./Hero";

function Home() {
  return (
    <section
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
