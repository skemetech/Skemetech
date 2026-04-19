import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import ThilakamImg from '../assets/Thilakam.png';
import ChristImg   from '../assets/christ.png';   
import VasanthamImg from '../assets/vasanth.png';
import christportImg from '../assets/christportal.png';

const projects = [
  {
    title: 'Thilakkam E-Commerce Platform',
    category: 'E-Commerce',
    image: ThilakamImg,
    description: 'A scalable e-commerce web app with secure payments, order tracking, and admin-based product and inventory management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite3', 'AWS'],
    liveLink: 'https://thilakkam.com',
    githubLink: '#',
  },
  {
    title: 'Christ College Website',
    category: 'Education & Management',
    image: ChristImg,
    description: 'A modern, responsive website for Christ College with event management, course details, and faculty information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite3', 'AWS'],
    liveLink: 'https://christcollegekattappana.in',
    githubLink: '#',
  },
  {
    title: 'Vasanth Constructions',
    category: 'Excavation & Construction',
    image: VasanthamImg,
    description: 'A premium architectural and construction firm website showcasing civil engineering projects, residential buildings, and modern infrastructure designs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite3', 'AWS'],
    liveLink: 'https://vasantconstruction.com',
    githubLink: '#',
  },
  {
    title: 'Christ College Portal',
    category: 'Education & Management',
    image: christportImg,
    description: 'An advanced digital portal for students and faculty of Christ College, managing admissions, academic records, attendance, and campus communications.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite3', 'AWS'],
    liveLink: 'https://portal.christcollegekattappana.in/',
    githubLink: '#',
  },
];

const popVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const Projects = ({ isLoading }) => {
  return (
    <section id="projects" className="section-padding bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={popVariant}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-4"
        >
          <div className="max-w-xl">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Case Studies of <span className="text-gradient">Digital Transformation.</span>
            </h2>
          </div>
          <button className="btn-secondary whitespace-nowrap hidden md:flex">
            View All Projects
          </button>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={popVariant}
              className="project-card group hover:border-brand-blue/30 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-2xl shadow-brand-blue/40"
                  >
                    <HiOutlineExternalLink />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-brand-black transition-all duration-300"
                  >
                    <HiOutlineCode />
                  </a>
                </div>
              </div>

              <div className="p-8 bg-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 text-[10px] font-bold rounded-md uppercase tracking-wider border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 md:hidden flex justify-center">
          <button className="btn-secondary w-full justify-center">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
