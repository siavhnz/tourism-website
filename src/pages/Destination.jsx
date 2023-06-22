import Title from "../components/pages/Title";
import DestinationSlider from "../components/destination/slider/DestinationSlider";
import Pattern from "../components/pages/Pattern";

const Destination = () => {
  return (
    <>
      <Pattern pattern="bg-mobile-destination-pattern" />
      <Title number="01" title="pick your destination" />
      <div>
        <DestinationSlider />
      </div>
    </>
  );
};

export default Destination;
