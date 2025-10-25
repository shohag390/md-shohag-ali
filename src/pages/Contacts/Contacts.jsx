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
import { useTheme } from "../../context/ThemeContext";

const Contacts = () => {
  const { theme } = useTheme();
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
    <div className="2xl:px-[180px] lg:px-[100px] px-[20px] 2x:py-[80px] lg:py-[60px] py-[40px]">
      <div data-aos="fade-right">
        <SectionHeader
          title={"Contact Me"}
          subtitleOne={"Get in touch to discuss"}
          subtitleTwo={"your next project"}
        />
      </div>

      <div
        className="flex lg:flex-row flex-col justify-between 2xl:gap-[80px] lg:gap-[60px] gap-[40px] 2xl:pb-[60px] lg:pb-[50px] pb-[40px]"
        data-aos="fade-left"
      >
        {/* Left Side */}
        <div className="lg:w-1/2 w-full">
          <h4
            className={`font-bold ${
              theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
            } lg:text-[20px] text-[18px]`}
          >
            Get in touch
          </h4>
          <p
            className={`${
              theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
            } text-justify lg:pt-[10px] pt-[2px] lg:pb-[20px] pb-[10px]`}
          >
            I'm a passionate Frontend Developer who loves turning ideas into
            beautiful, responsive, and user-friendly web experiences. I
            specialize in React, Tailwind CSS, and modern JavaScript (ES6+),
            crafting clean and efficient code that brings designs to life.
          </p>

          <div
            className={`flex flex-col 2xl:gap-[25px] lg:gap-[20px] gap-[15px] lg:pb-[30PX] pb-[20px] border-b-[1px] ${
              theme === "light" ? "border-[#ffffff36]" : "border-[#9aa3a1]"
            } `}
          >
            <div className="flex items-center lg:gap-[20px] gap-[10px]">
              <div
                className={`2xl:text-[45px] lg:text-[40px] text-[35px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } 2xl:h-[60px] lg:h-[55px] h-[50px] 2xl:w-[60px] lg:w-[55px] w-[50px] flex items-center justify-center lg:rounded-2xl rounded-xl`}
              >
                <MdOutlineMailOutline />
              </div>
              <div>
                <p
                  className={`${
                    theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
                  } lg:text-[18px] text-[16px]`}
                >
                  Email Me At:
                </p>
                <h4
                  className={`font-medium ${
                    theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
                  }`}
                >
                  shohag.webdev@gmail.com
                </h4>
              </div>
            </div>
            <div className="flex items-center lg:gap-[20px] gap-[10px]">
              <div
                className={`2xl:text-[35px] lg:text-[30px] text-[25px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } 2xl:h-[60px] lg:h-[55px] h-[50px] 2xl:w-[60px] lg:w-[55px] w-[50px] flex items-center justify-center lg:rounded-2xl rounded-xl`}
              >
                <LuPhoneCall />
              </div>
              <div>
                <p
                  className={`${
                    theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
                  } lg:text-[18px] text-[16px]`}
                >
                  WhatsApp Number:
                </p>
                <h4
                  className={`font-medium ${
                    theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
                  }`}
                >
                  +880 1315-390470
                </h4>
              </div>
            </div>
            <div className="flex items-center lg:gap-[20px] gap-[10px]">
              <div
                className={`2xl:text-[35px] lg:text-[30px] text-[25px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } 2xl:h-[60px] lg:h-[55px] h-[50px] 2xl:w-[60px] lg:w-[55px] w-[50px] flex items-center justify-center lg:rounded-2xl rounded-xl`}
              >
                <FaLocationDot />
              </div>
              <div>
                <p
                  className={`${
                    theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
                  } lg:text-[18px] text-[16px]`}
                >
                  Location
                </p>
                <h4
                  className={`font-medium ${
                    theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
                  }`}
                >
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
              href="https://www.linkedin.com/in/md-shohag-ali29/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`h-[45px] w-[45px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } text-[20px] flex items-center justify-center rounded-xl card duration-300`}
              >
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/shohag390"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`h-[45px] w-[45px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } text-[20px] flex items-center justify-center rounded-xl card duration-300`}
              >
                <TbBrandGithubFilled />
              </div>
            </a>
            <a
              href="https://web.facebook.com/smshohag.hossen.790/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`h-[45px] w-[45px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } text-[20px] flex items-center justify-center rounded-xl card duration-300`}
              >
                <FaFacebookF />
              </div>
            </a>
          </div>
        </div>

        {/* Right Side  */}
        <div
          className={`lg:w-1/2 w-full ${
            theme === "light"
              ? "bg-[#1f29370e] border-[#1f29370e]"
              : "bg-[#FFFFFF0F] border-[#ffffff1d]"
          } 2xl:p-[25px] lg:p-[20px]  p-[15px] rounded-2xl border-[1px]`}
        >
          <h4
            className={`font-bold ${
              theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
            } lg:text-[20px] text-[18px]`}
          >
            Send me a message
          </h4>
          <p
            className={`${
              theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
            } text-justify lg:pt-[10px] pt-[2px] lg:pb-[20px] pb-[10px]`}
          >
            Turning ideas into interactive, user-friendly websites is what I do
            best. Feel free to reach out I'd love to collaborate with you!
          </p>
          {/* Form  */}
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex flex-col 2xl:gap-[30px] lg:gap-[20px] gap-[15px]"
          >
            <input
              className={`2xl:py-[14px] ${
                theme === "light"
                  ? "bg-[#1f29370e] border-[#1f29370e] placeholder:text-[#1f2937] text-[#1f2937]"
                  : "bg-[#FFFFFF0F] border-[#ffffff1d] placeholder:text-[#9aa3a1] text-[#9aa3a1]"
              } lg:py-[12px] py-[10px] lg:px-[20px] px-[25px] w-full rounded-xl border-[1px] hover:border-[#F0FF6C] focus:outline-0`}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <div className="flex lg:flex-row flex-col 2xl:gap-[30px] lg:gap-[20px] gap-[15px]">
              <input
                className={`2xl:py-[14px] ${
                  theme === "light"
                    ? "bg-[#1f29370e] border-[#1f29370e] placeholder:text-[#1f2937] text-[#1f2937]"
                    : "bg-[#FFFFFF0F] border-[#ffffff1d] placeholder:text-[#9aa3a1] text-[#9aa3a1]"
                } lg:py-[12px] py-[10px] lg:px-[20px] px-[25px] w-full rounded-xl border-[1px] hover:border-[#F0FF6C] focus:outline-0`}
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
                className={`2xl:py-[14px] ${
                  theme === "light"
                    ? "bg-[#1f29370e] border-[#1f29370e] placeholder:text-[#1f2937] text-[#1f2937]"
                    : "bg-[#FFFFFF0F] border-[#ffffff1d] placeholder:text-[#9aa3a1] text-[#9aa3a1]"
                } lg:py-[12px] py-[10px] lg:px-[20px] px-[25px] w-full rounded-xl border-[1px] hover:border-[#F0FF6C] focus:outline-0`}
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
              className={`2xl:py-[14px] ${
                theme === "light"
                  ? "bg-[#1f29370e] border-[#1f29370e] placeholder:text-[#1f2937] text-[#1f2937]"
                  : "bg-[#FFFFFF0F] border-[#ffffff1d] placeholder:text-[#9aa3a1] text-[#9aa3a1]"
              } lg:py-[12px] py-[10px] lg:px-[20px] px-[25px] w-full rounded-xl border-[1px] hover:border-[#F0FF6C] focus:outline-0`}
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
                className="lg:py-[14px] py-[10px] lg:px-[40px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9] active:scale-[.9] card"
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
