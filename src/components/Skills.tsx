import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiGooglecloud, SiZendesk, SiReact, SiTypescript, SiNodedotjs, SiNestjs, SiPostgresql } from 'react-icons/si';
import { FaLaptopCode, FaRegEnvelope, FaUserGroup, FaLanguage, FaCss3Alt, FaFileExcel, FaFileWord, FaFilePowerpoint, FaServer } from 'react-icons/fa6';
import { MdOutlineAssessment } from 'react-icons/md';

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
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
            My Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Core Competencies & Capabilities
          </motion.h2>
        </div>

        {/* Skill Category Grids */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} className="border-b border-charcoal/5 pb-8 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1B1B1B]">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-10%' }}
                className="flex flex-wrap gap-3 md:gap-4"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 md:px-6 py-3 md:py-3.5 bg-white border border-charcoal/10 hover:border-[#F62440]/40 hover:shadow-lg hover:shadow-[#F62440]/10 rounded-full transition-all duration-300 flex items-center gap-3 group"
                    data-cursor="pointer"
                  >
                    {/* Optional Tech Icon */}
                    {'icon' in skill && (
                      <span className="text-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {skill.icon}
                      </span>
                    )}
                    
                    <span className="text-sm font-semibold text-charcoal group-hover:text-[#F62440] transition-colors duration-300">
                      {skill.name}
                    </span>
                    
                    {/* Optional details level for soft skills/languages */}
                    {'level' in skill && (
                      <span className="text-xs font-medium text-charcoal/50 ml-1 border-l border-charcoal/10 pl-3">
                        {skill.level}
                      </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
