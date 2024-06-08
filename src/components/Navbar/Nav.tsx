import Logo from "../../assets/images/logo.svg";
import Arrow from "../../assets/images/arrow.svg";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* Logo Div */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="logo.svg"
            className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500"
          />
          <h1 className="text-[24px] text-[#030119] font-SemiBold">Linpay</h1>
        </div>
        <div className="space-x-12 hidden lg:flex items-center font-Medium">
          <div className="text-[16px] text-[#030119] hover:text-red-600">
            <a href="/">Login</a>
          </div>
          <div className="text-[16px] text-[#030119] hover:text-red-600">
            <a href="/">Sign Up</a>
          </div>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-[16px] text-[#EFEFEF] transition-all duration-200 hover:bg-red-500 flex items-center space-x-2 bg-[#030119]">
            <span className="font-Regular">Get Started</span>
            <span>
              <img src={Arrow} alt="arrow.svg" />
            </span>
          </button>
        </div>
        <RxHamburgerMenu
          onClick={openNav}
          className="lg:hidden w-[2rem] h-2[rem] text-black"
        />
      </div>
    </div>
  );
};

export default Nav;
