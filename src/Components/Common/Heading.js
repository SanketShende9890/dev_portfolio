import React,{useEffect} from 'react';
import '../../App.css';
const Heading = ({heading}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein');
        }
        //  else {
        //   entry.target.classList.remove('fadein');
        // }
      });
    });

    const hiddenElements = document.querySelectorAll('.fadeout');
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
    const openTag = "<";
  const innerText = heading;
  const closeTag = "/>";
  return (
    <section className='fadeout max-w-4xl pt-10 px-6 text-white mx-auto'>

    <h1 className="text-4xl m-0 font-heading font-bold text-cta-color">
          <span className='text-white font-heading'>{openTag}</span> 
           {innerText}<span className='text-white font-heading'>{closeTag}</span>{" "}
      </h1>
    </section>
  )
}

export default Heading