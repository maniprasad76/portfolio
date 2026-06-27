import React from 'react';
import { ArrowUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-charcoal text-[#FFFAF3] relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Branding */}
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 bg-[#F62440] text-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-display font-bold text-base leading-none pt-0.5">P</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-[#FFFAF3]">
              PRASAD
            </span>
          </div>
          <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-widest font-semibold">
            © {new Date().getFullYear()} Basa Prasad. All rights reserved.
          </p>
        </div>

        {/* Center Info Message */}
        <div className="text-center">
          <p className="text-xs text-neutral-400 font-medium">
            Designed for impact. Built for remote excellence.
          </p>
          <p className="text-[10px] text-neutral-500 mt-1 font-semibold uppercase tracking-widest">
            Crafted by{' '}
            <a
              href="https://www.instagram.com/___mani___76/"
              target="_blank"
              rel="noreferrer"
              className="text-[#F62440] hover:underline"
              data-cursor="pointer"
            >
              ___mani___76
            </a>
          </p>
        </div>

        {/* Right Back to Top CTA */}
        <div>
          <MagneticButton>
            <a
              href="#home"
              onClick={scrollToTop}
              className="w-10 h-10 bg-neutral-800 hover:bg-[#F62440] text-[#FFFAF3] rounded-full flex items-center justify-center transition-colors duration-300"
              data-cursor="pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </a>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
