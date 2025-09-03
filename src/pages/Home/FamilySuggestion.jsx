import { Link } from "react-router-dom";

const FamilySuggestion = () => {
  return (
    <div className="mx-[75px] space-y-5">
      <div className="headerContainer m-[1%]">
        <div className="initalLabel">
          <h2 className="text-[#2D3A3F] text-[20px] font-[400] text-center mb-4">
            Be part of the Chaldal Family!
          </h2>
        </div>
      </div>
      <div className="container mb-16">
        <div className="content grid grid-cols-2 gap-5">
          <div className="chaldal-family-content rounded-[10px] overflow-hidden grid grid-cols-2">
            <div className="descriptionBox bg-[#F5F5F5] py-9 px-8 flex flex-col justify-between items-start gap-5">
              <div className="initalLabel space-y-3">
                <h3 className="font-bold text-2xl">Corporate</h3>
                <p>
                  <span></span>
                  <span>
                    Do you own a business? Become a corporate customer
                  </span>
                  <span> </span>
                </p>
              </div>
              <Link
                to=""
                className="bg-[#e04f54] w-full px-4 py-2 text-white rounded-[10px]"
              >
                Find out more
              </Link>
            </div>
            <img
              className="h-full"
              src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/corporateImage.png?q=low"
            />
          </div>
          <div className="chaldal-family-content rounded-[10px] overflow-hidden grid grid-cols-2">
            <div className="descriptionBox bg-[#F5F5F5] py-9 px-8 flex flex-col justify-between items-start gap-5">
              <div className="initalLabel space-y-3">
                <h3 className="font-bold text-2xl">Career</h3>
                <p>
                  <span></span>
                  <span>
                    Work with a team that works to improve the lives of our
                    consumers and the communities around us.
                  </span>
                  <span></span>
                </p>
              </div>
              <Link
                to=""
                className="bg-[#e04f54] w-full px-4 py-2 text-white rounded-[10px]"
              >
                Find out more
              </Link>
            </div>
            <img
              className="h-full"
              src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/careerImage.png?q=low"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySuggestion;
