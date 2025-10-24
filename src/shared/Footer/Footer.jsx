import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import logo from "../../assets/logo.png";

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
  return (
    <footer className="bg-[#163031] border-t border-[#FFFFFF0F] pt-[80px] lg:px-[140px] md:px-[50px] px-[20px] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] border-b border-[#9aa3a1] pb-[40px]">
        {/* Logo and description */}
        <div>
          <Link to="/">
            <img className="h-[45px]" src={logo} alt="Logo" />
          </Link>
          <p className="text-[#9aa3a1] pt-[18px] pb-[20px] text-justify">
            Crafting intuitive, user-centric designs that bring ideas to life.
            With a passion for innovation and creativity, I help businesses and
            individuals grow digitally.
          </p>

          <div className="flex items-center gap-[15px]">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] w-[45px] bg-[#6bfdd822] text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] hover:bg-[#F0FF6C] hover:text-[#163031] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] w-[45px] bg-[#6bfdd822] text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] hover:bg-[#F0FF6C] hover:text-[#163031] transition-all duration-300"
            >
              <TbBrandGithubFilled />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] w-[45px] bg-[#6bfdd822] text-[20px] flex items-center justify-center rounded-xl text-[#F0FF6C] hover:bg-[#F0FF6C] hover:text-[#163031] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[22px] font-semibold pb-[20px] text-[#F0FF6C]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[#9aa3a1]">
            {quickLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-[#F0FF6C] transition-all duration-300"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* My Services */}
        <div>
          <h3 className="text-[22px] font-semibold pb-[20px] text-[#F0FF6C]">
            My Services
          </h3>
          <ul className="space-y-3 text-[#9aa3a1]">
            {myServices.map((service) => (
              <li
                key={service.id}
                className="hover:text-[#F0FF6C] transition-all duration-300"
              >
                {service.display}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[22px] font-semibold pb-[20px] text-[#F0FF6C]">
            Contact Info
          </h3>
          <ul className="space-y-3 text-[#9aa3a1]">
            <li>
              Email:{" "}
              <span className="text-[#F0FF6C]">shohag.webdev@gmail.com</span>
            </li>
            <li>Location: Kushtia, Bangladesh</li>
            <li>Available for freelance work</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center py-[20px] text-[#9aa3a1] text-sm">
        © Copyright By <span className="text-[#F0FF6C]">Md Shohag Ali</span>{" "}
        2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
