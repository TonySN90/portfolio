import { TbBrandGithubFilled } from "react-icons/tb";
import Button from "../components/Button";
import { RxExternalLink } from "react-icons/rx";

function LinkButtons({
  github,
  liveProject,
}: {
  github: string;
  liveProject: string;
}) {
  return (
    <div className="flex gap-2">
      <Button
        extras="group bg-color_primary border-2 border-color_primary hover:bg-color_background"
        link={github}
      >
        <div className="bg-transparent flex items-center gap-1">
          <TbBrandGithubFilled className="text-color_background group-hover:text-color_primary transition-all" />
          <p className="text-color_background group-hover:text-color_primary transition-all">
            Code
          </p>
        </div>
      </Button>
      <Button
        extras="border-2 border-color_secondary hover:bg-color_secondary"
        link={liveProject}
      >
        <div className="bg-transparent flex items-center gap-1">
          <RxExternalLink />
          <p>Live Projekt</p>
        </div>
      </Button>
    </div>
  );
}

export default LinkButtons;
