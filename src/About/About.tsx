import { FaCode } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { LuGithub } from "react-icons/lu";

function About() {
  return (
    <section
      className="relative flex justify-center items-center py-16
    snap-start sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
      id="über"
    >
      <SectionWrapper>
        <Title>WerBinIch</Title>
        <div className="z-30 bg-transparent flex flex-col sm:flex-row gap-6 mb-4">
          <div className="z-30 flex flex-col gap-2 w-full md:w-[60%] uppercase bg-transparent pointer-events-none text-left">
            <p className="bg-transparent">
              Geboren in Bergen und aufgewachsen auf Rügen. Inzwischen
              beheimatet in Schwerin mit einer kleinen wundervollen Familie.
            </p>
            <p className="bg-transparent">
              Meine Leidenschaft zur kreativen Arbeit mit digitalen Medien und
              dem Programmieren kamen schon während des Jugendalters. Damals
              fing ich an, erste Webseiten selber zu erstellen.
            </p>
            <p className="bg-transparent">
              Heute bin ich stets auf der Suche nach neuen Herausforderungen und
              Möglichkeiten, um mein Wissen zu erweitern und mein Handwerk zu
              perfektionieren.
            </p>
          </div>
          <div className="w-full md:w-[40%] z-30 bg-transparent">
            <SubTitle>
              <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
                <FaCode className="bg-transparent text-color_background size-4" />
              </div>
              <p className="bg-transparent">Tech Stack // Erfahrungen mit...</p>
            </SubTitle>
            <div className="flex flex-wrap gap-2 bg-transparent">
              <Chip>Javascript</Chip>
              <Chip>Typescript</Chip>
              <Chip>CSS</Chip>
              <Chip>Html</Chip>
              <Chip>React</Chip>
              <Chip>Redux</Chip>
              <Chip>Tailwind</Chip>
              <Chip>Github</Chip>
              <Chip>Vite</Chip>
              <Chip>Supabase</Chip>
            </div>
          </div>
        </div>
        <div className="z-30 bg-transparent w-[100%]">
          <SubTitle>
            <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
              <LuGithub className="bg-transparent text-color_background size-5" />
            </div>
            <p className="bg-transparent">Contributions</p>
          </SubTitle>
          <a
            className="z-30 bg-transparent p-4 rounded-lg"
            href="https://github.com/TonySN90"
          >
            <img
              className="w-full"
              src="https://ghchart.rshah.org/TonySN90"
              alt="GitHub Contributions"
            />
          </a>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default About;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-color_primary px-2 py-1 font-bold inline-block text-color_background rounded-full upper">
      {children}
    </div>
  );
}
