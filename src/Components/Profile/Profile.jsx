import React from 'react';
import image from '../../assets/profile.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaXTwitter } from 'react-icons/fa6';

const Profile = () => {
    return (
        <div className='w-[24%] h-[83vh] bg-[#9696961a] rounded-md p-[30px]'>

            <img className='border-b-[3px] border-[#ffae00] rounded-xl bg-[#ffae001e]' src={image} alt="image" />

            <div>
                <h4 className='text-center'>Md Shohag Ali</h4>
                <p className='text-center'>
                    "Responsive. Accessible. Fast. Functional. Beautiful."
                </p>
            </div>

            <div className='flex items-center justify-center gap-[8px] pb-[20px]'>
                <div className='h-[]'>
                    <FaFacebookF />
                </div>
                <div className='h-[]'>
                    <FaLinkedinIn />
                </div>
                <div className='h-[]'>
                    <TbBrandGithubFilled />
                </div>
                <div className='h-[]'>
                    <FaXTwitter />
                </div>
            </div>

            <button className='w-full py-[10px] border-b-[3px] border-[#ffae00] hover:border-[#fff] hover:text-[#fff] rounded-xl bg-[#ffae001e] hover:bg-[#ffae00] text-[#ffae00] duration-500 active:scale-[.9]'>
                RESUME
            </button>

        </div>
    );
};

export default Profile;