import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    try {
      // Using Formspree for serverless form handling
      const response = await fetch('https://formspree.io/f/basaprasad76@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormState('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        // Fallback: open mailto
        window.location.href = `mailto:basaprasad76@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        setFormState('idle');
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:basaprasad76@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative border-t border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-2"
          >
            Get In Touch
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-dark"
          >
            Let's Build Something Together
          </m.h2>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left: Contact Form */}
          <div>
            <p className="text-charcoal/75 text-base leading-relaxed font-medium mb-8">
              Have an open remote role, a freelance request, or just want to connect? 
              Fill out the form or reach out directly via email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-dark mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 bg-cream border border-charcoal/10 rounded-xl text-sm font-medium text-dark placeholder:text-charcoal/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-dark mb-2">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@company.com"
                  className="w-full px-5 py-3.5 bg-cream border border-charcoal/10 rounded-xl text-sm font-medium text-dark placeholder:text-charcoal/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-5 py-3.5 bg-cream border border-charcoal/10 rounded-xl text-sm font-medium text-dark placeholder:text-charcoal/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all duration-300 resize-none"
                />
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="flex items-center gap-3 px-8 py-4 bg-accent text-cream rounded-full text-sm font-bold uppercase tracking-wider hover:bg-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-wait w-full justify-center sm:w-auto"
                  data-cursor="pointer"
                >
                  {formState === 'sent' ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : formState === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </MagneticButton>
            </form>
          </div>

          {/* Right: Direct Contact & Socials */}
          <div className="space-y-8">
            {/* Quick Contact Options */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-dark mb-4">
                Or reach out directly
              </h3>

              <MagneticButton>
                <a
                  href="mailto:basaprasad76@gmail.com"
                  className="flex items-center gap-4 px-6 py-4 bg-cream border border-charcoal/5 rounded-xl hover:border-accent/30 hover:shadow-md transition-all duration-300 group w-full"
                  data-cursor="pointer"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-dark block">Email</span>
                    <span className="text-xs text-charcoal/65">basaprasad76@gmail.com</span>
                  </div>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER || '917569428709'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-cream border border-charcoal/5 rounded-xl hover:border-accent/30 hover:shadow-md transition-all duration-300 group w-full"
                  data-cursor="pointer"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <MessageCircle className="text-accent" size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-dark block">WhatsApp</span>
                    <span className="text-xs text-charcoal/65">Quick message</span>
                  </div>
                </a>
              </MagneticButton>
            </div>

            {/* Social handles */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark mb-6">
                Connect with me online
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin size={20} aria-hidden="true" />, url: 'https://www.linkedin.com/in/prasad-basa-05314a28a/', label: 'LinkedIn Profile' },
                  { icon: <FaGithub size={20} aria-hidden="true" />, url: 'https://github.com/maniprasad76', label: 'GitHub Profile' },
                  { icon: <FaInstagram size={20} aria-hidden="true" />, url: 'https://www.instagram.com/___mani___76/', label: 'Instagram Profile' },
                ].map((social, idx) => (
                  <MagneticButton key={idx}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center text-dark hover:bg-accent hover:text-cream transition-all duration-300"
                      data-cursor="pointer"
                    >
                      {social.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-5 bg-dark rounded-xl text-cream">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest">Currently Available</span>
              </div>
              <p className="text-sm text-neutral-300 font-medium">
                Open to full-time remote roles, freelance projects, and contract work. 
                Immediate joiner.
              </p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Contact;
