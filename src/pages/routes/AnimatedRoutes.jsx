import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home";
import Destination from "../Destination";
import Crew from "../Crew";
import Technology from "../Technology";
import Layout from "../../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
