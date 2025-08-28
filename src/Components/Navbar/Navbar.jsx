import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { TbMenuDeep } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';

const navlink = [
    {
        path: "",
        display: "Home"
    },
    {
        path: "/about",
        display: "About"
    },
    {
        path: "/projects",
        display: "Projects"
    },
    {
        path: "/contacts",
        display: "Contacts"
    }
]


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-[#212529] container mx-auto lg:px-[120px] md:px-[50px] px-[20px] h-[11vh] flex items-center justify-between sticky top-0 left-0 z-50'>
            <Link to={"/"}>
                <img data-aos="fade-right" className='h-[45px]' src={logo} alt="" />
            </Link>

            {/* Menu Bar */}
            <ul data-aos="fade-left" className='lg:flex lg:items-center lg:gap-[30px] hidden'>
                {navlink?.map((link) => (
                    <li>
                        <NavLink className={className => className?.isActive ? "text-[#20c997]" : "text-[#ffff]"} to={link?.path}>
                            {link?.display}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <a href="" target='_blank'>
                        <button className='btn text-[#ffff] py-[10px] px-[30px] rounded-full'>
                            Resumi
                        </button>
                    </a>
                </li>
            </ul>
            <ul className={`flex flex-col items-center justify-center gap-[30px] h-[89vh] w-full bg-[#212529] top-[11vh] ${open ? "left-0" : "-left-[100%]"} lg:hidden absolute duration-500`}>
                {navlink?.map((link) => (
                    <li>
                        <NavLink onClick={() => setOpen(!open)} className={className => className?.isActive ? "text-[#20c997]" : "text-[#ffff]"} to={link?.path}>
                            {link?.display}
                        </NavLink>
                    </li>
                ))}
                <li onClick={() => setOpen(!open)}>
                    <a href="" target='_blank'>
                        <button className='btn text-[#ffff] py-[10px] px-[30px] rounded-full'>
                            Resumi
                        </button>
                    </a>
                </li>
            </ul>

            {/* Toggle Bar */}
            <button data-aos="fade-left" className='text-[#ffff] text-[35px]  lg:hidden' onClick={() => setOpen(!open)}>
                {!open ? <TbMenuDeep /> : <IoClose />}
            </button>

        </nav>
    )
}

export default Navbar;