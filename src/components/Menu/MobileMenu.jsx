import { NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    x: "15.875rem",
    "backdrop-filter": "blur(40px) opacity(0)",
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
      type: "tween",
      // stiffness: 200,
      // damping: 40,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    "backdrop-filter": "blur(40px) opacity(1)",
    transition: {
      duration: 0.4,
      type: "tween",
      // stiffness: 30,
      // restDelta: 2,
    },
  },
};

const listVariants = {
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const MobileMenu = ({ items, handleCloseMenu }) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed right-0 top-0 flex h-full w-[15.875rem] flex-col gap-y-60 bg-white bg-opacity-5 pl-32 pt-34"
    >
      <button
        aria-label="close menu"
        className="self-end pr-26"
        onClick={handleCloseMenu}
      >
        <CloseIcon focusable={false} aria-hidden={true} className="h-19 w-19" />
      </button>

      <motion.ul variants={listVariants} className="flex flex-col gap-y-20">
        {items.map((item) => {
          return (
            <motion.li variants={itemVariants} key={item.number}>
              <NavLink
                end={item.text === "Home" ? true : false}
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending flex h-31 items-center gap-x-12"
                    : isActive
                    ? "active flex h-31 items-center gap-x-12 border-r-4 border-r-white"
                    : " flex h-31 items-center gap-x-12"
                }
              >
                <span className=" font-barlow-condensed font-bold tracking-[2.7px] text-white">
                  {item.number}
                </span>
                <span className="font-barlow-condensed font-normal uppercase tracking-[2.7px] text-white">
                  {item.text}
                </span>
              </NavLink>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default MobileMenu;
