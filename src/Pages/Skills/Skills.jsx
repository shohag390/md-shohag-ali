import React from 'react';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiJsonwebtokens, SiMongodb, SiMongoose, SiNetlify, SiPostman, SiTailwindcss, SiVercel } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';



const Skills = () => {
    const skills = [
        { id: 1, title: "HTML", icon: <FaHtml5 className="text-orange-500 text-[40px]" /> },
        { id: 2, title: "CSS", icon: <FaCss3Alt className="text-blue-500 text-[40px]" /> },
        { id: 3, title: "JavaScript", icon: <FaJs className="text-yellow-400 text-[40px]" /> },
        { id: 4, title: "React", icon: <FaReact className="text-cyan-400 text-[40px]" /> },
        { id: 5, title: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-[40px]" /> },
        { id: 6, title: "Node.js", icon: <FaNodeJs className="text-green-500 text-[40px]" /> },
        { id: 7, title: "Express.js", icon: <SiExpress className="text-gray-500 text-[40px]" /> },
        { id: 8, title: "MongoDB", icon: <SiMongodb className="text-green-400 text-[40px]" /> },
        { id: 9, title: "JWT", icon: <SiJsonwebtokens className="text-yellow-400 text-[40px]" /> },
        { id: 12, title: "Git", icon: <FaGitAlt className="text-orange-600 text-[40px]" /> },
        { id: 13, title: "GitHub", icon: <FaGithub className="text-gray-300 text-[40px]" /> },
        { id: 14, title: "VS Code", icon: <VscVscode className="text-blue-400 text-[40px]" /> },
        { id: 15, title: "Postman", icon: <SiPostman className="text-orange-500 text-[40px]" /> },
        { id: 16, title: "Netlify", icon: <SiNetlify className="text-cyan-300 text-[40px]" /> },
        { id: 17, title: "Vercel", icon: <SiVercel className="text-white text-[40px]" /> },
    ];

    return (
        <section
            className="scroll-mt-[11vh] w-full h-full bg-[#0f0715] lg:px-[120px] md:px-[50px] px-[20px] lg:py-[80px]"
            id="skills">
            <div
                className="text-center pb-[40px]">
                <h2 className="font-medium text-[40px] bg-gradient-to-r from-[#8750f7] inline-block to-[#ffffff] text-transparent bg-clip-text capitalize leading-[55px]">My Skills</h2>
                <p
                    className="leading-relaxed text-gray-400 text-center">
                    I offer a wide range of web development services <br /> to bring your ideas to life.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 grid-cols-2 gap-[30px] pb-[45px]">
                {
                    skills?.map((item) => (
                        <div key={item?.id} className='card border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 hover:border-[#8750f7] p-[35px] shadow-md shadow-[#8750f7] hover:shadow-none flex flex-col items-center justify-center gap-[10px]'>
                            <div className=''>
                                {item?.icon}
                            </div>
                            <p className='text-gray-400 text-[20px]'>
                                {item?.title}
                            </p>
                        </div>
                    ))
                }
            </div>


        </section>
    );
};

export default Skills;