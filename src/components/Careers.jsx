import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiArrowNarrowRight, HiX, HiOutlineMail, HiOutlineClipboardCheck, HiOutlineDuplicate } from 'react-icons/hi';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / Bengaluru, India',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge React/Next.js applications, focusing on performance, accessibility, and pixel-perfect UIs.'
  },
  {
    id: 2,
    title: 'Product Designer (UI/UX)',
    department: 'Design',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'Design intuitive, world-class user experiences and modern interfaces for SaaS and consumer applications.'
  },
  {
    id: 3,
    title: 'Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop and deploy predictive models and robust AI systems to automate complex business workflows.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const popVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const careerEmail = "career@skemetech.in";

  const handleCopy = () => {
    navigator.clipboard.writeText(careerEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <section id="careers" className="section-padding bg-brand-black border-t border-white/5 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl z-[-1]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl z-[-1]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={popVariant} className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8">Join Our Team</motion.span>
          <motion.h2 variants={popVariant} className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Help Us Build the <span className="text-gradient">Future.</span>
          </motion.h2>
          <motion.p variants={popVariant} className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We're always looking for passionate, driven individuals to join our team of innovators. If you love solving complex problems, we want to hear from you.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6 max-w-5xl mx-auto"
        >
          {jobs.map((job) => (
            <motion.div 
              key={job.id}
              variants={popVariant}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-brand-blue/30 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl shadow-brand-blue/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/0 via-brand-blue/[0.03] to-brand-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex-1 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1.5 rounded-full shadow-inner shadow-brand-blue/10">{job.department}</span>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{job.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300">{job.title}</h3>
                <p className="text-gray-400 mb-5 leading-relaxed">{job.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <HiOutlineLocationMarker className="text-brand-blue text-lg" />
                  {job.location}
                </div>
              </div>
              
              <div className="md:border-l border-t md:border-t-0 border-white/10 pt-6 md:pt-0 md:pl-10 flex md:flex-col justify-between items-center md:items-end md:w-56 gap-4 relative z-10">
                <HiOutlineBriefcase className="text-5xl text-white/10 group-hover:text-brand-blue/30 transition-all duration-500 hidden md:block mb-auto group-hover:scale-110" />
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-white font-bold flex items-center gap-2 group/btn hover:text-brand-blue transition-colors py-2 px-4 rounded-xl border border-transparent hover:border-brand-blue/20 hover:bg-brand-blue/5"
                >
                  Apply Now
                  <HiArrowNarrowRight className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.p variants={popVariant} className="text-gray-400 mb-8 font-medium text-lg px-4">
            Don't see a role that fits you perfectly? Send us your resume anyway.
          </motion.p>
          <motion.div variants={popVariant} className="flex justify-center w-full">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary group shadow-xl mx-auto"
            >
              Submit Open Application
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Career Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] p-8 md:p-12 z-[101] shadow-[0_0_50px_rgba(59,125,221,0.15)] overflow-hidden"
            >
              {/* Decorative light effect inside modal */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl" />
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2"
              >
                <HiX className="text-2xl" />
              </button>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner shadow-brand-blue/20">
                  <HiOutlineMail className="text-4xl text-brand-blue animate-pulse" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Send Your Resume</h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-sm md:text-base">
                  Ready to start your journey with us? Please send your updated resume and portfolio link to:
                </p>

                <div className="relative group/mail">
                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 mb-8 flex items-center justify-between group-hover:border-brand-blue/30 transition-all duration-300">
                    <span className="text-white font-mono text-sm md:text-lg tracking-tight truncate mr-4 italic">{careerEmail}</span>
                    <button 
                      onClick={handleCopy}
                      className="text-brand-blue hover:text-white transition-colors p-2 bg-brand-blue/10 rounded-lg shrink-0"
                      title={copied ? "Copied!" : "Copy Email"}
                    >
                      {copied ? <HiOutlineClipboardCheck className="text-xl" /> : <HiOutlineDuplicate className="text-xl" />}
                    </button>
                  </div>
                  {copied && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-brand-blue text-xs font-bold uppercase tracking-widest"
                    >
                      Email Copied to Clipboard
                    </motion.span>
                  )}
                </div>

                <div className="mt-12">
                  <a 
                    href={`mailto:${careerEmail}`}
                    className="btn-primary w-full flex items-center justify-center gap-3"
                  >
                    Open Mail Client
                    <HiArrowNarrowRight />
                  </a>
                </div>
                
                <p className="mt-8 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                  Skeme Tech • Recruitment Team
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Careers;
