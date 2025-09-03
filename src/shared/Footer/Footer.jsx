import React from "react";

const Footer = () => {
  return (
    <div className="footer-banner mx-[6.5%]">
      <div className="banner">
        <div className="w-[25%]">
          <span>
            <ul className="flex items-center justify-between">
              <li className="text-xl font-bold">Cities:</li>
              <li className="cityText underline">Dhaka</li>
              <li className="cityText underline">Chattogram</li>
              <li className="cityText underline">Jashore</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
