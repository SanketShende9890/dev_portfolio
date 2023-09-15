import React from "react";
import "../styles/Hero.css";
import profile from "../assets/profile.png";
import htmlIcon from "../assets/html_icon.png";
import cssIcon from "../assets/css_icon.png";
import jsIcon from "../assets/js_icon.png";
import reactIcon from "../assets/react_icon.png";
import sassIcon from "../assets/sass_icon.png";
import tailwindIcon from "../assets/tailwind_icon.png"

const Hero = () => {
  
  const iconList = [
    {
      id: 0,
      src: htmlIcon,
    },
    {
      id: 1,
      src: cssIcon,
    },
    {
      id: 2,
      src: jsIcon,
    },
    {
      id: 3,
      src: reactIcon,
    },
    {
      id: 4,
      src: tailwindIcon,
    },
    {
      id: 5,
      src: sassIcon,
    },
    {
      id: 5,
      src: sassIcon,
    },
    {
      id: 5,
      src: sassIcon,
    },
    
  ];
  return (
    <section className="fadeout hero-section h-screen text-white py-20 mx-auto flex flex-col justify-center items-center container">
      <h1 className="text-cta-color text-6xl font-medium mt-10 text-center">
        Front-End Developer
      </h1>
      <p className="font-medium mt-2 text-2xl">Developer & designer</p>
      <img className="mt-10" width={220} src={profile} alt="my profile" />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-xl font-bold mb-3">Tech Stack</div>
        <div className="flex flex-wrap items-center justify-center w-full md:w-1/2">
          {iconList.map((items, index) => (
            <div style={{border: '1px solid rgba(225,225,225,0.2)'}} className="mx-4 my-3 cursor-pointer h-14 w-14 p-2 hover:translate-y-5 duration-300 flex justify-center items-center rounded-2xl bg-slate-800  dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset ">
              <img width={30} src={items.src} alt="htmlIcon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
