import { NavLink } from "react-router-dom";

const Navigation = ({ items }) => {
  return (
    <nav className="hidden bg-white bg-opacity-5 pl-44 pr-46 backdrop-blur-2xl md:block xl:pl-125">
      <ul className="flex gap-x-38 xl:gap-x-52 2xl:-ml-125 2xl:justify-center">
        {items.map((item) => {
          return (
            <li key={item.number} className="pb-36 pt-35 xl:pb-0 xl:pt-37">
              <NavLink
                end={item.text === "Home" ? true : false}
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "transform-all border-b-3 border-b-transparent pb-36 duration-1000 xl:flex xl:items-center xl:items-baseline xl:gap-x-8 xl:pb-31"
                    : isActive
                    ? "transform-all border-b-3 border-b-white pb-36 duration-1000 xl:flex xl:items-center xl:items-baseline xl:gap-x-8 xl:pb-31 xl:hover:border-opacity-50"
                    : "transform-all border-b-3 border-b-transparent pb-36 duration-1000 xl:flex xl:items-center xl:items-baseline xl:gap-x-8 xl:pb-31 xl:hover:border-white xl:hover:border-opacity-50"
                }
              >
                <span className="font-barlow-condensed text-16 font-bold tracking-[2.7px] text-white md:hidden xl:block">
                  {item.number}
                </span>
                <span className="font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-white xl:text-16 xl:tracking-[2.7px]">
                  {item.text}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
