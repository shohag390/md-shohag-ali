import {
  FaMobileAlt,
  FaLaptopCode,
  FaBug,
  FaServer,
  FaRocket,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { MdDesignServices, MdSpeed, MdWeb } from "react-icons/md";
import { Link } from "react-router";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useTheme } from "../../context/ThemeContext";

const servicesItem = [
  {
    id: "01",
    title: "Responsive Web Design",
    subtitle:
      "Creating mobile-friendly, pixel-perfect layouts using HTML, CSS, and modern frameworks.",
    icon: <FaMobileAlt />,
    offerings: [
      "Mobile-first UI",
      "Cross-browser compatibility",
      "Fluid layouts",
      "Modern CSS frameworks",
      "Accessible designs",
    ],
  },
  {
    id: "02",
    title: "Single Page Applications (SPA)",
    subtitle:
      "Building fast and dynamic SPAs using React and other modern frameworks.",
    icon: <SiReact />,
    offerings: [
      "React-based architecture",
      "Routing and navigation",
      "State management",
      "Dynamic rendering",
      "Reusable components",
    ],
  },
  {
    id: "03",
    title: "UI/UX Implementation",
    subtitle:
      "Converting Figma/PSD/Sketch designs into functional and interactive web interfaces.",
    icon: <MdDesignServices />,
    offerings: [
      "Pixel-perfect conversion",
      "Responsive layouts",
      "Micro-interactions",
      "Modern animations",
      "User-focused UI",
    ],
  },
  {
    id: "04",
    title: "Performance Optimization",
    subtitle:
      "Improving website speed, reducing bundle size, and optimizing assets.",
    icon: <MdSpeed />,
    offerings: [
      "Lazy loading",
      "Code splitting",
      "Image compression",
      "Minified assets",
      "Improved Core Web Vitals",
    ],
  },
  {
    id: "05",
    title: "API Integration",
    subtitle: "Connecting frontend apps with REST or GraphQL APIs securely.",
    icon: <FaServer />,
    offerings: [
      "REST API setup",
      "GraphQL support",
      "Data handling",
      "Error management",
      "Secure authentication",
    ],
  },
  {
    id: "06",
    title: "Landing Page Development",
    subtitle: "Developing SEO-friendly and conversion-optimized landing pages.",
    icon: <MdWeb />,
    offerings: [
      "Single-page layout",
      "High conversion design",
      "Call-to-action focus",
      "SEO structure",
      "A/B testing ready",
    ],
  },
];

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className="2xl:px-[180px] lg:px-[100px] px-[20px] 2xl:pt-[50px] lg:pt-[40] pt-[35px] 2xl:pb-[80px] lg:pb-[60px] pb-[40px]">
      <div data-aos="fade-right">
        <SectionHeader
          title={"My Services"}
          subtitleOne={"Innovative best design and"}
          subtitleTwo={"web development services"}
        />
      </div>
      <div
        className="grid lg:grid-cols-3 grid-cols-1 2xl:gap-[30px] lg:gap-[25px] gap-[20px]"
        data-aos="fade-left"
      >
        {servicesItem?.map((item) => (
          <div
            key={item?.id}
            className={`${
              theme === "light"
                ? "bg-[#1f29370e] border-[#1f29370e]"
                : "bg-[#FFFFFF0F] border-[#ffffff1d]"
            } lg:p-[25px] p-[20px] rounded-2xl border-[1px] hover:border-[#F0FF6C] duration-500 cursor-pointer card`}
            // data-aos="zoom-in"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div
                className={`h-[50px] w-[50px] ${
                  theme === "light"
                    ? "bg-[#1f2937] text-[#F0FF6C]"
                    : "bg-[#6bfdd822] text-[#F0FF6C]"
                } flex items-center justify-center text-[25px] rounded-xl`}
              >
                {item?.icon}
              </div>
              <h1
                className={`text-[40px] font-bold text-transparent stroke-color ${
                  theme === "light" ? "opacity-50" : "opacity-35"
                } `}
              >
                {item?.id}
              </h1>
            </div>

            {/* cart body */}
            <div className="pt-[20px]">
              <h4
                className={`font-bold ${
                  theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
                } lg:text-[20px] text-[18px]`}
              >
                {item?.title}
              </h4>
              <p
                className={`${
                  theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
                } text-justify lg:pt-[10px] pt-[2px] lg:pb-[20px] pb-[10px]`}
              >
                {item?.subtitle}
              </p>
              {/* Offerings List */}
              <ul className="lg:space-y-2 space-y-1">
                {item.offerings.map((offer, index) => (
                  <li
                    key={index}
                    className={`flex items-center lg:gap-[20px] gap-[10px] ${
                      theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        theme === "light" ? "bg-[#f0f4f8]" : "bg-[#ffffffd5]"
                      } rounded-full flex-shrink-0`}
                    ></span>
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center 2xl:pt-[40px] lg:pt-[35px] pt-[30px]">
        <Link
          to="services"
          className="2xl:py-[14px] lg:py-[10px] py-[7px] 2xl:px-[35px] lg:px-[30px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
        >
          View All Project
        </Link>
      </div>
    </div>
  );
};

export default Services;
