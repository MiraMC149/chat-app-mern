import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Illustrations/GirlChatting.json";
import FacebookSvg from "../assets/Illustrations/facebook-svg.jsx";
import GoogleSvg from "../assets/Illustrations/google-svg.svg";
import LoginBg from "../assets/Images/LoginBackground.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
export default function Login({ setIsAuthenticated, isAuthenticated }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setIsAuthenticated(true);
      navigate("/main");
}});
  const [Username, setUsername] = useState("");
  const [Pass, setPass] = useState("");
  const navigate = useNavigate();
  const [eye, setEye] = useState(EyeIcon);
  const changeInput = () => {
    if (eye == EyeIcon) {
      setEye(EyeSlashIcon);
    } else {
      setEye(EyeIcon);
    }
  };
  const handleSignIn = () => {
    setIsAuthenticated(true);
    navigate("/main");
  };

  return (
    <form id="loginForm" className="bg-indigo-600 w-full h-full">
      <img
        src={LoginBg}
        alt=""
        className="absolute object-cover w-full h-full"
      />
      <div className="z-20 absolute right-10 top-5 lg:right-[15%] lg:top-[10%] bg-white flex flex-col p-6 items-center rounded-3xl h-[95vh] w-[80vw] lg:h-[80vh] lg:w-[70vw] justify-center lg:flex-row ">
        <div className="w-[45vw] mt-20 lg:w-[30vw] lg:mt-0">
          <Lottie options={defaultOptions} />
        </div>
        <div className="flex flex-col py-6 h-full w-[50vw]">
          <div className="w-full flex flex-col">
            <span className="font-bold text-indigo-600 text-lg">Login</span>
            <span className="text-gray-400 text-sm">
              Don't have an account yet?{" "}
              <span className="hover:cursor-pointer hover:text-indigo-600 hover:font-medium hover:pb-1 hover:border-b-[1px] hover:border-b-indigo-600">
                Sign In!
              </span>
            </span>
          </div>
          <div className="flex flex-col text-sm mt-[2vh] lg:mt-8 w-[95%]">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="ring-2 mt-3 py-1 px-3 ring-indigo-300 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="flex flex-col relative text-sm w-[95%] pt-4">
            <label>Password</label>
            <input
              type={eye === EyeIcon ? "password" : "text"}
              name="password"
              onChange={(e) => setPass(e.target.value)}
              className="ring-2 mt-3 py-1 px-3 ring-indigo-300 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
              required
            />
            {eye === EyeIcon ? (
              <EyeIcon
                onClick={() => changeInput()}
                className="absolute top-[67%] right-4 w-5 h-5 text-gray-300"
              />
            ) : (
              <EyeSlashIcon
                onClick={() => changeInput()}
                className="absolute top-[67%] right-4 w-5 h-5 text-gray-300"
              />
            )}
          </div>
          <button
            type="submit"
            className="mt-[2vh] lg:mt-12 rounded-md bg-indigo-600 text-white w-[95%] lg:py-2 border-2 border-indigo-600 font-semibold hover:bg-white hover:text-indigo-600 hover:border-indigo-700 hover:cursor-pointer"
            onClick={() => handleSignIn()}
            disabled={!Username || !Pass} // Disable the button if either the username or password is empty
          >
            Sign in
          </button>
          <div className="border-t-2 relative border-t-gray-200 w-[95%] mt-7">
            <span className="text-gray-200 bg-white absolute -mt-4 right-[34%] sm:right-[40%] lg:right-[42%]">
              or login with
            </span>
          </div>
          <div className="flex mt-7 text-center justify-between w-[95%]">
            <div
              as="button"
              onClick={() => login()}
              className="g-signin2 flex items-center justify-center border-2 border-red-400 text-red-500 font-semibold rounded-lg p-2 w-[45%] hover:text-white hover:bg-red-400 hover:cursor-pointer"
            >
              <img src={GoogleSvg} />
              <span className="ml-2">Google</span>
            </div>
            <div className="flex border-2 text-[14px] fill-blue-500 border-blue-500 text-blue-500 font-semibold rounded-lg items-center justify-center p-2 w-[45%] hover:text-white hover:bg-blue-500 hover:fill-white hover:cursor-pointer">
              <FacebookSvg color="w-4 h-4 mx-2 mt-px" />
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
