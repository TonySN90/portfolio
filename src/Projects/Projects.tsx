import { GoProjectSymlink } from "react-icons/go";
import SectionWrapper from "../components/SectionWrapper";
import SubTitle from "../components/SubTitle";
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
        <div className="z-30 bg-transparent">
          <SubTitle>
            <GoProjectSymlink className="bg-transparent text-color_primary" />
            <span className="bg-transparent">
              Hier findest du ene Auswahl meiner Projekte
            </span>
          </SubTitle>

          <div className="grid grid-cols-2 z-30 bg-transparent">
            <div className="bg-transparent">Projekt 1</div>
            <div className="bg-transparent">Projekt 2</div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Projects;
