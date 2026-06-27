import React from 'react';
import { Download } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Resume: React.FC = () => {
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
            <a
              href="/resume.pdf"
              download="Basa_Prasad_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#F62440] text-[#FFFAF3] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1B1B1B] transition-colors duration-300"
              data-cursor="pointer"
            >
              <Download size={14} />
              Download PDF Resume
            </a>
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
          <div className="bg-[#1a2b4c] text-white p-6 md:p-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12 mb-8 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-widest mb-2 uppercase">
              BASA PRASAD
            </h3>
            <p className="text-sm md:text-base font-semibold text-blue-200 mb-4">
              Data Entry Operator · Virtual Assistant · Customer Support · BPO Executive · Back Office Executive
            </p>
            <div className="text-xs md:text-sm text-blue-100 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-4">
              <span>+91 7569428709</span>
              <span className="hidden md:inline">•</span>
              <span>basaprasad76@gmail.com</span>
              <span className="hidden md:inline">•</span>
              <span>Srikakulam, Andhra Pradesh</span>
              <span className="hidden md:inline">•</span>
              <a href="https://linkedin.com/in/prasad-basa-05314a28a" className="hover:underline">linkedin.com/in/basaprasad</a>
            </div>
            <div className="text-xs font-bold bg-[#0d1b33] inline-block px-4 py-2 rounded-full text-blue-300">
              ● Fresher | Immediate Joiner | Remote / Work-From-Home Preferred | Full-Time Available
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-3">
              PROFESSIONAL SUMMARY
            </h4>
            <p className="text-xs text-charcoal/80 leading-relaxed font-medium text-justify">
              Motivated and detail-oriented BCA student (2023–Present) with demonstrated proficiency in <strong className="text-charcoal">Data Entry, Virtual Assistance, Microsoft Office Suite, Google Workspace,</strong> and <strong className="text-charcoal">digital file management</strong>. Maintains <strong className="text-charcoal">100% on-time delivery</strong> and <strong className="text-charcoal">zero-discrepancy data records</strong> across all academic and freelance projects. Experienced in <strong className="text-charcoal">end-to-end client communication</strong> via email and chat, document preparation, scheduling, and structured internet research. Bilingual in <strong className="text-charcoal">English and Telugu</strong>, with a typing speed of <strong className="text-charcoal">35+ WPM</strong> and a strong eye for accuracy. Immediate joiner seeking a full-time <strong className="text-charcoal">100% remote / WFH</strong> role in Data Entry, Virtual Assistance, Customer Support, or BPO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column (Skills & Languages) */}
            <div className="md:col-span-5 space-y-6 md:border-r border-charcoal/10 md:pr-6">
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-3">
                  CORE SKILLS
                </h4>
                
                <div className="mb-4">
                  <strong className="text-xs text-charcoal block mb-1">Data & Admin</strong>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-medium">Data Entry • Data Processing • Record Keeping • Documentation • File Management • Scheduling • Data Management • MIS Reporting</p>
                </div>

                <div className="mb-4">
                  <strong className="text-xs text-charcoal block mb-1">Productivity Tools</strong>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-medium">MS Excel (Pivot, VLOOKUP, Charts) • MS Word • MS PowerPoint • Google Sheets • Google Docs • Google Drive • Google Calendar • Google Meet</p>
                </div>

                <div className="mb-4">
                  <strong className="text-xs text-charcoal block mb-1">Technical</strong>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-medium">HTML5 • CSS3 • Static Website Development • Canva (Basic) • Internet Research • Email Management • Fast Typing (35+ WPM)</p>
                </div>

                <div className="mb-4">
                  <strong className="text-xs text-charcoal block mb-1">Customer Support</strong>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-medium">Email Support • Chat Support • Virtual Assistance • Client Communication • Complaint Handling • Ticket Logging • Freshdesk (Basic) • Zendesk (Basic)</p>
                </div>

                <div className="mb-2">
                  <strong className="text-xs text-charcoal block mb-1">Soft Skills</strong>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-medium">Attention to Detail • Time Management • Multitasking • Adaptability • Problem Solving • Quick Learner • Professionalism • Team Collaboration</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-3">
                  LANGUAGES
                </h4>
                <div className="space-y-2">
                  <div>
                    <strong className="text-xs text-charcoal block">Telugu</strong>
                    <p className="text-[11px] text-charcoal/70 font-medium">Native / Fluent</p>
                  </div>
                  <div>
                    <strong className="text-xs text-charcoal block">English</strong>
                    <p className="text-[11px] text-charcoal/70 font-medium">Professional Working Proficiency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Education, Certs, Projects) */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-3">
                  EDUCATION
                </h4>
                <strong className="text-sm text-charcoal block">Bachelor of Computer Applications (BCA)</strong>
                <p className="text-xs text-charcoal/80 font-medium">Sun Degree & PG College, Dr. BR Ambedkar University</p>
                <p className="text-xs text-charcoal/80 font-medium">Srikakulam, Andhra Pradesh</p>
                <p className="text-xs font-bold text-[#3b5998] mb-2">2023 – Present (Ongoing)</p>
                
                <strong className="text-xs text-charcoal block mb-1 mt-2">Relevant Coursework:</strong>
                <ul className="text-[11px] text-charcoal/70 list-disc pl-4 space-y-0.5 font-medium">
                  <li>Computer Fundamentals & Office Automation</li>
                  <li>Web Technologies (HTML5, CSS3)</li>
                  <li>Database Management Systems (DBMS)</li>
                  <li>MS Office Applications</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Internet Technologies & E-Commerce</li>
                  <li>Software Engineering Principles</li>
                  <li>Computer Networks & OS</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-3">
                  CERTIFICATIONS & TRAINING
                </h4>
                <div className="space-y-2 text-xs">
                  <p><strong className="text-charcoal">MS Office Specialist (MOS)</strong><br/><span className="text-charcoal/70 font-medium">In Progress — Expected Q3 2026</span></p>
                  <p><strong className="text-charcoal">Web Dev Fundamentals</strong><br/><span className="text-charcoal/70 font-medium">freeCodeCamp — Completed (HTML5, CSS3)</span></p>
                  <p><strong className="text-charcoal">Typing Proficiency</strong><br/><span className="text-charcoal/70 font-medium">10FastFingers — 35+ WPM Verified</span></p>
                  <p><strong className="text-charcoal">Google Workspace Fundamentals</strong><br/><span className="text-charcoal/70 font-medium">Google — Self-Certified (2024)</span></p>
                  <p><strong className="text-charcoal">Freshdesk CS Fundamentals</strong><br/><span className="text-charcoal/70 font-medium">Freshdesk Academy — Completed</span></p>
                  <p><strong className="text-charcoal">Data Entry Best Practices</strong><br/><span className="text-charcoal/70 font-medium">Coursera / NPTEL — In Progress</span></p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-3">
                  QUICK PROFILE
                </h4>
                <ul className="text-xs text-charcoal/80 space-y-1 font-medium">
                  <li><strong className="text-charcoal">Availability:</strong> Immediate — Full-Time</li>
                  <li><strong className="text-charcoal">Work Mode:</strong> 100% Remote / WFH</li>
                  <li><strong className="text-charcoal">Expected Salary:</strong> INR 15,000+ / Month</li>
                  <li><strong className="text-charcoal">Internet:</strong> Reliable Broadband Connection</li>
                  <li><strong className="text-charcoal">Shift Preference:</strong> Day / Flexible / IST</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal/10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b5998] border-b-2 border-[#3b5998] pb-1 mb-4">
              PROJECTS & HANDS-ON EXPERIENCE
            </h4>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <strong className="text-sm text-charcoal block">Static Website & Portfolio Development</strong>
                  <span className="text-xs text-charcoal/60">2023 – Present</span>
                </div>
                <p className="text-xs font-semibold text-[#3b5998] italic mb-2">Freelance / Self-Initiated Web Projects</p>
                <ul className="text-xs text-charcoal/80 space-y-1.5 list-disc pl-4 font-medium text-justify">
                  <li>Designed and developed <strong className="text-charcoal">5+ responsive static websites</strong> using HTML5 & CSS3, focusing on clean layout, mobile-friendly structure, and cross-browser compatibility.</li>
                  <li>Built <strong className="text-charcoal">professional portfolio websites for clients</strong> — gathered requirements via email and chat, managed feedback cycles, and delivered on or before agreed deadlines with <strong className="text-charcoal">100% client satisfaction</strong>.</li>
                  <li>Maintained organised project folders with consistent file naming conventions, ensuring <strong className="text-charcoal">100% file integrity</strong>, zero data loss, and seamless retrieval at all times.</li>
                  <li>Handled <strong className="text-charcoal">end-to-end client communication</strong> via email and chat — mirroring a virtual assistant workflow: clarifying requirements, providing progress updates, and incorporating revisions professionally.</li>
                  <li>Used <strong className="text-charcoal">Canva</strong> for basic graphic assets and social media visuals integrated into client websites.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <strong className="text-sm text-charcoal block">Data Entry & Digital Record Management System</strong>
                  <span className="text-xs text-charcoal/60">2023 – Present</span>
                </div>
                <p className="text-xs font-semibold text-[#3b5998] italic mb-2">Academic / Personal Productivity Projects</p>
                <ul className="text-xs text-charcoal/80 space-y-1.5 list-disc pl-4 font-medium text-justify">
                  <li>Practised <strong className="text-charcoal">high-speed, high-accuracy data entry</strong> using MS Excel and Google Sheets — organised structured records with consistent formatting and <strong className="text-charcoal">zero data discrepancy</strong> across 500+ entries.</li>
                  <li>Conducted <strong className="text-charcoal">structured internet research</strong> and compiled reports in MS Word and Google Docs for academic assignments with proper formatting, headings, and references.</li>
                  <li>Built and maintained a <strong className="text-charcoal">digital file management system</strong> in Google Drive using a hierarchical folder structure — ensured organised storage, scheduled backups, and seamless retrieval at all times.</li>
                  <li>Created <strong className="text-charcoal">Excel and Google Sheets trackers</strong> for academic schedules, task lists, and personal productivity — improving on-time delivery rate to <strong className="text-charcoal">100%</strong> across all assignments.</li>
                  <li>Logged and managed <strong className="text-charcoal">email correspondence</strong> across multiple threads, maintaining organised inboxes and response timelines consistent with a virtual assistant role.</li>
                  <li>Used <strong className="text-charcoal">Freshdesk (free tier)</strong> to practice ticket creation, assignment, and resolution workflows, building foundational customer support tool familiarity.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <strong className="text-sm text-charcoal block">BPO Process Simulation & Customer Support Practice</strong>
                  <span className="text-xs text-charcoal/60">2024 – Present</span>
                </div>
                <p className="text-xs font-semibold text-[#3b5998] italic mb-2">Self-Initiated Training Project</p>
                <ul className="text-xs text-charcoal/80 space-y-1.5 list-disc pl-4 font-medium text-justify">
                  <li>Completed <strong className="text-charcoal">Freshdesk CS Fundamentals</strong> course — practised ticket management, escalation workflows, and chat support response templates used in BPO environments.</li>
                  <li>Drafted <strong className="text-charcoal">50+ professional email response templates</strong> covering complaint handling, follow-up, order queries, and escalation — aligned with standard BPO SOPs.</li>
                  <li>Practised <strong className="text-charcoal">typing accuracy and speed</strong> using 10FastFingers, achieving <strong className="text-charcoal">35+ WPM</strong> with 97%+ accuracy — meeting or exceeding most DEO role requirements.</li>
                  <li>Simulated <strong className="text-charcoal">data verification workflows</strong> — cross-referencing data sets in Excel against source documents to identify and correct inconsistencies.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-charcoal/5 text-[11px] text-charcoal/70 font-medium rounded-lg text-justify">
              <strong className="text-charcoal">ATS KEYWORDS:</strong> Data Entry | BPO Executive | Virtual Assistant | Customer Support | Data Processing | Back Office | MS Excel | Google Sheets | Remote Work | WFH | Email Support | Chat Support | File Management | Documentation | Fast Typing | MIS Reporting | Internet Research | Administrative Support | Record Keeping | Scheduling | Client Communication | Attention to Detail
              <br/><br/>
              I hereby declare that all information furnished above is true, accurate, and complete to the best of my knowledge and belief. I am a dedicated, quick-learning professional committed to contributing effectively from Day 1.
              <br/><br/>
              <strong className="text-charcoal">Basa Prasad</strong> <span className="ml-8">Srikakulam, Andhra Pradesh</span> <span className="float-right">Date: __________</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
