import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
import profile from "../assets/profile.png";
import htmlIcon from "../assets/html_icon.png";
import cssIcon from "../assets/css_icon.png";
import jsIcon from "../assets/js_icon.png";
import reactIcon from "../assets/react_icon.png";
import sassIcon from "../assets/sass_icon.png";
import tailwindIcon from "../assets/tailwind_icon.png"

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadein");
        }
        //  else {
        //   entry.target.classList.remove('fadein');
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".fadeout");
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
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
  ];
  return (
    <section className="fadeout hero-section h-screen text-white py-20 mx-auto flex flex-col justify-center items-center container">
      <h1 className="text-cta-color text-6xl font-medium mt-10 text-center">
        Front-End Developer
      </h1>
      <p className="font-medium mt-2 text-2xl">Developer & designer</p>
      <img className="mt-10" width={220} src={profile} alt="my profile" />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="mr-5 text-xl font-bold mb-3">Tech Stack</div>
        <div className="flex items-center justify-center ">
          {iconList.map((items, index) => (
            <div className="mx-2 cursor-pointer h-14 w-14 p-2 hover:translate-y-5 duration-300 flex justify-center items-center rounded-2xl bg-slate-800  dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10">
              <img width={30} src={items.src} alt="htmlIcon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
