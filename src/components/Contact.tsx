import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Let's Build Something Together
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Contact Details & Socials (left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="text-charcoal/70 text-base md:text-lg leading-relaxed font-medium">
              Have an open remote role, a freelance request, or just want to connect? Drop a line in the form, email me directly, or reach out on socials.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:basaprasad76@gmail.com"
                className="flex items-center gap-4 p-4 border border-charcoal/5 rounded-xl hover:border-[#F62440]/30 hover:bg-[#FFFAF3] transition-all duration-300 group"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 bg-charcoal/5 rounded-lg flex items-center justify-center group-hover:bg-[#F62440]/5 transition-colors duration-300">
                  <Mail className="text-[#F62440]" size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-charcoal/40 uppercase block">Email Address</span>
                  <span className="text-sm font-semibold text-[#1B1B1B] group-hover:text-[#F62440] transition-colors duration-300">
                    basaprasad76@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone / Whatsapp */}
              <a
                href="https://wa.me/917569428709"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border border-charcoal/5 rounded-xl hover:border-[#F62440]/30 hover:bg-[#FFFAF3] transition-all duration-300 group"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 bg-charcoal/5 rounded-lg flex items-center justify-center group-hover:bg-[#F62440]/5 transition-colors duration-300">
                  <MessageCircle className="text-[#F62440]" size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-charcoal/40 uppercase block">WhatsApp / Call</span>
                  <span className="text-sm font-semibold text-[#1B1B1B] group-hover:text-[#F62440] transition-colors duration-300">
                    +91 7569428709
                  </span>
                </div>
              </a>
            </div>

            {/* Social handles */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1B1B] mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin size={18} aria-hidden="true" />, url: 'https://www.linkedin.com/in/prasad-basa-05314a28a/', label: 'LinkedIn Profile' },
                  { icon: <FaGithub size={18} aria-hidden="true" />, url: 'https://github.com/maniprasad76/maniprasad76', label: 'GitHub Profile' },
                  { icon: <FaInstagram size={18} aria-hidden="true" />, url: 'https://www.instagram.com/___mani___76/', label: 'Instagram Profile' },
                  { icon: <FaFacebook size={18} aria-hidden="true" />, url: 'https://facebook.com', label: 'Facebook Profile' },
                ].map((social, idx) => (
                  <MagneticButton key={idx}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-[#F62440] hover:text-[#FFFAF3] hover:border-transparent transition-all duration-300"
                      data-cursor="pointer"
                    >
                      {social.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 bg-[#FFFAF3] border border-charcoal/10 p-8 md:p-10 rounded-2xl shadow-lg relative min-h-[460px]"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-charcoal/60">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`px-4 py-3 bg-charcoal/5 border rounded-lg text-sm focus:outline-none focus:border-[#F62440] transition-colors duration-300 ${
                          errors.name ? 'border-[#F62440]/60' : 'border-charcoal/10'
                        }`}
                        data-cursor="pointer"
                      />
                      {errors.name && <span className="text-[10px] text-[#F62440] font-semibold">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-charcoal/60">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`px-4 py-3 bg-charcoal/5 border rounded-lg text-sm focus:outline-none focus:border-[#F62440] transition-colors duration-300 ${
                          errors.email ? 'border-[#F62440]/60' : 'border-charcoal/10'
                        }`}
                        data-cursor="pointer"
                      />
                      {errors.email && <span className="text-[10px] text-[#F62440] font-semibold">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wide text-charcoal/60">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`px-4 py-3 bg-charcoal/5 border rounded-lg text-sm focus:outline-none focus:border-[#F62440] transition-colors duration-300 ${
                        errors.subject ? 'border-[#F62440]/60' : 'border-charcoal/10'
                      }`}
                      data-cursor="pointer"
                    />
                    {errors.subject && <span className="text-[10px] text-[#F62440] font-semibold">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-charcoal/60">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`px-4 py-3 bg-charcoal/5 border rounded-lg text-sm focus:outline-none focus:border-[#F62440] resize-none transition-colors duration-300 ${
                        errors.message ? 'border-[#F62440]/60' : 'border-charcoal/10'
                      }`}
                      data-cursor="pointer"
                    />
                    {errors.message && <span className="text-[10px] text-[#F62440] font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <MagneticButton>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-8 py-4 bg-[#F62440] text-[#FFFAF3] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1B1B1B] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-cursor="pointer"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send size={12} />
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <CheckCircle2 className="text-emerald-500 mb-6" size={64} />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-[#1B1B1B] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-charcoal/70 max-w-sm mb-8 leading-relaxed">
                    Thank you for reaching out, Basa. I will review your message and respond as soon as possible.
                  </p>
                  <MagneticButton>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-[#1B1B1B] text-[#FFFAF3] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F62440] transition-colors duration-300"
                      data-cursor="pointer"
                    >
                      Send Another Message
                    </button>
                  </MagneticButton>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
