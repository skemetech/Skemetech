import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const popVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={popVariants} className="space-y-6">
            <a href="/" className="flex items-center gap-3 group cursor-pointer w-fit">
              <img
                src="/logo.png"
                alt="SkemeTech Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(59,125,221,0.4)]"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                Skeme<span className="text-brand-blue">Tech</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses through cutting-edge software solutions and digital innovation. We transform your vision into reality.
            </p>
            <div className="flex items-center gap-4">
              {[FaLinkedinIn, FaTwitter, FaInstagram, FaGithub].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={popVariants}>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={popVariants}>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'AI & Robotics', 'UI/UX Design', 'Cloud Solutions'].map((service) => (
                <li key={service}>
                  <a href="/#services" className="text-gray-400 hover:text-brand-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={popVariants}>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-brand-blue">•</span> Bannerghatta, Bengaluru, India
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-blue">•</span> Anakkara, Idukki, Kerala, India
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-blue">•</span> +91 8848256064, +91 8547680162
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-blue">•</span> info@skemetech.in
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Skeme Tech. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed & Developed by <span className="text-white font-medium">Skeme Tech</span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
