import React from 'react';
import { m } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { MagneticButton } from './MagneticButton';

const PROJECTS = [
  {
    id: 1,
    title: 'Static Website & Portfolio Development',
    category: 'Freelance / Web Projects',
    description: 'Designed and developed 5+ responsive static websites using HTML5 & CSS3. Focused on clean layouts, mobile-friendly structures, and cross-browser compatibility. Built professional portfolio websites for clients, gathering requirements via email and chat, and delivering on or before agreed deadlines with 100% client satisfaction.',
    challenge: 'Clients needed fast, reliable, and aesthetically pleasing static portfolios delivered under tight deadlines without compromising on mobile responsiveness.',
    solution: 'Used semantic HTML5 and CSS3 to build lightweight, fast-loading sites. Maintained organized project folders with consistent file naming conventions ensuring 100% file integrity and seamless retrieval.',
    features: ['Responsive Design', 'Cross-browser Compatibility', 'Client Requirement Gathering', 'On-time Delivery'],
    technologies: ['HTML5', 'CSS3', 'Canva', 'Client Communication'],
    github: 'https://github.com/maniprasad76',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Data Entry & Digital Record Management',
    category: 'Academic & Productivity',
    description: 'Practised high-speed, high-accuracy data entry using MS Excel and Google Sheets, organizing structured records with consistent formatting and zero data discrepancy across 500+ entries. Built and maintained a digital file management system in Google Drive using a hierarchical folder structure.',
    challenge: 'Managing and structuring large datasets and academic assignments required high accuracy and an organized digital filing system to prevent data loss.',
    solution: 'Created Excel and Google Sheets trackers for schedules, task lists, and productivity. Conducted structured internet research and compiled reports in MS Word and Docs.',
    features: ['High-speed Data Entry', 'Zero Discrepancy', 'Hierarchical File Storage', 'Structured Internet Research'],
    technologies: ['MS Excel', 'Google Sheets', 'Google Drive', 'MS Word'],
    github: 'https://github.com/maniprasad76',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'BPO Process Simulation & Support',
    category: 'Self-Initiated Training',
    description: 'Completed Freshdesk CS Fundamentals course. Practised ticket management, escalation workflows, and chat support response templates used in BPO environments. Drafted 50+ professional email response templates covering complaint handling, order queries, and escalations.',
    challenge: 'Gaining practical, hands-on experience in Helpdesk ticketing and BPO standard operating procedures without direct enterprise access.',
    solution: 'Simulated data verification workflows and used Freshdesk to practice ticket creation and resolution. Practised typing accuracy to achieve 35+ WPM with 97%+ accuracy.',
    features: ['Ticket Management', 'Escalation Workflows', 'Email Response Templates', 'Data Verification'],
    technologies: ['Freshdesk', 'Email Management', '10FastFingers', 'BPO SOPs'],
    github: 'https://github.com/maniprasad76',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-20 text-center">
          <m.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-2"
          >
            My Showcase
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-[#1B1B1B]"
          >
            Hands-on Experience & Projects
          </m.h2>
        </div>

        <div className="flex flex-col gap-24">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 aspect-[4/3] bg-cream"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                </m.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <m.div
                  initial={{ opacity: 0, x: idx % 2 !== 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#F62440] mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-[#1B1B1B] mb-6">
                    {project.title}
                  </h3>

                  <div className="space-y-6 text-charcoal/70 mb-8 font-medium">
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-2">Overview</h4>
                      <p>{project.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-2">Execution</h4>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-4 py-1.5 bg-[#FFFAF3] border border-charcoal/10 text-charcoal/80 text-xs font-bold rounded-full cursor-default hover:border-[#F62440]/40 transition-colors"
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
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#1B1B1B] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F62440] transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    </MagneticButton>
                  </div>
                </m.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
