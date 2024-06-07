import { MdEmail } from "react-icons/md";
import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { useObserver } from "../contexts/ObserverContext";
import { useEffect, useRef } from "react";
import AnimationShowElement from "../animations/AnimationShowElement";
import AnimationHideBanner from "../animations/AnimationHideBanner";

function Contact() {
  const { handleViewChange } = useObserver();
  const contactRef = useRef(null);

  useEffect(() => {
    handleViewChange({ ref: contactRef });
  });
  return (
    <section
      style={{ pointerEvents: "none" }}
      ref={contactRef}
      id="kont"
      className="relative h-[50vh] flex justify-center items-center py-16
    snap-start text-center w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
    >
      <SectionWrapper>
        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <Title center={true}>Kontakt</Title>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>

        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <p className="m-auto z-30 mb-8  text-lg">
              Lust auf Kontakt? Dann schick mir einfach eine E-Mail. Ich bin
              offen für Ideen, Vorschläge und Anregungen. <br /> Let&#x27;s
              connect!
            </p>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>

        <div className="m-auto relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <div
              style={{ pointerEvents: "visible" }}
              className="flex items-center gap-2 z-30 bg-transparent mb-4"
            >
              <MdEmail className="text-2xl" />
              <a
                href="mailto:tony.heider90@gmail.com"
                style={{ pointerEvents: "visible" }}
                className="text-xl sm:text-2xl font-bold"
              >
                tony.heider90@gmail.com
              </a>
            </div>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>

        <div className="relative z-30 bg-transparent overflow-hidden">
          <AnimationShowElement>
            <p className="z-30 bg-transparent mb-6">
              Du findest mich auch auf...
            </p>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>

        <div
          style={{ pointerEvents: "visible" }}
          className="m-auto relative z-30 bg-transparent"
        >
          <AnimationShowElement>
            <div className="z-30 flex gap-5 bg-transparent">
              <div className="size-14 bg-rose-600 flex justify-center items-center rounded-full cursor-pointer">
                <a href="https://github.com/TonySN90" target="_blank">
                  <FiGithub className="size-6 bg-transparent " />
                </a>
              </div>
              <div className="size-14 bg-rose-600 flex justify-center items-center rounded-full cursor-pointer">
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn className="size-6 bg-transparent" />
                </a>
              </div>
            </div>
          </AnimationShowElement>
          <AnimationHideBanner />
        </div>
        <div className="h-[200px]"></div>
      </SectionWrapper>
    </section>
  );
}

export default Contact;
