import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

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
  return (
    <nav className="lg:h-[12vh] md:h-[10px] h-[8vh] lg:px-[140px] md:px-[50px] px-[20px] flex items-center justify-between bg-[#163031] sticky top-0 left-0 z-50 border-b border-[#FFFFFF0F]">
      <Link to={"/"}>
        <img className="h-[45px]" src={logo} alt="" />
      </Link>

      {/* Menu Item */}
      <ul className="flex items-center gap-[20px]">
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

      <a
        href="https://drive.google.com/file/d/1TSt8Qyp9bvPICT971648cWBYuJ4P-AXE/view?usp=sharing"
        target="_blank"
        className="py-[10px] px-[30px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]"
      >
        Resume
      </a>
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
