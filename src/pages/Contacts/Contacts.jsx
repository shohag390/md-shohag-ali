import React from "react";
import CountUp from "react-countup";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import GoogleMapIframe from "../../components/GoogleMapIframe/GoogleMapIframe";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Contacts = () => {
  return (
    <div className="lg:px-[180px] px-[20px] lg:py-[80px] py-[40px]">
      <div data-aos="fade-right">
        <SectionHeader
          title={"Contact Me"}
          subtitleOne={"Get in touch to discuss"}
          subtitleTwo={"your next project"}
        />
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:gap-[30px] gap-[20px] lg:pb-[40px] pb-[30px]">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full">
          <h4 className="font-bold text-[#ffffffd5] lg:text-[20px] text-[18px]">
            Get in touch
          </h4>
          <p className="text-[#9aa3a1] text-justify lg:pt-[10px] pt-[2px] lg:pb-[20px] pb-[10px]">
            I'm a passionate Frontend Developer who loves turning ideas into
            beautiful, responsive, and user-friendly web experiences. I
            specialize in React, Tailwind CSS, and modern JavaScript (ES6+),
            crafting clean and efficient code that brings designs to life.
          </p>
        </div>

        {/* Right Side  */}
        <div className="lg:w-1/2 w-full bg-[#FFFFFF0F] lg:p-[25px] p-[20px] rounded-2xl border-[1px] border-[#ffffff1d]">
          <h4 className="font-bold text-[#ffffffd5] lg:text-[20px] text-[18px]">
            Send me a message
          </h4>
          <p className="text-[#9aa3a1] text-justify lg:pt-[10px] pt-[2px] lg:pb-[20px] pb-[10px]">
            Turning ideas into interactive, user-friendly websites is what I do
            best. Feel free to reach out I'd love to collaborate with you!
          </p>
          {/* Form  */}
          <form className="flex flex-col lg:gap-[30px] gap-[15px]">
            <input
              className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1]"
              type="text"
              placeholder="Enter Your Name"
            />
            <div className="flex lg:flex-row flex-col lg:gap-[30px] gap-[15px]">
              <input
                className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1]"
                type="email"
                placeholder="Enter Your Email"
              />
              <input
                className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1]"
                type="number"
                placeholder="Enter Your Number"
              />
            </div>
            <textarea
              className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1]"
              rows={4}
              placeholder="Text Message"
            ></textarea>
            <div>
              <button className="lg:py-[14px] py-[10px] lg:px-[40px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <GoogleMapIframe />
    </div>
  );
};

export default Contacts;
