import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import teamImg from '../assets/team.png';

const CountUp = ({ to, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: 20, suffix: '+' },
    { label: 'Years of Expertise', value: 4, suffix: '+' },
    { label: 'Client Satisfaction', value: 100, suffix: '%' },
    { label: 'Experts on Board', value: 10, suffix: '+' },
  ];

  return (
    <section id="about" className="section-padding bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
        {/* Left Side: Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative lg:order-1 order-2"
        >
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            animate={{ y: [0, -15, 0] }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.img 
              src={teamImg} 
              alt="Skeme Tech Team" 
              className="w-full h-auto opacity-90"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-transparent pointer-events-none" />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl z-[-1]" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl z-[-1]" />
        </motion.div>

        {/* Right Side: Content */}
        <div className="lg:order-2 order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8">About Skeme Tech</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Pioneering the Future of <span className="text-brand-blue text-gradient">Information Technology.</span>
            </h2>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              At Skeme Tech, we don't just build software; we architect digital futures. Our mission is to bridge the gap between complex problems and elegant, scalable solutions that empower businesses to thrive in an ever-evolving digital landscape.
            </p>
            
            <p className="text-gray-400 mb-10 leading-relaxed italic border-l-4 border-brand-blue pl-6 bg-white/5 py-4 pr-4 rounded-r-lg">
              "Innovation is not just a goal, it's our mindset. We believe in crafting software that feels like magic but builds on solid engineering foundations."
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 12 }}
                >
                  <h4 className="text-3xl font-bold text-brand-blue mb-1">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-tighter">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <button className="btn-primary">
                Learn More Our Journey
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
