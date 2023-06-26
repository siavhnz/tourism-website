import { NavLink } from "react-router-dom";

const Explore = () => {
  return (
    <div className="mt-48 max-w-screen-3xl md:mt-107 xl:mt-255 xl:grid xl:grid-cols-2 3xl:ml-auto 3xl:mr-auto">
      <div className="xl:ml-168">
        <p className="text-center font-barlow-condensed text-16 uppercase leading-19 tracking-[2.7px] text-light-blue md:text-20 md:leading-24 md:tracking-[3.37px] xl:text-left xl:text-28 xl:tracking-[4.7px]">
          So, you want to travel to
        </p>
        <h1 className="mt-16 text-center font-bellefair text-80 uppercase leading-100 text-white md:mt-24 md:text-150 md:leading-150 xl:mt-42 xl:text-left">
          Space
        </h1>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue md:ml-auto md:mr-auto md:mt-24 md:max-w-440 md:text-16 md:leading-28 xl:ml-0 xl:mt-34 xl:text-left xl:text-18 xl:leading-32">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mb-48 mt-81 flex justify-center md:mt-156 xl:mt-105">
        <NavLink
          to="/destination"
          className="flex h-150 w-150 items-center justify-center rounded-full bg-white pl-2 pt-6 font-bellefair text-20 uppercase leading-23 tracking-[1.25px] text-very-dark-blue transition-all duration-700 md:h-242 md:w-242 md:pt-3 md:text-32 md:leading-37 md:tracking-[2px] xl:-mr-110 xl:h-274 xl:w-274 xl:hover:shadow-[0px_0px_0px_88px_rgba(255,255,255,0.1)]"
        >
          explore
        </NavLink>
      </div>
    </div>
  );
};

export default Explore;
