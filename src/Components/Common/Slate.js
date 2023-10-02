import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {RiShareCircleFill} from 'react-icons/ri';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";


const Slate = ({title,description,code,live,preview,customClass}) => {
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
      <section
      className={`${customClass} max-w-4xl my-10 text-white mx-auto relative outer-grad-cont`}>
    <div className="relative overflow-hidden shadow-xl rounded-xl flex bg-slate-bg h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] inner-grad-cont">
      <div className="flex flex-col md:flex-row w-full p-4">
          <img
          className="object-cover w-full md:w-1/2 rounded-xl h-72 md:h-72 "
          src={preview}
          alt="No preview available"
          /> 
        <div className="flex flex-col justify-center items-center px-0 md:px-10 pt-8 md:py-6 leading-normal w-full md:w-1/2">
          <div className='flex flex-col justify-center items-center'>

          <h5 className="mb-3 text-3xl font-medium tracking-tight  flex items-center text-center">
            {title}
          </h5>
          <p className="mb-3 font-normal text-center text-1xl ">
          {description}
          </p>
          </div>
          <div className='mt-8 md:mt-auto w-full flex justify-around items-center'>
            <a href={code} target='_blank' rel='noreferrer' className='flex items-center bg-transparent font-semibold hover:border-cta-color hover:text-cta-color py-2 px-4 border rounded-full tracking-wider'>
                <AiFillGithub className='mr-2 text-xl'/>
                CODE
            </a>
            <a href={live} target='_blank' rel='noreferrer' className='flex items-center bg-transparent hover:border-cta-color hover:text-cta-color duration-300 font-semibold py-2 px-4 border rounded-full tracking-wider'>
                LIVE
                <RiShareCircleFill className='ml-2 text-xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </Fade>
    </Reveal>
  )
}

export default Slate