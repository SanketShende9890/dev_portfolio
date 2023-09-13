import React from 'react'

const Footer = () => {
  return (
    
<footer style={{backgroundColor: 'rgb(31, 41, 55)', color: '#fff'}} className="rounded-lg shadow m-4 bg-gray-800">
    <div className="w-full flex justify-center items-center text-center p-4">
      <span className=" text-center">
      Copyright © 2023. All rights are reserved
    </span>
    {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul> */}
    </div>
</footer>

  )
}

export default Footer