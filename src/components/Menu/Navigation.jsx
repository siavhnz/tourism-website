import { NavLink } from "react-router-dom";

const Navigation = ({ items }) => {
  return (
    <nav className="hidden bg-white bg-opacity-5 pl-44 pr-46 backdrop-blur-2xl md:block">
      <ul className="flex gap-x-38">
        {items.map((item) => {
          return (
            <li key={item.number} className="pb-36 pt-35">
              <NavLink
                end={item.text === "Home" ? true : false}
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "border-b-3 border-b-white pb-36"
                    : isActive
                    ? "border-b-3 border-b-white pb-36"
                    : "border-b-3 border-b-transparent pb-36"
                }
              >
                <span className="md:hidden">{item.number}</span>
                <span className="font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-white">
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
