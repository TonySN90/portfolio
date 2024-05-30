import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";

function Projects() {
  return (
    <section
      id="proj"
      className="relative flex justify-center items-center py-16
    snap-start text-right sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
    >
      <SectionWrapper>
        <Title reverse={true}>Projekte</Title>
      </SectionWrapper>
    </section>
  );
}

export default Projects;
