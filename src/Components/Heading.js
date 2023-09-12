import React from 'react';
import '../App.css'
const Heading = ({heading}) => {
    const openTag = "<";
  const innerText = heading;
  const closeTag = "/>";
  return (
    <h1 className="text-3xl mb-6 font-heading font-bold text-cta-color">
          <span className='text-white font-heading'>{openTag}</span> 
           {innerText}<span className='text-white font-heading'>{closeTag}</span>{" "}
      </h1>
  )
}

export default Heading