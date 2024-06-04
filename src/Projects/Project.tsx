import Title from "../components/Title";
import { useObserver } from "../contexts/ObserverContext";

function Project({
  name,
  techStack,
  description,
  img,
  setCurrentProject,
}: {
  name: string;
  techStack: string;
  description: string;
  img: string;
  setCurrentProject: (project: string) => void;
}) {
  const { openModal } = useObserver();

  return (
    <div className="w-full sm:w-[48%] bg-transparent transition-all p-4 border border-color_primary_dark rounded-lg">
      <div className="bg-red-200 w-full max-h-64 rounded-lg mb-3 overflow-hidden">
        <img
          className="z-30 size- hover:scale-110 transition-all duration-500"
          src={img}
          alt={name}
        />
      </div>
      <div className="h- rounded-b-lg bg-transparent">
        <Title size={1.2}>{name}</Title>
        <p className="text-color_primary my-2">{techStack}</p>
        <p className="mb-2">{description}</p>
        <p
          className="text-color_primary cursor-pointer"
          onClick={() => {
            setCurrentProject(name);
            openModal();
          }}
        >
          Erfahre mehr &#62;
        </p>
      </div>
    </div>
  );
}

export default Project;
