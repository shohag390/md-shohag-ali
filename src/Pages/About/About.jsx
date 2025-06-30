import React from 'react';
import image from '../../assets/about.png';

const About = () => {
    return (
        <section className='scroll-mt-[11vh] w-full lg:px-[120px] md:px-[50px] px-[20px] lg:py-[80px] bg-[#050709] lg:flex lg:items-center lg:gap-[20px]' id='about'>

            <div className="w-[40%] relative">
                <img
                    className="h-[70vh] w-[400px] border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 hover:border-[#8750f7] shadow-[50px_60px_200px_-80px_#8750f7]"
                    src={image}
                    alt=""
                />
            </div>

            <div className="w-[60%]">
                <h2 className="font-medium text-[40px] bg-gradient-to-r from-[#8750f7] inline-block to-[#ffffff] text-transparent bg-clip-text capitalize leading-[55px]">About Me</h2>
                <p className="leading-relaxed text-gray-400 text-justify pt-[20px] pb-[15px]">
                    I'm a passionate <span className="text-white font-semibold">Frontend Developer</span> with a strong focus on building clean, responsive, and interactive web interfaces. I love crafting beautiful user experiences using technologies like <span className="text-white font-semibold">React, Tailwind CSS, and JavaScript</span>.
                </p>
                <p className="leading-relaxed text-gray-400 text-justify pb-[35px]">
                    Currently, I'm exploring performance optimization, smooth animations, and full-stack integrations to enhance web experiences. I'm always learning and pushing boundaries to build better UI every day.
                </p>
                <a href="#contact">
                    <button className='py-[10px] px-[35px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 text-[#fff] text-[16px] rounded-full shadow-md shadow-[#8750f7] hover:shadow-none uppercase'>
                        Contact Me
                    </button>
                </a>
            </div>
        </section >
    );
};

export default About;