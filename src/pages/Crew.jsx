import CrewSlider from "../components/crew/slider/CrewSlider";
import Pattern from "../components/pages/Pattern";
import Title from "../components/pages/Title";

const Crew = () => {
  return (
    <>
      <Pattern pattern="bg-mobile-crew-pattern" />
      <Title number="02" title="Meet your crew" />
      <div>
        <CrewSlider />
      </div>
    </>
  );
};

export default Crew;
