import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { MagneticButton } from './MagneticButton';

const PROJECTS = [
  {
    title: 'Fullstack Task Manager & Record Vault',
    category: 'Fullstack Development',
    description: 'A scalable web application featuring an interactive React dashboard and a type-safe NestJS REST API backend with secure database models.',
    challenge: 'Implementing secure JWT authorization, database migration pipelines, and responsive state handling without UI lag.',
    solution: 'Engineered clean REST endpoints in NestJS using TypeScript, configured PostgreSQL database schemas, and managed state on the frontend using React Context.',
    features: ['JWT Multi-Role Auth', 'Responsive React Dashboard', 'Type-Safe NestJS Backend', 'PostgreSQL DB Integration'],
    technologies: ['React.js', 'NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/maniprasad76/maniprasad76',
    demo: 'mailto:basaprasad76@gmail.com',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800', // backup placeholder
    localImg: '/portfolio_thumbnail.png',
  },
  {
    title: 'Automated Record Tracking & ETL Scripting',
    category: 'Backend & Data Automation',
    description: 'A data pipeline that syncs record trackers with cloud storage, utilizing Node.js script automation to handle 500+ weekly spreadsheet audits.',
    challenge: 'Eliminating manual transcription errors and ensuring automated sheet validation and sync triggers.',
    solution: 'Wrote robust Node.js automation scripts to parse Google Sheets data, validate fields, and synchronize folder trees in Google Drive.',
    features: ['Auto Data Integrity Auditing', 'Node.js Sync Scripts', '500+ Entries Checked', 'Secure OAuth Google Drive API'],
    technologies: ['Node.js', 'MS Excel', 'Google Sheets API', 'JSON Scripting'],
    github: 'https://github.com/maniprasad76/maniprasad76',
    demo: 'mailto:basaprasad76@gmail.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    localImg: '/data_entry_thumbnail.png',
  },
  {
    title: 'BPO Customer Support Simulation',
    category: 'Customer Experience & Admin',
    description: 'A simulated workflow practice encompassing multi-channel email/chat support, ticket handling on Freshdesk, and standard operating procedures.',
    challenge: 'Maintaining response times under 5 minutes and high satisfaction scores while managing complex escalation queries.',
    solution: 'Drafted 50+ custom professional email response templates covering standard BPO SOPs, practicing rapid ticket logging and resolution workflows.',
    features: ['50+ Professional Templates', 'Freshdesk CS Certified', '35+ WPM Verified Speed', 'Escalation Protocol Logic'],
    technologies: ['Freshdesk (Free Tier)', 'Zendesk (Basic)', 'Fast Typing (10FastFingers)', 'Email Management'],
    github: 'https://github.com/maniprasad76/maniprasad76',
    demo: 'mailto:basaprasad76@gmail.com',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800',
    localImg: '/support_thumbnail.png',
  },
];

export const Projects: React.FC = () => {
  const [activeDetails, setActiveDetails] = useState<Record<number, 'overview' | 'challenge'>>({
    0: 'overview',
    1: 'overview',
    2: 'overview',
  });

  const toggleDetails = (idx: number) => {
    setActiveDetails((prev) => ({
      ...prev,
      [idx]: prev[idx] === 'overview' ? 'challenge' : 'overview',
    }));
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FFFAF3] relative border-t border-charcoal/5">
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
            My Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Featured Projects & Simulations
          </motion.h2>
        </div>

        {/* Projects Stack */}
        <div className="space-y-24 md:space-y-36">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const viewMode = activeDetails[idx] || 'overview';

            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Thumbnail (left/right) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 aspect-video bg-charcoal/5 rounded-2xl overflow-hidden relative shadow-lg group"
                  data-cursor="view"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // fallback to unsplash image if local isn't loaded
                      (e.target as HTMLImageElement).src = project.image;
                    }}
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
                  
                  {/* Category Badge overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#1B1B1B] text-[#FFFAF3] text-[10px] font-semibold uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </motion.div>

                {/* Project Info details (left/right) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <h3 className="text-2xl md:text-3.5xl font-display font-bold text-[#1B1B1B] mb-4">
                    {project.title}
                  </h3>

                  {/* Toggle view switcher (Challenges vs Overview) */}
                  <div className="flex items-center gap-2 mb-6 border-b border-charcoal/10 pb-3">
                    <button
                      onClick={() => toggleDetails(idx)}
                      className={`text-xs font-bold uppercase tracking-widest pb-1 transition-colors duration-300 ${
                        viewMode === 'overview' ? 'text-[#F62440] border-b-2 border-[#F62440]' : 'text-charcoal/40'
                      }`}
                      data-cursor="pointer"
                    >
                      Overview & Features
                    </button>
                    <button
                      onClick={() => toggleDetails(idx)}
                      className={`text-xs font-bold uppercase tracking-widest pb-1 transition-colors duration-300 ${
                        viewMode === 'challenge' ? 'text-[#F62440] border-b-2 border-[#F62440]' : 'text-charcoal/40'
                      }`}
                      data-cursor="pointer"
                    >
                      Challenge & Solution
                    </button>
                  </div>

                  {/* Dynamic Tab Content */}
                  <div className="min-h-[160px]">
                    <AnimatePresence mode="wait">
                      {viewMode === 'overview' ? (
                        <motion.div
                          key="overview"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <p className="text-charcoal/80 text-sm md:text-base leading-relaxed font-medium">
                            {project.description}
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                            {project.features.map((feat, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs font-semibold text-charcoal/75">
                                <span className="w-1.5 h-1.5 bg-[#F62440] rounded-full" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="challenge"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F62440] block mb-1">
                              The Challenge
                            </span>
                            <p className="text-charcoal/80 text-xs md:text-sm font-medium leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                              The Solution
                            </span>
                            <p className="text-charcoal/80 text-xs md:text-sm font-medium leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-charcoal/5 text-charcoal/60 text-[10px] font-bold uppercase tracking-wide rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <MagneticButton>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#1B1B1B] text-[#FFFAF3] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F62440] transition-colors duration-300"
                        data-cursor="pointer"
                      >
                        <FaGithub size={14} aria-hidden="true" />
                        GitHub
                      </a>
                    </MagneticButton>

                    <MagneticButton>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-5 py-2.5 border border-[#1B1B1B] text-[#1B1B1B] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1B1B1B] hover:text-[#FFFAF3] transition-colors duration-300"
                        data-cursor="pointer"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        Live Demo
                      </a>
                    </MagneticButton>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
