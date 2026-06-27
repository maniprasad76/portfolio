import React from 'react';
import { m } from 'framer-motion';
import { GraduationCap, BookOpen, Code2, ShieldCheck, FileSpreadsheet, Keyboard, CheckCircle } from 'lucide-react';

const COURSEWORK = [
  { title: 'Computer Fundamentals & Office Automation', icon: <BookOpen size={16} /> },
  { title: 'Web Technologies (HTML5, CSS3)', icon: <Code2 size={16} /> },
  { title: 'Database Management Systems (DBMS)', icon: <ShieldCheck size={16} /> },
  { title: 'MS Office Applications', icon: <FileSpreadsheet size={16} /> },
  { title: 'Data Structures & Algorithms', icon: <Code2 size={16} /> },
  { title: 'Internet Technologies & E-Commerce', icon: <BookOpen size={16} /> },
  { title: 'Software Engineering Principles', icon: <ShieldCheck size={16} /> },
  { title: 'Computer Networks & OS', icon: <Code2 size={16} /> },
];

const CERTIFICATIONS = [
  {
    name: 'MS Office Specialist (MOS)',
    issuer: 'In Progress — Expected Q3 2026',
    icon: <FileSpreadsheet size={20} />
  },
  {
    name: 'Web Dev Fundamentals',
    issuer: 'freeCodeCamp — Completed (HTML5, CSS3)',
    icon: <Code2 size={20} />
  },
  {
    name: 'Typing Proficiency',
    issuer: '10FastFingers — 35+ WPM Verified',
    icon: <Keyboard size={20} />
  },
  {
    name: 'Google Workspace Fundamentals',
    issuer: 'Google — Self-Certified (2024)',
    icon: <ShieldCheck size={20} />
  },
  {
    name: 'Freshdesk CS Fundamentals',
    issuer: 'Freshdesk Academy — Completed',
    icon: <CheckCircle size={20} />
  },
  {
    name: 'Data Entry Best Practices',
    issuer: 'Coursera / NPTEL — In Progress',
    icon: <BookOpen size={20} />
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <m.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-3"
          >
            Academic Foundation
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Education & Certifications
          </m.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Degree Card (Spans 7 cols on large screens) */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-charcoal/5 shadow-sm flex flex-col group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <GraduationCap size={160} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFFAF3] border border-charcoal/10 rounded-2xl mb-8 text-[#F62440]">
                <GraduationCap size={28} />
              </div>
              
              <div className="mb-10">
                <span className="inline-block px-3 py-1 bg-charcoal/5 rounded-full text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-4 border border-charcoal/5">
                  2023 - Present (Ongoing)
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1B1B1B] mb-2 leading-tight">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-[#F62440] font-bold text-sm uppercase tracking-wider mb-1">
                  Sun Degree & PG College
                </p>
                <p className="text-charcoal/50 text-sm font-semibold">
                  Dr. BR Ambedkar University, Srikakulam, AP
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-charcoal mb-4 uppercase tracking-wider">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COURSEWORK.map((course, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] font-semibold text-charcoal/70 bg-[#FFFAF3] p-2.5 rounded-lg border border-charcoal/5">
                      <span className="text-[#F62440]">{course.icon}</span>
                      <span>{course.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </m.div>

          {/* Certifications (Spans 5 cols) */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-charcoal p-8 md:p-10 rounded-3xl shadow-xl flex flex-col text-[#FFFAF3]"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Certifications & Training
              </h3>
              <p className="text-neutral-400 text-sm font-medium">
                Continuous learning and professional upskilling
              </p>
            </div>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="mt-1 text-[#F62440]">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
