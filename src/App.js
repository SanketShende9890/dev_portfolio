import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Hero from "./Components/Hero";
import About from "./Components/About.js";
// import Project from "./Components/Project.js";
// import Contact from "./Components/Contact.js";
// import Footer from "./Components/Footer.js";
// import Main from "./components/Main";


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="hero-bg-gradient">
      {/* <Main/> */}
        <Hero />
        {/* <Project />
        <Contact /> */}
        {/* <div className="first-glow"></div>
        <div className="second-glow"></div>
        <div className="third-glow"></div>
        <div className="fourth-glow"></div>
        <div className="fifth-glow"></div> */}
        

      </main>
      <About />
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
}

export default App;
