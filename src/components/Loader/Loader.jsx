// LoaderNoConfig.jsx
import React from "react";
import logo from "../../assets/logo.png";

const LoaderNoConfig = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        {/* Rotating and bouncing logo */}
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] h-[120px] animate-bounce rounded-full animate-spin-slow p-[20px] shadow-lg shadow-[#F0FF6C]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoaderNoConfig;
