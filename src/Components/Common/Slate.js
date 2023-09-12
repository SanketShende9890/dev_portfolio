import React from 'react';
import Profile from "../../assets/Frame.jpg";
import Heading from './Heading';


const Slate = () => {
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
        <div className="flex flex-col justify-center items-center px-0 md:px-10 pt-8 md:py-6 leading-normal w-full md:w-1/2">
          <div className='flex flex-col justify-center items-center'>

          <h5 className="mb-3 text-3xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center text-center">
            EV Rental
          </h5>
          <p className="mb-3 font-normal text-center text-1xl text-gray-700 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
          </div>
          <div className='mt-auto w-full flex justify-around items-center'>
            <button>
                Live preview
            </button>
            <button>
                Code
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Slate