import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Adjust breakpoint as needed, common breakpoint for mobile is 768px
      setIsMobile(window.innerWidth < 768);
    };

    // Ensure window is defined to prevent errors during server-side rendering (SSR)
    if (typeof window !== 'undefined') {
      handleResize(); // Set initial value on mount
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount

  return isMobile;
}
