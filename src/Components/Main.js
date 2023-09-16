import React, { useEffect, useLayoutEffect, useRef } from "react";
import '../styles/Main.css';
import { gsap } from "gsap";
import bgVid from '../assets/bgVid.mp4';
import namasteEmoji from "../assets/namaste_emoji.png"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade, Slide } from "react-awesome-reveal";
import Container from "./Container";
import profile from "../assets/profile.png";



const Main = () => {

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
    let vidType = "video/mp4"
    useEffect(()=>{
      let vid = document.getElementById('vid');
      vid.playbackRate = 1.8
    },[])
  return (
    <div className="section">

    <div className="video-container">
      <video id="vid" src={bgVid}  type={vidType} autoPlay loop muted></video>
      <div className="overlay"></div>
      <div className="text">
      {/* <Reveal keyframes={customAnimation}> */}


      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2 pl-0 md:pl-6 lg:pl-10 xl:pl-20">
          <div className="max-w-2xl mb-8">
        <Fade delay={1e1} cascade damping={1e-1}>
            <h1 style={{lineHeight: '1'}} className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-snug tracking-tight  text-gray  lg:leading-tight  xl:leading-tight">

            I’m Full Stack Developer
            </h1>
            </Fade> 
        <Fade delay={1e1} cascade damping={1e-1}>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">

            Hi, I'm Sanket Shende. A passionate Full-Stack Developer based in Nagpur, India.

            </p>
            </Fade>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button>
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={profile}
              style={{width: '100%'}}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      

        
      </div>
    </div>
    </div>
  )
}

export default Main