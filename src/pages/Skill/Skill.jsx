import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiBootstrap,
  SiFigma,
  SiRedux,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useTheme } from "../../context/ThemeContext";

const webDeveloperSkills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 className="text-[#E44D26]" /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    id: 4,
    name: "JavaScript (ES6+)",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
  },
  { id: 5, name: "React.js", icon: <FaReact className="text-[#61DBFB]" /> },
  { id: 6, name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { id: 7, name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
  { id: 8, name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { id: 9, name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" /> },
  { id: 10, name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { id: 11, name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
  { id: 12, name: "GitHub", icon: <FaGithub className="text-white" /> },
  {
    id: 13,
    name: "Bootstrap",
    icon: <SiBootstrap className="text-[#7952B3]" />,
  },
  { id: 14, name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { id: 15, name: "Netlify", icon: <SiNetlify className="text-[#00AD9F]" /> },
  { id: 16, name: "Vercel", icon: <SiVercel className="text-white" /> },
];

const Skill = () => {
  const { theme } = useTheme();

  return (
    <div className="2xl:px-[180px] lg:px-[100px] px-[20px] 2xl:py-[80px] lg:py-[60px] py-[40px]">
      <div data-aos="fade-up">
        <SectionHeader
          title={"My Skills"}
          subtitleOne={"Highly Skilled in Modern"}
          subtitleTwo={"Web Development Technologies"}
        />
      </div>

      <div
        className="grid lg:grid-cols-4 grid-cols-1 2xl:gap-[30px] lg:gap-[25px] gap-[20px]"
        data-aos="fade-up"
      >
        {webDeveloperSkills.map((skill) => (
          <div
            key={skill.id}
            className={`${
              theme === "light"
                ? "bg-[#1f29370e] border-[#1f29370e]"
                : "bg-[#FFFFFF0F] border-[#ffffff1d]"
            } flex items-center justify-between card duration-500 2xl:p-[25px] lg:p-[20px] p-[15px] rounded-2xl border-[1px] hover:border-[#F0FF6C] cursor-pointer`}
          >
            {/* Icon */}
            <div
              className={`2xl:h-[70px] lg:h-[65px] h-[60px] 2xl:w-[70px] lg:w-[65px] w-[60px] ${
                theme === "light" ? "bg-[#1f2937]" : "bg-[#6bfdd822]"
              } flex items-center justify-center rounded-xl 2xl:text-[40px] lg:text-[35px] text-[30px]`}
            >
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h4
              className={`${
                theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
              } 2xl:text-[20px] lg:text-[18px] text-[16px]`}
            >
              {skill.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
