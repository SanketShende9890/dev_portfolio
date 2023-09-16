import React from "react";
import "../../App.css";
const Heading = ({ heading }) => {
  const openTag = "<";
  const innerText = heading;
  const closeTag = "/>";
  return (
    <section className=" max-w-4xl pt-10 px-6 text-white mx-auto">
      <h1 className="text-4xl m-0 font-heading font-bold text-cta-color">
        <span className="text-white font-heading">{openTag}</span>
        {innerText}
        <span className="text-white font-heading">{closeTag}</span>{" "}
      </h1>
    </section>
  );
};

export default Heading;
