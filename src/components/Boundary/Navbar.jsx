import React from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <div className="fixed z-50 shadow-sm top-0 left-0 bg-white w-[100vw] h-[80px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-[20px] box-border font-montserrat text-[24px]">
      <div className="flex ml-[-20px]">
        <img src={logo} className="w-[80px] h-[60px] " alt="logo" />
        <h2 className="ml-[-10px] my-4 relative text-inherit font-extrabold font-montserrat">
          UltraXpert
        </h2>
      </div>
      <div>
        <nav className="flex flex-row items-center font-montserrat justify-center gap-[3.5vw] mr-6 text-[16px] sm:hidden md:flex ">
          <div className="relative font-medium">Services</div>
          <Link
            to={"experts"}
            className="relative font-medium decoration-transparent text-black"
          >
            Experts
          </Link>
          <div className="relative font-medium">Blog</div>
          <div className="relative font-medium">Contact Us</div>
          <Link
            to={"/login"}
            className="relative bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
          >
            Sign In
          </Link>
        </nav>
        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden absolute top-0 right-0 mr-6 mt-6 bg-black w-[28px] h-[28px] rounded-sm flex items-center justify-center"
        >
          {showNav ? (
            <FaTimes className="w-full h-full text-white" />
          ) : (
            <FaBars className="w-full h-full text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
