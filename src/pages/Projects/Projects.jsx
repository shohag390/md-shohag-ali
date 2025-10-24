import React from "react";
import imageOne from "../../assets/medical-ecommarch.jpg";
import imageTwo from "../../assets/job-portal.jpg";
import imageThree from "../../assets/car-reant.jpg";
import { Link } from "react-router";

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
    <div className="lg:px-[140px] md:px-[50px] px-[20px] py-[80px] my-projct">
      <div>
        <div className="flex items-center gap-[10px] pb-[15px]">
          <div className="w-[12px] h-[12px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
          <p className="text-[#ffffffd5] font-medium"> My Projects</p>
        </div>
        <h2 className="text-[35px] font-bold leading-[45px] text-[#ffffffd5] pb-[30px] capitalize">
          Innovative Best Design for <br />
          <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
            My Projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF0F] p-5 group rounded-xl border border-[#ffffff1d]"
          >
            {/* Image */}
            <div className="h-80 w-full relative overflow-hidden rounded-lg">
              <img
                src={item?.image}
                alt={item?.title}
                className="h-full w-full object-cover group-hover:scale-110 duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="pt-4">
              <h4 className="font-bold text-[#ffffffd5] text-xl">
                {item?.title}
              </h4>
              <p className="text-[#9aa3a1] text-justify line-clamp-2">
                {item?.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap gap-2">
              <a
                href={item?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full text-black font-medium text-sm hover:from-[#F0FF6C] hover:to-[#6BFDD9] transition"
              >
                Live Demo
              </a>
              <a
                href={item?.clientGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#ffffff1d] rounded-full text-white font-medium text-sm hover:bg-[#6BFDD9] hover:text-black transition"
              >
                Client GitHub
              </a>
              <a
                href={item?.serverGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#ffffff1d] rounded-full text-white font-medium text-sm hover:bg-[#F0FF6C] hover:text-black transition"
              >
                Server GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <Link
          to="services"
          className="py-[14px] px-[40px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Projects;
