import LandingBanner from "./LandingBanner";
import DeliveryInfo from "./DeliveryInfo";
import Categories from "./Categories";
import Popular from "./Popular";
import DownloadApp from "./DownloadApp";
import ChaldalInfo from "./ChaldalInfo";
import CurrentDelivery from "./CurrentDelivery";
import ShopInfo from "./ShopInfo";
import DailyNecessities from "./DailyNecessities";
import CommonQuestion from "./CommonQuestion";
import FamilySuggestion from "./FamilySuggestion";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <LandingBanner></LandingBanner>
      <DeliveryInfo></DeliveryInfo>
      <Categories></Categories>
      <Popular></Popular>
      <ShopInfo></ShopInfo>
      <DailyNecessities></DailyNecessities>
      <DownloadApp></DownloadApp>
      <ChaldalInfo></ChaldalInfo>
      <CurrentDelivery></CurrentDelivery>
      <CommonQuestion></CommonQuestion>
      <FamilySuggestion></FamilySuggestion>
      <Footer></Footer>
    </div>
  );
};

export default Home;
