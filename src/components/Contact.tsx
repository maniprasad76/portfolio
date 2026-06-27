import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative border-t border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Let's Build Something Together
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <p className="text-charcoal/70 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Have an open remote role, a freelance request, or just want to connect? Send me an email directly or reach out on any of my social profiles below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email */}
            <MagneticButton>
              <a
                href="mailto:basaprasad76@gmail.com"
                className="flex items-center gap-4 px-8 py-5 bg-[#FFFAF3] border border-charcoal/5 rounded-full hover:border-[#F62440]/30 hover:shadow-md transition-all duration-300 group"
                data-cursor="pointer"
              >
                <Mail className="text-[#F62440]" size={20} />
                <span className="text-sm font-semibold text-[#1B1B1B] group-hover:text-[#F62440] transition-colors duration-300">
                  Send an Email
                </span>
              </a>
            </MagneticButton>

            {/* WhatsApp */}
            <MagneticButton>
              <a
                href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER || '917569428709'}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 px-8 py-5 bg-[#FFFAF3] border border-charcoal/5 rounded-full hover:border-[#F62440]/30 hover:shadow-md transition-all duration-300 group"
                data-cursor="pointer"
              >
                <MessageCircle className="text-[#F62440]" size={20} />
                <span className="text-sm font-semibold text-[#1B1B1B] group-hover:text-[#F62440] transition-colors duration-300">
                  Message on WhatsApp
                </span>
              </a>
            </MagneticButton>
          </div>

          {/* Social handles */}
          <div className="pt-8 flex flex-col items-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1B1B] mb-6">
              Connect with me online
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin size={20} aria-hidden="true" />, url: 'https://www.linkedin.com/in/prasad-basa-05314a28a/', label: 'LinkedIn Profile' },
                { icon: <FaGithub size={20} aria-hidden="true" />, url: 'https://github.com/maniprasad76/maniprasad76', label: 'GitHub Profile' },
                { icon: <FaInstagram size={20} aria-hidden="true" />, url: 'https://www.instagram.com/___mani___76/', label: 'Instagram Profile' },
                { icon: <FaFacebook size={20} aria-hidden="true" />, url: 'https://facebook.com', label: 'Facebook Profile' },
              ].map((social, idx) => (
                <MagneticButton key={idx}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center text-[#1B1B1B] hover:bg-[#F62440] hover:text-[#FFFAF3] transition-all duration-300"
                    data-cursor="pointer"
                  >
                    {social.icon}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
