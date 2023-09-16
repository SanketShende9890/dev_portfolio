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


      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2 pl-0 md:pl-6 lg:pl-10 xl:pl-40">
          <div className="max-w-2xl mb-8">
      <Reveal keyframes={customLeftAnimation}>
        <Fade delay={1e1} cascade damping={1e-1}>
            <h1 style={{lineHeight: '1'}} className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-snug tracking-tight  text-gray  lg:leading-tight  xl:leading-tight">

            I’m Full Stack Developer
            </h1>
            </Fade> 
            </Reveal>
      <Reveal keyframes={customLeftAnimation}>

        <Fade delay={1e1} cascade damping={1e-1}>
            <p className="py-5 text-md leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">

            Hi, I'm Sanket Shende. A passionate Full-Stack Developer based in Nagpur, India.

            </p>
            </Fade>
            </Reveal>


            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
      <Reveal keyframes={customLeftAnimation}>

              <button className="btn-grad py-2 text-xl font-bold px-4 rounded-full">
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
              style={{width: '100%'}}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
          </Reveal>
        </div>
      </Container>
      

        
      </div>
    </div>
    </div>
  )
}

export default Main