import { IoSearch } from "react-icons/io5";

const LandingBanner = () => {
  return (
    <div className="landingBanner h-[340px] flex items-center justify-between gap-4 ">
      <div className="basis-1/2">
        <div className="pl-5">
          <h1 className="text-[40px] text-black font-bold text-left px-3">
            <span className=""> Grocery Delivered at your Doorstep</span>
          </h1>
          <div class="max-w-md mt-8 lg:mt-0 lg:ml-8">
            <form aria-labelledby="newsletter-headline">
              <div class="">
                <div class="sm:flex items-center">
                  <input
                    name="EMAIL"
                    type="email"
                    required="required"
                    placeholder="Search for products (e.g. eggs, milk, potato)"
                    aria-label="Email address"
                    class="w-full px-5 text-base leading-6 transition duration-150 ease-in-out appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"
                  />
                  <button
                    type="submit"
                    class="block px-3 text-white transition duration-100 ease-in-out bg-white border border-transparent shadow-sm focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <IoSearch className="text-gray-600" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="basis-1/2"></div>
    </div>
  );
};

export default LandingBanner;
