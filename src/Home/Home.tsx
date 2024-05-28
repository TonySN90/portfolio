import SectionWrapper from "../components/SectionWrapper";
import Astronaut from "./Astronaut";
import Hero from "./Hero";

function Home() {
  return (
    <section
      className="relative w-full h-screen flex justify-center items-center snap-start"
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
