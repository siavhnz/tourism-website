import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import Menu from "../Menu/Navigation";

const Header = () => {
  return (
    <header className="mx-24 mt-24 flex justify-between">
      <Logo className="h-40 w-40" />
      <div className="self-center">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
