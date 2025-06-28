import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';




const Navbar = () => {

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
            display: "Projects"
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

    const [navbar, setNavbar] = useState(false);

    const [active, setActive] = useState("home");

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
            className={`lg:px-[100px] md:px-[50px] px-[20px] h-[11vh] w-full flex items-center justify-between sticky top-0 left-0 z-50 transition-all duration-300 ${navbar ? 'bg-[#050709] shadow-md' : 'bg-[#0f0715]'
                }`}
        >
            <a href={"#home"}>
                <img className='h-[45px]' src={logo} alt="image" />
            </a>

            <ul className="flex items-center gap-[30px]">
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
            <div>
                <a className='flex items-center justify-center' href="#">
                    <button className='py-[10px] px-[35px] bg-[#341d5b] text-[#fff] hover:bg-[#8750f7] rounded-md btn duration-500 uppercase'>
                        Resumi
                    </button>
                </a>
            </div>
        </nav >
    );
};

export default Navbar;