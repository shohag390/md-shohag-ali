import React from "react";

const SectionHeader = ({ title, subtitleOne, subtitleTwo }) => {
  return (
    <div>
      <div className="flex items-center gap-[10px] lg:pb-[15px] pb-[8px]">
        <div className="lg:w-[12px] w-[10px] lg:h-[12px] h-[10px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
        <p className="text-[#ffffffd5] font-medium">{title}</p>
      </div>
      <h2 className="lg:text-[35px] text-[22px] font-bold lg:leading-[45px] leading-[30px] text-[#ffffffd5] lg:pb-[30px] pb-[20px] capitalize">
        {subtitleOne} <br />
        <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
          {subtitleTwo}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeader;
