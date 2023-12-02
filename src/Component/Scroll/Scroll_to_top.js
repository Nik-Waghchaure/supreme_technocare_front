// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return null;
// }

 
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.documentElement || document.body;

    // Scroll to the top of the page with a slight delay
    const scrollToTopWithDelay = () => {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 10);
    };

    scrollToTopWithDelay();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
