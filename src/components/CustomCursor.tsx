import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'click'>('default');
  const [hoverText, setHoverText] = useState('');

  // Trailing ring coordinates with spring physics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 35, stiffness: 300, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Instant pinpoint dot coordinates
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setCursorType('click');
    const handleMouseUp = () => setCursorType('default');

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Hover event listeners for modern interactive behaviors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor]');
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorType('view');
          setHoverText('VIEW');
        } else if (type === 'pointer' || type === 'magnetic') {
          setCursorType('hover');
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor]');
      if (interactiveEl) {
        setCursorType('default');
        setHoverText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY, dotX, dotY]);

  if (!isVisible) return null;

  // Modern Inverted Blend Cursor Variants
  const cursorVariants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: 'rgba(246, 36, 64, 0)',
      border: '1.5px solid rgba(246, 36, 64, 1)',
    },
    hover: {
      width: 56,
      height: 56,
      backgroundColor: 'rgba(246, 36, 64, 0.1)',
      border: '1.5px solid rgba(246, 36, 64, 1)',
      scale: 1.15,
    },
    view: {
      width: 76,
      height: 76,
      backgroundColor: 'rgba(246, 36, 64, 1)',
      border: '1px solid rgba(246, 36, 64, 1)',
      scale: 1.1,
    },
    click: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(246, 36, 64, 0.2)',
      border: '2px solid rgba(246, 36, 64, 1)',
      scale: 0.85,
    }
  };

  return (
    <>
      {/* Trailing spring cursor circle (Inverting colors with mix-blend-difference) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={cursorType}
        variants={cursorVariants}
        transition={{ type: 'spring', damping: 28, stiffness: 260, mass: 0.25 }}
      >
        {cursorType === 'view' && (
          <span className="text-[10px] font-display font-bold tracking-widest text-white select-none">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner pinpoint dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-[#F62440] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: cursorType === 'view' || cursorType === 'hover' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
