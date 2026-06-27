import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const GREETINGS = [
  'Hello',         // English
  'Namaskaram',    // Telugu
  'Namaste',       // Hindi
  'Hola',          // Spanish
  'Bonjour',       // French
  'Ciao',          // Italian
  'Konnichiwa',    // Japanese
  'Hallo',         // German
  'Olá',           // Portuguese
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
        setTimeout(onComplete, 600);
      }, 700);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 250); // Speed of cycle

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  // Allow skipping with click or keyboard
  const handleSkip = () => {
    setIsLoaderFinished(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isLoaderFinished && (
        <m.div
          className="fixed inset-0 bg-dark z-[99999] flex items-center justify-center"
          exit={{
            y: '-100vh',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
          onClick={handleSkip}
          onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') handleSkip(); }}
          role="progressbar"
          aria-label="Loading portfolio"
          aria-valuenow={Math.round(((index + 1) / GREETINGS.length) * 100)}
          tabIndex={0}
        >
          {/* Main Greeting Text */}
          <div className="text-center relative">
            <m.p
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="text-cream text-4xl md:text-6xl font-display font-medium tracking-wide flex items-center justify-center gap-3"
            >
              {/* Highlight accent color for the final item (the user's name) */}
              <span className={index === GREETINGS.length - 1 ? 'text-accent' : ''}>
                {GREETINGS[index]}
              </span>
              <span className="inline-block w-2.5 h-2.5 bg-accent rounded-full" aria-hidden="true" />
            </m.p>

            {/* Subtle progress indicator */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-neutral-800">
              <m.div
                className="h-full bg-accent"
                initial={{ width: '0%' }}
                animate={{ width: `${((index + 1) / GREETINGS.length) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Skip hint */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5 }}
              className="absolute top-32 left-1/2 -translate-x-1/2 text-neutral-500 text-xs tracking-widest uppercase whitespace-nowrap"
            >
              Click or press Enter to skip
            </m.p>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;
