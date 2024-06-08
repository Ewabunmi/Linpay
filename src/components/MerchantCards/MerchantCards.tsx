import Card from "../../assets/images/card.svg";
import Card2 from "../../assets/images/card2.svg";
import Card3 from "../../assets/images/card3.svg";
import Card4 from "../../assets/images/card4.svg";
import Logo2 from "../../assets/images/logo2.jpg";

const MerchantCards = () => {
  return (
    <div className="w-[100%] h-full flex items-center justify-center flex-col">
      <div className="w-[90%] sm:w-[90%] md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-start gap-[2rem] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-start text-left text-[#030119] sm:px-8 px-8 lg:px-0">
          <h3 className="mb-4 text-[20px] font-Medium">
            Built for Bold Businesses
          </h3>
          <img src={Card} alt="Card 1" />
          <p className="mt-8 text-[16px] font-Regular">
            Providing merchant payment solutions to medium- and high-risk
            businesses.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-start text-left text-[#030119] sm:px-8 px-8 lg:px-0">
          <h3 className="mb-4 text-[20px]  font-Medium">
            Grow Revenue Securely
          </h3>
          <img src={Card2} alt="Card 2" />
          <p className="mt-8 text-[16px] font-Regular">
            Merchant payment solutions for mid- & high-Risk Ventures
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-start text-left text-[#030119] sm:px-8 px-8 lg:px-0">
          <h3 className="mb-4 text-[20px]  font-Medium">
            Boost Sales with Checkout
          </h3>
          <img src={Card3} alt="Card 3" />
          <p className="mt-8 text-[16px] font-Regular">
            Merchant payment solutions for mid- & high-Risk Ventures
          </p>
        </div>
        <div className="flex flex-col items-start text-left text-[#030119] sm:px-8 px-8 lg:px-0 relative">
          <img
            src={Logo2}
            alt="Logo 2"
            className="hidden sm:block absolute"
            style={{
              position: "absolute",
              top: -200,
              left: 200,
              width: "100px",
              height: "auto",
              marginTop: "70px",
            }}
          />
          {/* Card 3 */}
          <h3 className="mb-4 text-[20px]  font-Medium">
            Multi-currency Gateway
          </h3>
          <img src={Card4} alt="Card 4" />
          <p className="mt-8 text-[16px] font-Regular">
            Merchant payment solutions for mid- & high-Risk Ventures
          </p>
        </div>
      </div>
    </div>
  );
};

export default MerchantCards;
