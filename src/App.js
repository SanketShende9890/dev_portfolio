import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <header >
      <Navbar/>
      </header>
      <section className="hero-bg">
        <Hero/>
      </section>
      <About/>
      <footer>
        <Footer/>
      </footer>
      
    
    </>
  );
}

export default App;
