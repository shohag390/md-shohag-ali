import React from 'react';
import TypingText from '../../Components/TypingText/TypingText';
import image from '../../assets/banner.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Hero = () => {
    return (
        <section className='lg:h-[88vh] h-full w-full scroll-mt-[11vh] bg-[#0f0715] container mx-auto lg:px-[120px] md:px-[50px] px-[20px] flex lg:flex-row flex-col lg:justify-center lg:items-center' id='home'>
            <div className='lg:w-[60%] w-full'>
                <h4 className='lg:text-[28px] text-[20px] font-medium text-gray-400 capitalize'>
                    I'm Md Shohag Ali
                </h4>
                <h1 className="flex items-center gap-[5px] lg:text-[40px] text-[26px] lg:font-bold font-medium bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text capitalize">
                    <span>I'm a</span>
                    <TypingText />
                </h1>
                <p className='text-justify lg:w-[85%] w-full pt-[10px] text-gray-400'>
                    I'm a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications.
                    I specialize in React, Tailwind CSS, and JavaScript, with a strong eye for clean UI and smooth UX.
                </p>

                <div className='flex items-center lg:gap-[20px] gap-[15px] pt-[30px]'>
                    <a href='#' className='h-[45px] lg:px-[40px] px-[35px] uppercase border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] rounded-full lg:text-[16px] text-[14px] shadow-md shadow-[#8750f7] hover:shadow-none'>
                        Resumi
                    </a>
                    <a href='#' className='h-[45px] w-[45px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-full shadow-md shadow-[#8750f7] hover:shadow-none'>
                        <FaFacebookF />
                    </a>
                    <a href='#' className='h-[45px] w-[45px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-full shadow-md shadow-[#8750f7] hover:shadow-none'>
                        <TbBrandGithubFilled />
                    </a>
                    <a href='#' className='h-[45px] w-[45px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-full shadow-md shadow-[#8750f7] hover:shadow-none'>
                        <FaLinkedinIn />
                    </a>
                </div>

            </div>
            <div className="lg:w-[40%] w-full lg:pl-[60px]">
                <img
                    className="lg:h-[65vh] h-[30vh] border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 rotate-[5deg] hover:rotate-0 hover:border-[#8750f7] shadow-[50px_60px_200px_-80px_#8750f7]"
                    src={image}
                    alt=""
                />
            </div>
        </section >
    );
};

export default Hero;