import { useState } from "react";
import { FaEgg } from "react-icons/fa";
import Home from "../pages/Home/Home";
import { RiMenu2Fill } from "react-icons/ri";
import { BsCapsule } from "react-icons/bs";
import { GiCampCookingPot } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // const menuItems = [
  //   { icon: FaChartBar, text: "Dashboard" },
  //   { icon: FaTasks, text: "Tasks" },
  //   { icon: FaBuilding, text: "Companies" },
  //   { icon: FaFileAlt, text: "Applications" },
  //   { icon: FaUser, text: "Profile" },
  // ];

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-3 z-50 p-2 cursor-pointer transition-all delay-75 hover:bg-[#eeb529]"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <RiMenu2Fill className="text-[28px] font-bold text-black" />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out border ${
          isOpen ? "w-56" : "w-0"
        } overflow-hidden z-40`}
      >
        <nav className="mt-14 p-[8px]">
          <div className="border-b">
            <div className="flex items-center justify-center gap-1">
              <div className="flex flex-col items-center justify-center gap-1.5 basis-1/3 border-[1px] border-solid border-[#ff686e] rounded-[5px] p-1">
                <span className="text-[#FFB68E] bg-[#EBD023] p-[3px] rounded-full">
                  <FaEgg />
                </span>
                <h5 className="name text-[11px] font-semibold">Grocery</h5>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 basis-1/3 border-[1px] border-solid border-[#ff686e] rounded-[5px] p-1">
                <span className="text-[#FFB68E] bg-[#EBD023] p-[3px] rounded-full">
                  <BsCapsule />
                </span>
                <h5 className="name text-[11px] font-semibold">Pharmacy</h5>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 basis-1/3 border-[1px] border-solid border-[#ff686e] rounded-[5px] p-1">
                <span className="text-[#FFB68E] bg-[#EBD023] p-[3px] rounded-full">
                  <GiCampCookingPot />
                </span>
                <h5 className="name text-[11px] font-semibold">Cookups</h5>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      <main
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "ml-56" : "ml-0"
        }`}
      >
        {/* Main content goes here */}
        <div className="">
          <Home></Home>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
