import React from 'react';
import car from '../../assets/car-project.png';
import law from '../../assets/lay-project.png';
import job from '../../assets/job-project.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Projects = () => {

    const mernProjects = [
        {
            image: car,
            title: "Car Rental Service",
            description: "A complete car rental platform where users can browse, rent, and manage car bookings.",
            features: [
                { id: 1, point: "JWT-protected routes with Firebase Auth" },
                { id: 2, point: "Admin and user dashboards for managing bookings" },
                { id: 3, point: "Search, filter, and car availability management" }
            ],
            technologies: [
                "React", "TailwindCSS", "Express.js", "MongoDB", "Firebase", "JWT"
            ],
            liveLink: "https://car-reant-sm29.netlify.app/",
            clientRepo: "https://github.com/shohag390/",
            serverRepo: "https://github.com/shohag390/"
        },
        {
            image: law,
            title: "Lawyers Website",
            description: "A modern legal services website with service listings, testimonials, and secure client login.",
            features: [
                { id: 1, point: "Secure login using Firebase Authentication" },
                { id: 2, point: "Service, team, and testimonial sections" },
                { id: 3, point: "Smooth UI/UX with animation libraries" }
            ],
            technologies: [
                "React", "TailwindCSS", "Firebase", "React Router", "Framer Motion"
            ],
            liveLink: "https://lawyers-sm29.netlify.app/",
            clientRepo: "https://github.com/shohag390/",
            serverRepo: "https://github.com/shohag390/"
        },
        {
            image: job,
            title: "Job Track",
            description: "A job application tracker to manage your job hunt efficiently with filters and stats.",
            features: [
                { id: 1, point: "User roles, job filtering, and saved jobs" },
                { id: 2, point: "Firebase auth and protected route management" },
                { id: 3, point: "Backend APIs and data visualization" }
            ],
            technologies: [
                "React", "Express.js", "MongoDB", "Firebase", "Recharts", "TailwindCSS"
            ],
            liveLink: "https://job-track-sm29.netlify.app/",
            clientRepo: "https://github.com/shohag390/",
            serverRepo: "https://github.com/shohag390/"
        }
    ];


    return (
        <section className='scroll-mt-[11vh] w-full bg-[#050709] lg:px-[120px] md:px-[50px] px-[20px] lg:py-[80px]' id='project'>
            <div className="text-center pb-[40px]">
                <h2 className="font-medium text-[40px] bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text capitalize leading-[55px]">My Projects</h2>
                <p className="leading-relaxed text-gray-400 text-center">
                    I offer a wide range of web development services <br /> to bring your ideas to life.
                </p>
            </div>


            <div className="grid grid-cols-1 gap-[30px] pb-[45px]">
                {mernProjects?.map((project, index) => (
                    <div key={index} className='card border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 hover:border-[#8750f7] p-[35px] shadow-[40px_40px_80px_-80px_#8750f7] hover:shadow-none flex items-center justify-between gap-[30px]'>
                        <div className='w-1/2'>
                            <div className='h-[350px] w-full rounded-xl relative overflow-hidden'>
                                <img className='h-full duration-500 w-full absolute rounded-xl' src={project?.image} alt="" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <h3
                                className="text-[23px] font-medium pb-[8px] bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text"
                            >
                                {project?.title}
                            </h3>

                            <p className='leading-relaxed text-gray-400 text-justify pb-[15px]'>
                                {project?.description}
                            </p>

                            <ul className='flex flex-col gap-[8px] pb-[10px]'>
                                {
                                    project?.features?.map((item) => (
                                        <li key={item?.id} className='flex items-center gap-[8px] text-gray-400'>
                                            <MdKeyboardDoubleArrowRight />
                                            {item?.point}
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#8750f7]/20 text-[#8750f7] px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className='flex items-center gap-[20px] pt-[30px]'>
                                <a className='flex items-center justify-center' href={project?.liveLink} target='_blank'>
                                    <button className='py-[10px] px-[35px] bg-[#341d5b] text-[#fff] hover:bg-[#8750f7] rounded-md btn duration-500 uppercase'>
                                        Live Link
                                    </button>
                                </a>
                                <a className='flex items-center justify-center' href={project?.clientRepo} target='_blank'>
                                    <button className='py-[10px] px-[35px] bg-[#341d5b] text-[#fff] hover:bg-[#8750f7] rounded-md btn duration-500 uppercase'>
                                        Client Github
                                    </button>
                                </a>
                                <a className='flex items-center justify-center' href={project?.serverRepo} target='_blank'>
                                    <button className='py-[10px] px-[35px] bg-[#341d5b] text-[#fff] hover:bg-[#8750f7] rounded-md btn duration-500 uppercase'>
                                        Server Github
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


            <div className='flex items-center justify-center'>
                <button className='py-[10px] px-[35px] bg-[#341d5b] text-[#fff] hover:bg-[#8750f7] rounded-md btn duration-500 uppercase'>
                    Load More
                </button>
            </div>
        </section>
    );
};

export default Projects;