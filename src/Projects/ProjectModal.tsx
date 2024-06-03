import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { useObserver } from "../contexts/ObserverContext";
import projectsData from "./projectsData";

function ProjectModal({ projektName = "InnovaStay" }: { projektName: string }) {
  const { modalOpen, setModalOpen } = useObserver();

  const project = projectsData.find((project) => project.name === projektName);

  console.log(project);

  return (
    modalOpen && (
      <motion.div
        className="fixed top-0 flex h-screen w-full p-2 bg-color_primary z-50"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="md:w-[60%] m-auto p-4 rounded-lg">
          <Title size={2.5}>{project?.name}</Title>
          <p className="text-white">{project?.descriptionShort}</p>
        </div>
        <IoMdClose
          className="absolute top-2 right-2 text-3xl text-white cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
      </motion.div>
    )
  );
}

export default ProjectModal;
