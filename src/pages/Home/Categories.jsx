import "../../index.css";

import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const Categories = () => {
  // data fetching for category section
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  // slicky slider
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false, // we’ll control arrows manually
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="m-6 px-4">
      <div className="w-full px-6">
        {/* Header */}
        <div className="mb-4 flex justify-between items-center">
          <span className="invisible">spankkfhsfdsflkdhf</span>
          <h2 className="text-[#2D3A3F] text-[20px] font-[400]">
            Popular Categories
          </h2>
          <div className="flex items-center gap-4">
            <button className="text-red-500 cursor-pointer">View All</button>
            {/* Custom Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full shadow cursor-pointer text-xl font-bold"
              >
                ‹
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full shadow cursor-pointer text-xl font-bold"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {categoryData.map((cat, idx) => (
            <div key={idx} className="p-3">
              <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl gap-5 py-4">
                {/* Placeholder image */}
                <div className="w-24 h-24 bg-gray-200 rounded-md mb-2">
                  <img src={cat.img} alt="" />
                </div>
                <p className="text-sm font-medium text-gray-700">{cat.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
