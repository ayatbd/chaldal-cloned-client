import { FaFacebookF } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const Login = () => {
  return (
    <>
      <div className="w-full bg-white rounded-md relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black"></button>

        <div className="mb-2">
          <h2 className="text-lg text-left mb-4">Login</h2>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle text-xl btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
        {/* Title */}

        {/* Facebook Button */}
        <button className="w-full flex justify-center items-center bg-[#3b5998] text-white py-4 rounded mb-1.5 text-sm font-medium hover:bg-[#334d84]">
          <FaFacebookF className="text-xl mr-1.5" />
          Sign Up or Login with <span className="ml-1 font-bold">Facebook</span>
        </button>

        {/* Email Button */}
        <button className="w-full flex justify-center items-center border border-gray-300 py-4 rounded mb-4 text-sm font-medium hover:bg-gray-100">
          <span className="mr-2">
            <TfiEmail className="text-xl mr-1.5" />
          </span>{" "}
          Login with <span className="ml-1 font-bold">Email</span>
        </button>
        {/* Divider */}
        <div className="flex items-center mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <p className="text-[14px] text-center my-8">
          PLEASE ENTER YOUR MOBILE PHONE NUMBER
        </p>

        {/* Phone Input */}
        <div className="flex items-center border rounded mb-4 overflow-hidden">
          <div className="flex items-center px-2 bg-gray-100 border-r">
            <img
              src="https://flagcdn.com/w20/bd.png"
              alt="BD Flag"
              className="w-5 h-4 mr-1"
            />
            <span className="text-sm text-gray-700">+88</span>
          </div>
          <input
            type="text"
            placeholder="PLEASE ENTER YOUR MOBILE PHONE NUMBER"
            className="flex-1 p-2 text-sm outline-none"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#f15c5c] text-white py-4 rounded hover:bg-[#e14b4b]">
          SIGN UP / LOGIN
        </button>

        {/* Footer Disclaimer */}
        <p className="text-[11px] text-gray-500 text-center mt-4 leading-snug">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </>
  );
};

export default Login;
