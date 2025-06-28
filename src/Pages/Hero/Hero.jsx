import React from 'react';
import TypingText from '../../Components/TypingText/TypingText';
import image from '../../assets/banner.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { PiReadCvLogoFill } from 'react-icons/pi';

const Hero = () => {
    return (
        <section className='h-[89vh] relative w-full scroll-mt-[11vh]  bg-[#0f0715] container mx-auto' id='home'>

            {/* Hi Animation */}
            <div className='lg:px-[100px] md:px-[50px] px-[20px] h-full w-full absolute left-0 top-0 flex items-center justify-center'>
                <h1 className="absolute text-[300px] font-black text-transparent opacity-30 font-sans z-0 select-none pointer-events-none custom-zoom">
                    HI
                </h1>
            </div>

            <div className='absolute top-0 left-0 h-full w-full flex items-center justify-between gap-[40px] lg:px-[100px] md:px-[50px] px-[20px]'>
                <div className='w-[60%]'>
                    <h4 className='text-[28px] font-medium text-[#ffff] capitalize'>
                        I'm Md Shohag Ali
                    </h4>
                    <h1 className="flex items-center gap-[5px] text-[40px] font-bold bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text capitalize">
                        <span>I'm a</span>
                        <TypingText />
                    </h1>
                    <p className='text-justify w-[85%] pt-[10px] text-[#ffffff]'>
                        I'm a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications.
                        I specialize in React, Tailwind CSS, and JavaScript, with a strong eye for clean UI and smooth UX.
                    </p>

                    <div className='flex items-center gap-[20px] pt-[30px]'>
                        <a href='#' className='h-[45px] px-[40px] uppercase bg-[#341d5b] hover:bg-[#8750f7] duration-500 flex items-center justify-center text-[#fff] rounded-md btn'>
                            Resumi
                        </a>
                        <a href='#' className='h-[45px] w-[45px] bg-[#341d5b] hover:bg-[#8750f7] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-md btn'>
                            <FaFacebookF />
                        </a>
                        <a href='#' className='h-[45px] w-[45px] bg-[#341d5b] hover:bg-[#8750f7] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-md btn'>
                            <TbBrandGithubFilled />
                        </a>
                        <a href='#' className='h-[45px] w-[45px] bg-[#341d5b] hover:bg-[#8750f7] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-md btn'>
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>
                <div className='w-[40%] pl-[60px]'>
                    <img className='h-[65vh] border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 rotate-[8deg] hover:rotate-0 hover:border-[#8750f7]' src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;