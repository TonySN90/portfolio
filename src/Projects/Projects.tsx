import { GoProjectSymlink } from "react-icons/go";
import SectionWrapper from "../components/SectionWrapper";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Project from "./Project";
import projectsData from "./projectsData";

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
            <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
              <GoProjectSymlink className="bg-transparent text-color_background size-4" />
            </div>
            <span className="bg-transparent">
              Hier findest du ene Auswahl meiner Projekte
            </span>
          </SubTitle>

          <div className="flex flex-wrap gap-4 justify-between z-30 bg-transparent">
            {/* <Project
              name="InnovaStay"
              techStack="JS - React - Typescript - Redux - Tailwind"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quas illo animi quis similique veritatis sed, eos, natus consequatur"
            /> */}

            {projectsData.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                techStack={project.techStack}
                description={project.descriptionShort}
                github={project.github}
                img={project.img}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Projects;
