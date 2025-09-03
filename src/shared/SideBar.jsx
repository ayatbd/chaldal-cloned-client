import { useState } from "react";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Drawer content */}
      <div className="relative bg-white w-64 h-full shadow-lg p-4">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li className="hover:text-yellow-600 cursor-pointer">Grocery</li>
          <li className="hover:text-yellow-600 cursor-pointer">Pharmacy</li>
          <li className="hover:text-yellow-600 cursor-pointer">Cookups</li>
          <li className="hover:text-yellow-600 cursor-pointer">Offers</li>
          <li className="hover:text-yellow-600 cursor-pointer">Favourites</li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
