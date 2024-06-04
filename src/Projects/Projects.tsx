import { GoProjectSymlink } from "react-icons/go";
import SectionWrapper from "../components/SectionWrapper";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Project from "./Project";
import projectsData from "./projectsData";
import { useEffect, useRef, useState } from "react";
import { useObserver } from "../contexts/ObserverContext";
import ProjectModal from "./ProjectModal";

function Projects() {
  const { handleViewChange } = useObserver();
  const projectsRef = useRef(null);
  const [currentProject, setCurrentProject] = useState("");

  useEffect(() => {
    handleViewChange({ ref: projectsRef });
  });

  return (
    <section
      ref={projectsRef}
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
            {projectsData.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                techStack={project.techStack}
                description={project.descriptionShort}
                // github={project.github}
                img={project.img}
                setCurrentProject={setCurrentProject}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <ProjectModal projektName={currentProject} />
    </section>
  );
}

export default Projects;
