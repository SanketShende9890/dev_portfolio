import React, { useEffect } from 'react';

function Test() {
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
    
        const hiddenElements = document.querySelectorAll('.');
        hiddenElements.forEach((element) => observer.observe(element));
    
        return () => {
          // Clean up the observer when the component unmounts
          hiddenElements.forEach((element) => observer.unobserve(element));
        };
      }, []);
  return (
    <>
        <div className="product  ">
          <h4>Bandana #1</h4>
          <p>£15</p>
        </div>

        <div className="product  ">
          <h4>Bandana #2</h4>
          <p>£15</p>
        </div>

        <div className="product  ">
          <h4>Bandana #3</h4>
          <p>£15</p>
        </div>

        <div className="product  ">
          <h4>Bandana #4</h4>
          <p>£15</p>
        </div>

        <div className="product  ">
          <h4>Bandana #5</h4>
          <p>£15</p>
        </div>

        <div className="product  ">
          <h4>Bandana #6</h4>
          <p>£15</p>
        </div>
    </>
  );
}

export default Test;