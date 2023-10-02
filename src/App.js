import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Common/Footer";
import Slate from "./Components/Common/Slate";
import Heading from "./Components/Common/Heading";
import voltRidePreview from "./assets/voltride-preview.jpg";
import blogAppPreview from "./assets/project_preview_3.png";

function App() {
  // const [scrolling, setScrolling] = useState(false);

  // Navbar scrolling bg
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // Fade in animation
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("fadein");
  //       }
  //       else{
  //         entry.target.classList.remove("fadein");

  //       }
  //     });
  //   });
  //   const hiddenElements = document.querySelectorAll(".");
  //   hiddenElements.forEach((element) => observer.observe(element));

  //   return () => {
  //     hiddenElements.forEach((element) => observer.unobserve(element));
  //   };
  // }, []);

  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar />
      <div className="main-grad"></div>
      <section className="home-section">
        <Main />
      </section>
      <section style={{overflow: 'hidden', padding: '0 10px'}}>
        <section className="about-section">
          <Heading heading={"# About me"} />
          <About />
        </section>
        <section className="project-section">
          <Heading heading={"# Projects"} />
          <Slate
            title={"VoltRide"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            live={"https://voltride.vercel.app/"}
            code={"https://github.com/SanketShende9890/VoltRide"}
            preview={voltRidePreview}
          />
          <Slate
            title={"Ethereal Blogs"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            live={
              "https://etherealblog.vercel.app/"
            }
            code={"https://github.com/SanketShende9890/BlogApp-client"}
            preview={blogAppPreview}
            customClass={"blog-section"}
          />
          <Slate
            title={"JETFLIX"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            live={
              "https://dribbble.com/shots/21971060-Design-Agency-Landing-Page"
            }
            code={"https://github.com/SanketShende9890/dev_portfolio"}
          />
          <Slate
            title={"To Do List"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            live={
              "https://dribbble.com/shots/21971060-Design-Agency-Landing-Page"
            }
            code={"https://github.com/SanketShende9890/dev_portfolio"}
          />
        </section>
        {/* <section className="">
          <Heading heading={"Blog"} />
          <Blog />
        </section> */}
        <section className="contact-section">
          <Heading heading={"Contact"} />
          <Contact />
        </section>
        <section></section>
        {/* <div className="grad-1"></div> */}
        <div className="grad-2"></div>
        <div className="grad-3"></div>
        <div className="grad-4"></div>
        <div className="grad-5"></div>
        <div className="grad-6"></div>
        <div className="grad-7"></div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
