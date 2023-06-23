import Explore from "../components/home/explore/Explore";
import Pattern from "../components/pages/Pattern";

const Home = () => {
  return (
    <>
      <Pattern pattern="bg-mobile-home-pattern md:bg-tablet-home-pattern" />
      <Explore />
    </>
  );
};

export default Home;
