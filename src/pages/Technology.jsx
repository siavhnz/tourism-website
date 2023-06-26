import Pattern from "../components/pages/Pattern";
import Title from "../components/pages/Title";
import TechnologySlider from "../components/technology/slider/TechnologySlider";

const Technology = () => {
  return (
    <>
      <Pattern pattern="bg-mobile-technology-pattern md:bg-tablet-technology-pattern xl:bg-desktop-technology-pattern" />
      <Title number="03" title="Space launch 101" />
      <div>
        <TechnologySlider />
      </div>
    </>
  );
};

export default Technology;
