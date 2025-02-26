import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile(); // Check on initial load
    window.addEventListener("resize", checkMobile); // Check on window resize

    return () => window.removeEventListener("resize", checkMobile);
    
  }, []);

  return isMobile;
};