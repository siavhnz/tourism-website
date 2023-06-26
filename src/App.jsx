import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./pages/routes/AnimatedRoutes";

function App() {
  // const location = useLocation();

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
