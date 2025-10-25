import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import GoogleMapIframe from "../../components/GoogleMapIframe/GoogleMapIframe";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

const Contacts = () => {
  const [state, handleSubmit] = useForm("xkgpwqlj");

  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div className="lg:px-[180px] px-[20px] lg:py-[80px] py-[40px]">
      <div data-aos="fade-right">
        <SectionHeader
          title={"Contact Me"}
          subtitleOne={"Get in touch to discuss"}
          subtitleTwo={"your next project"}
        />
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:gap-[80px] gap-[40px] lg:pb-[60px] pb-[40px]">
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

          <div className="flex flex-col lg:gap-[25px] gap-[15px] lg:pb-[30PX] pb-[20px] border-b-[1px] border-[#9aa3a1]">
            <div className="flex items-center lg:gap-[20px] gap-[10px]">
              <div className="lg:text-[45px] text-[35px] bg-[#6bfdd822] text-[#F0FF6C] lg:h-[60px] h-[50px] lg:w-[60px] w-[50px] flex items-center justify-center lg:rounded-2xl rounded-xl">
                <MdOutlineMailOutline />
              </div>
              <div>
                <p className="text-[#ffffffd5] lg:text-[18px] text-[16px]">
                  Email Me At:
                </p>
                <h4 className="font-medium text-[#9aa3a1]">
                  shohag.webdev@gmail.com
                </h4>
              </div>
            </div>
            <div className="flex items-center lg:gap-[20px] gap-[10px]">
              <div className="lg:text-[45px] text-[35px] bg-[#6bfdd822] text-[#F0FF6C] lg:h-[60px] h-[50px] lg:w-[60px] w-[50px] flex items-center justify-center lg:rounded-2xl rounded-xl">
                <LuPhoneCall />
              </div>
              <div>
                <p className="text-[#ffffffd5] lg:text-[18px] text-[16px]">
                  WhatsApp Number:
                </p>
                <h4 className="font-medium text-[#9aa3a1]">+880 1315-390470</h4>
              </div>
            </div>
            <div className="flex items-center lg:gap-[20px] gap-[10px]">
              <div className="lg:text-[35px] text-[25px] bg-[#6bfdd822] text-[#F0FF6C] lg:h-[60px] h-[50px] lg:w-[60px] w-[50px] flex items-center justify-center lg:rounded-2xl rounded-xl">
                <FaLocationDot />
              </div>
              <div>
                <p className="text-[#ffffffd5] lg:text-[18px] text-[16px]">
                  Location
                </p>
                <h4 className="font-medium text-[#9aa3a1]">
                  Kushtia, Dhaka, Bangladesh
                </h4>
              </div>
            </div>
          </div>
          <h4 className="text-[#ffffffd5] lg:text-[18px] text-[16px] lg:pt-[15px] pt-[10px]">
            Follow my social media
          </h4>

          <div className="flex items-center gap-[15px] pt-[10px]">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] w-[45px] bg-[#6bfdd822] text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] bg-gradient-to-r hover:from-[#F0FF6C] hover:to-[#6BFDD9]] hover:text-[#163031] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] w-[45px] bg-[#6bfdd822] text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] bg-gradient-to-r hover:from-[#F0FF6C] hover:to-[#6BFDD9] hover:text-[#163031] transition-all duration-300"
            >
              <TbBrandGithubFilled />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] w-[45px] bg-[#6bfdd822] text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] bg-gradient-to-r hover:from-[#F0FF6C] hover:to-[#6BFDD9] hover:text-[#163031] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
          </div>
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
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex flex-col lg:gap-[30px] gap-[15px]"
          >
            <input
              className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1] text-[#9aa3a1]"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <div className="flex lg:flex-row flex-col lg:gap-[30px] gap-[15px]">
              <input
                className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1] text-[#9aa3a1]"
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input
                className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1] text-[#9aa3a1]"
                type="number"
                id="number"
                name="number"
                placeholder="Enter Your Number"
              />
              <ValidationError
                prefix="number"
                field="number"
                errors={state.errors}
              />
            </div>
            <textarea
              className="lg:py-[14px] py-[10px] lg:px-[20px] px-[25px] w-full bg-[#FFFFFF0F] rounded-xl border-[1px] hover:border-[#F0FF6C] border-[#ffffff1d] focus:outline-0 placeholder:text-[#9aa3a1] text-[#9aa3a1]"
              rows={4}
              id="message"
              name="message"
              placeholder="Text Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="lg:py-[14px] py-[10px] lg:px-[40px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
              >
                {state.submitting ? "Sending..." : "Send Message"}
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
