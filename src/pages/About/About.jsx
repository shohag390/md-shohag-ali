import { MdOutlineMailOutline } from 'react-icons/md';
import image from '../../assets/about.png';
import { LuPhoneCall } from 'react-icons/lu';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className='container mx-auto lg:px-[100px] md:px-[50px] px-[20px] py-[60px] flex items-center justify-between'>
            <div>
                <img className='h-[500px]' src={image} alt="" />
            </div>
            <div className='w-[50%]'>
                <div className="flex items-center gap-[10px] pb-[15px]">
                    <div className="w-[12px] h-[12px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
                    <p className="text-[#ffffffd5] font-medium">
                        About Me
                    </p>
                </div>
                <h2 className="text-[35px] font-bold leading-[45px] text-[#ffffffd5] pb-[20px]">
                    Who is <span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">Md Shohag Ali ?</span>
                </h2>
                <p className='text-[#9aa3a1] text-justify pb-[20px]'>
                    I'm a dedicated <span className='text-[#ffffffd5] font-semibold'>Frontend Developer</span> with hands-on experience from building <span className='text-[#ffffffd5] font-semibold'>10+ real-world</span> projects. I focus on creating responsive, user-friendly web interfaces using modern tools and best practices. With a background in <span className='text-[#ffffffd5] font-semibold'>Diploma Engineering</span>, I bring both technical understanding and practical problem-solving to every project. My core skills include: <span className='text-[#ffffffd5] font-semibold'>
                        HTML, CSS, Tailwind CSS, JavaScript (ES6), React, React Router, Firebase Authentication, Git & GitHub.
                    </span>
                </p>
                <p className='text-[#9aa3a1] text-justify'>
                    I'm passionate about delivering clean UI, optimized performance, and smooth user experiences. Outside of tech, I enjoy playing football, which has helped me develop teamwork, discipline, and focus — qualities I reflect in my work.
                </p>
                <div className='pt-[28px] flex justify-between'>
                    <div className='flex flex-col gap-[25px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div className='text-[45px] bg-[#6bfdd822] text-[#F0FF6C] h-[60px] w-[60px] flex items-center justify-center rounded-2xl'>
                                <MdOutlineMailOutline />
                            </div>
                            <div>
                                <p className='text-[#ffffffd5] text-[18px]'>Email Me At:</p>
                                <h4 className='font-medium text-[#9aa3a1]'>shohag.webdev@gmail.com</h4>
                            </div>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <div className='text-[40px] bg-[#6bfdd822] text-[#F0FF6C] h-[60px] w-[60px] flex items-center justify-center rounded-2xl'>
                                <LuPhoneCall />
                            </div>
                            <div>
                                <p className='text-[#ffffffd5] text-[18px]'>WhatsApp Number:</p>
                                <h4 className='font-medium text-[#9aa3a1]'>+880 1315-390470</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#6bfdd822] text-[#F0FF6C] h-[150px] w-[150px] flex items-center justify-center rounded-2xl'>
                            <div className="text-center">
                                <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">
                                    <CountUp start={0} end={10} duration={2} />+
                                </h2>
                                <p className="text-[#9aa3a1] text-[18px] uppercase">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;