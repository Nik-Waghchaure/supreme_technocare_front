import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.documentElement || document.body;

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
