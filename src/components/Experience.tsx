import React from 'react';
import { m } from 'framer-motion';
import { Briefcase, FileSpreadsheet, Headset } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    role: 'Static Website & Portfolio Development',
    company: 'Freelance / Self-Initiated Web Projects',
    period: '2023 - Present',
    icon: <Briefcase size={20} />,
    description: [
      'Designed and developed 5+ responsive static websites using HTML5 & CSS3, focusing on clean layout, mobile-friendly structure, and cross-browser compatibility.',
      'Built professional portfolio websites for clients — gathered requirements via email and chat, managed feedback cycles, and delivered on or before agreed deadlines with 100% client satisfaction.',
      'Maintained organised project folders with consistent file naming conventions, ensuring 100% file integrity, zero data loss, and seamless retrieval at all times.',
      'Handled end-to-end client communication via email and chat — mirroring a virtual assistant workflow: clarifying requirements, providing progress updates, and incorporating revisions professionally.',
      'Used Canva for basic graphic assets and social media visuals integrated into client websites.'
    ]
  },
  {
    role: 'Data Entry & Digital Record Management System',
    company: 'Academic / Personal Productivity Projects',
    period: '2023 - Present',
    icon: <FileSpreadsheet size={20} />,
    description: [
      'Practised high-speed, high-accuracy data entry using MS Excel and Google Sheets — organised structured records with consistent formatting and zero data discrepancy across 500+ entries.',
      'Conducted structured internet research and compiled reports in MS Word and Google Docs for academic assignments with proper formatting, headings, and references.',
      'Built and maintained a digital file management system in Google Drive using a hierarchical folder structure — ensured organised storage, scheduled backups, and seamless retrieval at all times.',
      'Created Excel and Google Sheets trackers for academic schedules, task lists, and personal productivity — improving on-time delivery rate to 100% across all assignments.',
      'Logged and managed email correspondence across multiple threads, maintaining organised inboxes and response timelines consistent with a virtual assistant role.'
    ]
  },
  {
    role: 'BPO Process Simulation & Customer Support Practice',
    company: 'Self-Initiated Training Project',
    period: '2024 - Present',
    icon: <Headset size={20} />,
    description: [
      'Completed Freshdesk CS Fundamentals course — practised ticket management, escalation workflows, and chat support response templates used in BPO environments.',
      'Drafted 50+ professional email response templates covering complaint handling, follow-up, order queries, and escalation — aligned with standard BPO SOPs.',
      'Practised typing accuracy and speed using 10FastFingers, achieving 35+ WPM with 97%+ accuracy — meeting or exceeding most DEO role requirements.',
      'Simulated data verification workflows — cross-referencing data sets in Excel against source documents to identify and correct inconsistencies.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-cream relative border-t border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <m.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-3"
          >
            My Journey
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Experience & Training
          </m.h2>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-[39px] md:left-1/2 top-[220px] bottom-12 w-px bg-charcoal/10 md:-translate-x-1/2 z-0" />

        {/* Experience Items */}
        <div className="space-y-16">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <m.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative z-10 flex flex-col md:flex-row gap-8 md:gap-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Desktop Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-cream border-2 border-[#F62440] text-[#F62440] items-center justify-center z-10 shadow-sm">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  
                  {/* Mobile Node + Header */}
                  <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-cream border-2 border-[#F62440] text-[#F62440] flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-[#1B1B1B]">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#F62440]">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-charcoal/5 rounded-full text-[11px] font-bold tracking-wider text-charcoal/60 uppercase mb-6 border border-charcoal/5">
                    {item.period}
                  </span>

                  <ul className={`space-y-3 text-sm text-charcoal/70 font-medium ${isEven ? 'md:text-right' : 'text-left'}`}>
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
