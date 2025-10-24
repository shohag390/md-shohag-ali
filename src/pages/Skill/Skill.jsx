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
  return (
    <div className="lg:px-[140px] md:px-[50px] px-[20px] py-[80px]">
      <div>
        <div className="flex items-center gap-[10px] pb-[15px]">
          <div className="w-[12px] h-[12px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
          <p className="text-[#ffffffd5] font-medium">My Skills</p>
        </div>
        <h2 className="text-[35px] font-bold leading-[45px] text-[#ffffffd5] pb-[30px]">
          Highly Skilled in Modern <br />
          <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
            Web Development Technologies
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {webDeveloperSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-[#FFFFFF0F] p-5 rounded-xl border border-[#ffffff1d] flex items-center justify-between group"
          >
            {/* Icon */}
            <div className="h-16 w-16 bg-[#6bfdd822] text-[#F0FF6C] flex items-center justify-center text-2xl rounded-xl transform transition-transform duration-300 group-hover:scale-110 hover:shadow">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h4 className="text-[#ffffffd5] text-lg">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
