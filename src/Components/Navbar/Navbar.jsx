import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const menu = [

    {
        path: "#",
        display: "Home"
    },
    {
        path: "#about",
        display: "About"
    },
    {
        path: "#services",
        display: "Services"
    },
    {
        path: "#skills",
        display: "Skills"
    },
    {
        path: "#projects",
        display: "Projects"
    },
    {
        path: "#contacts",
        display: "Contact"
    },
]

const Navbar = () => {

    const [active, setActive] = useState("#")
    console.log(active);


    return (
        <div className='h-[10vh] flex items-center justify-between sticky top-0 z-50 px-[25px] bg-[#19022b]'>
            <div>
                <img className='h-[40px]' src={logo} alt="" />
            </div>

            <ul className='flex items-center gap-[20px]'>
                {
                    menu?.map((link, index) => (
                        <li key={index}>
                            <a onClick={() => setActive(link?.path)} className={active === `${link?.path}` ? "text-[#b159fd] border-b-1 " : "text-[#b5b5b5]"} href={link?.path}>
                                {link?.display}
                            </a>
                        </li>
                    ))
                }
                < li >
                    <button className='text-[#b5b5b5] border border-[#b159fd] px-[20px] py-[8px] rounded-full'>Resume</button>
                </li>
            </ul>

        </div >
    )
}

export default Navbar;