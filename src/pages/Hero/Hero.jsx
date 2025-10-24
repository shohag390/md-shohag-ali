import image from "../../assets/banner.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/md-shohag-ali.pdf";
    link.download = "md-shohag-ali.pdf";
    link.click();
  };
  return (
    <div className="lg:h-[88vh] h-full lg:py-0 py-[50px] lg:px-[180px] px-[20px] hero flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-[30px]">
      <div className="lg:w-[50%] w-full" data-aos="fade-right">
        <div className="flex items-center gap-[10px] lg:pb-[5px] pb-[3px]">
          <div className="lg:w-[12px] w-[10px] lg:h-[12px] h-[10px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
          <p className="text-[#ffffffd5] font-medium">Hi, There !</p>
        </div>
        <h4 className="md:text-[35px] text-[25px] lg:font-bold font-semibold text-[#ffffffd5]">
          I'm Md Shohag Ali
        </h4>
        <h4 className="md:text-[35px] text-[25px] lg:font-bold font-semibold text-[#ffffffd5] flex items-center gap-2">
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
        <p className="text-[#9aa3a1] text-justify lg:pt-[15px] pt-[6px] lg:pb-[25px] pb-[18px]">
          I'm a passionate Frontend Developer focused on building modern,
          responsive, and user-friendly web applications. I specialize in React,
          Tailwind CSS, and JavaScript, with a strong eye for clean UI and
          smooth UX.
        </p>

        <div className="flex items-center gap-[10px]">
          <button
            onClick={handleDownload}
            className="lg:py-[14px] py-[10px] lg:px-[40px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="" data-aos="fade-left">
        <img className="lg:h-[500px] h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
