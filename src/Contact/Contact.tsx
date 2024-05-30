import SectionWrapper from "../components/SectionWrapper";
import Title from "../components/Title";

function Contact() {
  return (
    <section
      id="kont"
      className="relative flex justify-center items-center py-16
    snap-start text-right sm:text-left w-[calc(100vw-3rem)] sm:w-[calc(100vw-4rem)]"
    >
      <SectionWrapper>
        <Title>Kontakt</Title>
      </SectionWrapper>
    </section>
  );
}

export default Contact;
