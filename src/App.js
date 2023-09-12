import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Common/Footer";
import Slate from "./Components/Common/Slate";
import Heading from "./Components/Common/Heading";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="hero-bg">
        <Hero />
      </section>
      <section>
        <Heading heading={"About me"} />
        <About />
      </section>
      <section>
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
      <section>
        <Heading heading={"Contact"} />
        <Contact/>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
