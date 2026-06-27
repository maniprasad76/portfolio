import React from 'react';
import { m } from 'framer-motion';
import { Code, ShieldCheck, Database, Headphones } from 'lucide-react';

const PILLARS = [
  {
    icon: <Database size={26} />,
    title: 'Data & Admin',
    description: 'Expertise in high-speed data entry (35+ WPM), meticulous record keeping, and complex Excel spreadsheet management.',
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Precision & Integrity',
    description: 'Maintained 100% accuracy and zero discrepancies across 500+ data entries. Attention to detail is an absolute non-negotiable.',
  },
  {
    icon: <Headphones size={26} />,
    title: 'Customer Support',
    description: 'Trained in Freshdesk and Zendesk for ticketing, email management, and complaint resolution following standard BPO SOPs.',
  },
  {
    icon: <Code size={26} />,
    title: 'Web Dev Fundamentals',
    description: 'Proficient in HTML5 & CSS3, capable of designing and developing responsive, mobile-friendly static portfolio websites.',
  },
];

export const About: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <m.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            My Story
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Delivering Accuracy & Excellence in Data and Support
          </m.h2>
        </div>

        {/* Narrative & Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-charcoal/85 text-base md:text-lg leading-relaxed font-medium"
          >
            <p>
              I am a motivated and detail-oriented BCA student with a demonstrated proficiency in Data Entry, Virtual Assistance, Microsoft Office Suite, Google Workspace, and digital file management.
            </p>
            <p>
              My professional focus revolves around maintaining 100% on-time delivery and zero-discrepancy data records across all academic and freelance projects. I am deeply experienced in end-to-end client communication via email and chat, document preparation, scheduling, and structured internet research.
            </p>
            <p>
              As a bilingual professional (English and Telugu) with a typing speed of 35+ WPM and a strong eye for accuracy, I am fully equipped for remote team structures. I am seeking a full-time 100% remote / WFH role in Data Entry, Virtual Assistance, Customer Support, or BPO environments where I can add immediate value.
            </p>
          </m.div>

          {/* Core Info Highlights */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-charcoal text-[#FFFAF3] p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 border-b border-neutral-700 pb-4 text-[#F62440]">
                Key Profile Highlights
              </h3>
              <ul className="space-y-4 text-sm tracking-wide text-neutral-200">
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="font-semibold text-neutral-400">Location:</span>
                  <span>Andhra Pradesh, India</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="font-semibold text-neutral-400">Current Role:</span>
                  <span>BCA Student / VA / BPO</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="font-semibold text-neutral-400">Key Skills:</span>
                  <span className="text-[#F62440] font-semibold text-right">Data Entry, Office, HTML/CSS</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="font-semibold text-neutral-400">Availability:</span>
                  <span className="text-[#F62440] font-bold">Immediate Joiner (Full-Time)</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-semibold text-neutral-400">Work Setup:</span>
                  <span>100% Remote / Home Ready</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-center">
              <a
                href="#contact"
                className="text-xs font-bold uppercase tracking-wider text-[#F62440] hover:text-[#FFFAF3] transition-colors duration-300 flex items-center gap-2 group"
                data-cursor="pointer"
              >
                Let's talk remote opportunities
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </m.div>
        </div>

        {/* Pillars / Work Ethic Cards */}
        <div className="border-t border-charcoal/5 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1B1B1B]">
              Core Professional Pillars
            </h3>
            <p className="text-sm text-charcoal/65 mt-2">The fundamentals driving my daily execution</p>
          </div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {PILLARS.map((pillar, i) => (
              <m.div
                key={i}
                variants={cardVariants}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(246,36,64,0.08)] hover:-translate-y-2 transition-all duration-500 border border-neutral-100 flex flex-col group relative overflow-hidden"
                data-cursor="pointer"
              >
                {/* Decorative hover shape */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F62440]/5 rounded-bl-[100px] -mr-10 -mt-10 transition-transform duration-500 scale-0 group-hover:scale-100 origin-top-right" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#FFFAF3] border border-charcoal/5 group-hover:bg-[#F62440] group-hover:border-[#F62440] transition-all duration-500 text-charcoal group-hover:text-white shadow-sm">
                    {pillar.icon}
                  </div>
                  
                  <h4 className="text-xl font-display font-bold text-[#1B1B1B] mb-4">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-[15px] text-charcoal/70 leading-relaxed font-medium mt-auto">
                    {pillar.description}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
};
export default About;
