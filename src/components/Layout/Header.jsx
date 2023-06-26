import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className="mx-24 mt-24 flex max-w-screen-3xl justify-between md:mx-0 md:mt-0 xl:mt-40 xl:gap-x-60 3xl:ml-auto 3xl:mr-auto">
      <div className="md:ml-39 md:mt-24 xl:ml-55">
        <Logo className="h-40 w-40 md:h-48 md:w-48 " />
      </div>
      <div className="self-center md:self-start xl:relative xl:ml-445 xl:flex-grow xl:content-[''] xl:before:absolute xl:before:-left-[27.5rem] xl:before:top-1/2 xl:before:z-10 xl:before:h-1 xl:before:w-470 xl:before:bg-white xl:before:bg-opacity-25">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
