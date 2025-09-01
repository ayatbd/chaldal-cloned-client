import React, { useEffect, useRef } from "react";
import NavEnd from "./NavEnd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);
  return (
    <div className="flex flex-row items-center justify-between box-border py-0 px-5 min-h-[55px] bg-[#fdd670] shadow-sm">
      <div className="navbar-start">
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
      <div className="h-[-webkit-fill-available]">
        <NavEnd></NavEnd>
      </div>
    </div>
  );
};

export default Navbar;
