import LandingBanner from "./LandingBanner";
import DeliveryInfo from "./DeliveryInfo";
import Categories from "./Categories";
import Popular from "./Popular";
import DownloadApp from "./DownloadApp";
import ChaldalInfo from "./ChaldalInfo";
import CurrentDelivery from "./CurrentDelivery";
import ShopInfo from "./ShopInfo";
import DailyNecessities from "./DailyNecessities";

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
    </div>
  );
};

export default Home;
