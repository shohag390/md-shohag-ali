import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

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
  const [dark, setDark] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`2xl:h-[12vh] lg:h-[10vh] h-[8vh] 2xl:px-[180px] lg:px-[100px] px-[20px] flex items-center justify-between sticky top-0 left-0 z-50 border-b ${
        theme === "light"
          ? "bg-[#66bfe2] border-[#ffffff36]"
          : "bg-[#163031] border-[#FFFFFF0F]"
      }`}
      data-aos="fade-down"
    >
      <Link to={"/"}>
        <img className="2xl:h-[55px] lg:h-[40px] h-[35px]" src={logo} alt="" />
      </Link>

      {/* Menu Item */}
      <ul className="lg:flex lg:items-center lg:gap-[20px] hidden">
        {menu?.map((link) => (
          <li key={link?.id}>
            <NavLink
              className={(className) =>
                className?.isActive ? "text-[#f0ff6c]" : "text-[#ffffff]"
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
        className={`flex flex-col absolute top-[8vh] h-[92vh] w-full items-center justify-center ${
          theme === "light" ? "bg-[#66bfe2]" : "bg-[#163031]"
        } gap-[20px] duration-500 ${
          !open ? "-left-[100%]" : "left-0"
        } lg:hidden`}
      >
        {menu?.map((link) => (
          <li key={link?.id} onClick={() => setOpen(!open)}>
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
        <button
          onClick={toggleTheme}
          className="text-white text-[26px] hover:text-[#6BFDD9] duration-300"
          title="Toggle Theme"
        >
          {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>

        <a
          href="https://drive.google.com/file/d/1TSt8Qyp9bvPICT971648cWBYuJ4P-AXE/view?usp=sharing"
          target="_blank"
          className="2xl:py-[14px] lg:py-[10px] py-[7px] 2xl:px-[35px] lg:px-[30px] px-[25px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9] active:scale-[.9] card"
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
