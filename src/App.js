import React,{useState, useEffect} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Common/Footer";
import Slate from "./Components/Common/Slate";
import Heading from "./Components/Common/Heading";
// import Test from "./Components/Test";

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

 
  return (
    <>
      <header className={`${scrolling ? 'nav-bg': ''} fixed object-center left-1/2 transform -translate-x-1/2 w-full h-20`} >
        <Navbar />
      </header>
      <section className="hero-bg home-section">
        <Hero />
      </section>
      <div>

      <section className="about-section">
        <Heading heading={"About me"} />
        <About />
      </section>
      <section className="project-section">
        <Heading heading={"Projects"} />
        <Slate
          title={"EV Rental"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          }
          live={
            "https://dribbble.com/shots/21971060-Design-Agency-Landing-Page"
          }
          code={"https://github.com/SanketShende9890/dev_portfolio"}
        />
        <Slate
          title={"CoinBCX"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          }
          live={
            "https://dribbble.com/shots/21971060-Design-Agency-Landing-Page"
          }
          code={"https://github.com/SanketShende9890/dev_portfolio"}
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
      <section className="blog-section">
        <Heading heading={"Blog"} />
        <Blog/>
      </section>
      <section className="contact-section">
        <Heading heading={"Contact"} />
        <Contact/>
      </section>
      <div className="grad-1"></div>
      <div className="grad-2"></div>
      <div className="grad-3"></div>
      <div className="grad-4"></div>
      <div className="grad-5"></div>
      <div className="grad-6"></div>
      <div className="grad-7"></div>






      </div>


      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
