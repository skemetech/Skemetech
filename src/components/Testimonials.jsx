import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, InnovateX',
    quote: 'Skeme Tech transformed our legacy systems into a modern SaaS powerhouse. Their attention to detail and engineering excellence is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Dr. Arvin Kumar',
    role: 'Director, HealthBotics',
    quote: 'The AI solutions provided by Skeme Tech have revolutionized our patient diagnostic workflow. Truly a forward-thinking partner.',
    avatar: 'https://i.pravatar.cc/150?u=arvin',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Bloom Mart',
    quote: 'Our e-commerce platform performance tripled after the migration. The team is professional, fast, and highly skilled.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-brand-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Trusted by Industry <span className="text-gradient">Leaders.</span>
          </h2>
        </motion.div>

      </div>

      <div className="flex relative overflow-hidden group mt-12">
        <style>{`
          @keyframes scroll-testimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-testimonials {
            animation: scroll-testimonials 40s linear infinite;
          }
          .group:hover .animate-scroll-testimonials {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* Gradients for smooth fading on edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll-testimonials py-4">
          {/* First Set */}
          <div className="flex gap-8 pl-8 pr-4 w-max">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={`set1-${t.name}-${idx}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-10 relative hover:border-brand-blue/50 transition-colors duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 text-brand-blue text-4xl font-serif leading-none opacity-80">"</div>
                  <p className="text-gray-300 mb-8 leading-relaxed italic whitespace-pre-wrap">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-blue/20" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-brand-blue uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second Set */}
          <div className="flex gap-8 pl-4 pr-8 w-max">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={`set2-${t.name}-${idx}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-10 relative hover:border-brand-blue/50 transition-colors duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 text-brand-blue text-4xl font-serif leading-none opacity-80">"</div>
                  <p className="text-gray-300 mb-8 leading-relaxed italic whitespace-pre-wrap">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-blue/20" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-brand-blue uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
