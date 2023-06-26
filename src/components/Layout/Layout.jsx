import { Outlet } from "react-router-dom";
import Header from "./Header";
import { motion, useIsPresent } from "framer-motion";

const Layout = () => {
  const isPresent = useIsPresent();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ originX: isPresent ? 0 : 1 }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </motion.div>
  );
};

export default Layout;
