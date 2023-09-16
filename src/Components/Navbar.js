import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { FaBarsStaggered, FaD } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";

const customTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const scrollToHome = () => {
    const homeSection = document.querySelector(".home-section");
    if (homeSection) {
      const yOffset = -60;
      const y =
        homeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setNavMenu(false);
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      const yOffset = -60;
      const y =
        aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setNavMenu(false);
  };
  const scrollToProject = () => {
    const projectSection = document.querySelector(".project-section");
    if (projectSection) {
      const yOffset = -60;
      const y =
        projectSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setNavMenu(false);
  };
  const scrollToBlog = () => {
    const blogSection = document.querySelector(".blog-section");
    if (blogSection) {
      const yOffset = -60;
      const y =
        blogSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setNavMenu(false);
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
      const yOffset = -60;
      const y =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setNavMenu(false);
  };

  const handleDownloadPDF = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFilePath =
      "https://drive.google.com/file/d/1ZEUkQlmoHyLfccYsgRQjMGhRWOOOSRsM/view?usp=sharing";
    const link = document.createElement("a");

    link.href = pdfFilePath;
    link.target = "_blank";
    link.download = "Sanket_Reactjs_Resume.pdf";

    link.click();
  };
  const navbarList = [
    {
      id: 1,
      link: "about",
      scrollFunc: scrollToAbout,
    },
    {
      id: 2,
      link: "projects",
      scrollFunc: scrollToProject,
    },
    {
      id: 3,
      link: "blog",
      scrollFunc: scrollToBlog,
    },
    {
      id: 1,
      link: "contact",
      scrollFunc: scrollToContact,
    },
  ];

  const [scrolling, setScrolling] = useState(false);

  // Navbar scrolling bg
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "nav-bg" : ""
      } fixed w-full top-0 left-1/2 transform -translate-x-1/2 navbar h-20`}
    >
      <Fade delay={2e2} cascade damping={1e-1}>
        <nav
          className={`flex justify-between items-center w-full h-20 bg-black fixed object-center left-1/2 transform -translate-x-1/2 px-4 max-w-6xl mx-auto`}
        >
          <Fade>
            <h1
              onClick={scrollToHome}
              className="text-4xl font-signature ml-2 mr-14 cursor-pointer text-gray"
            >
              Sanket
            </h1>
          </Fade>
          <Fade>
            <div className="hidden md:flex items-center justify-center">
              <ul className="flex items-center">
                {navbarList.map((items, index) => (
                  <li
                    key={index}
                    onClick={items.scrollFunc}
                    className="text-gray px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 hover:text-mute-gray"
                  >
                    {items.link}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
          <Fade>
            <div className="hidden md:flex items-center justify-center social-icon">
              <AiFillLinkedin />
              <AiFillGithub />
              <BiLogoDiscord />
            </div>
          </Fade>
          <div
            onClick={() => setNavMenu(!navMenu)}
            className="cursor-pointer text-gray flex md:hidden relative z-20"
          >
            {navMenu ? (
              <IoClose
                // style={{ position: "absolute", right: "0", top: "-415px" }}
                size={40}
              />
            ) : (
              <FaBarsStaggered size={30} />
            )}
          </div>
          {navMenu ? (
            <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-bg-from to-bg-to">
              {navbarList.map((items, index) => (
                <li
                  onClick={items.scrollFunc}
                  key={index}
                  className="px-4 py-6 text-4xl cursor-pointer capitalize font-medium text-gray
            hover:scale-105 duration-200 hover:text-white"
                >
                  {items.link}
                </li>
              ))}
              <li className="px-4 py-6 text-4xl w-full flex justify-center items-center">
                <AiFillLinkedin />
                <AiFillGithub />
                <BiLogoDiscord />
              </li>
            </ul>
          ) : null}
        </nav>
      </Fade>
    </header>
  );
};

export default Navbar;
