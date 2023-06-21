import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

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
      <button aria-label="open menu" onClick={handleOpenMenu}>
        <HamburgerIcon focusable={false} aria-hidden={true} />
      </button>

      <AnimatePresence>
        {openMenu && (
          <MobileMenu items={menuItems} handleCloseMenu={handleCloseMenu} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
