import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREETINGS = [
  'Hello',         // English
  'Namaskaram',    // Telugu
  'Namaste',       // Hindi
  'Bonjour',       // French
  'Ciao',          // Italian
  'Hola',          // Spanish
  'Konnichiwa',    // Japanese
  'Basa Prasad',   // User's Name
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  useEffect(() => {
    if (index === GREETINGS.length - 1) {
      // Hold on the name for a bit longer, then finish
      const timer = setTimeout(() => {
        setIsLoaderFinished(true);
        // Call onComplete after slide-up animation starts/ends
        setTimeout(onComplete, 800);
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 180); // Speed of cycle

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      {!isLoaderFinished && (
        <motion.div
          className="fixed inset-0 bg-[#1B1B1B] z-[99999] flex items-center justify-center"
          exit={{
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Main Greeting Text */}
          <div className="text-center relative">
            <motion.p
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="text-[#FFFAF3] text-4xl md:text-6xl font-display font-medium tracking-wide flex items-center justify-center gap-3"
            >
              {/* Highlight accent color for the final item (the user's name) */}
              <span className={index === GREETINGS.length - 1 ? 'text-[#F62440]' : ''}>
                {GREETINGS[index]}
              </span>
              <span className="inline-block w-2.5 h-2.5 bg-[#F62440] rounded-full" />
            </motion.p>

            {/* Subtle progress indicator */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-neutral-800">
              <motion.div
                className="h-full bg-[#F62440]"
                initial={{ width: '0%' }}
                animate={{ width: `${((index + 1) / GREETINGS.length) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;
