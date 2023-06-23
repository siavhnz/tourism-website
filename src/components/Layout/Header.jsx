import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className="mx-24 mt-24 flex justify-between md:mx-0 md:mt-0">
      <Logo className="h-40 w-40 md:ml-39 md:mt-24 md:h-48 md:w-48" />
      <div className="self-center md:self-start">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
