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
            className={`lg:px-[120px] md:px-[50px] px-[20px] lg:h-[11vh] md:h-[10vh] h-[8vh] w-full flex items-center justify-between sticky top-0 left-0 z-50 transition-all duration-300 ${navbar ? 'bg-[#050709] shadow shadow-[#1d0057]' : 'bg-[#0f0715]'
                }`}
        >
            <a href={"#home"}>
                <img className='lg:h-[45px] md:h-[40px] h-[35px]' src={logo} alt="image" />
            </a>

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
            <div className='flex items-center gap-[20px]'>
                <a className='flex items-center justify-center' href="#">
                    <button className='lg:py-[10px] md:py-[8px] py-[7px] lg:px-[35px] md:px-[30px] px-[25px] border-[2px] border-[#341d5b] text-[#fff] hover:bg-[#341d5b] rounded-full duration-500 uppercase md:text-[16px] text-[14px]'>
                        Resumi
                    </button>
                </a>
                <button onClick={() => setOpen(!open)} className='text-[#fff] text-[30px] md:hidden'>
                    {!open ? <IoMenu /> : <CgClose />}
                </button>
            </div>

            <ul className={`md:hidden h-[100vh] w-full bg-[#050709] flex flex-col items-center justify-center duration-500 gap-[30px] absolute top-[8vh] ${!open ? "-left-[100%]" : "left-0"}`}>
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