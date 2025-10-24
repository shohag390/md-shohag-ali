import { MdOutlineMailOutline } from "react-icons/md";
import image from "../../assets/about.png";
import { LuPhoneCall } from "react-icons/lu";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="lg:px-[180px] px-[20px] lg:py-[80px] py-[40px] flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-[30px]">
      {/* Left Site */}
      <div data-aos="fade-right">
        <img className="lg:h-[500px] h-full" src={image} alt="" />
      </div>

      {/* Right Side  */}
      <div className="lg:w-[50%] w-full" data-aos="fade-left">
        <div className="flex items-center gap-[10px] lg:pb-[5px] pb-[3px]">
          <div className="lg:w-[12px] w-[10px] lg:h-[12px] h-[10px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
          <p className="text-[#ffffffd5] font-medium">About Me</p>
        </div>
        <h2 className="md:text-[35px] text-[25px] lg:font-bold font-semibold text-[#ffffffd5] flex items-center gap-2">
          Who is{" "}
          <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
            Md Shohag Ali ?
          </span>
        </h2>
        <p className="text-[#9aa3a1] text-justify lg:pt-[15px] pt-[6px] lg:pb-[25px] pb-[18px]">
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
        <p className="text-[#9aa3a1] text-justify">
          I'm passionate about delivering clean UI, optimized performance, and
          smooth user experiences. Outside of tech, I enjoy playing football,
          which has helped me develop teamwork, discipline, and focus —
          qualities I reflect in my work.
        </p>

        {/* Contacts Me */}
        <div className="lg:pt-[28px] pt-[15px] flex lg:flex-row flex-col justify-between lg:gap-0 gap-[20px]">
          <div className="flex flex-col lg:gap-[25px] gap-[15px]">
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
          </div>

          {/* All Projects */}
          <div>
            <div className="bg-[#6bfdd822] text-[#F0FF6C] lg:h-[150px] h-[120px] lg:w-[150px] w-[120px] flex items-center justify-center lg:rounded-2xl rounded-xl">
              <div className="text-center">
                <h2 className="lg:text-[40px] text-[35px] font-bold bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
                  <CountUp start={0} end={10} duration={2} />+
                </h2>
                <p className="text-[#9aa3a1] lg:text-[18px] text-[16px] uppercase">
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
