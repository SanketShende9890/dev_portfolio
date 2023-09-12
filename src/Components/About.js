import React from "react";
import namasteEmoji from "../assets/namaste_emoji.png";
import Profile from "../assets/Frame.jpg";

const About = () => {
  return (
    <section
      className="max-w-4xl py-10 px-6 text-white mx-auto"
      style={{ position: "relative" }}
    >
      <div className="relative overflow-hidden shadow-xl rounded-2xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] p-8">
        <div className="flex flex-col md:flex-row">
          <img
            className="object-cover w-full md:w-1/2 rounded-3xl h-72 md:h-72 "
            src={Profile}
            alt=""
          />
          <div className="flex flex-col justify-start px-0 md:px-10 pt-8 md:py-6 leading-normal w-full md:w-1/2">
            <h5 className="mb-3 text-3xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center">
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
  );
};

export default About;
