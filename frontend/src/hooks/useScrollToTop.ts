import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      
      scrollToTop();
      const timer = setTimeout(scrollToTop, 10);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
