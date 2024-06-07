import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useObserver } from "../contexts/ObserverContext";
import projectsData from "./projectsData";
import { createPortal } from "react-dom";
import { PiGithubLogoFill } from "react-icons/pi";
import { RxExternalLink } from "react-icons/rx";

function ProjectModal({ projektName }: { projektName: string }) {
  const { modalOpen, closeModal } = useObserver();

  const project = projectsData.find((project) => project.name === projektName);

  return (
    modalOpen &&
    createPortal(
      <div className="overflow-scroll">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 h-screen w-screen bg-transparent backdrop-blur-xl cursor-pointer z-40"
          onClick={() => closeModal()}
        >
          {/* Close Button */}
          <IoMdClose
            className="absolute top-2 right-2 text-3xl text-white cursor-pointer"
            onClick={() => closeModal()}
          />
        </motion.div>

        {/* Content */}
        <div className="fixed top-10 left-1/2 -translate-x-1/2 h-[calc(100vh-2.5rem)] p-2 w-full max-w-[700px] z-50 bg-transparent overflow-y-auto">
          <motion.div
            className="flex flex-col bg-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="m-auto rounded-xl z-50">
              <img className="rounded-t-lg" src={project?.img} alt="" />
              <div className="p-4">
                <h2 className="font-bold text-[2rem] mb-2">{project?.name}</h2>
                <p className="text-color_primary mb-2">{project?.techStack}</p>
                <p className="text-white mb-2">{project?.description}</p>
                <h2 className="font-bold text-[1.3rem]">Projekt Links</h2>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 bg-inherit">
                    <PiGithubLogoFill className="text-color_primary" />
                    <a
                      className="text-color_primary"
                      href={project?.github}
                      target="_blank"
                    >
                      Source Code
                    </a>
                  </div>
                  <div className="flex items-center gap-1 bg-inherit">
                    <RxExternalLink className="text-color_primary" />
                    <a
                      className="text-color_primary"
                      href={project?.link}
                      target="_blank"
                    >
                      Live Projekt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>,
      document.body
    )
  );
}

export default ProjectModal;
