import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const SOCIALS = [
  {
    icon: <FaLinkedin size={18} aria-hidden="true" />,
    url: 'https://www.linkedin.com/in/prasad-basa-05314a28a/',
    label: 'LinkedIn',
    tooltip: 'LinkedIn Profile',
  },
  {
    icon: <FaGithub size={18} aria-hidden="true" />,
    url: 'https://github.com/maniprasad76/maniprasad76',
    label: 'GitHub',
    tooltip: 'GitHub Projects',
  },
  {
    icon: <FaInstagram size={18} aria-hidden="true" />,
    url: 'https://www.instagram.com/___mani___76/',
    label: 'Instagram',
    tooltip: 'Instagram Profile',
  },
  {
    icon: <FaWhatsapp size={18} aria-hidden="true" />,
    url: 'https://wa.me/917569428709',
    label: 'WhatsApp',
    tooltip: 'Chat on WhatsApp',
  },
  {
    icon: <Mail size={18} aria-hidden="true" />,
    url: 'mailto:basaprasad76@gmail.com',
    label: 'Email',
    tooltip: 'Email Me',
  },
];

export const FloatingSocials: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[49] hidden md:flex flex-col items-center"
    >
      {/* Decorative vertical line */}
      <div className="w-[1px] h-12 bg-charcoal/10 mb-4" />

      {/* Social Container Panel */}
      <div className="flex flex-col gap-4 p-3 bg-white/70 backdrop-blur-md border border-[#1B1B1B]/10 rounded-full shadow-lg relative">
        {SOCIALS.map((social, idx) => (
          <MagneticButton key={idx}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal/70 hover:bg-[#F62440] hover:text-[#FFFAF3] transition-all duration-300 relative group"
              data-cursor="magnetic"
            >
              {social.icon}

              {/* Glassmorphic Tooltip sliding out to the left */}
              <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1B1B1B] text-[#FFFAF3] text-[10px] font-bold tracking-widest uppercase rounded-md shadow-md opacity-0 scale-95 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap z-[100] border border-neutral-700">
                {social.tooltip}
              </span>
            </a>
          </MagneticButton>
        ))}
      </div>

      {/* Decorative vertical line */}
      <div className="w-[1px] h-12 bg-charcoal/10 mt-4" />
    </motion.div>
  );
};

export default FloatingSocials;
