const ShopInfo = () => {
  return (
    <div className="mb-5">
      <div className="headerComponent">
        <div className="initalLabel">
          <h2 className="text-[#2D3A3F] text-[20px] font-[400] text-center mb-7">
            Shop &amp; Get More
          </h2>
        </div>
      </div>
      <div className="wrapper mt-5">
        <div className="shopContainer mx-10 flex justify-center items-center gap-5">
          <div className="container overflow-hidden rounded-lg flex flex-col justify-center bg-[#F5F5F5] min-h-[400px]">
            <div className="initialLabel flex-1 p-[10px]">
              <h3 className="text-2xl font-bold m-[10px]">
                <span> </span>
                <span>Shop &amp; Earn Points</span>
                <span> </span>
              </h3>
              <p className="px-[10px]">
                <span> </span>
                <span>
                  The more you shop the more you earn - cash back, free
                  shipping, exclusive offers and more. Discover the perks of{" "}
                  <b>Egg Club</b> membership.
                </span>
                <span> </span>
              </p>
            </div>
            <img src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/image.jpg?q=low&amp;webp=1" />
          </div>
          <div className="container overflow-hidden rounded-lg flex flex-col justify-center bg-[#F5F5F5] min-h-[400px]">
            <div className="initialLabel flex-1 p-[10px]">
              <h3 className="text-2xl font-bold m-[10px]">
                <span> </span>
                <span>Deal of the Day</span>
                <span> </span>
              </h3>
              <p className="px-[10px]">
                <span> </span>
                <span>
                  Stock up on your favorite groceries for less with our
                  unbeatable deals! Don't miss out - limited stock
                </span>
                <span> </span>
              </p>
            </div>
            <img src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyDealsShopInfo.jpg?q=low&amp;webp=1" />
          </div>
          <div className="container overflow-hidden rounded-lg flex flex-col justify-center bg-[#F5F5F5] min-h-[400px]">
            <div className="initialLabel flex-1 p-[10px]">
              <h3 className="text-2xl font-bold m-[10px]">
                <span> </span>
                <span>Premium Care</span>
                <span> </span>
              </h3>
              <p className="px-[10px]">
                <span> </span>
                <span>
                  Too busy to place an order or handling order issues no need to
                  worry as we give you option to take premium assistance.
                </span>
                <span> </span>
              </p>
            </div>
            <img src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/premiumImage.jpg?q=low&amp;webp=1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
