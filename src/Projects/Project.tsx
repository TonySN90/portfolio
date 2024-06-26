import AnimationHideBanner from "../animations/AnimationHideBanner";
import AnimationShowElement from "../animations/AnimationShowElement";
import Chip from "../components/Chip";
import Title from "../components/Title";
import { usePortfolioContext } from "../contexts/PortfolioContext";
import LinkButtons from "./LinkButtons";

function Project({
  link,
  github,
  name,
  techStack,
  description,
  img,
  setCurrentProject,
}: {
  name: string;
  techStack: string[];
  description: string;
  img: string;
  link: string;
  github: string;
  setCurrentProject: (project: string) => void;
}) {
  const { openModal } = usePortfolioContext();

  return (
    <div
      className="relative z-30 overflow-hidden w-full sm:w-[48.5%]"
      style={{ pointerEvents: "visible" }}
    >
      <AnimationShowElement>
        <div className="w-full transition-all p-4 border border-color_primary_dark rounded-lg">
          <div
            className="bg-red-200 w-full max-h-64 rounded-lg mb-3 overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentProject(name);
              openModal();
            }}
          >
            <a href={link} target="_blank">
              <img
                className="z-30 size- hover:scale-110 transition-all duration-500"
                src={img}
                alt={name}
              />
            </a>
          </div>
          <div
            className="rounded-b-lg bg-transparent cursor-pointer"
            onClick={() => {
              setCurrentProject(name);
              openModal();
            }}
          >
            <Title size={1.5} children={name} />

            <div className="flex flex-wrap gap-2 my-4">
              {techStack.map((stack) => (
                <Chip key={stack} inverted={true}>
                  {stack}
                </Chip>
              ))}
            </div>
            <p className="mb-2 text-lg">
              {description.length > 30
                ? description.substring(0, 200) + "..."
                : description}
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-4 mt-4">
            <p
              className="text-color_primary cursor-pointer"
              onClick={() => {
                setCurrentProject(name);
                openModal();
              }}
            >
              Erfahre mehr &#62;
            </p>
            <LinkButtons github={github} liveProject={link} />
          </div>
        </div>
      </AnimationShowElement>
      <AnimationHideBanner />
    </div>
  );
}

export default Project;
