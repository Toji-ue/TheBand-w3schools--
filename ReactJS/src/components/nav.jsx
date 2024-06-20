import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#000300] text-white">
      <div className="flex justify-between items-center">
        <div className="hidden md:flex flex-grow justify-between items-center">
          <ul className="flex font-[15px]">
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">HOME</a></li>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">BAND</a></li>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">TOUR</a></li>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">CONTACT</a></li>
            <li 
              className="py-3 px-5 cursor-pointer hover:bg-[#ccc] hover:text-black relative"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              MORE<GoTriangleDown className="inline-block"/>
              {dropdownVisible && (
                <ul className="absolute top-full left-0 bg-[#fff] text-black max-w-max-content shadow-2xl">
                  <li className="py-3 px-5 hover:bg-[#ccc]"><a href="#">Merchandise</a></li>
                  <li className="py-3 px-5 hover:bg-[#ccc]"><a href="#">Extra</a></li>
                  <li className="py-3 px-5 hover:bg-[#ccc]"><a href="#">Media</a></li>
                </ul>
              )}
            </li>
          </ul>
          <div className="py-4 px-5 hover:bg-[#f44336] cursor-pointer">
            <FaSearch />
          </div>
        </div>
        <div className="flex md:hidden justify-between w-full">
          <a className="py-3 px-5 hover:bg-[#ccc] hover:text-black" href="#">HOME</a>
          <div onClick={handleNav} className='py-4 px-5 hover:bg-[#ccc] hover:text-[#000300]'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <ul ref={navRef} className={nav ? 'fixed top-12 left-0 w-full h-auto ease-in-out duration-1 border-b border-b-gray-900 bg-[#000300]' : 'ease-in-out duration-1 fixed top-[-100%] left-0 w-full h-auto border-b border-b-gray-900 bg-[#000300]'}>
        {nav && (
          <>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">BAND</a></li>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">TOUR</a></li>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">CONTACT</a></li>
            <li className="py-3 px-5 hover:bg-[#ccc] hover:text-black"><a href="#">MERCH</a></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

