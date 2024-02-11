import React from "react";
import animationData from "../assets/Illustrations/404.json";
import Lottie from "react-lottie";
export default function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-gray-700  text-lg">
      <div className="h-56 sm:h-96 mt-20 lg:mt-0">
        <Lottie options={defaultOptions} />
      </div>
      OOoops seems like you're lost,{" "}
      <a href="/" className="font-medium hover:text-indigo-600 hover:underline hover:cursor-pointer hover:underline-indigo-600">
        Navigate back to home
      </a>
    </div>
  );
}
