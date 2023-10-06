import React, { useState, useEffect } from 'react';
import "./BackToTop.css"
import {IoIosArrowUp} from "react-icons/io"

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollToTop = window.setInterval(() => {
      const position = window.pageYOffset;
      if (position > 0) {
        window.scrollTo(0, position - 20); // Adjust the value for a slower scroll
      } else {
        clearInterval(scrollToTop);
      }
    }, 10); // Adjust the interval for a slower scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <IoIosArrowUp/>
    </div>
  );
}

export default BackToTopButton;
