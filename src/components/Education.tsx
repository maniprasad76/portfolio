import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const COURSEWORK = [
  {
    title: 'Fullstack Web Architectures',
    desc: 'Interactive React components, type-safe TypeScript interfaces, client-server routing, and state.',
  },
  {
    title: 'Database Management Systems (DBMS)',
    desc: 'Relational database designs, SQL syntax, queries, entity relationships, and schemas.',
  },
  {
    title: 'Software Engineering Principles',
    desc: 'Development lifecycles, structured algorithms, testing paradigms, and version control (Git).',
  },
  {
    title: 'Computer Networks & OS',
    desc: 'Client-server communications, HTTP protocols, process handling, and server deployment environment setups.',
  },
  {
    title: 'Automation & Scripting',
    desc: 'Writing automated parsing scripts in Node.js, sheet formatting APIs, and cloud backup hooks.',
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-white relative border-t border-charcoal/5">
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
            Academic Foundation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Education & Coursework
          </motion.h2>
        </div>

        {/* BCA Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-charcoal text-[#FFFAF3] p-8 md:p-10 rounded-2xl shadow-lg border border-[#F62440]/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-[#F62440]/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-[#F62440]" size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F62440] block mb-2">
                Bachelor of Computer Applications (BCA)
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-1 leading-snug">
                Sun Degree & PG College
              </h3>
              <h4 className="text-sm font-semibold text-neutral-400 mb-6">
                Dr. BR Ambedkar University
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-medium mb-8">
                Currently pursuing. Gaining a solid theoretical and practical foundation in database systems, networking, systems architecture, and core web programming.
              </p>
            </div>
            
            <div className="border-t border-neutral-800 pt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Duration:
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F62440] ml-2">
                2023 – Present (Ongoing)
              </span>
            </div>
          </motion.div>

          {/* Coursework Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-[#F62440]" size={20} />
              <h4 className="text-base font-bold uppercase tracking-wider text-[#1B1B1B]">
                Relevant Coursework
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COURSEWORK.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-charcoal/5 rounded-xl border border-charcoal/5 hover:border-[#F62440]/20 hover:bg-[#FFFAF3] transition-all duration-300"
                >
                  <h5 className="text-sm font-display font-bold text-[#1B1B1B] mb-1.5">
                    {item.title}
                  </h5>
                  <p className="text-[12px] text-charcoal/75 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Education;
