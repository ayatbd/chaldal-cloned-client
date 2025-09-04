import { IoSearch } from "react-icons/io5";

const LandingBanner = () => {
  return (
    <div className="landingBanner flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-4 md:px-8 py-6 md:py-0 h-auto md:h-[320px]">
      {/* Left Content */}
      <div className="basis-full md:basis-1/2 flex flex-col gap-6 md:gap-7 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-black font-bold leading-snug px-2 md:px-3">
          Grocery Delivered at your Doorstep
        </h1>

        <div className="w-full px-2 md:pl-3">
          <form
            id="hero"
            className="w-full h-[40px] rounded overflow-hidden"
            aria-labelledby="newsletter-headline"
          >
            <div className="w-full h-full">
              <div className="flex items-center justify-between w-full h-full">
                <input
                  name="EMAIL"
                  type="text"
                  required
                  placeholder="Search for products (e.g. eggs, milk, potato)"
                  aria-label="Search products"
                  className="w-full h-full px-3 sm:px-5 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="bg-white h-full px-3 flex items-center justify-center"
                >
                  <IoSearch className="text-gray-500 text-lg sm:text-2xl" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Image */}
      <div className="banner-image basis-full md:basis-1/2 overflow-hidden flex justify-center md:justify-end pl-0 md:pl-12 mt-6 md:mt-0">
        <img
          src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low"
          alt="Landing Banner"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default LandingBanner;
