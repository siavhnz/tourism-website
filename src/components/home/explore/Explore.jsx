import { NavLink } from "react-router-dom";

const Explore = () => {
  return (
    <div className="mt-48 md:mt-107">
      <div>
        <p className="text-center font-barlow-condensed text-16 uppercase leading-19 tracking-[2.7px] text-light-blue md:text-20 md:leading-24 md:tracking-[3.37px]">
          So, you want to travel to
        </p>
        <h1 className="mt-16 text-center font-bellefair text-80 uppercase leading-100 text-white md:mt-24 md:text-150 md:leading-150">
          Space
        </h1>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue md:ml-auto md:mr-auto md:mt-24 md:max-w-440 md:text-16 md:leading-28">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mb-48 mt-81 flex justify-center md:mt-156">
        <NavLink to="/destination">
          <span className="flex h-150 w-150 items-center justify-center rounded-full bg-white pl-2 pt-6 md:pt-3 font-bellefair text-20 uppercase leading-23 tracking-[1.25px] text-very-dark-blue md:h-242 md:w-242 md:text-32 md:leading-37 md:tracking-[2px]">
            explore
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Explore;
