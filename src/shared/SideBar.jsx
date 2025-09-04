import { useState } from "react";
import {
  FaChartBar,
  FaTasks,
  FaBuilding,
  FaFileAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
  FaTags,
  FaShoppingCart,
} from "react-icons/fa";
import Home from "../pages/Home/Home";
import { RiMenu2Fill } from "react-icons/ri";

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
        <nav className="mt-16 p-4">
          <ul className="p-4 space-y-4">
            <li className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer">
              <FaHeart /> Favourites
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer">
              <FaTags /> Offers
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer">
              <FaShoppingCart /> Grocery
            </li>
          </ul>
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
