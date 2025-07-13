import React from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { MdEmail } from 'react-icons/md';

const navlink = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/about",
        display: "About"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/skills",
        display: "Skills"
    },
    {
        path: "/projects",
        display: "Projects"
    },
    {
        path: "/contacts",
        display: "Contacts"
    },
]

const Navbar = () => {
    return (
        <nav className='h-[11vh] w-full flex items-center justify-between lg:px-[30px] bg-[#9696961a] rounded-md'>
            {/* Logo */}
            <Link to={"/"}>
                <img className='h-[45px]' src={logo} alt="logo" />
            </Link>

            {/* Menu Item  */}
            <ul className='flex items-center gap-[30px]'>
                {
                    navlink?.map((item, index) => (
                        <li key={index}>
                            <NavLink className={className => className?.isActive ? "text-[#ffae00]" : "text-[#fff]"} to={item?.path}>{item?.display}</NavLink>
                        </li>
                    ))
                }
            </ul>

            {/* Right Site Button */}
            <button className='py-[10px] px-[30px] border-b-[3px] border-[#ffae00] hover:border-[#fff] hover:text-[#fff] rounded-md bg-[#ffae001e] hover:bg-[#ffae00] text-[#ffae00] duration-500 active:scale-[.9]'>
                HIRE ME!
            </button>

        </nav>
    );
};

export default Navbar;