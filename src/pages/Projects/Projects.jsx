import React from "react";
import imageOne from "../../assets/medical-ecommarch.jpg";
import imageTwo from "../../assets/job-portal.jpg";
import imageThree from "../../assets/car-reant.jpg";
import { Link } from "react-router";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { HiExternalLink } from "react-icons/hi";
import { IoCodeSlash, IoServerSharp } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";

const projects = [
  {
    image: imageOne,
    liveLink: "https://medik-classicshops.netlify.app/",
    clientGitHub: "https://github.com/shohag390/medical-ecomm-client",
    serverGitHub: "https://github.com/shohag390/medical-ecomm-server",
    title: "Multi-Vendor Medicine E-Commerce Website",
    description:
      "A full-featured medicine e-commerce platform with admin, seller, and user dashboards, Stripe payments, and product management.",
  },
  {
    image: imageTwo,
    liveLink: "https://fantastic-lebkuchen-d3cbcb.netlify.app/",
    clientGitHub: "https://github.com/shohag390/job-portal-client",
    serverGitHub: "https://github.com/shohag390/job-portal-server",
    title: "Job Portal And Management System Project",
    description:
      "A complete job portal with job posting, user authentication, and management functionalities using React and Node.js.",
  },
  {
    image: imageThree,
    liveLink: "https://car-rent-bd.netlify.app/",
    clientGitHub: "https://github.com/shohag390/car-rent-client",
    serverGitHub: "https://github.com/shohag390/car-rent-server",
    title: "Car Rental Booking React Web Application",
    description:
      "A modern car rental web app allowing users to browse, book, and manage vehicles with smooth UI and secure authentication.",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  return (
    <div className="2xl:px-[180px] lg:px-[100px] px-[20px] 2xl:py-[80px] lg:py-[60px] py-[40px]">
      <div data-aos="fade-right">
        <SectionHeader
          title={"My Projects"}
          subtitleOne={"Innovative Best Design for"}
          subtitleTwo={"My Projects"}
        />
      </div>

      <div
        className="grid lg:grid-cols-3 grid-cols-1 2xl:gap-[30px] lg:gap-[25px] gap-[20px]"
        data-aos="fade-left"
      >
        {projects?.map((item, index) => (
          <div
            key={index}
            className={`${
              theme === "light"
                ? "bg-[#1f29370e] border-[#1f29370e]"
                : "bg-[#FFFFFF0F] border-[#ffffff1d]"
            } lg:p-[25px] p-[20px] rounded-2xl border-[1px] hover:border-[#F0FF6C] duration-500 cursor-pointer card`}
          >
            {/* Image */}
            <img
              src={item?.image}
              alt={item?.title}
              className="2xl:h-[250px] lg:h-[220px] h-[200px] w-full rounded-xl"
            />

            {/* Project Info */}
            <div className="lg:pt-[10px] pt-[8px]">
              <h4
                className={`font-bold ${
                  theme === "light" ? "text-[#f0f4f8]" : "text-[#ffffffd5]"
                } lg:text-[20px] text-[18px] line-clamp-1`}
              >
                {item?.title}
              </h4>
              <p
                className={`${
                  theme === "light" ? "text-[#1f2937]" : "text-[#9aa3a1]"
                } text-justify lg:pt-[10px] pt-[2px] pb-[10px]`}
              >
                {item?.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="lg:pt-[10px] flex gap-[10px]">
              <a
                href={item?.clientGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`h-[50px] w-[50px] ${
                    theme === "light"
                      ? "bg-[#1f2937] text-[#F0FF6C]"
                      : "bg-[#6bfdd822] text-[#F0FF6C]"
                  } flex items-center justify-center text-[25px] rounded-xl`}
                >
                  <IoCodeSlash />
                </div>
              </a>
              <a
                href={item?.serverGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`h-[50px] w-[50px] ${
                    theme === "light"
                      ? "bg-[#1f2937] text-[#F0FF6C]"
                      : "bg-[#6bfdd822] text-[#F0FF6C]"
                  } flex items-center justify-center text-[25px] rounded-xl`}
                >
                  <IoServerSharp />
                </div>
              </a>
              <a
                href={item?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`h-[50px] w-[50px] ${
                    theme === "light"
                      ? "bg-[#1f2937] text-[#F0FF6C]"
                      : "bg-[#6bfdd822] text-[#F0FF6C]"
                  } flex items-center justify-center text-[25px] rounded-xl`}
                >
                  <HiExternalLink />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center 2xl:pt-[40px] lg:pt-[35px] pt-[30px]">
        <Link
          to="services"
          className="2xl:py-[14px] lg:py-[10px] py-[7px] 2xl:px-[35px] lg:px-[30px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Projects;
