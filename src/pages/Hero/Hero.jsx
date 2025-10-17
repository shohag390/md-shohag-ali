import image from '../../assets/banner.png';
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className='container mx-auto lg:h-[88vh] md:h-[90px] h-[92vh] lg:px-[100px] md:px-[50px] px-[20px] hero flex items-center justify-between'>
            <div className='w-[50%]'>
                <div className="flex items-center gap-[10px] pb-[5px]">
                    <div className="w-[12px] h-[12px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
                    <p className="text-[#ffffffd5] font-medium">
                        Hi, There !
                    </p>
                </div>
                <h4 className='text-[35px] font-bold text-[#ffffffd5]'>I'm Md Shohag Ali</h4>
                <h4 className="text-[35px] font-bold text-[#ffffffd5] flex items-center gap-2">
                    I'm A
                    <span className='bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text'>
                        <Typewriter
                            options={{
                                strings: [
                                    "Frontend Developer.",
                                    "Web Developer.",
                                    "UI Designer."
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                            }}
                        />
                    </span>
                </h4>
                <p className='text-[#9aa3a1] text-justify pt-[15px] pb-[25px]'>
                    I'm a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. I specialize in React, Tailwind CSS, and JavaScript, with a strong eye for clean UI and smooth UX.
                </p>

                <div className='flex items-center gap-[10px]'>
                    <a href='#' className='py-[12px] px-[30px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]'>
                        Download Resume
                    </a>
                </div>
            </div>
            <div className=''>
                <img className='h-[450px]' src={image} alt="" />
            </div>
        </div>
    )
}

export default Hero;