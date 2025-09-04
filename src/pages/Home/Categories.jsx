import "../../index.css";

import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="m-4 sm:m-6 px-2 sm:px-4">
      <div className="w-full px-2 sm:px-6">
        {/* Header */}
        <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 text-center sm:text-left">
          {/* Invisible span (keeps alignment) */}
          <span className="hidden sm:inline invisible">spankkfhsfdsflkdhf</span>

          <h2 className="text-[#2D3A3F] text-lg sm:text-xl md:text-2xl font-medium">
            Popular Categories
          </h2>

          <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <Link to="">
              <button className="text-red-500 cursor-pointer text-sm sm:text-base">
                View All
              </button>
            </Link>

            {/* Custom Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 rounded-full shadow cursor-pointer text-lg sm:text-xl font-bold"
              >
                ‹
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 rounded-full shadow cursor-pointer text-lg sm:text-xl font-bold"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Slider
          ref={sliderRef}
          {...{
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 1280, // lg screens
                settings: { slidesToShow: 4, slidesToScroll: 2 },
              },
              {
                breakpoint: 1024, // md screens
                settings: { slidesToShow: 3, slidesToScroll: 2 },
              },
              {
                breakpoint: 768, // sm screens
                settings: { slidesToShow: 2, slidesToScroll: 1 },
              },
              {
                breakpoint: 480, // mobile
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          }}
        >
          {categoryData.map((cat, idx) => (
            <div key={idx} className="p-2 sm:p-3">
              <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl gap-3 sm:gap-5 py-3 sm:py-4">
                {/* Placeholder image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-md mb-2 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">
                  {cat.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
