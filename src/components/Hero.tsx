import React, { useState, useEffect } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Mail, Briefcase, Download } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const ROLES = [
  'Data Entry Specialist',
  'Virtual Assistant',
  'Customer Support',
  'BPO Executive',
  'BCA Student'
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center bg-cream overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Decorative Interactive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <m.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'rgba(246, 36, 64, 0.06)' }}
        />
        <m.div
          animate={shouldReduceMotion ? {} : {
            x: [0, -30, 30, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'rgba(27, 27, 27, 0.03)' }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl w-full text-center z-10 flex flex-col items-center px-6">
        {/* Animated Greeting */}
        <m.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-6 px-4 py-1.5 border border-charcoal/10 rounded-full bg-charcoal/5"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-dark">
            Available for remote roles
          </span>
        </m.div>

        {/* User Name */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold tracking-tight text-dark leading-none mb-6">
          <m.span
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block"
          >
            BASA PRASAD
          </m.span>
        </h1>

        {/* Rotating Roles Container */}
        <div
          className="h-12 md:h-16 flex items-center justify-center mb-8 relative w-full overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        >
          <AnimatePresence mode="wait">
            <m.div
              key={roleIndex}
              initial={shouldReduceMotion ? {} : { y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? {} : { y: -35, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="text-xl md:text-3xl font-display font-medium text-accent tracking-wide"
            >
              {ROLES[roleIndex]}
            </m.div>
          </AnimatePresence>
        </div>

        {/* Personal Intro — Engineering-first positioning */}
        <m.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-base md:text-lg text-charcoal/75 leading-relaxed mb-12 font-medium"
        >
          I build production-grade web applications with React and NestJS — type-safe, 
          scalable, and performance-obsessed. Currently seeking remote opportunities 
          where clean architecture meets real-world impact.
        </m.p>

        {/* CTA Buttons */}
        <m.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <MagneticButton>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-cream rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:bg-dark transition-all duration-300 w-full sm:w-auto"
              data-cursor="pointer"
            >
              <Briefcase size={16} />
              View Projects
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark text-dark rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-dark hover:text-cream transition-all duration-300 w-full sm:w-auto"
              data-cursor="pointer"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#resume"
              onClick={(e) => scrollToSection(e, '#resume')}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-charcoal/10 text-charcoal/70 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-dark hover:text-cream hover:border-dark transition-all duration-300 w-full sm:w-auto"
              data-cursor="pointer"
            >
              <Download size={16} />
              Resume
            </a>
          </MagneticButton>
        </m.div>
      </div>


    </section>
  );
};
export default Hero;
