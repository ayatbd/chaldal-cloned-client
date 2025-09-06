import { useState } from "react";
import {
  FaEgg,
  FaTags,
  FaHeart,
  FaBolt,
  FaUtensils,
  FaBroom,
  FaUser,
  FaHeartbeat,
  FaBaby,
  FaHome,
  FaPen,
  FaPaw,
  FaFutbol,
  FaPaintBrush,
  FaTshirt,
} from "react-icons/fa";
import Home from "../pages/Home/Home";
import { RiMenu2Fill } from "react-icons/ri";
import { BsCapsule } from "react-icons/bs";
import { GiCampCookingPot } from "react-icons/gi";
import "../styles/style.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative bg-white">
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
        <nav className="mt-14 ">
          <div className="">
            <div className="flex items-center justify-center gap-1 p-2.5 border-b border-gray-200">
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
            <ul className="p-4 space-y-3 text-gray-700 font-medium navList">
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaTags /> Offers
                <span className="ml-auto text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                  50
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaHeart /> Favourites
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaBolt /> Flash Sales
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaUtensils /> Food
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaBroom /> Cleaning Supplies
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaUser /> Personal Care
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaHeartbeat /> Health & Wellness
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaBaby /> Baby Care
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaHome /> Home & Kitchen
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaPen /> Stationery & Office
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaPaw /> Pet Care
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaFutbol /> Toys & Sports
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaPaintBrush /> Beauty & Makeup
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-600 cursor-pointer">
                <FaTshirt /> Fashion & Lifestyle
              </li>
            </ul>
          </div>
          <div className="sticky bottom-0 border border-solid border-[#e7dfdf] bg-white cursor-pointer shadow-2xl">
            <ul className="flex items-center justify-center w-full">
              <li className="basis-1/3 border-r border-gray-300 text-center py-1">
                Help
              </li>
              <li className="basis-2/3 text-center py-1">File a complaint</li>
            </ul>
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
