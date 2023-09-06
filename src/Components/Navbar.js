import React, { useEffect, useState } from "react";
import '../styles/Navbar.css'
import Heading from "./Heading";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

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
    <div
      className={`navbar ${
        scrollPosition > scrollThreshold ? "navbar-bg" : ""
      } `}
    >
      <div>

      <a href="/">
        <Heading heading={"SanketDev"} />
      </a>
      </div>
      <div>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/project">Project</a>
        <a href="/contact">Contact</a>
      </nav>
      </div>
    </div>
  )
}

export default Navbar