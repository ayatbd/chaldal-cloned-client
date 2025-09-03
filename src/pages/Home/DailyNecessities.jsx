import { Link } from "react-router-dom";

const DailyNecessities = () => {
  return (
    <div className="mx-14 mb-5">
      <div className="wrapper">
        <div className="container grid grid-cols-2 gap-5 5 w-full">
          <div className="daily py-9 basis-1/2 rounded-[10px]">
            <div className="descriptionBox w-[55%] m-[10px] pl-[2%] h-full">
              <div className="label flex flex-col items-start h-full justify-center gap-7">
                <h3 className="font-bold text-2xl text-black">
                  Shop your daily necessities
                </h3>
                <p className="text-left">
                  Shop from our popular category, <br /> Explore special offers
                  and receive grocery <br /> on your doorsteps within 1 hour.
                </p>
                <Link
                  className="bg-[#ff686e] text-center py-2 w-[65%] rounded-[10px] text-white shadow-[0 1px 3px 0 rgba(0, 0, 0, .3)]"
                  to="/popular"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
            <div className="w-[45%] h-full"></div>
          </div>
          <div className="flex-1 ">
            <iframe
              className="h-full w-full rounded-[10px]"
              src="https://www.youtube.com/embed/-Xg2kGPwePM"
              frameborder="0"
              allowfullscreen=""
              title="video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyNecessities;
