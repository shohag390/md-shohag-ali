import { MdOutlineMailOutline } from "react-icons/md";
import image from "../../assets/about.png";
import { LuPhoneCall } from "react-icons/lu";
import CountUp from "react-countup";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="2xl:px-[180px] lg:px-[100px] px-[20px] 2xl:py-[80px] lg:py-[60px] py-[40px] flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-[30px]">
      {/* Left Site */}
      <div data-aos="fade-up">
        <img className="2xl:h-[500px] lg:h-[450px] h-full" src={image} alt="" />
      </div>

      {/* Right Side  */}
      <div className="lg:w-[50%] w-full" data-aos="fade-up">
        <div className="flex items-center gap-[10px] lg:pb-[5px] pb-[3px]">
          <div className="2xl:w-[12px] lg:w-[10px] w-[10px] 2xl:h-[12px] lg:h-[10px] h-[10px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
          <p
            className={`${
              theme === "light" ? "text-[#1f2937]" : "text-[#ffffffd5]"
            } font-medium`}
          >
            About Me
          </p>
        </div>
        <h2
          className={`2xl:text-[40px] lg:text-[35px] text-[25px] lg:font-bold font-semibold ${
            theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
          } flex items-center gap-2`}
        >
          Who is{" "}
          <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
            Md Shohag Ali ?
          </span>
        </h2>
        <p
          className={`${
            theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
          } text-justify 2xl:pt-[15px] lg:pt-[10px] pt-[6px] 2xl:pb-[25px] lg:pb-[20px] pb-[18px]`}
        >
          I'm a dedicated{" "}
          <span className="text-[#ffffffd5] font-semibold">
            Frontend Developer
          </span>{" "}
          with hands-on experience from building{" "}
          <span className="text-[#ffffffd5] font-semibold">10+ real-world</span>{" "}
          projects. I focus on creating responsive, user-friendly web interfaces
          using modern tools and best practices. With a background in{" "}
          <span className="text-[#ffffffd5] font-semibold">
            Diploma Engineering
          </span>
          , I bring both technical understanding and practical problem-solving
          to every project. My core skills include:{" "}
          <span className="text-[#ffffffd5] font-semibold">
            HTML, CSS, Tailwind CSS, JavaScript (ES6), React, React Router,
            Firebase Authentication, Git & GitHub.
          </span>
        </p>
        <p
          className={`${
            theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
          } text-justify`}
        >
          I'm passionate about delivering clean UI, optimized performance, and
          smooth user experiences. Outside of tech, I enjoy playing football,
          which has helped me develop teamwork, discipline, and focus —
          qualities I reflect in my work.
        </p>

        {/* Contacts Me */}
        <div className="2xl:pt-[28px] lg:pt-[20px] pt-[15px] flex lg:flex-row flex-col justify-between lg:gap-0 gap-[20px]">
          <div className="flex flex-col 2xl:gap-[25px] lg:gap-[20px] gap-[15px]">
            <div className="flex items-center 2xl:gap-[20px] lg:gap-[15px] gap-[10px]">
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
                className={`2xl:text-[40px] lg:text-[35px] text-[30px] ${
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
          </div>

          {/* All Projects */}
          <div>
            <div
              className={`${
                theme === "light"
                  ? "bg-[#1f29370e] border-[#1f29370e]"
                  : "bg-[#6bfdd822] border-[#ffffff1d]"
              } text-[#F0FF6C] 2xl:h-[150px] lg:h-[130px] h-[120px] 2xl:w-[150px] lg:w-[130px] w-[120px] flex border-1 items-center justify-center lg:rounded-2xl rounded-xl`}
            >
              <div className="text-center">
                <h2 className="lg:text-[40px] text-[35px] font-bold bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
                  <CountUp start={0} end={10} duration={2} />+
                </h2>
                <p
                  className={`${
                    theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
                  } lg:text-[18px] text-[16px] uppercase`}
                >
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
