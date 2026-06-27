import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Code, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    icon: <Code className="text-[#F62440]" size={28} />,
    title: 'Fullstack Development',
    description: 'Designing interactive React interfaces, type-safe NestJS REST/GraphQL APIs, database integrations, and high-performance Node.js backends.',
  },
  {
    icon: <ShieldCheck className="text-[#F62440]" size={28} />,
    title: 'Precision & File Integrity',
    description: 'Maintained 100% accuracy and zero discrepancies across 500+ data entries. Attention to detail is an absolute non-negotiable.',
  },
  {
    icon: <Zap className="text-[#F62440]" size={28} />,
    title: 'Quick Learner & Adaptable',
    description: 'From Excel formulas to Freshdesk ticket queues, rapidly picking up software suites and operating standards is my second nature.',
  },
  {
    icon: <Award className="text-[#F62440]" size={28} />,
    title: 'Remote Collaboration Ready',
    description: 'Self-motivated and disciplined. Experienced in managing calendars, organizing Drive files, and professional inbox management.',
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
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            My Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Crafting Digital Experiences, One Detail at a Time
          </motion.h2>
        </div>

        {/* Narrative & Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-charcoal/85 text-base md:text-lg leading-relaxed font-medium"
          >
            <p>
              I'm a Fullstack Web Developer with a strong passion for modern web engineering. I thrive on the synergy between interactive client-side interfaces and robust, scalable server architectures — building everything from pixel-perfect React UIs to type-safe NestJS API layers backed by PostgreSQL.
            </p>
            <p>
              My engineering focus spans the full stack: component-driven frontends with React and TypeScript, structured REST API design in NestJS, database schema architecture, and automated data pipeline scripting in Node.js. I bring a commitment to precision — whether it's maintaining 100% data integrity across 500+ records or crafting fluid user experiences.
            </p>
            <p>
              I'm fully equipped for remote team structures, bilingual in English and Telugu, and looking to join a high-performing engineering team where I can ship production software and add immediate value.
            </p>
          </motion.div>

          {/* Core Info Highlights */}
          <motion.div
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
                  <span>Fullstack Web Developer & BCA Student</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="font-semibold text-neutral-400">Tech Stack:</span>
                  <span className="text-[#F62440] font-semibold">React, NestJS, Node, TS, SQL</span>
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
          </motion.div>
        </div>

        {/* Pillars / Work Ethic Cards */}
        <div className="border-t border-charcoal/5 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1B1B1B]">
              Core Professional Pillars
            </h3>
            <p className="text-sm text-charcoal/65 mt-2">The fundamentals driving my daily execution</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#FFFAF3] border border-charcoal/5 p-8 rounded-xl hover:border-[#F62440]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                data-cursor="pointer"
              >
                <div>
                  <div className="mb-6 p-3 bg-charcoal/5 rounded-lg inline-block group-hover:bg-[#F62440]/5 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-display font-bold text-[#1B1B1B] mb-3 group-hover:text-[#F62440] transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-charcoal/75 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
