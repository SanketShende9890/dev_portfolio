import React, { useEffect, useLayoutEffect, useRef } from "react";
import "../styles/Main.css";
import { gsap } from "gsap";
import bgVid from "../assets/bgVid.mp4";
import namasteEmoji from "../assets/namaste_emoji.png";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade, Slide } from "react-awesome-reveal";
import Container from "./Container";
import profile from "../assets/profile.png";
import htmlIcon from "../assets/html_icon.png";
import cssIcon from "../assets/css_icon.png";
import jsIcon from "../assets/js_icon.png";
import taiwindIcon from "../assets/tailwind_icon.png";
import mongoDbIcon from "../assets/mongoDb_icon.png";
import expressIcon from "../assets/express_icon.png";
import reactIcon from "../assets/react_icon.png";
import nodeIcon from "../assets/node_icon.png";

const Main = () => {
  const customLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-100px, 0);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
  const customRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(100px, 0);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
  let vidType = "video/mp4";
  useEffect(() => {
    let vid = document.getElementById("vid");
    vid.playbackRate = 1.8;
  }, []);

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
  return (
    <div className="section">
      <div className="video-container">
        <video id="vid" src={bgVid} type={vidType} autoPlay loop muted></video>
        <div className="overlay"></div>
        <div className="text">
          <section className="flex flex-wrap container p-8 mx-auto xl:px-0">
            <div className="flex items-center w-full lg:w-1/2 pl-0 md:pl-6 lg:pl-10 xl:pl-40">
              <div className="max-w-2xl mb-8">
                <Reveal keyframes={customLeftAnimation}>
                  <Fade delay={1e1} cascade damping={1e-1}>
                    <h1
                      style={{ lineHeight: "1" }}
                      className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-snug tracking-tight  text-gray  lg:leading-tight  xl:leading-tight"
                    >
                      Full Stack Developer
                    </h1>
                  </Fade>
                </Reveal>
                <Reveal keyframes={customLeftAnimation}>
                  <Fade delay={1e1} cascade damping={1e-1}>
                    <p className="py-5 text-md leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
                      Hi, I'm Sanket Shende. A passionate Full-Stack Developer
                      based in Nagpur, India.
                    </p>
                  </Fade>
                </Reveal>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <Reveal keyframes={customLeftAnimation}>
                    <button
                      onClick={handleDownloadPDF}
                      className="btn-grad py-2 px-7 text-xl font-bold rounded-full"
                    >
                      Resume
                    </button>
                  </Reveal>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center w-full lg:w-1/2">
              <Reveal keyframes={customRightAnimation}>
                <div className="">
                  <img
                    src={profile}
                    style={{ width: "100%" }}
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>
              </Reveal>
            </div>
          </section>
          <section className="container p-8 mx-auto xl:px-0 tech-stack">
            <div className="flex flex-col justify-center items-center">
            <Fade delay={1e2} cascade damping={1e-1}>
              <p className="font-bold mb-3 tracking-widest">Tech stack</p>
              </Fade>
              <div className="flex flex-wrap justify-center items-center">
              <Fade delay={3e2} cascade damping={3e-3}>
                <div className="flex justify-center items-center">

                  <img className="hover:-translate-y-2 duration-300" src={htmlIcon} alt="html-icon" />
                  <img className="hover:-translate-y-2 duration-300" src={cssIcon} alt="css-icon" />
                  <img className="hover:-translate-y-2 duration-300" src={jsIcon} alt="js-icon" />
                  <img className="hover:-translate-y-2 duration-300" src={taiwindIcon} alt="taiwind-icon" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="hover:-translate-y-2 duration-300" src={mongoDbIcon} alt="mongoDb-icon" />
                  <img className="hover:-translate-y-2 duration-300" src={expressIcon} alt="express-icon" />
                  <img className="hover:-translate-y-2 duration-300" src={reactIcon} alt="react-icon" />
                  <img className="hover:-translate-y-2 duration-300" src={nodeIcon} alt="node-icon" />
                </div>
                </Fade>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="mask-grad"></div>
    </div>
  );
};

export default Main;
