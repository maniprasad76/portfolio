import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileSpreadsheet, Headset } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    role: 'Freelance Fullstack Developer',
    company: 'Self-Initiated & Client Projects',
    period: '2023 – Present',
    icon: <Briefcase className="text-[#FFFAF3]" size={16} />,
    details: [
      'Designed and built responsive web applications incorporating interactive React frontends and scalable NestJS backends.',
      'Wrote clean, type-safe TypeScript codebases, managed PostgreSQL database setups, and structured relational queries.',
      'Managed end-to-end client communications, handling feedback cycles, requirement gathering, and remote deliveries.',
    ],
  },
  {
    role: 'Automation Scripting & Data Admin',
    company: 'Academic & Productivity Projects',
    period: '2023 – Present',
    icon: <FileSpreadsheet className="text-[#FFFAF3]" size={16} />,
    details: [
      'Coded Node.js automation scripts to parse, audit, and sync 500+ records in Google Sheets and Excel with 0% error rate.',
      'Maintained advanced Excel analytics trackers, utilizing VLOOKUP, pivot tables, and interactive dashboards.',
      'Designed and implemented hierarchical cloud folder infrastructures with automated backup scripts in Google Drive.',
    ],
  },
  {
    role: 'Virtual Assistant & CS Practice',
    company: 'Self-Initiated Training Projects',
    period: '2024 – Present',
    icon: <Headset className="text-[#FFFAF3]" size={16} />,
    details: [
      'Completed Freshdesk CS Fundamentals, practicing ticket logging, escalations, and resolution queues.',
      'Drafted 50+ professional response email templates covering standard customer complaints and support SOPs.',
      'Simulated multi-channel email correspondence threads and cross-referenced data tables to verify records.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            My Timeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Experience & Practice History
          </motion.h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-charcoal/10 ml-4 md:ml-32 py-4 space-y-12 md:space-y-20">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Icon Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#F62440] flex items-center justify-center shadow"
              >
                {item.icon}
              </motion.div>

              {/* Time period floating to the left on desktop */}
              <div className="hidden md:block absolute -left-44 top-2 text-right w-36">
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal/50">
                  {item.period}
                </span>
              </div>

              {/* Mobile display of period */}
              <div className="md:hidden mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F62440]">
                  {item.period}
                </span>
              </div>

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6 }}
                className="bg-charcoal/5 p-6 md:p-8 rounded-xl border border-charcoal/5 hover:border-[#F62440]/20 hover:bg-[#FFFAF3] transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1B1B1B]">
                  {item.role}
                </h3>
                <h4 className="text-xs md:text-sm font-semibold text-[#F62440] mb-4">
                  {item.company}
                </h4>

                <ul className="space-y-3 text-sm text-charcoal/80 leading-relaxed font-medium">
                  {item.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex gap-2">
                      <span className="text-[#F62440] font-bold select-none">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
