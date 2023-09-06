import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
// import profile from "../assets/Frame 1.jpg";
import htmlIcon from "../assets/html_icon.png";
import cssIcon from "../assets/css_icon.png";
import jsIcon from "../assets/js_icon.png";
import reactIcon from "../assets/react_icon.png";
import sassIcon from "../assets/sass_icon.png";
import namasteEmoji from "../assets/namaste_emoji.png";

const Hero = () => {
  const [activeStateIndex, setActiveStateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStateIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); // 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="hero-section container">
      <div className="row">
        <div
          className="col-12 col-md-6 d-flex justify-content-center align-items-start main-page"
          data-aos="fade-up"
        >
          <h1>
            <span
              className={`gradient-text-1 ${
                activeStateIndex === 0 ? "active" : ""
              }`}
            >
              Front-End{" "}
            </span>
            <span
              className={`gradient-text-2 ${
                activeStateIndex === 1 ? "active" : ""
              }`}
            >
              {" "}
              React
            </span>
            <span
              className={`gradient-text-3 ${
                activeStateIndex === 2 ? "active" : ""
              }`}
            >
              {" "}
              Developer
            </span>
          </h1>
          <p className="mt-2">
            <span className="namaste-text">
              Namaste! <img src={namasteEmoji} alt="🙏" />
            </span>
            <br />I am Sanket Shende. A passionate Front End React Developer
            based in Nagpur, India.
          </p>
        </div>
        <div
          className="col-12 col-md-6 d-flex justify-content-end align-items-center"
          data-aos="fade-up"
        >
          {/* <img
            style={{ width: "330px", borderRadius: "200px" }}
            src={profile}
            alt=""
          /> */}
        </div>
      </div>
      <div data-aos="fade-up" className="row">
        <div className="tech-stack d-flex justify-content-start align-items-center">
          <div>
            <p>Tech Stack</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={htmlIcon} alt="htmlIcon" />
            <img src={cssIcon} alt="cssIcon" />
            <img src={jsIcon} alt="jsIcon" />
            <img src={reactIcon} alt="reactIcon" />
            <img src={sassIcon} alt="sassIcon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
