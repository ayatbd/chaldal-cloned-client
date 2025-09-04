import { useEffect, useState } from "react";
import NavEnd from "./NavEnd";
import { IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  // using useeffect to show search bar

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom <= 0) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="sticky top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="flex flex-row items-center justify-between box-border py-0 px-5 min-h-[55px] bg-[#fdd670] shadow-sm">
        <div className="navbar-start w-auto">
          <div className="flex items-center gap-5 overflow-hidden">
            <p>
              <RiMenu2Fill className="text-[28px] font-bold text-black invisible" />
            </p>
            <div>
              <img
                className="h-[40px]"
                src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* rendering form after landing banner section going up */}
        {showSearch && (
          <div className="flex-1 px-7">
            <form
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
                    aria-label="Search"
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
        )}
        {/* navbar end  */}
        <div className="h-[-webkit-fill-available]">
          <NavEnd></NavEnd>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
