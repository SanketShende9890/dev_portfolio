import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Heading from "./Heading";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuTrayOpen, setIsMenuTrayOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollThreshold = 150;

  return (
    <nav
      className={`navbar container ${
        scrollPosition > scrollThreshold ? "navbar-bg" : ""
      } `}
    >
      <div>
        <a href="/">
          <Heading heading={"SanketDev"} />
        </a>
      </div>

      <div className="web-menu">
        <div>
        <a href="/">Home</a>
        </div>
        <div>
        <a href="/about">About</a>

        </div>
        <div>
        <a href="/project">Project</a>

        </div>
        <div>
        <a href="/contact">Contact</a>

        </div>
      </div>
      <div className="mob-menu">
        <div
          onClick={() => setIsMenuTrayOpen(!isMenuTrayOpen)}
          className="mob-menu-icon"
        >
          {!isMenuTrayOpen ? <FaBarsStaggered /> : <IoClose />}
        </div>
        <div style={{ display: isMenuTrayOpen ? 'flex' : 'none' }} className="mob-menu-tray">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/project">Project</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
