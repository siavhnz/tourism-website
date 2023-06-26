import CrewSlider from "../components/crew/slider/CrewSlider";
import Pattern from "../components/pages/Pattern";
import Title from "../components/pages/Title";

const Crew = () => {
  return (
    <div className="xl:flex xl:flex-col">
      <Pattern pattern="bg-mobile-crew-pattern md:bg-tablet-crew-pattern xl:bg-desktop-crew-pattern" />
      <Title number="02" title="Meet your crew" />
      <div className="mt-auto">
        <CrewSlider />
      </div>
    </div>
  );
};

export default Crew;
