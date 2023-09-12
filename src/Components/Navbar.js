import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const navbarList = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "blog",
    },
    {
      id: 1,
      link: "contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 bg-black fixed object-center left-1/2 transform -translate-x-1/2 px-4 max-w-6xl mx-auto">
      <div className="flex items-center w-full">
        <h1 className="text-4xl font-signature ml-2 mr-14 cursor-pointer text-cta-color">
          Sanket
        </h1>

        <div className="hidden md:flex w-full justify-between">
          <ul className="flex items-center">
            {navbarList.map((items, index) => (
              <li
                key={index}
                className="text-gray px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 hover:text-white"
              >
                {items.link}
              </li>
            ))}
          </ul>
          <button className="flex items-center font-medium py-2 px-4 rounded bg-cta-color hover:bg-cta-hover duration-200">
            <FiDownload className="mr-3" />
            Resume
          </button>
        </div>
      </div>

      <div
        onClick={() => setNavMenu(!navMenu)}
        className="cursor-pointer text-white flex md:hidden relative z-20"
      >
        {navMenu ? <IoClose size={40} /> : <FaBarsStaggered size={30} />}
      </div>
      {navMenu ? (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-bg-from to-bg-to">
          {navbarList.map((items, index) => (
            <li
              key={index}
              className="px-4 py-6 text-4xl cursor-pointer capitalize font-medium text-gray
            hover:scale-105 duration-200 hover:text-white"
            >
              {items.link}
            </li>
          ))}
          <li className="px-4 py-6 text-4xl">
            <button className="flex font-medium py-2 px-4 rounded bg-cta-color hover:bg-cta-hover duration-200">
              <FiDownload className="mr-3" />
              Resume
            </button>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
