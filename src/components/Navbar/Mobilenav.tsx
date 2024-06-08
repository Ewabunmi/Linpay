import { ImCross } from "react-icons/im";
import Arrow from "../../assets/images/arrow.svg";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white"
      />
      {/* Nav Div */}
      <div
        className={`bg-emerald-700 ${navStyle} transition-all duration-delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}
      >
        {/* Nav Links */}
        <ul className="space-y-10">
          <li className="text-[35px] font-Medium hover:text-yellow-400 text-white">
            <a href="/">Login</a>
          </li>
          <li className="text-[35px] font-Medium hover:text-yellow-400 text-white">
            <a href="/">SignUp</a>
          </li>
          <button className="px-8 sm:px-8 py-4 sm:py-3 text-[16px] text-[#EFEFEF] transition-all duration-200 hover:bg-red-500 flex items-center space-x-2 bg-[#030119]">
            <span className="font-Regular">Get Started</span>
            <span>
              <img src={Arrow} alt="arrow.svg" />
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
