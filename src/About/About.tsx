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
      style={{ pointerEvents: "none" }}
      ref={aboutRef}
      className="relative flex justify-center items-center py-16
    snap-start sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
      id="wer"
    >
      <SectionWrapper>
        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <Title>WerBinIch</Title>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>

        <div className="z-30 bg-transparent flex flex-col sm:flex-row gap-6 mb-6">
          <div className="z-30 flex flex-col gap-2 w-full md:w-[60%] bg-transparent pointer-events-none text-left">
            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
                <p className="bg-transparent">
                  Geboren in Bergen und aufgewachsen auf Rügen. Inzwischen
                  beheimatet in Schwerin mit einer kleinen wundervollen Familie.
                </p>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>

            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
                <p className="bg-transparent">
                  Meine Leidenschaft zur kreativen Arbeit mit digitalen Medien
                  und dem Programmieren kamen schon während des Jugendalters.
                  Damals fing ich an, erste Webseiten selber zu erstellen.
                </p>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>

            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
                <p className="bg-transparent">
                  Heute bin ich stets auf der Suche nach neuen Herausforderungen
                  und Möglichkeiten, um mein Wissen zu erweitern und mein
                  Handwerk zu perfektionieren.
                </p>
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>
          </div>
          <div className="w-full md:w-[40%] z-30 bg-transparent">
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

            <div className="relative z-30 bg-transparent overflow-hidden">
              <AnimationShowElement>
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
              </AnimationShowElement>
              <AnimationHideBanner />
            </div>
          </div>
        </div>
        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <div className="z-30 bg-transparent rounded-lg p-3 w-[100%] border border-color_primary_dark">
              <SubTitle>
                <div className="bg-color_primary min-w-8 size-8 flex justify-center items-center rounded-full">
                  <LuGithub className="bg-transparent text-color_background size-5" />
                </div>
                <p className="bg-transparent">Contributions</p>
              </SubTitle>

              <div className="bg-transparent">
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
