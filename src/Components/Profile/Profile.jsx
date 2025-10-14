import { FaFacebookF, FaPhone, FaPhoneAlt, FaStaylinked } from 'react-icons/fa';
import image from '../../assets/banner.png';
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Profile = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div className='h-[20vh] w-full bg-[#19022b]'></div>
            <div className='h-[70vh] px-[20px] profile'>
                {/* Image */}
                <div className='relative h-[140px] w-[140px] rounded-full -top-[80px] border-3 border-[#b5b5b5] shadow-lg shadow-[#19022b]'>
                    <img className='rounded-full bg-[#19022b]' src={image} alt="image" />
                </div>
                {/* Name And Titale */}
                <div className='relative -top-[80px]'>
                    <h1 className='pt-[10px] font-bold text-[#b159fd] text-[25px]'>MD SHOHAG ALI</h1>
                    <p className='text-[#b5b5b5]'>Frontend Developer</p>
                    <p className='pt-[5px] flex items-center gap-[10px] text-[#b5b5b5]'>
                        <MdLocationOn />
                        <span>Kushtia,Dhaka,Bangladesh</span>
                    </p>

                    <p className='text-justify pt-[18px] text-[#b5b5b5]'>
                        I specialize in React, Tailwind CSS, and JavaScript, with a strong eye for clean UI and smooth UX.
                    </p>


                    <h4 className='pt-[20px] pb-[10px] font-bold text-[#b159fd] text-[17px] uppercase'>Contact Info</h4>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex items-center gap-[10px] text-[#b5b5b5]'>
                            <MdEmail />
                            <span>shohag.webdev@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-[10px] text-[#b5b5b5]'>
                            <FaWhatsapp />
                            <span>+880 1315390470</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-[10px] pt-[25px]'>
                        <a href="#contacts" className='border border-[#b159fd] w-[50%] py-[10px] text-[#b5b5b5] rounded-full flex items-center justify-center'>Contact</a>
                        <a href="#" className='border border-[#b159fd] w-[50%] py-[10px] text-[#b5b5b5] rounded-full flex items-center justify-center'>Resume</a>
                    </div>
                </div>
            </div>
            <div className='h-[10vh] w-full bg-[#19022b] flex items-center justify-between px-[20px]'>
                <div>
                    <p className='text-[#b5b5b5]'>Jun, 12, 2025</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <a className='text-[#b159fd] text-[25px]' href="#">
                        <FaFacebook />
                    </a>
                    <a className='text-[#b159fd] text-[25px]' href="#">
                        <FaGithub />
                    </a>
                    <a className='text-[#b159fd] text-[25px]' href="#">
                        <TbBrandLinkedinFilled />
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Profile;