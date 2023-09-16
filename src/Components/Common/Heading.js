import React from "react";
import "../../App.css";
const Heading = ({ heading }) => {
  const openTag = "<";
  const innerText = heading;
  const closeTag = "/>";
  return (
    <section className=" max-w-4xl pt-10 px-6 mx-auto flex justify-center items-center">
      <h1 className="text-4xl m-0 font-heading font-bold text-gray">
        <span className="text-mute-gray font-heading">{openTag}</span>
        {innerText}
        <span className="text-mute-gray font-heading">{closeTag}</span>{" "}
      </h1>
    </section>
  );
};

export default Heading;
