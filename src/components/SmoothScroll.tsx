import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom exponential ease-out
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Update ScrollTrigger on Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate Lenis scroll with GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing in GSAP for synchronous scroll-linked animations
    gsap.ticker.lagSmoothing(0);

    // Sync scroll when components update or resize
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      resizeObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
};
export default SmoothScroll;
