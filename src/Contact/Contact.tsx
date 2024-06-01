import { MdEmail } from "react-icons/md";
import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="kont"
      className="relative h-[50vh] flex justify-center items-center py-16
    snap-start text-center w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
    >
      <SectionWrapper>
        <Title center={true}>Kontakt</Title>
        <p className="m-auto z-30 mb-8 w-[90%]">
          Lust auf Kontakt? Dann schick mir einfach eine E-Mail. Ich bin offen
          für Ideen, Vorschläge und Anregungen. <br /> Let&#x27;s connect!
        </p>
        <div className="m-auto flex items-center gap-2 z-30 bg-transparent mb-4">
          <MdEmail className="text-2xl" />
          <p className="text-xl sm:text-2xl font-bold">
            tony.heider90@gmail.com
          </p>
        </div>
        <p className="z-30 bg-transparent mb-6">Du findest mich auch auf...</p>
        <div className="m-auto z-30 flex gap-5 bg-transparent">
          <div className="size-14 bg-rose-600 flex justify-center items-center rounded-full cursor-pointer">
            <FiGithub className="size-6 bg-transparent " />
          </div>
          <div className="size-14 bg-rose-600 flex justify-center items-center rounded-full cursor-pointer">
            <FaLinkedinIn className="size-6 bg-transparent" />
          </div>
        </div>
        <div className="h-[200px]"></div>
      </SectionWrapper>
    </section>
  );
}

export default Contact;
