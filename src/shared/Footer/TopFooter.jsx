const TopFooter = () => {
  return (
    <div className="footer-banner border border-gray-400 pl-[100px]">
      <div className="banner">
        <div className="w-[25%]">
          <span>
            <ul className="flex items-center justify-between">
              <li className="text-xl font-bold text-gray-600">Cities:</li>
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

export default TopFooter;
