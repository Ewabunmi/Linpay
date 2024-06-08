import Currency from "../../assets/images/cardHolder.svg";
import Crypto from "../../assets/images/hardCoins.svg";
import CryptoPaymentBg from "../../assets/images/paymentBg.png";
import BellRinging from "../../assets/images/Bell.svg";
import Shield from "../../assets/images/shieldCheck.svg";
import BellBg from "../../assets/images/paymentBg2.png";

const Payments = () => {
  return (
    <div
      className="flex flex-col mt-40"
      style={{
        backgroundImage: `url(${CryptoPaymentBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="bg-[#030119] bg-opacity-120 py-20 -z-20">
        <h1 className="text-[#FFFFFF] text-center text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] px-6 font-Medium mt-10">
          Optimize your Payments.
        </h1>
        <h1 className="text-[#D8D6E3] text-[16px] lg:text-[20px] lg:text-center flex justify-center items-center py-4 px-12 font-Light">
          Experience the excitement Our Zero downtime, multi-currency
          collections, and streamlined <br /> cash flow management product have
          to offer.
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between px-5 lg:px-[7rem] mb-10 mt-[4rem]">
          <div className="flex flex-col items-start px-5">
            <div className="max-w-[500px]">
              <p className="flex items-center gap-6 mt-[1rem] py-10 text-[20px] lg:text-[32px] text-[#FFFFFF] font-Light">
                <img src={Currency} alt="currency.svg" /> Multi-Currency Payment
                Options
              </p>
              <p className="flex items-center gap-6 mt-[1rem] py-10 text-[20px] lg:text-[32px] text-[#FFFFFF] font-Light">
                <img src={Crypto} alt="crypto.svg" /> Cryptocurrency Payment
                Collections
              </p>
              <div
                className="gap-6 mt-[1rem] py-10 lg:text-[32px] text-[20px] text-[#FFFFFF] font-Light flex items-center"
                style={{
                  backgroundImage: `url(${BellBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={BellRinging}
                  alt="crypto.svg"
                  style={{ marginRight: "10px" }}
                />
                Real-Time Notification
              </div>
              <div
                className="flex items-center gap-6 mt-[1rem] py-10 text-[20px] lg:text-[32px] text-[#FFFFFF] font-Light"
                style={{
                  backgroundImage: `url(${BellBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={Shield}
                  alt="crypto.svg"
                  style={{ marginRight: "10px" }}
                />{" "}
                Secure APIs
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start px-5 mt-10 md:mt-0">
            <div className="max-w-[500px]">
              <p className="py-14 text-[18px] text-[#D8D6E3] font-Light">
                We partner with you to expand your business reach by supporting
                worldwide currencies and different payment types.
              </p>
              <p className="py-14 text-[18px] text-[#D8D6E3] font-Light">
                With LinPay, you will be able to accept a range of stable coins
                for deposits. You will get paid directly to your bank account in
                any of these Fiat currencies: €, $, or £.
              </p>

              <p className="py-14 text-[18px] text-[#D8D6E3] font-Light">
                Never miss a transaction. Get instant alerts for every payment
                activity, so you can stay updated on your cash flow in
                real-time. Our notifications ensure that you're always in the
                loop, wherever you are.
              </p>
              <p className="py-3 text-[18px] text-[#D8D6E3] font-Light">
                Integrate our reliable payment APIs with ease. Designed with
                security at the forefront, our APIs provide a solid foundation
                for your business to build upon, ensuring safe and secure
                transactions every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
