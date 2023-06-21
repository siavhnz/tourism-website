import { NavLink } from "react-router-dom";

const Explore = () => {
  return (
    <div className="mt-48">
      <div>
        <p className="text-center font-barlow-condensed text-16 uppercase leading-19 tracking-[2.7px] text-light-blue">
          So, you want to travel to
        </p>
        <h1 className="mt-16 text-center font-bellefair text-80 uppercase leading-100 text-white">
          Space
        </h1>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mb-48 mt-81 flex justify-center">
        <NavLink to="/destination">
          <span className="flex h-150 w-150 items-center justify-center rounded-full bg-white pl-2 pt-6 font-bellefair text-20 uppercase leading-23 tracking-[1.25px] text-very-dark-blue">
            explore
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Explore;
