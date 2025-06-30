import car from '../../assets/car-project.png';
import law from '../../assets/lay-project.png';
import job from '../../assets/job-project.png';
import { FaLink } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { IoServerSharp } from 'react-icons/io5';

const mernProjects = [
    {
        image: car,
        title: "Car Rental Service",
        description: "A complete car rental platform where users can browse, rent, and manage car bookings.",
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
        technologies: [
            "React", "Express.js", "MongoDB", "Firebase", "Recharts", "TailwindCSS"
        ],
        liveLink: "https://job-track-sm29.netlify.app/",
        clientRepo: "https://github.com/shohag390/",
        serverRepo: "https://github.com/shohag390/"
    }
];


const Projects = () => {
    return (
        <section id="project" className='scroll-mt-[11vh] bg-[#050709] lg:px-[120px] md:px-[50px] px-[20px] lg:py-[80px]'>

            <div className="text-center pb-[40px]">
                <h2 className="font-medium inline-block text-[40px] bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text capitalize leading-[55px]">My Projects</h2>
                <p className="leading-relaxed text-gray-400 text-center">
                    A collection of professional web applications built using modern technologies <br /> like React, Node, and MongoDB.
                </p>
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] pb-[45px]">
                {mernProjects?.map((project, index) => (
                    <div key={index} className='card border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 hover:border-[#8750f7] p-[35px] shadow-md shadow-[#8750f7] hover:shadow-none gap-[30px]'>
                        <div>
                            <div className='h-[200px] w-full rounded-xl relative overflow-hidden'>
                                <img className='h-full duration-500 w-full absolute rounded-xl' src={project?.image} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3
                                className="text-[23px] font-medium pb-[8px] bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent inline-block bg-clip-text"
                            >
                                {project?.title}
                            </h3>

                            <p className='leading-relaxed line-clamp-2 text-gray-400 text-justify'>
                                {project?.description}
                            </p>

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
                                    <button className='h-[45px] w-[45px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-md shadow-md shadow-[#8750f7] hover:shadow-none'>
                                        <FaLink />
                                    </button>
                                </a>
                                <a className='flex items-center justify-center' href={project?.clientRepo} target='_blank'>
                                    <button className='h-[45px] w-[45px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-md shadow-md shadow-[#8750f7] hover:shadow-none'>
                                        <TbBrandGithubFilled />
                                    </button>
                                </a>
                                <a className='flex items-center justify-center' href={project?.serverRepo} target='_blank'>
                                    <button className='h-[45px] w-[45px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 flex items-center justify-center text-[#fff] text-[20px] rounded-md shadow-md shadow-[#8750f7] hover:shadow-none'>
                                        <IoServerSharp />
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


            <a href='#' className='flex items-center justify-center'>
                <button className='py-[10px] px-[35px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 text-[#fff] text-[16px] rounded-full shadow-md shadow-[#8750f7] hover:shadow-none uppercase'>
                    Load More
                </button>
            </a>
        </section>
    );
};

export default Projects;