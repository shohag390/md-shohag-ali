import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

const menu = [
  {
    id: 1,
    path: "/",
    display: "Home",
  },
  {
    id: 2,
    path: "/about",
    display: "About",
  },
  {
    id: 3,
    path: "/services",
    display: "Services",
  },
  {
    id: 4,
    path: "/projects",
    display: "Projects",
  },
  {
    id: 5,
    path: "/contact",
    display: "Contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="lg:h-[12vh] h-[8vh] lg:px-[180px] px-[20px] flex items-center justify-between bg-[#163031] sticky top-0 left-0 z-50 border-b border-[#FFFFFF0F]">
      <Link to={"/"} data-aos="fade-down">
        <img className="lg:h-[55px] h-[35px]" src={logo} alt="" />
      </Link>

      {/* Menu Item */}
      <ul
        className="lg:flex lg:items-center lg:gap-[20px] hidden"
        data-aos="fade-down"
      >
        {menu?.map((link) => (
          <li key={link?.id}>
            <NavLink
              className={(className) =>
                className?.isActive ? "text-[#6BFDD9]" : "text-[#ffffff]"
              }
              to={link?.path}
            >
              {link?.display}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Item */}
      <ul
        className={`flex flex-col absolute top-[8vh] h-[92vh] w-full items-center justify-center bg-[#163031] gap-[20px] duration-500 ${
          !open ? "-left-[100%]" : "left-0"
        } lg:hidden`}
      >
        {menu?.map((link) => (
          <li key={link?.id}>
            <NavLink
              className={(className) =>
                className?.isActive ? "text-[#6BFDD9]" : "text-[#ffffff]"
              }
              to={link?.path}
            >
              {link?.display}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-[20px]">
        <a
          href="https://drive.google.com/file/d/1TSt8Qyp9bvPICT971648cWBYuJ4P-AXE/view?usp=sharing"
          target="_blank"
          className="lg:py-[10px] py-[7px] lg:px-[30px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
          data-aos="fade-down"
        >
          Resume
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {!open ? (
            <IoMenuOutline className="text-[35px] text-[#fff]" />
          ) : (
            <IoCloseOutline className="text-[35px] text-[#fff]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// --e-global-color-primary: #F8F8F8;
// secondary-color: #FFFFFF0A;
// --e-global-color-text: #F8F8F8;
// Button Color Two: #F0FF6C;
// Button Color One: #6BFDD9;
// --e-global-color-white: #FFFFFF;
// All Bg Color: #163031;
// --e-global-color-divider: #FFFFFF0F;
// --e-global-color-darkdivider: #16151324;
