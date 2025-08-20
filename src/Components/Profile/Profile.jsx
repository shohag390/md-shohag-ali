import React from 'react';
import image from '../../assets/profile.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaXTwitter } from 'react-icons/fa6';

const Profile = () => {
    return (
        <div className='w-[24%] h-[83vh] bg-[#9696961a] rounded-xl p-[30px]'>

            <img className='border-b-[3px] border-[#ffae00] rounded-xl bg-[#ffae001e] w-full' src={image} alt="image" />

            <div className='pt-[8px]'>
                <h4 className='text-center font-semibold text-[30px] text-[#fff]'>Md Shohag Ali</h4>
                <p className='text-center text-gray-400 leading-[21px]'>
                    "Responsive. Accessible. Fast. Functional. Beautiful."
                </p>
            </div>

            <div className='flex items-center justify-center gap-[15px] pt-[18px]'>
                <div className='h-[40px] w-[40px] border-b-[3px] border-[#1877F2] hover:border-[#fff] hover:text-[#fff] rounded-xl bg-[#1876f225] hover:bg-[#1877F2] text-[#1877F2] duration-500 active:scale-[.9] flex items-center justify-center'>
                    <FaFacebookF className='text-[20px]' />
                </div>
                <div className='h-[40px] w-[40px] border-b-[3px] border-[#0A66C2] hover:border-[#fff] hover:text-[#fff] rounded-xl bg-[#0a66c218] hover:bg-[#0A66C2] text-[#0A66C2] duration-500 active:scale-[.9] flex items-center justify-center'>
                    <FaLinkedinIn className='text-[20px]' />
                </div>
                <div className='h-[40px] w-[40px] border-b-[3px] border-[#6e5494] hover:border-[#fff] hover:text-[#fff] rounded-xl bg-[#6e549424] hover:bg-[#6e5494] text-[#6e5494] duration-500 active:scale-[.9] flex items-center justify-center'>
                    <TbBrandGithubFilled className='text-[20px]' />
                </div>
                <div className='h-[40px] w-[40px] border-b-[3px] border-[#1DA1F2] hover:border-[#fff] hover:text-[#fff] rounded-xl bg-[#1da0f216] hover:bg-[#1DA1F2] text-[#1DA1F2] duration-500 active:scale-[.9] flex items-center justify-center'>
                    <FaXTwitter className='text-[20px]' />
                </div>
            </div>

            <p className='text-center text-gray-400 py-[10px]'>
                And
            </p>

            <button className='w-full py-[10px] border-b-[3px] border-[#ffae00] hover:border-[#fff] hover:text-[#fff] rounded-xl bg-[#ffae001e] hover:bg-[#ffae00] text-[#ffae00] duration-500 active:scale-[.9]'>
                MY RESUME
            </button>

        </div>
    );
};

export default Profile;