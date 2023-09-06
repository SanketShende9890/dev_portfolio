import React from 'react';

const Heading = ({heading}) => {
    const openTag = "<";
  const innerText = heading;
  const closeTag = "/>";
  return (
    <h1 className="heading-title">
          <span>{openTag}</span> 
           {innerText}<span>{closeTag}</span>{" "}
      </h1>
  )
}

export default Heading