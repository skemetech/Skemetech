import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-black relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Ready to Start Your <span className="text-gradient">Next Big Project?</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg leading-relaxed">
            Have a question or a project in mind? Reach out to us and let's discuss how we can help your business grow through technology.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-blue/10">
                <HiOutlineLocationMarker />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Office Locations</h4>
                <p className="text-gray-400">Bannerghatta, Bengaluru, India</p>
                <p className="text-gray-400">Anakkara, Idukki, Kerala, India</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-blue/10">
                <HiOutlinePhone />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Phone Numbers</h4>
                <p className="text-gray-400">+91 8848256064 </p>
                <p className="text-gray-400">+91 8547680162 </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-blue/10">
                <HiOutlineMail />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Email Addresses</h4>
                <p className="text-gray-400">info@skemetech.in</p>
                <p className="text-gray-400">support@skemetech.in</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {[FaLinkedinIn, FaTwitter, FaInstagram, FaGithub].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl shadow-brand-blue/5"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white px-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white px-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white px-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 999 000 0000"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white px-1">Project Requirement</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-lg py-4 shadow-2xl shadow-brand-blue/20">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
