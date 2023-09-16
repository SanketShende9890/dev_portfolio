import React from "react";
import "../../App.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const Heading = ({ heading }) => {
  const customLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
  return (
    <section className="max-w-4xl pt-10 px-6 mx-auto flex justify-center items-center heading">
      <Reveal keyframes={customLeftAnimation}>
        <Fade delay={1e1} cascade damping={1e-1}>
          <h1 className=" text-4xl m-0 font-bold">{heading}</h1>
        </Fade>
      </Reveal>
    </section>
  );
};

export default Heading;
