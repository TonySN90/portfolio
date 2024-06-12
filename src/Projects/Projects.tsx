import { GoProjectSymlink } from "react-icons/go";
import SectionWrapper from "../components/SectionWrapper";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Project from "./Project";
import { projectsData } from "../../data/projectsData";
import { useEffect, useState } from "react";
import { usePortfolioContext } from "../contexts/PortfolioContext";
import ProjectModal from "./ProjectModal";
import AnimationShowElement from "../animations/AnimationShowElement";
import AnimationHideBanner from "../animations/AnimationHideBanner";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { setInView, windowWidth } = usePortfolioContext();
  const [currentProject, setCurrentProject] = useState("");

  const { ref: projectStartRef, inView: projectStartView } = useInView({
    threshold: windowWidth <= 768 ? 0.1 : 0.4,
  });

  useEffect(() => {
    projectStartView && setInView("proj");
  }, [projectStartView, setInView]);

  return (
    <section
      style={{ pointerEvents: "none" }}
      id="proj"
      className="relative flex justify-center items-center py-16
    snap-start text-right sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
    >
      <SectionWrapper>
        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <Title reverse={true}>Projekte</Title>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>
        <div className="z-30 bg-transparent">
          <div className="relative z-30 bg-transparent overflow-hidden">
            <AnimationShowElement>
              <SubTitle>
                <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
                  <GoProjectSymlink className="bg-transparent text-color_background size-4" />
                </div>
                <span className="bg-transparent">
                  Hier findest du ene Auswahl meiner Projekte
                </span>
              </SubTitle>
            </AnimationShowElement>
            <AnimationHideBanner />
          </div>

          <div
            ref={projectStartRef}
            className="flex flex-wrap gap-4 justify-between z-30 bg-transparent"
          >
            {projectsData.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                techStack={project.techStack}
                description={project.description}
                img={project.img}
                setCurrentProject={setCurrentProject}
                link={project.link}
                github={project.github}
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
