import Login from "../../auth/pages/LogIn";
import "../../styles/style.css";
import { FaChevronDown } from "react-icons/fa";
const NavEnd = () => {
  return (
    <div className="flex flex-row gap-3 items-center justify-center h-full">
      <button className="flex items-center rounded-none px-2 h-full gap-2 cursor-pointer hover:bg-[#eeb529] transform delay-75">
        <svg id="Location" width="17px" height="14px" viewBox="0 0 16.749 20">
          <path
            id="Path_52"
            data-name="Path 52"
            d="M49.1,20.2l-.581-.5c-.8-.671-7.794-6.71-7.794-11.127a8.375,8.375,0,0,1,16.749,0c0,4.418-6.993,10.457-7.79,11.131Zm0-18.189a6.571,6.571,0,0,0-6.564,6.564c0,2.775,4.3,7.209,6.564,9.238,2.262-2.03,6.564-6.466,6.564-9.238A6.571,6.571,0,0,0,49.1,2.009Z"
            transform="translate(-40.725 -0.198)"
            fill="#ff6f71"
          ></path>
          <path
            id="Path_53"
            data-name="Path 53"
            d="M173.446,136.238a3.32,3.32,0,1,1,3.32-3.32A3.32,3.32,0,0,1,173.446,136.238Zm0-4.979a1.66,1.66,0,1,0,1.66,1.66A1.66,1.66,0,0,0,173.446,131.259Z"
            transform="translate(-165.071 -124.544)"
            fill="#ff6f71"
          ></path>
        </svg>
        <span className="text-[#FF6F71] text-[16px] font-[700] decoration-neutral flex justify-center items-center">
          Dhaka
        </span>
        <p className="ml-auto decoration-neutral text-[14px] font-[700]">
          <FaChevronDown className="text-[#FF6F71]" />
        </p>
      </button>
      <div>
        <button className="flex items-center bg-white rounded-full py-0.5 px-[10px] cursor-pointer">
          <span className="text-[#FF6F71] font-[700] text-[14px] pr-2">EN</span>
          <span className="font-[700] text-[14px] hover:text-[#FF6F71] border-l-1 border-gray-200 pl-2">
            বাং
          </span>
        </button>
      </div>
      <div>
        <button
          className="py-1.5 bg-[#ff686e] hover:bg-[#e04f54] transform delay-75 px-10 text-[16px] text-white rounded-sm cursor-pointer "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Login
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box max-w-[380px] bg-white">
            <Login method="dialog"></Login>
          </div>
          <form className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default NavEnd;
