import { useEffect, useState } from "react";
import NavEnd from "./NavEnd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

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
            <p className="text-3xl">
              <svg
                id="noun_menu_1119465"
                width="23px"
                height="23px"
                viewBox="0 0 24 19.641"
                data-reactid=".wn4b3blh2i.4.0.0.0.0.0.0"
              >
                <path
                  id="Path_50263"
                  data-name="Path 50263"
                  d="M27.663,33.527H43.246a1.563,1.563,0,0,0,0-3.127H27.663a1.563,1.563,0,0,0,0,3.127Z"
                  transform="translate(-26.1 -30.4)"
                  data-reactid=".wn4b3blh2i.4.0.0.0.0.0.0.0"
                ></path>
                <path
                  id="Path_50264"
                  data-name="Path 50264"
                  d="M43.194,63.6H27.663a1.563,1.563,0,0,0,0,3.127H43.246a1.536,1.536,0,0,0,1.563-1.563A1.58,1.58,0,0,0,43.194,63.6Z"
                  transform="translate(-26.1 -47.086)"
                  data-reactid=".wn4b3blh2i.4.0.0.0.0.0.0.1"
                ></path>
                <path
                  id="Path_50265"
                  data-name="Path 50265"
                  d="M48.547,47H27.6a1.565,1.565,0,0,0,0,3.127H48.6a1.507,1.507,0,0,0,1.5-1.563A1.548,1.548,0,0,0,48.547,47Z"
                  transform="translate(-26.1 -38.743)"
                  data-reactid=".wn4b3blh2i.4.0.0.0.0.0.0.2"
                ></path>
              </svg>
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
              className="w-full h-[40px] rounded"
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
                    🔍
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
