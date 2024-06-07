import { FaCode } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { LuGithub } from "react-icons/lu";
import GitHubCalendar from "react-github-calendar";
import { ThemeInput } from "react-activity-calendar";
import { useEffect, useRef } from "react";
import { useObserver } from "../contexts/ObserverContext";

import AnimationShowElement from "../animations/AnimationShowElement";
import AnimationHideBanner from "../animations/AnimationHideBanner";

function About() {
  const explicitTheme: ThemeInput = {
    dark: ["#0aff9d18", "#0aff9d47", "#0aff9d85", "#0aff9dba", "#0aff9d"],
  };

  const { handleViewChange } = useObserver();
  const aboutRef = useRef(null);

  useEffect(() => {
    handleViewChange({ ref: aboutRef });
    setTimeout(() => {
      // UseRef unfortunately not usable
      const scrollContainer = document.querySelector(
        ".styles-module_scrollContainer__-bJC8"
      );
      if (!scrollContainer) return;
      scrollContainer.scrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
    }, 600);
  }, [handleViewChange]);

  return (
    <section
      // style={{ pointerEvents: "none" }}
      ref={aboutRef}
      className="relative flex justify-center items-center py-16
    snap-start sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
      id="wer"
    >
      <SectionWrapper>
        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <Title>WerIchBin</Title>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>

        <div className="z-30 bg-transparent flex flex-col sm:flex-row justify-between gap-6 mb-6">
          <div className="z-30 flex flex-col gap-4 w-full md:w-[60%] bg-transparent pointer-events-none text-left text-lg">
            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
                <p className="bg-transparent">
                  Ich bin Tony, geboren in Bergen und aufgewachsen auf Rügen,
                  lebe ich heute mit meiner wundervollen Familie in Schwerin.
                  Schon in meiner Jugend habe ich eine Leidenschaft für die
                  kreative Arbeit mit digitalen Medien und das Programmieren
                  entwickelt. Damals begann ich, erste Webseiten zu erstellen.
                </p>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>

            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
                <p className="bg-transparent">
                  Angefangen mit HTML, CSS und Javascript habe ich Inzwischen
                  viele Erfahrungen in Projekten mit modernen Technologien wie
                  React, TypeScript und Tailwind sammeln können. Ich bin stets
                  auf der Suche nach neuen Herausforderungen und Möglichkeiten,
                  mein Wissen zu erweitern und meine Fähigkeiten weiter zu
                  auszubauen.
                </p>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>

            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
                <p className="bg-transparent">
                  Mein Ziel ist es, den Einstieg in Welt der Softwareentwicklung
                  zu finden und als Frontend-Entwickler tätig zu werden, wobei
                  ich stets danach strebe, innovative und ansprechende digitale
                  Lösungen zu schaffen.
                </p>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col justify-between w-full md:w-[35%] z-30 bg-transparent">
            <div className="bg-transparent">
              <div className="relative z-30 bg-transparent overflow-hidden">
                <AnimationShowElement>
                  <SubTitle>
                    <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
                      <FaCode className="bg-transparent text-color_background size-4" />
                    </div>
                    <p className="bg-transparent">
                      Tech Stack // Erfahrungen mit...
                    </p>
                  </SubTitle>
                </AnimationShowElement>
                <AnimationHideBanner />
              </div>

              <div className="relative flex z-30 bg-transparent overflow-hidden">
                <AnimationShowElement>
                  <div className="flex flex-wrap md:justify-between gap-2 bg-transparent">
                    <Chip>Javascript</Chip>
                    <Chip>Typescript</Chip>
                    <Chip>CSS</Chip>
                    <Chip>Html</Chip>
                    <Chip>React</Chip>
                    <Chip>Redux</Chip>
                    <Chip>Framer Motion</Chip>
                    <Chip>Tailwind</Chip>
                    <Chip>Github</Chip>
                    <Chip>Vite</Chip>
                    <Chip>Supabase</Chip>
                  </div>
                </AnimationShowElement>
                <AnimationHideBanner />
              </div>
            </div>

            <div className="relative z-30 bg-transparent">
              <AnimationShowElement>
                <div className="group relative bg-transparent transition-all mb-5 md:mb-0">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto z-30 text-[4rem] group-hover:opacity-0 transition-all">
                    ?
                  </span>
                  <img
                    className="w-[80%] rounded-full p-4 m-auto bg-transparent blur group-hover:blur-none border-2 border-color_primary"
                    src="avatar.jpeg"
                    alt="Avatar"
                  />
                </div>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>
            {/* </div> */}
            {/* <div className="relative z-30 bg-transparent">
              <AnimationShowElement>
                <div className="group relative bg-transparent transition-all">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto z-30 text-[4rem] group-hover:opacity-0 transition-all">
                    ?
                  </span>
                  <img
                    className="w-[80%] rounded-full p-4 m-auto bg-transparent blur group-hover:blur-none border-2 border-color_primary"
                    src="avatar.jpeg"
                    alt="Avatar"
                  />
                </div>
                <AnimationHideBanner />
              </AnimationShowElement>
            </div> */}
          </div>
        </div>

        <div className="relative z-30 bg-transparent">
          <AnimationShowElement>
            <div className="z-30 bg-transparent rounded-lg p-3 w-[100%] border border-color_primary_dark">
              <SubTitle>
                <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
                  <LuGithub className="bg-transparent text-color_background size-5" />
                </div>
                <p className="bg-transparent">Contributions</p>
              </SubTitle>

              <div
                className="bg-transparent"
                style={{ pointerEvents: "visible" }}
              >
                <GitHubCalendar
                  // @ts-expect-error next-line theme is not typed
                  theme={explicitTheme}
                  style={{
                    color: "white",
                    width: "100%",
                    overflow: "hidden",
                  }}
                  blockSize={13.5}
                  blockRadius={7}
                  blockMargin={3}
                  username="TonySN90"
                />
              </div>
            </div>
          </AnimationShowElement>
          <AnimationHideBanner />
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
