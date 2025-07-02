import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { IoMenu } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';
import { CgClose } from 'react-icons/cg';

const navlink = [
    {
        path: "home",
        display: "Home"
    },
    {
        path: "about",
        display: "About"
    },
    {
        path: "services",
        display: "Services"
    },
    {
        path: "project",
        display: "Project"
    },
    {
        path: "skills",
        display: "Skills"
    },
    {
        path: "contact",
        display: "Contacts"
    },
]

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false)


    // Active Nav Menu Finder
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);



    // Scroll and Change Background
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY > 50) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener('scroll', changeBackground);

        // Cleanup
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);


    return (
        <nav
            className={`container mx-auto lg:px-[120px] md:px-[50px] px-[20px] lg:h-[12vh] md:h-[11vh] h-[8vh] w-full flex items-center justify-between sticky top-0 left-0 z-50 transition-all duration-300 ${navbar ? 'bg-[#050709] shadow shadow-[#1d0057]' : 'bg-[#0f0715]'
                }`}
        >

            {/* Logo */}
            <a href={"#home"}>
                <img className='lg:h-[45px] md:h-[40px] h-[35px]' src={logo} alt="image" />
            </a>


            {/* Laptop & Desktop Menu */}
            <ul className="lg:flex lg:items-center lg:gap-[30px] hidden">
                {navlink.map((link, index) => (
                    <li key={index}>
                        <a
                            href={`#${link.path}`}
                            className={`relative py-1 transition-colors duration-300 ${active === link.path ? "text-[#8750f7]" : "text-[#fff]"
                                }`}
                        >
                            {link.display}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Button Right Site */}
            <div className='flex items-center gap-[15px]'>
                <a className='lg:py-[9px] md:py-[8px] py-[6px] lg:px-[35px] md:px-[30px] px-[25px] border-[2px] border-[#341d5b] hover:bg-[#341d5b] duration-500 text-[#fff] lg:text-[16px] text-[14px] rounded-full shadow-md shadow-[#8750f7] hover:shadow-none uppercase' href="#">
                    Resumi
                </a>
                <button onClick={() => setOpen(!open)} className='text-[#fff] text-[30px] md:hidden'>
                    {!open ? <IoMenu /> : <CgClose />}
                </button>
            </div>

            {/* Tab & Phone Menu */}
            <ul className={`md:hidden h-[100vh] w-full bg-[#050709] flex flex-col items-center justify-center duration-500 gap-[30px] absolute md:top-[11vh] top-[8vh] ${!open ? "-left-[100%]" : "left-0"}`}>
                {navlink.map((link, index) => (
                    <li key={index}>
                        <a onClick={() => setOpen(!open)}
                            href={`#${link.path}`}
                            className={`relative py-1 transition-colors duration-300 ${active === link.path ? "text-[#8750f7]" : "text-[#fff]"
                                }`}
                        >
                            {link.display}
                        </a>
                    </li>
                ))}
            </ul>

        </nav >
    );
};

export default Navbar;