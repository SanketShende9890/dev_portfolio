import React,{useEffect} from 'react';
import Profile from "../../assets/Frame.jpg";
import {AiFillGithub} from 'react-icons/ai'


const Slate = ({title,description,code,live}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein');
        }
        //  else {
        //   entry.target.classList.remove('fadein');
        // }
      });
    });

    const hiddenElements = document.querySelectorAll('.fadeout');
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return (
    <section
    className="max-w-4xl py-10 px-6 text-white mx-auto fadeout"
    style={{ position: "relative" }}
  >
    <div className="relative overflow-hidden shadow-xl rounded-2xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] p-8">
      <div className="flex flex-col md:flex-row w-full">
        <img
          className="object-cover w-full md:w-1/2 rounded-3xl h-72 md:h-72 "
          src={Profile}
          alt=""
        />
        <div className="flex flex-col justify-center items-center px-0 md:px-10 pt-8 md:py-6 leading-normal w-full md:w-1/2">
          <div className='flex flex-col justify-center items-center'>

          <h5 className="mb-3 text-3xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center text-center">
            {title}
          </h5>
          <p className="mb-3 font-normal text-center text-1xl text-gray-700 dark:text-gray-400">
          {description}
          </p>
          </div>
          <div className='mt-8 md:mt-auto w-full flex justify-around items-center'>
            <a href={live} target='_blank' rel='noreferrer' className='bg-transparent hover:border-cta-color hover:text-cta-color duration-300 font-semibold py-2 px-4 border rounded-full'>
                Live Preview
            </a>
            <a href={code} target='_blank' rel='noreferrer' className='flex items-center bg-transparent font-semibold hover:border-cta-color hover:text-cta-color py-2 px-4 border rounded-full'>
                <AiFillGithub className='mr-2 text-2xl'/>
                Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Slate