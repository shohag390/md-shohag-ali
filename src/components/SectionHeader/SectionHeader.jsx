import React from "react";
import { useTheme } from "../../context/ThemeContext";

const SectionHeader = ({ title, subtitleOne, subtitleTwo }) => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="flex items-center gap-[10px] 2xl:pb-[15px] lg:pb-[10px] pb-[8px]">
        <div className="2xl:w-[12px] lg:w-[10px] w-[10px] 2xl:h-[12px] lg:h-[10px] h-[10px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
        <p
          className={`${
            theme === "light" ? "text-[#1f2937]" : "text-[#ffffffd5]"
          } font-medium`}
        >
          {title}
        </p>
      </div>
      <h2
        className={`2xl:text-[35px] lg:text-[30px] text-[22px] font-bold 2xl:leading-[45px] lg:leading-[40px] leading-[30px] ${
          theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
        } 2xl:pb-[30px] lg:pb-[25px] pb-[20px] capitalize`}
      >
        {subtitleOne} <br />
        <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
          {subtitleTwo}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeader;
