import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiHtml5, SiGooglecloud, SiZendesk, SiReact, SiTypescript, SiNodedotjs, SiNestjs, SiPostgresql } from 'react-icons/si';
import { FaLaptopCode, FaRegEnvelope, FaUserGroup, FaLanguage, FaCss3Alt, FaFileExcel, FaFileWord, FaFilePowerpoint, FaServer } from 'react-icons/fa6';
import { MdOutlineAssessment } from 'react-icons/md';
import LogoLoop from './LogoLoop';
const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: <FaLaptopCode size={20} className="text-[#F62440]" aria-hidden="true" />,
    skills: [
      { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" aria-hidden="true" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" aria-hidden="true" /> },
      { name: 'HTML5 / CSS3', icon: <SiHtml5 className="text-[#E34F26]" aria-hidden="true" /> },
      { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-[#1572B6]" aria-hidden="true" /> },
      { name: 'Responsive UI', icon: <FaLaptopCode className="text-[#1B1B1B]" aria-hidden="true" /> },
    ],
  },
  {
    title: 'Backend Development',
    icon: <FaServer size={20} className="text-[#F62440]" aria-hidden="true" />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" aria-hidden="true" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-[#E0234E]" aria-hidden="true" /> },
      { name: 'SQL & Database', icon: <SiPostgresql className="text-[#4169E1]" aria-hidden="true" /> },
      { name: 'RESTful APIs', icon: <FaServer className="text-charcoal" aria-hidden="true" /> },
    ],
  },
  {
    title: 'Productivity & Office',
    icon: <MdOutlineAssessment size={20} className="text-[#F62440]" aria-hidden="true" />,
    skills: [
      { name: 'Microsoft Excel', icon: <FaFileExcel className="text-[#10793F]" aria-hidden="true" /> },
      { name: 'Microsoft Word', icon: <FaFileWord className="text-[#10793F] opacity-70" aria-hidden="true" /> },
      { name: 'Microsoft PowerPoint', icon: <FaFilePowerpoint className="text-[#D83B01]" aria-hidden="true" /> },
      { name: 'Google Sheets', icon: <SiGooglecloud className="text-[#0F9D58]" aria-hidden="true" /> },
      { name: 'Google Docs', icon: <SiGooglecloud className="text-[#4285F4]" aria-hidden="true" /> },
      { name: 'Google Drive', icon: <SiGooglecloud className="text-[#FFBA00]" aria-hidden="true" /> },
    ],
  },
  {
    title: 'Customer Support & Admin',
    icon: <FaRegEnvelope size={20} className="text-[#F62440]" aria-hidden="true" />,
    skills: [
      { name: 'Email Support', icon: <FaRegEnvelope className="text-charcoal" aria-hidden="true" /> },
      { name: 'Chat Support', icon: <FaRegEnvelope className="text-charcoal" aria-hidden="true" /> },
      { name: 'Freshdesk CS', icon: <SiZendesk className="text-[#00A88F]" aria-hidden="true" /> },
      { name: 'Zendesk Suite', icon: <SiZendesk className="text-[#03363D]" aria-hidden="true" /> },
    ],
  },
  {
    title: 'Professional Soft Skills',
    icon: <FaUserGroup size={20} className="text-[#F62440]" aria-hidden="true" />,
    skills: [
      { name: 'Attention to Detail', level: '100% Record Integrity' },
      { name: 'Problem Solving', level: 'Structured Solutions' },
      { name: 'Adaptability & Agile Learning', level: 'Rapid System Pickup' },
      { name: 'Time Management', level: '100% On-time Delivery' },
      { name: 'Team Collaboration', level: 'Clear Communication' },
    ],
  },
  {
    title: 'Languages',
    icon: <FaLanguage size={20} className="text-[#F62440]" aria-hidden="true" />,
    skills: [
      { name: 'English', level: 'Professional Working Proficiency' },
      { name: 'Telugu', level: 'Native / Bilingual Fluent' },
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 md:text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            My Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Core Competencies
          </motion.h2>
        </div>

        {/* Modern Tabbed UI */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar lg:w-1/3 lg:border-r border-charcoal/5 lg:pr-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative px-6 py-4 rounded-2xl flex items-center gap-4 text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink w-full ${
                  activeTab === idx 
                    ? 'text-white shadow-lg' 
                    : 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-charcoal rounded-2xl"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-xl hidden sm:block">
                  {React.cloneElement(cat.icon as React.ReactElement, {
                    className: activeTab === idx ? 'text-[#F62440]' : 'text-current',
                  })}
                </span>
                <span className={`relative z-10 font-display font-bold text-lg ${activeTab === idx ? 'text-white' : ''}`}>
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content Window */}
          <div className="lg:w-2/3 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 h-full flex flex-col"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFFAF3] border border-charcoal/5 flex items-center justify-center text-[#F62440] shadow-sm flex-shrink-0">
                    {React.cloneElement(SKILL_CATEGORIES[activeTab].icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-dark">
                    {SKILL_CATEGORIES[activeTab].title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-auto">
                  {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.15 }}
                      className="flex items-center gap-4 group"
                    >
                      {'icon' in skill ? (
                        <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-2xl group-hover:bg-white group-hover:border-[#F62440]/30 group-hover:shadow-sm transition-all duration-300 flex-shrink-0">
                          {skill.icon}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-[#F62440] font-bold text-lg group-hover:bg-white transition-all duration-300 flex-shrink-0">
                          0{idx + 1}
                        </div>
                      )}
                      
                      <div className="flex flex-col">
                        <span className="font-bold text-charcoal text-base">
                          {skill.name}
                        </span>
                        {'level' in skill && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#F62440] mt-0.5">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
