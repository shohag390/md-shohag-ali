import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import logo from "../../assets/logo.png";
import {
  MdEmail,
  MdKeyboardDoubleArrowRight,
  MdMyLocation,
} from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const quickLinks = [
  { id: 1, path: "/", display: "Home" },
  { id: 2, path: "/about", display: "About" },
  { id: 3, path: "/services", display: "Services" },
  { id: 4, path: "/projects", display: "Projects" },
  { id: 5, path: "/contact", display: "Contact" },
];

const myServices = [
  { id: 1, display: "Responsive Web Design" },
  { id: 2, display: "UI/UX Implementation" },
  { id: 3, display: "Performance Optimization" },
  { id: 4, display: "API Integration" },
  { id: 5, display: "Single Page Applications (SPA)" },
];

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`${
        theme === "light"
          ? "bg-[#66bfe2] border-[#ffffff36]"
          : "bg-[#163031] border-[#FFFFFF0F]"
      } 2xl:pt-[80px] lg:pt-[60px] pt-[40px] 2xl:px-[180px] border-t lg:px-[100px] px-[20px] text-white`}
    >
      <div className="flex lg:flex-row flex-col justify-between border-b border-[#9aa3a1] pb-[40px] lg:gap-0 gap-[20px]">
        {/* Logo and description */}
        <div className="lg:w-[35%] w-full">
          <Link to={"/"}>
            <img
              className="2xl:h-[55px] lg:h-[40px] h-[35px]"
              src={logo}
              alt=""
            />
          </Link>
          <p
            className={`${
              theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
            } pt-[18px] pb-[20px] text-justify lg:w-[70%] w-full`}
          >
            Crafting intuitive, user-centric designs that bring ideas to life.
            With a passion for innovation and creativity, I help businesses and
            individuals grow digitally.
          </p>

          <div className="flex items-center gap-[15px]">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-[45px] w-[45px] ${
                theme === "light"
                  ? "bg-[#1f2937] text-[#F0FF6C]"
                  : "bg-[#6bfdd822] text-[#F0FF6C]"
              } text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] duration-300 card`}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-[45px] w-[45px] ${
                theme === "light"
                  ? "bg-[#1f2937] text-[#F0FF6C]"
                  : "bg-[#6bfdd822] text-[#F0FF6C]"
              } text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] duration-300 card`}
            >
              <TbBrandGithubFilled />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-[45px] w-[45px] ${
                theme === "light"
                  ? "bg-[#1f2937] text-[#F0FF6C]"
                  : "bg-[#6bfdd822] text-[#F0FF6C]"
              } text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] duration-300 card`}
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:w-[20%] w-full">
          <h4
            className={`font-bold ${
              theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
            } lg:text-[20px] text-[18px] lg:pb-[20px] pb-[10px]`}
          >
            Quick Links
          </h4>
          <ul
            className={`space-y-3 ${
              theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
            }`}
          >
            {quickLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-[#F0FF6C] transition-all duration-300 flex items-center lg:gap-[10px] gap-[8px]"
                >
                  <div>
                    <MdKeyboardDoubleArrowRight />
                  </div>
                  <span>{item.display}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* My Services */}
        <div className="lg:w-[20%] w-full">
          <h4
            className={`font-bold ${
              theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
            } lg:text-[20px] text-[18px] lg:pb-[20px] pb-[10px]`}
          >
            My Services
          </h4>
          <ul
            className={`space-y-3 ${
              theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
            }`}
          >
            {myServices.map((service) => (
              <li
                key={service.id}
                className="hover:text-[#F0FF6C] transition-all duration-300 flex items-center lg:gap-[10px] gap-[8px]"
              >
                <div>
                  <MdKeyboardDoubleArrowRight />
                </div>
                <span>{service.display}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:w-[20%] w-full">
          <h4
            className={`font-bold ${
              theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
            } lg:text-[20px] text-[18px] lg:pb-[20px] pb-[10px]`}
          >
            Contact Info
          </h4>
          <ul
            className={`space-y-3 ${
              theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
            }`}
          >
            <li className="flex items-center lg:gap-[10px] gap-[8px]">
              <MdEmail />
              <span className="">shohag.webdev@gmail.com</span>
            </li>
            <li className="flex items-center lg:gap-[10px] gap-[8px]">
              <MdMyLocation />
              <span>Kushtia, Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center py-[20px] text-[#9aa3a1]">
        &copy; 2025 <span className="text-[#F0FF6C]">Md Shohag Ali</span>. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
