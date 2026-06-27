import React from 'react';
import { Printer, Download } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2">
            Curriculum Vitae
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]">
            Interactive Resume Preview
          </h2>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <MagneticButton>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3.5 bg-[#F62440] text-[#FFFAF3] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1B1B1B] transition-colors duration-300"
              data-cursor="pointer"
            >
              <Printer size={14} />
              Print / Save as PDF
            </button>
          </MagneticButton>
          
          <MagneticButton>
            <a
              href="mailto:basaprasad76@gmail.com?subject=Resume Request - Basa Prasad"
              className="flex items-center gap-2 px-6 py-3.5 border border-[#1B1B1B] text-[#1B1B1B] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1B1B1B] hover:text-[#FFFAF3] transition-colors duration-300"
              data-cursor="pointer"
            >
              <Download size={14} />
              Request Custom Copy
            </a>
          </MagneticButton>
        </div>

        {/* Resume Preview Sheet */}
        <div className="bg-white border border-charcoal/10 rounded-2xl shadow-xl p-8 md:p-12 text-left max-w-4xl mx-auto font-sans relative overflow-hidden print-page">
          {/* Header */}
          <div className="border-b-2 border-charcoal/10 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h3 className="text-3xl font-display font-bold tracking-tight text-[#1B1B1B]">
                BASA PRASAD
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#F62440] mt-1">
                Fullstack Developer • React / NestJS / TypeScript • Virtual Assistant • BCA Student
              </p>
            </div>
            
            <div className="text-xs text-charcoal/70 space-y-1 md:text-right font-medium">
              {/* Phone number hidden for privacy */}
              <p>basaprasad76@gmail.com</p>
              <p>Srikakulam, Andhra Pradesh</p>
              <p className="underline">linkedin.com/in/prasad-basa-05314a28a</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column (Skills, Info, Education) */}
            <div className="md:col-span-1 space-y-8 border-r border-charcoal/10 pr-0 md:pr-8">
              {/* Profile */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#F62440] border-b border-charcoal/10 pb-2 mb-3">
                  Summary
                </h4>
                <p className="text-xs text-charcoal/80 leading-relaxed font-medium">
                  Motivated BCA student and Fullstack Developer with demonstrated proficiency in React, NestJS, TypeScript, Node.js, data automation scripting, and virtual assistance. Bilingual in English and Telugu.
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#F62440] border-b border-charcoal/10 pb-2 mb-3">
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-xs font-bold text-charcoal">Sun Degree & PG College</h5>
                    <p className="text-[10px] text-charcoal/60">Dr. BR Ambedkar University</p>
                    <p className="text-[10px] text-charcoal/60">BCA (2023 - Present)</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#F62440] border-b border-charcoal/10 pb-2 mb-3">
                  Core Skills
                </h4>
                <ul className="text-[11px] text-charcoal/80 space-y-1.5 font-medium">
                  <li>• React.js & Redux State</li>
                  <li>• NestJS & Node.js Backends</li>
                  <li>• TypeScript & ES6 JavaScript</li>
                  <li>• SQL & PostgreSQL Database</li>
                  <li>• Data Automation & Scripting</li>
                  <li>• Helpdesk CS & VA Operations</li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#F62440] border-b border-charcoal/10 pb-2 mb-3">
                  Certifications
                </h4>
                <ul className="text-[10px] text-charcoal/70 space-y-2">
                  <li>
                    <strong className="text-charcoal block">Web Dev Fundamentals</strong>
                    freeCodeCamp
                  </li>
                  <li>
                    <strong className="text-charcoal block">Freshdesk CS Fundamentals</strong>
                    Freshdesk Academy
                  </li>
                  <li>
                    <strong className="text-charcoal block">Typing Speed (35+ WPM)</strong>
                    10FastFingers Verified
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column (Experience & Projects) */}
            <div className="md:col-span-2 space-y-8">
              {/* Experience */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#F62440] border-b border-charcoal/10 pb-2 mb-4">
                  Projects & Experience
                </h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-xs font-bold text-charcoal">Fullstack Task Manager & Record Vault</h5>
                      <span className="text-[10px] text-charcoal/50">2023 – Present</span>
                    </div>
                    <p className="text-[11px] font-semibold text-charcoal/60 italic mb-2">Freelance & Self-Initiated Projects</p>
                    <ul className="text-xs text-charcoal/70 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Built a responsive React interface with secure NestJS REST APIs and PostgreSQL database models.</li>
                      <li>Managed requirements, client feedback loops, and deployment pipelines with 100% satisfaction.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-xs font-bold text-charcoal">Automated Record Tracking & ETL Scripting</h5>
                      <span className="text-[10px] text-charcoal/50">2023 – Present</span>
                    </div>
                    <p className="text-[11px] font-semibold text-charcoal/60 italic mb-2">Academic & Personal Projects</p>
                    <ul className="text-xs text-charcoal/70 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Coded Node.js automation scripts to parse, audit, and synchronize 500+ records in Sheets.</li>
                      <li>Maintained Excel tracking systems, writing custom lookup routines and automated backup utilities.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-xs font-bold text-charcoal">BPO Customer Support Simulation</h5>
                      <span className="text-[10px] text-charcoal/50">2024 – Present</span>
                    </div>
                    <p className="text-[11px] font-semibold text-charcoal/60 italic mb-2">Self-Initiated Training Projects</p>
                    <ul className="text-xs text-charcoal/70 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Completed Freshdesk ticketing courses, practicing multi-channel support queues and escalations.</li>
                      <li>Drafted 50+ professional email templates matching standard helpdesk support SOPs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
