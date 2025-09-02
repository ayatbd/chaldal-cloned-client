import LandingBanner from "./LandingBanner";
import DeliveryInfo from "./DeliveryInfo";
import Categories from "./Categories";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <LandingBanner></LandingBanner>
      <DeliveryInfo></DeliveryInfo>
      <Categories></Categories>
      <Popular></Popular>
    </div>
  );
};

export default Home;
