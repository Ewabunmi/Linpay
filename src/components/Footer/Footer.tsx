import AppLogo from "../../assets/images/logo.svg";
import TwitterLogo from "../../assets/images/twitter.svg";

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-[#FFFFFF] text-[#030119]">
      <div className="md:flex md:justify-center p-4 px-5 lg:px-32">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
          <div className="space-x-0">
            <a href="/" className="flex justify-start items-start gap-3">
              <img src={AppLogo} alt="App Logo" />{" "}
              <span className="text-[24px] font-SemiBold">Linpay</span>
            </a>
            <div className="py-4 text-[18px] font-Regular">
              Fortifying Your Finances, Expanding Your Reach.
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-SemiBold text-[20px]">Product</h2>
            <ul className="text-[18px] font-Regular">
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-SemiBold text-[20px]">Company</h2>
            <ul className="text-[18px] font-Regular">
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-SemiBold text-[20px]">
              Learn & Resources
            </h2>
            <ul className="text-[18px] font-Regular">
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Developer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-SemiBold text-[20px]">Media</h2>
            <ul className="text-[18px] font-Regular">
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-start py-6 px-5 lg:px-32 font-Regular">
        <div className="flex justify-start">
          <a href="/" className="hover:underline">
            @2023 Linpay. All Rights Reserved.
          </a>
        </div>
        <div className="flex space-x-6 mt-4 sm:mt-0 sm:justify-center">
          <a href="/">
            <img src={TwitterLogo} alt="Twitter Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
