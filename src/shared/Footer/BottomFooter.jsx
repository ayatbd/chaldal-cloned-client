import AppSuggestion from "../AppSuggestion";

const BottomFooter = () => {
  return (
    <div className="footer-right w-[30%] flex flex-col items-end">
      <div className="mobileApp w-full">
        <div className="">
          <div className="chaldalAppsContent">
            <form>
              <div className="inputGroup bg-white flex items-center justify-center text-[10px] border-[.5px] border-solid border-[#9B60E8] p-[1%] rounded-[10px]">
                <div className="w-full">
                  <input
                    className="border-0 bg-white outline-none focus:ring-0 focus:outline-none leading-6"
                    type="name"
                    value="+88"
                    placeholder=""
                  />
                </div>
                <input
                  className="bg-[#9B60E8] rounded-[8px] text-white outline-0 w-[35%] text-[16px] py-[7px] px-[5px]"
                  type="submit"
                  name="submit"
                  value="Get app"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <AppSuggestion></AppSuggestion>
      <div className="contact-section">
        <div className="phone-number">
          <div className="wrap flex justify-center items-center gap-2">
            <span>
              <svg width="12px" height="12px" viewBox="0 0 18 18.038">
                <g id="phone-call" transform="translate(-0.539)">
                  <g
                    id="Group_9772"
                    data-name="Group 9772"
                    transform="translate(0.539 0)"
                  >
                    <path
                      id="Path_50085"
                      data-name="Path 50085"
                      d="M18.067,13.238,15.55,10.721a1.674,1.674,0,0,0-2.787.629,1.713,1.713,0,0,1-1.978,1.079A7.762,7.762,0,0,1,6.11,7.754,1.629,1.629,0,0,1,7.189,5.776a1.674,1.674,0,0,0,.629-2.787L5.3.472a1.8,1.8,0,0,0-2.427,0L1.166,2.18c-1.708,1.8.18,6.563,4.405,10.788s8.99,6.2,10.788,4.405l1.708-1.708A1.8,1.8,0,0,0,18.067,13.238Z"
                      transform="translate(-0.539 0)"
                      fill="#5e5e5e"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <span className="number text-xl font-bold text-gray-500">
              <span>16710</span>
            </span>
          </div>
        </div>
        <div className="email-address">
          <span className="pre-text">or </span>
          <span className="email">
            <a href="mailto:support@chaldal.com">support@chaldal.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
