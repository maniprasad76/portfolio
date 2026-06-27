import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Briefcase, Download } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const ROLES = [
  'Fullstack Web Developer',
  'React & NestJS Specialist',
  'TypeScript & Node.js Developer',
  'Virtual Assistant & Customer Support',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
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
      className="min-h-screen relative flex flex-col justify-center items-center bg-[#FFFAF3] overflow-hidden"
    >
      {/* Decorative Interactive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'rgba(246, 36, 64, 0.04)' }}
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'rgba(27, 27, 27, 0.02)' }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl w-full text-center z-10 flex flex-col items-center">
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-4 px-4 py-1.5 border border-charcoal/10 rounded-full bg-charcoal/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#F62440] animate-pulse" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1B1B1B]">
            Available for remote roles
          </span>
        </motion.div>

        {/* User Name */}
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-[#1B1B1B] leading-none mb-6">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block"
          >
            BASA PRASAD
          </motion.span>
        </h1>

        {/* Rotating Roles Container */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8 relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -35, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-xl md:text-3xl font-display font-medium text-[#F62440] tracking-wide"
            >
              {ROLES[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Personal Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-base md:text-lg text-charcoal/70 leading-relaxed mb-12 font-medium"
        >
          A detail-oriented BCA student and Fullstack Developer bridging the gap between dynamic frontend interfaces, scalable backend systems (NestJS/Node), administrative efficiency, and customer satisfaction. Ready to add value from Day 1.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          <MagneticButton>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="flex items-center gap-2 px-8 py-4 bg-[#F62440] text-[#FFFAF3] rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:bg-[#1B1B1B] transition-all duration-300"
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
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#1B1B1B] text-[#1B1B1B] rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#1B1B1B] hover:text-[#FFFAF3] transition-all duration-300"
              data-cursor="pointer"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border-2 border-charcoal/10 text-charcoal/70 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#1B1B1B] hover:text-[#FFFAF3] hover:border-[#1B1B1B] transition-all duration-300"
              data-cursor="pointer"
            >
              <Download size={16} />
              Resume
            </a>
          </MagneticButton>
        </motion.div>
      </div>


    </section>
  );
};
export default Hero;
