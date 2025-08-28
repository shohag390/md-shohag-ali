import React from 'react';
import image from '../../assets/banner.png';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiRefinedgithub } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { MdVerifiedUser } from 'react-icons/md';
import { RiJavascriptFill } from 'react-icons/ri';
import { IoLogoHtml5 } from 'react-icons/io5';


const Banner = () => {
    return (
        <div className="banner h-[89vh] w-full relative bg-[#212529] overflow-hidden box-border flex items-center justify-center container mx-auto">

            {/* Background Circles */}
            <div className="w-[600px] h-[600px] rounded-full absolute -top-[8%] -left-[8%] bg-[#dc3545] opacity-20 bg-blur"></div>
            <div className="w-[600px] h-[600px] rounded-full absolute left-1/2 transform -translate-x-1/2 -bottom-[15%] bg-[#ffc107] opacity-15 bg-blur"></div>
            <div className="w-[500px] h-[500px] max-w-[600px] max-h-[600px] rounded-full absolute -top-[5%] -right-[5%] bg-[#198754] opacity-30 bg-blur"></div>

            {/* Content */}
            <div className="z-10 absolute h-full w-full flex items-center justify-between lg:px-[120px] md:px-[50px] px-[20px]">
                <div className='w-1/2' data-aos="fade-up-right">
                    <p className='text-[#ffc107] font-bold text-[30px]'>Hello,</p>
                    <h4 className='text-[#f8f9fa] my_name font-bold text-[45px] leading-[60px]'>
                        I'm Md Shohag Ali.
                    </h4>

                    <h2 className="flex items-center capitalize gap-[5px] font-bold text-[30px] pb-[15px] text-grident">
                        <span>
                            I'm a
                        </span>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>

                    <p className='text-[#f8f9fa]'>
                        I'm a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. I specialize in React, Tailwind CSS, and JavaScript, with a strong eye for clean UI and smooth UX.
                    </p>

                    <div className='flex items-center gap-[10px] pt-[30px]'>
                        <button className='btn text-[#ffff] h-[50px] px-[30px] rounded-full'>
                            Contact me!
                        </button>
                        <button className='h-[50px] w-[50px] btn text-[#ffff] rounded-full flex items-center justify-center text-[20px]'>
                            <FaFacebookF />
                        </button>
                        <button className='h-[50px] w-[50px] btn text-[#ffff] rounded-full flex items-center justify-center text-[20px]'>
                            <FaLinkedinIn />
                        </button>
                        <button className='h-[50px] w-[50px] btn text-[#ffff] rounded-full flex items-center justify-center text-[20px]'>
                            <SiRefinedgithub />
                        </button>
                    </div>

                </div>
                <div data-aos="fade-up-left" className="relative h-[500px] image-contaner">
                    <img className='h-[500px] rounded-full w-[500px] image_bg' src={image} alt="" />
                    {/* Overlay Div */}
                    <div className="absolute bottom-[15px] -left-[40px] p-[20px] bg-[#f8f9fa] rounded-full flex items-center hover-effect justify-between gap-[10px] duration-500">
                        <div>
                            <MdVerifiedUser className='text-[40px] text-[#198754]' />
                        </div>
                        <div>
                            <h4 className='font-bold leading-[20px]'>
                                100+
                            </h4>
                            <p className='text-[14px]'>Complete Project</p>
                        </div>
                    </div>
                    <div className="absolute top-[50px] left-[30px] bg-[#f8f9fa] rounded-2xl flex items-center justify-center h-[70px] w-[70px] hover-effect duration-500">
                        <FaReact className='text-[40px] text-[#0dcaf0]' />
                    </div>
                    <div className="absolute top-[5px] right-[80px] bg-[#f8f9fa] rounded-2xl flex items-center justify-center h-[70px] w-[70px] hover-effect  duration-500">
                        <RiJavascriptFill className='text-[40px] text-[#ffc107]' />
                    </div>
                    <div className="absolute bottom-[100px] right-0 bg-[#f8f9fa] rounded-2xl flex items-center justify-center h-[70px] w-[70px] hover-effect duration-500">
                        <IoLogoHtml5 className='text-[40px] text-[#F54927]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner