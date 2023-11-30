import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { navItems } from "./navbarContent";
import logosample from "../../assets/img/logo/LOGO.png";
import NavbarMobile from "./navbarMobile";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    return setOpenNav(!openNav);
  };
  return (
    <div className=" w-full px-6 md:px-12 lg:px-16 bg-blue-600 fixed md:shadow-md z-30 ">
      <div className="relative bg-blue-600 h-full  py-4">
        <div className="flex justify-between w-full  mx-auto items-center max-w-[1164px]">
          <img
            src={logosample}
            alt="Trash Can"
            className="w-10 transform scale-[1.5]"
          />
          <div className="hidden md:block">
            <div className="flex gap-4 text-blue-50 transition">
              {navItems.map(({ link, content }, idx) => {
                return (
                  <Link
                    key={idx}
                    to={link}
                    className="hover:outline rounded py-1 px-3 duration-100 capitalize"
                    onClick={scrollToTop}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="block md:hidden">
            <button onClick={toggleNav} className="text-blue-100 block">
              <BiMenu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      <NavbarMobile openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default NavBar;
