import React from "react";
import namasteEmoji from "../assets/namaste_emoji.png";
import Heading from "../Components/Heading";

const About = () => {
  return (
    <section
      className="max-w-4xl py-10 text-white mx-auto"
      style={{ position: "relative" }}
    >
      <Heading heading={"About"} />
      <div className="relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none]">
       
        {/* <a className="flex w-full flex-col items-center bg-none border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> */}
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Namaste!
            <img className="ml-3" width={20} src={namasteEmoji} alt="🙏" />
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            I'm Sanket Shende, a passionate Front-End Developer with a knack for turning code into captivating digital experiences. Armed with HTML, CSS, and JavaScript, I sculpt pixel-perfect wonders that dance harmoniously across screens of all sizes.
            </p>
          </div>
        {/* </a> */}

        {/* <p className="flex flex-col text-center items-center mt-10 max-w-md">
          <span className="flex items-center">
            
          </span>
          I am Sanket A passionate Front End React Developer based in Nagpur,
          India.
        </p> */}
      </div>
    </section>
  );
};

export default About;
