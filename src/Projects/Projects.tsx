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
            <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
              <GoProjectSymlink className="bg-transparent text-color_background size-4" />
            </div>
            <span className="bg-transparent">
              Hier findest du ene Auswahl meiner Projekte
            </span>
          </SubTitle>

          <div className="flex flex-wrap justify-between z-30 bg-transparent">
            <div className="w-full sm:w-[48%] bg-transparent transition-all mb-6">
              <div className="bg-red-200 w-full max-h-64 rounded-lg mb-3 overflow-hidden">
                <img
                  className="z-30 size- hover:scale-110 transition-all duration-500"
                  src="IS-Dashboard.png"
                  alt=""
                />
              </div>
              <div className="h- rounded-b-lg bg-transparent">
                <Title size={1.2}>InnovaStay</Title>
                <p className="text-color_primary my-2">
                  JS - React - Typescript - Redux - Tailwind
                </p>
                <p className="mb-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                  quas illo animi quis similique veritatis sed, eos, natus
                  consequatur
                </p>
                <a className="text-color_primary" href="#">
                  Link zum Projekt
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[48%] bg-transparent transition-all">
              <div className="bg-red-200 w-full max-h-64 rounded-lg mb-3 overflow-hidden">
                <img
                  className="z-30 hover:scale-110 transition-all duration-500"
                  src="IS-Dashboard.png"
                  alt=""
                />
              </div>
              <div className="h- rounded-b-lg bg-transparent">
                <Title reverse={true} size={1.2}>
                  InnovaStay
                </Title>
                <p className="text-color_primary my-2">
                  JS - React - Typescript - Redux - Tailwind
                </p>
                <p className="mb-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                  quas illo animi quis similique veritatis sed, eos, natus
                  consequatur
                </p>
                <a className="text-color_primary" href="#">
                  Link zum Projekt
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Projects;
