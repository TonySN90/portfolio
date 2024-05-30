import { FaCode } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

function About() {
  return (
    <section
      className="relative flex justify-center items-center py-16
    snap-start text-right sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
      id="über"
    >
      <SectionWrapper>
        <Title>WerBinIch</Title>
        <div className="z-30 bg-transparent flex flex-col sm:flex-row gap-6">
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
              <FaCode className="bg-transparent text-color_primary size-6" />
              <span className="bg-transparent">
                Tech Stack // Erfahrungen mit...
              </span>
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
