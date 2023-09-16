import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const Blog = () => {
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
    <section className="max-w-4xl py-10 px-6 text-gray mx-auto relative">
      <Reveal keyframes={customLeftAnimation}>
        <Fade delay={1e1} cascade damping={1e-1}>
          <div
            style={{ backgroundColor: "#fff" }}
            className="relative overflow-hidden shadow-xl rounded-2xl flex bg-slate-800  dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10  p-8"
          >
            <h1 className="text-2xl w-full flex items-baseline justify-center">
              Blog section is comming soon...
            </h1>
          </div>
        </Fade>
      </Reveal>
    </section>
  );
};

export default Blog;
