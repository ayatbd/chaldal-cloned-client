import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <div className="bg-[rgba(194,194,194,.2)]">
      <TopFooter></TopFooter>
      <div className="pl-[100px] pr-[60px] py-8 flex justify-center items-center">
        <div className="footer-left w-[70%]">
          <div className="footerBottom flex justify-center">
            <div className="list-type customer-service basis-1/3 space-y-2.5">
              <p className="text-[18px] text-gray-600 font-bold">
                <span> </span>
                <span>About Chaldal</span>
                <span> </span>
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="/t/AboutUs">Our Story</a>
                </li>
                <li>
                  <a href="/t/Team">Team</a>
                </li>
                <li>
                  <a href="/t/PrivacyInfo">Privacy Policy</a>
                </li>
                <li>
                  <a href="/t/TermsOfUse">Terms of Use</a>
                </li>
                <span> </span>
              </ul>
            </div>
            <div className="list-type customer-service basis-1/3 space-y-2.5">
              <p className="text-[18px] text-gray-600 font-bold">
                <span> </span>
                <span>Customer Service</span>
                <span> </span>
              </p>
              <ul className="space-y-2">
                <span> </span>
                <li>
                  <a href="/t/ContactUs">Contact Us</a>
                </li>
                <li>
                  <a href="/t/Help">FAQ</a>
                </li>
                <span> </span>
              </ul>
            </div>
            <div className="list-type customer-service basis-1/3 space-y-2.5">
              <p className="text-[18px] text-gray-600 font-bold">
                <span> </span>
                <span>For Business</span>
                <span> </span>
              </p>
              <ul>
                <li>
                  <a href="corporate">Corporate</a>
                </li>
                <span> </span>
              </ul>
            </div>
          </div>
          <div className="right-area">
            <ul className="flex justify-start items-center gap-2">
              <li className="text-[18px] text-gray-600 font-bold">
                Payment Methods
              </li>
              <li className="icon">
                <img
                  className="w-9 h-9"
                  src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/components/shared/FooterForH4/images/Amex.png?q=low&amp;alpha=1"
                />
              </li>
              <li className="icon">
                <img
                  className="w-9 h-9"
                  src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/components/shared/FooterForH4/images/mastercard.png?q=low&amp;alpha=1"
                />
              </li>
              <li className="icon">
                <img
                  className="w-9 h-9"
                  src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/components/shared/FooterForH4/images/VIsa.png?q=low&amp;alpha=1"
                />
              </li>
              <li className="icon bkash">
                <img
                  className="w-9 h-9"
                  src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/components/shared/FooterForH4/images/bkash.png?v=1&amp;q=low&amp;alpha=1"
                />
              </li>
            </ul>
          </div>
        </div>
        <BottomFooter></BottomFooter>
      </div>
    </div>
  );
};

export default Footer;
