import image from "../../assets/banner.png";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/md-shohag-ali.pdf";
    link.download = "md-shohag-ali.pdf";
    link.click();
  };
  return (
    <div className="2xl:h-[88vh] lg:h-[90vh] h-full lg:py-0 py-[50px] 2xl:px-[180px] lg:px-[100px] px-[20px] hero flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-[30px]">
      <div className="lg:w-[50%] w-full" data-aos="fade-right">
        <div className="flex items-center gap-[10px] lg:pb-[5px] pb-[3px]">
          <div className="2xl:w-[12px] lg:w-[10px] w-[10px] 2xl:h-[12px] lg:h-[10px] h-[10px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
          <p
            className={`${
              theme === "light" ? "text-[#1f2937]" : "text-[#ffffffd5]"
            } font-medium`}
          >
            Hi, There !
          </p>
        </div>
        <h4
          className={`2xl:text-[40px] lg:text-[35px] text-[25px] lg:font-bold font-semibold ${
            theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
          }`}
        >
          I'm Md Shohag Ali
        </h4>
        <h4
          className={`2xl:text-[40px] lg:text-[35px] text-[25px] lg:font-bold font-semibold flex items-center gap-2 ${
            theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
          }`}
        >
          I'm A
          <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
            <Typewriter
              options={{
                strings: ["Frontend Developer.", "Web Developer."],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h4>
        <p
          className={`${
            theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
          } text-justify 2xl:pt-[15px] lg:pt-[10px] pt-[6px] 2xl:pb-[25px] lg:pb-[20px] pb-[18px]`}
        >
          I'm a passionate Frontend Developer focused on building modern,
          responsive, and user-friendly web applications. I specialize in React,
          Tailwind CSS, and JavaScript, with a strong eye for clean UI and
          smooth UX.
        </p>

        <div className="flex items-center gap-[10px]">
          <button
            onClick={handleDownload}
            className="2xl:py-[14px] lg:py-[10px] py-[7px] 2xl:px-[35px] lg:px-[30px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9] text-[#1f2937]"
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="" data-aos="fade-left">
        <img className="2xl:h-[500px] lg:h-[450px] h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
