import Footer from "../Footer/Footer";
import GetStarted from "../GetStarted/GetStarted";
import MerchantCards from "../MerchantCards/MerchantCards";
import ResponsiveNav from "../Navbar/ResponsiveNav";
import Payments from "../Payments/Payments";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <MerchantCards />
      <Payments />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Homepage;
