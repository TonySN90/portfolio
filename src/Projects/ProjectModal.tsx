import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { useObserver } from "../contexts/ObserverContext";
import projectsData from "./projectsData";
import { createPortal } from "react-dom";

function ProjectModal({ projektName }: { projektName: string }) {
  const { modalOpen, closeModal } = useObserver();

  const project = projectsData.find((project) => project.name === projektName);
  console.log(project);

  return (
    modalOpen &&
    createPortal(
      <motion.div
        style={{ zIndex: 100000 }}
        className="fixed top-0 left-0 flex h-screen w-full p-2 bg-color_primary z-50 overflow-auto"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="md:w-[60%] m-auto rounded-t-lg">
          <div className="rounded-lg">
            <img className="h-[350px] rounded-t-lg" src={project?.img} alt="" />
            <Title size={2.5}>{project?.name}</Title>
            <p className="text-white">{project?.descriptionShort}</p>
          </div>
        </div>
        <IoMdClose
          className="absolute top-2 right-2 text-3xl text-white cursor-pointer"
          onClick={() => closeModal()}
        />
      </motion.div>,
      document.body
    )
  );
}

export default ProjectModal;
