import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import DotBackground from './DotBackground';
import { Link } from 'react-router-dom';

const popVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 250, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const Hero = ({ isLoading }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-hero-gradient">
      {/* Background Interactive Dots */}
      <DotBackground />

      {/* Floating Animated Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[10%] w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl z-[-1]"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl z-[-1]"
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-start text-left md:items-center md:text-center w-full">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          variants={staggerContainer}
          className="flex flex-col items-start md:items-center w-full"
        >
          <motion.span
            variants={popVariant}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-blue font-semibold text-sm mb-6 border border-brand-blue/30"
          >
            Digital Innovation Partner
          </motion.span>

          <motion.h1 variants={popVariant} className="heading-large mb-8">
            AI-Driven Automation <br />
            <span className="text-gradient">For Modern Enterprises.</span>
          </motion.h1>

          <motion.p variants={popVariant} className="subheading mb-10 text-gray-400 leading-relaxed md:mx-auto max-w-3xl">
            We build intelligent AI automation systems that streamline operations and drive business growth.
          </motion.p>

          <motion.div variants={popVariant} className="flex flex-wrap gap-4 justify-start md:justify-center w-full">
            <Link to="/projects">
            <button className="btn-primary group">
              View Our Work
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link to="/contact">
            <button className="btn-secondary">
              Get in Touch
            </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col items-start md:items-center gap-4">
            <div className="flex -space-x-3">

            </div>
            <p className="text-sm text-gray-400">
              <span className="font-bold text-white"></span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
