import LandingBanner from "./LandingBanner";
import DeliveryInfo from "./DeliveryInfo";
import Categories from "./Categories";
import Popular from "./Popular";
import DownloadApp from "./DownloadApp";
import ChaldalInfo from "./ChaldalInfo";

const Home = () => {
  return (
    <div>
      <LandingBanner></LandingBanner>
      <DeliveryInfo></DeliveryInfo>
      <Categories></Categories>
      <Popular></Popular>
      <DownloadApp></DownloadApp>
      <ChaldalInfo></ChaldalInfo>
    </div>
  );
};

export default Home;
