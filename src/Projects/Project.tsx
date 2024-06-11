import { MdRoundaboutRight } from "react-icons/md";
import AnimationHideBanner from "../animations/AnimationHideBanner";
import AnimationShowElement from "../animations/AnimationShowElement";
import Button from "../components/Button";
import Chip from "../components/Chip";
import { useObserver } from "../contexts/ObserverContext";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RxExternalLink } from "react-icons/rx";

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
  setCurrentProject: (project: string) => void;
}) {
  const { openModal } = useObserver();

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
          <div className="rounded-b-lg bg-transparent">
            <h2 className="text-2xl font-bold">
              {name} <span className="text-color_primary">.</span>
            </h2>

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
              <div className="flex gap-2">
                <Button bgColor="color_primary" link={github}>
                  <div className="bg-transparent flex items-center gap-1">
                    <TbBrandGithubFilled className="text-color_background" />
                    <p className="text-color_background">Code</p>
                  </div>
                </Button>
                <Button bgColor="color_secondary" link={link}>
                  <div className="bg-transparent flex items-center gap-1">
                    <RxExternalLink />
                    <p>Live Projekt</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimationShowElement>
      <AnimationHideBanner />
    </div>
  );
}

export default Project;
