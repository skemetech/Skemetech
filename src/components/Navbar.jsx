import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// 1. ADD THIS IMPORT
// Remove the react-router-dom Link import entirely
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { name: 'Home', href: '/#top' }, // Added comma here
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

  return (
    <nav 
      className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
        scrolled 
          ? 'top-4 w-[98%] md:w-[92%] max-w-6xl glass-nav py-3 px-6 md:px-8 rounded-full border border-white/10 shadow-2xl shadow-brand-blue/10' 
          : 'top-0 w-full bg-transparent py-6 px-6 md:px-10'
      }`}
    >
      <div className={`mx-auto w-full flex justify-between items-center ${!scrolled ? 'max-w-7xl' : ''}`}>
        
        {/* 2. CHANGE <a> TO <Link> and href TO to */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="SkemeTech Logo"
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(59,125,221,0.4)]"
          />
          <span className="text-2xl font-bold tracking-tight text-white">
            Skeme<span className="text-brand-blue">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth // <--- ADD THIS HERE
                className="text-gray-300 hover:text-brand-blue font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          <Link to="/contact">
          <button className="btn-primary">
            Book a Consultation
          </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white p-2">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[calc(100%+1rem)] left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl shadow-brand-blue/10"
          >
            {navLinks.map((link) => (
              /* 4. CHANGE <a> TO <Link> and href TO to */
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-brand-blue"
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary w-full justify-center">
              Book a Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
