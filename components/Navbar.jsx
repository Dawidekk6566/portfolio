"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  function FiMenu() {
    return (
      <svg
        stroke="white"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <line x1={3} y1={12} x2={21} y2={12} />
        <line x1={3} y1={6} x2={21} y2={6} />
        <line x1={3} y1={18} x2={21} y2={18} />
      </svg>
    );
  }

  function AiOutlineClose() {
    return (
      <svg
        stroke="white"
        fill="white"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
      </svg>
    );
  }

  return (
    <nav className="absolute top-0 left-0 pt-[1.5rem] w-screen">
      <div className="w-full flex justify-center">
        <div className="flex justify-between items-center text-white max-w-[1200px] w-full max-xl:px-8">
          <div>
            <p className="font-bold text-2xl">Dawidekk</p>
          </div>
          <div>
            <ul className="flex uppercase gap-8 text-lg font-semibold max-md:hidden">
              <li
                className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer"
              >
                About
              </li>
              <li
                className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer"
              >
                What I do
              </li>
              <li
                className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer"
              >
                Work
              </li>
              <li
                className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden max-md:px-8">
          {!nav ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-900/80 ease-in-out duration-200 transition-all"
              : "fixed left-[-100%]"
          }
        >
          <ul className="flex-col text-center p-16 item uppercase gap-8 text-lg font-semibold">
            <li
              className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer pb-4"
            >
              About
            </li>
            <li
              className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer pb-4"
            >
              What I do
            </li>
            <li
              className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer pb-4"
            >
              Work
            </li>
            <li
              className="relative transition-all duration-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-white hover:before:w-full hover:before:opacity-100 font-semibold text-white text-lg hover:cursor-pointer pb-4"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
