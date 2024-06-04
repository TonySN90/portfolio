import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useObserver } from "../contexts/ObserverContext";
import projectsData from "./projectsData";
import { createPortal } from "react-dom";

function ProjectModal({ projektName }: { projektName: string }) {
  const { modalOpen, closeModal } = useObserver();

  const project = projectsData.find((project) => project.name === projektName);

  return (
    modalOpen &&
    createPortal(
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 h-screen w-screen bg-transparent backdrop-blur-xl cursor-pointer z-40"
          onClick={() => closeModal()}
        >
          <IoMdClose
            className="absolute top-2 right-2 text-3xl text-white cursor-pointer"
            onClick={() => closeModal()}
          />
        </motion.div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-2 md:w-[50%] z-50 bg-transparent ">
          <motion.div
            className="flex flex-col bg-transparent overflow-auto bg-red-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="m-auto rounded-xl bg-stone-800 z-50">
              <img className="rounded-t-lg" src={project?.img} alt="" />
              <div className="p-4 bg-stone-800">
                <h2 className="font-bold text-[2rem]">{project?.name}</h2>
                <p className="text-color_primary">{project?.techStack}</p>
                <p className="text-white">{project?.descriptionShort}</p>
                <h2 className="font-bold text-[1.3rem]">Projekt Links</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </>,
      document.body
    )
  );
}

export default ProjectModal;
