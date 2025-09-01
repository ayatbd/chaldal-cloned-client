import { IoSearch } from "react-icons/io5";

const LandingBanner = () => {
  return (
    <div className="landingBanner h-[320px] flex items-center justify-between gap-4">
      <div className="basis-1/2">
        <div className="pl-5 flex flex-col gap-7">
          <h1 className="text-[40px] text-black font-bold text-left px-3">
            <span className="">Grocery Delivered at your Doorstep</span>
          </h1>
          <div className="w-full pl-3">
            <form
              id="hero"
              className="w-full h-[40px]" // fixed height instead of min-h
              aria-labelledby="newsletter-headline"
            >
              <div className="w-full h-full">
                <div className="flex items-center justify-between w-full h-full ">
                  <input
                    name="EMAIL"
                    type="text"
                    required
                    placeholder="Search for products (e.g. eggs, milk, potato)"
                    aria-label="Email address"
                    className="w-full h-full px-5 text-base leading-6 text-gray-900 placeholder-gray-500 bg-white outline-none focus:ring-0 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white h-full px-3 flex items-center"
                  >
                    <IoSearch className="text-gray-500 text-2xl" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className=""></div> */}
      <div
        className="banner-image basis-1/2"
        data-reactid=".pyflnd72sc.h.2.0.0.0.1"
      >
        <img
          src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low"
          data-reactid=".pyflnd72sc.h.2.0.0.0.1.0"
        />
      </div>
    </div>
  );
};

export default LandingBanner;
