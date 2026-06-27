import React, { useEffect, useState } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'click'>('default');
  const [hoverText, setHoverText] = useState('');
  const [hasMoved, setHasMoved] = useState(false);

  // Exact mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 35, stiffness: 300, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setCursorType('click');
    const handleMouseUp = () => setCursorType('default');

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

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
      } else if (target.closest('a') || target.closest('button')) {
        setCursorType('hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor]') || target.closest('a') || target.closest('button')) {
        setCursorType('default');
        setHoverText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [hasMoved, mouseX, mouseY]);

  // Don't render until the user actually moves the mouse
  if (!hasMoved) return null;

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
    },
    view: {
      width: 76,
      height: 76,
      backgroundColor: 'rgba(246, 36, 64, 1)',
      border: '1px solid rgba(246, 36, 64, 1)',
    },
    click: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(246, 36, 64, 0.2)',
      border: '2px solid rgba(246, 36, 64, 1)',
    }
  };

  return (
    <>
      {/* Trailing spring cursor ring */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex"
        style={{ x: cursorX, y: cursorY }}
      >
        <m.div
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
          animate={cursorType}
          variants={cursorVariants}
          transition={{ type: 'spring', damping: 28, stiffness: 260, mass: 0.25 }}
        >
          {cursorType === 'view' && (
            <span className="text-[10px] font-display font-bold tracking-widest text-white select-none">
              {hoverText}
            </span>
          )}
        </m.div>
      </m.div>

      {/* Inner pinpoint dot */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        style={{ x: mouseX, y: mouseY }}
      >
        <m.div
          className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#F62440] rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: cursorType === 'view' || cursorType === 'hover' ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </m.div>
    </>
  );
};

export default CustomCursor;
