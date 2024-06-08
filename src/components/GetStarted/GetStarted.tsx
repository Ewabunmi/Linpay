import Arrow from "../../assets/images/arrow.svg";
import GetStartedBg from "../../assets/images/heroBg1.jpg";

const GetStarted = () => {
  return (
    <div
      className="flex flex-col py-20"
      style={{
        backgroundImage: `url(${GetStartedBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-5 lg:px-[7rem] mb-10 mt-[4rem]">
        <div className="flex flex-col items-start lg:px-8 px-3 md:w-1/2">
          <h2 className="text-[40px] lg:text-[72px] text-[#030119] font-Medium">
            Trust in Reliable Payment Solutions.
          </h2>
        </div>

        <div className="flex justify-center items-center md:w-1/2">
          <div className="max-w-[600px]">
            <p className="mt-[1rem] text-[16px] lg:text-[20px] text-[#030119] font-Regular px-3">
              Businesses deserve a payment partner that prioritizes security and
              efficiency. Count on us to support your growth and handle your
              transactions with the utmost care.
            </p>
            <div className="flex space-x-3 px-3">
              <button className="px-6 sm:px-8 py-2 sm:py-3 text-[16px] mt-[3rem] font-Regular text-[#EFEFEF] transition-all duration-200 hover:bg-red-500 flex items-center space-x-2 bg-[#030119]">
                <span className="font-Regular">Get Started</span>
                <span>
                  <img src={Arrow} alt="arrow.svg" />
                </span>
              </button>
              <button className="px-6 sm:px-8 py-2 sm:py-3 text-[16px] mt-[3rem] text-[#030119] border border-[#000] font-Medium transition-all duration-200 hover:bg-red-500 flex items-center space-x-2 bg-[#FFF]">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
