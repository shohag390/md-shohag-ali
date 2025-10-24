import React from "react";
import imageOne from "../../assets/medical-ecommarch.jpg";
import imageTwo from "../../assets/job-portal.jpg";
import imageThree from "../../assets/car-reant.jpg";
import { Link } from "react-router";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { HiExternalLink } from "react-icons/hi";
import { IoCodeSlash, IoServerSharp } from "react-icons/io5";

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
  return (
    <div className="lg:px-[180px] px-[20px] lg:py-[80px] py-[40px]">
      <div data-aos="fade-right">
        <SectionHeader
          title={"My Projects"}
          subtitleOne={"Innovative Best Design for"}
          subtitleTwo={"My Projects"}
        />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[30px] gap-[20px]">
        {projects?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF0F] lg:p-[25px] p-[20px] rounded-2xl border-[1px] border-[#ffffff1d] hover:border-[#F0FF6C] duration-500 cursor-pointer card"
          >
            {/* Image */}
            <img
              src={item?.image}
              alt={item?.title}
              className="lg:h-[250px] h-[200px] w-full rounded-md"
            />

            {/* Project Info */}
            <div className="lg:pt-[10px] pt-[8px]">
              <h4 className="font-bold text-[#ffffffd5] lg:text-[20px] text-[18px] line-clamp-1">
                {item?.title}
              </h4>
              <p className="text-[#9aa3a1] text-justify lg:pt-[10px] pt-[2px] pb-[10px]">
                {item?.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="lg:pt-[10px] flex gap-2">
              <a
                href={item?.clientGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-[50px] w-[50px] bg-[#6bfdd822] text-[#F0FF6C] flex items-center justify-center text-[25px] rounded-xl">
                  <IoCodeSlash />
                </div>
              </a>
              <a
                href={item?.serverGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-[50px] w-[50px] bg-[#6bfdd822] text-[#F0FF6C] flex items-center justify-center text-[25px] rounded-xl">
                  <IoServerSharp />
                </div>
              </a>
              <a
                href={item?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-[50px] w-[50px] bg-[#6bfdd822] text-[#F0FF6C] flex items-center justify-center text-[25px] rounded-xl">
                  <HiExternalLink />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <Link
          to="services"
          className="lg:py-[14px] py-[10px] lg:px-[40px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Projects;
