import Background from "../../assets/images/heroBg1.jpg";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="w-full lg:h-[70vh] h-[50vh] flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Content */}
          <div className="w-[80%] flex flex-col justify-start items-start gap-[2rem] mx-auto z-10">
            <div className="max-w-[900px]">
              <h1 className="text-left text-[30px] lg:text-[72px] lg:leading-[6rem] text-[#030119] font-Medium">
                Empowering Global Businesses with Tailored Payment Solutions.
              </h1>
              <p className="mt-[1rem] text-left text-[20px] text-[#030119] font-Regular">
                Merchant payment solutions for mid- & high-Risk Ventures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
