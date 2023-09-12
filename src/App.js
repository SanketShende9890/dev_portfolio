import React from "react";
import './App.css';
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
      <header >
      <Navbar/>
      </header>
      <section className="hero-bg">
        <Hero/>
      </section>
      <section>
        <Heading heading={"About me"}/>
      <About/>
      </section>
      <section>
        <Heading heading={"Projects"}/>
      <Slate/>
      <Slate/>
      <Slate/>
      <Slate/>

      </section>
      <section>
      <Heading heading={"Contact"}/>
      <Slate/>

      </section>

      <footer>
        <Footer/>
      </footer>
      
    
    </>
  );
}

export default App;
