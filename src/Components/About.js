import React from "react";
import namasteEmoji from "../assets/namaste_emoji.png";
import slateBg from "../assets/slate-about.jpg";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const customLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }`;
  return (
    <Reveal keyframes={customLeftAnimation}>
        <Fade delay={1e1} cascade damping={1e-1}>
          <section className="relative max-w-4xl my-10 text-white mx-auto outer-grad-cont">
      <div className="relative overflow-hidden shadow-xl rounded-xl flex bg-slate-bg h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] inner-grad-cont">
        <div className="flex flex-col md:flex-row p-4">
          <img
            className="object-cover w-full md:w-1/2 rounded-xl h-72 md:h-72 "
            src={slateBg}
            alt="slate-img"
          />
          <div className="flex flex-col justify-start px-0 md:px-10 pt-8 md:py-6 leading-normal w-full md:w-1/2">
            <h5 className="mb-3 text-3xl font-medium tracking-tight text-gray-900  flex items-center">
              Namaste!
              <img className="ml-3" width={30} src={namasteEmoji} alt="🙏" />
            </h5>
            <p className="mb-3 font-normal text-1xl text-gray-700 dark:text-gray-400">
              I'm Sanket Shende, a passionate Front-End Developer with a knack
              for turning code into captivating digital experiences. Armed with
              HTML, CSS, and JavaScript, I sculpt pixel-perfect wonders that
              dance harmoniously across screens of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
      </Fade>
      </Reveal>
  );
};

export default About;
