import AppSuggestion from "../../shared/AppSuggestion";
import "../../styles/style.css";
const DownloadApp = () => {
  return (
    <div className="downloadApp flex items-center justify-center">
      <div className="imageContainer basis-1/2">
        <div className="px-24 flex flex-col justify-center gap-3">
          <p className="text-2xl font-bold text-center px-10">
            Download The Chaldal App Now!
          </p>
          <p className="text-center">
            Get 5% off on your first order through the Chaldal app and make your
            shopping experience even smoother!
          </p>
          <AppSuggestion></AppSuggestion>
        </div>
      </div>
      <div className="basis-1/2">
        <img
          src="https://chaldn.com/asset/egg-chaldal-web-release-id-27065/https/Default/stores/chaldal/components/landingPage2/LandingPage/images/downloadApp.png?q=low"
          alt="Download App"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
