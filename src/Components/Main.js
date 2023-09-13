import React, { useEffect, useLayoutEffect, useRef } from "react";
import '../styles/Main.css';
import { gsap } from "gsap";
import vid1 from '../assets/vid_1.mp4';
import vid2 from '../assets/vid_2.mp4';
import vid3 from '../assets/vid_3.mp4';
import vid4 from '../assets/vid_4.mp4';
import vid5 from '../assets/vid_5.mp4';
import namasteEmoji from "../assets/namaste_emoji.png"


const Main = () => {
    let vidType = "video/mp4"
    useEffect(()=>{
      let vid = document.getElementById('vid');
      vid.playbackRate = 10
    },[])
  return (
    <div className="section">

    <div className="video-container">
      <video id="vid" src={vid3} playbackRate={20}  type={vidType} autoPlay loop muted></video>
      <div className="overlay"></div>
      <div className="text">
        <h1>Namaste! My name is</h1>
        <h2>Sanket Shende</h2>
      </div>
    </div>
    </div>
  )
}

export default Main