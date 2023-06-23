import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/icon-hamburger.svg";
import MobileNavigation from "./MobileNavigation";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const menuItems = [
    { number: "00", text: "home", href: "/" },
    { number: "01", text: "destination", href: "/destination" },
    { number: "02", text: "crew", href: "/crew" },
    { number: "03", text: "technology", href: "/technology" },
  ];

  return (
    <div>
      <button
        aria-label="open menu"
        onClick={handleOpenMenu}
        className="md:hidden"
      >
        <HamburgerIcon focusable={false} aria-hidden={true} />
      </button>

      <AnimatePresence>
        {openMenu && (
          <MobileNavigation items={menuItems} handleCloseMenu={handleCloseMenu} />
        )}
      </AnimatePresence>

      <Navigation items={menuItems} />
    </div>
  );
};

export default Menu;
