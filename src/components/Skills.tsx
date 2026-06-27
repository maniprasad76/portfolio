import React from 'react';
import { m } from 'framer-motion';
import { SiGooglecloud, SiCanva, SiHtml5, SiZendesk } from 'react-icons/si';
import { FaLaptopCode, FaRegEnvelope, FaUserGroup, FaLanguage, FaCss3Alt, FaFileExcel, FaFileWord, FaFilePowerpoint } from 'react-icons/fa6';
import { MdOutlineAssessment } from 'react-icons/md';

const SKILL_CATEGORIES = [
  {
    title: "Data & Admin",
    icon: <MdOutlineAssessment size={22} />,
    skills: [
      { name: "Data Entry" },
      { name: "Data Processing" },
      { name: "Record Keeping" },
      { name: "Documentation" },
      { name: "File Management" },
      { name: "Scheduling" },
      { name: "MIS Reporting" }
    ]
  },
  {
    title: "Productivity Tools",
    icon: <FaFileExcel size={22} />,
    skills: [
      { name: "MS Excel", icon: <FaFileExcel /> },
      { name: "MS Word", icon: <FaFileWord /> },
      { name: "MS PowerPoint", icon: <FaFilePowerpoint /> },
      { name: "Google Sheets", icon: <SiGooglecloud /> },
      { name: "Google Docs", icon: <SiGooglecloud /> },
      { name: "Google Drive", icon: <SiGooglecloud /> },
      { name: "Google Meet", icon: <SiGooglecloud /> }
    ]
  },
  {
    title: "Technical",
    icon: <FaLaptopCode size={22} />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Static Website Development" },
      { name: "Canva (Basic)", icon: <SiCanva /> },
      { name: "Internet Research" },
      { name: "Email Management" },
      { name: "Fast Typing (35+ WPM)" }
    ]
  },
  {
    title: "Customer Support",
    icon: <FaRegEnvelope size={22} />,
    skills: [
      { name: "Email Support" },
      { name: "Chat Support" },
      { name: "Virtual Assistance" },
      { name: "Client Communication" },
      { name: "Complaint Handling" },
      { name: "Ticket Logging" },
      { name: "Freshdesk (Basic)" },
      { name: "Zendesk (Basic)", icon: <SiZendesk /> }
    ]
  },
  {
    title: "Soft Skills",
    icon: <FaUserGroup size={22} />,
    skills: [
      { name: "Attention to Detail" },
      { name: "Time Management" },
      { name: "Multitasking" },
      { name: "Adaptability" },
      { name: "Problem Solving" },
      { name: "Quick Learner" },
      { name: "Professionalism" },
      { name: "Team Collaboration" }
    ]
  },
  {
    title: "Languages",
    icon: <FaLanguage size={22} />,
    skills: [
      { name: "English", level: "Professional Working" },
      { name: "Telugu", level: "Native / Fluent" }
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <m.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-3"
          >
            My Stack
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Core Competencies
          </m.h2>
        </div>

        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#F62440]/10 flex items-center justify-center text-[#F62440] group-hover:scale-105 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#1B1B1B]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFAF3] border border-charcoal/5 rounded-md text-charcoal/80 hover:border-[#F62440]/30 transition-colors cursor-default"
                  >
                    {'icon' in skill && (
                      <span className="text-sm text-charcoal/50">
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-[13px] font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
