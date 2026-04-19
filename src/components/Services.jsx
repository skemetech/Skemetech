import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  HiOutlineGlobe,
  HiOutlineDeviceMobile,
  HiOutlineChip,
  HiOutlineColorSwatch,
  HiOutlineAnnotation,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineTerminal,
  HiOutlineSpeakerphone,
  HiOutlineTrendingUp
} from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaAws } from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiTypescript, SiFigma, SiFirebase, SiPostgresql, SiMongodb, SiDocker
} from 'react-icons/si';
import { useState, useEffect } from 'react';

const services = [
  {
    id: '01',
    title: 'AI Automation',
    description: 'Cutting-edge automation and intelligent systems tailored to your business needs.',
    capabilities: [
      'Machine Learning Models',
      'Computer Vision Systems',
      'Robotics Automation',
      'Predictive Analytics'
    ],
    techStack: [<SiNodedotjs />, <SiDocker />, <SiPostgresql />],
    icon: <HiOutlineChip />,
  },
  {
    id: '02',
    title: 'Custom Software',
    description: 'Tailor-made software solutions designed to solve complex business challenges and optimize internal workflows.',
    capabilities: [
      'Enterprise Software',
      'Legacy System Migration',
      'API Integrations',
      'Business Logic Automation'
    ],
    techStack: [<SiNodedotjs />, <SiPostgresql />, <SiDocker />],
    icon: <HiOutlineTerminal />,
  },
  {
    id: '03',
    title: 'Web Development',
    description: 'Custom, high-performance web applications built with modern frameworks and scalable architectures.',
    capabilities: [
      'Frontend (React / Next)',
      'Backend APIs (Node)',
      'E-commerce & Headless',
      'CI/CD & Cloud Ops'
    ],
    techStack: [<SiReact />, <SiNextdotjs />, <SiNodedotjs />, <SiTypescript />],
    icon: <HiOutlineGlobe />,
  },
  {
    id: '04',
    title: 'App Solutions',
    description: 'Seamless cross-platform and native mobile experiences that engage users on the go.',
    capabilities: [
      'Native Android / iOS',
      'React Native Apps',
      'Flutter Development',
      'App Store Optimization'
    ],
    techStack: [<SiReact />, <SiFirebase />, <FaAws />],
    icon: <HiOutlineDeviceMobile />,
  },
  {
    id: '05',
    title: 'Digital Marketing',
    description: 'Strategic online marketing solutions to increase brand visibility, drive traffic, and boost conversion rates.',
    capabilities: [
      'Search Engine Optimization (SEO)',
      'Social Media Advertising',
      'Pay-Per-Click (PPC)',
      'Content Strategy & Analytics'
    ],
    techStack: [<HiOutlineSpeakerphone />, <HiOutlineTrendingUp />, <HiOutlineGlobe />],
    icon: <HiOutlineSpeakerphone />,
  },
  {
    id: '06',
    title: 'Cyber Security',
    description: 'Advanced threat protection, security audits, and data privacy solutions to safeguard your digital assets.',
    capabilities: [
      'Penetration Testing',
      'Security Audits & Compliance',
      'Data Encryption & Privacy',
      'Incident Response'
    ],
    techStack: [<SiDocker />, <FaAws />, <SiPostgresql />],
    icon: <HiOutlineShieldCheck />,
  },
];

const Services = () => {
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const calculateScroll = () => {
      if (scrollRef.current) {
        // Translation is the negative of (total width - visible width)
        const range = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
        setScrollRange(-range);
      }
    };

    calculateScroll();
    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, []);

  // Transform scroll progress for horizontal translation
  // We use [0, 0.9] to ensure the scroll finishes slightly before the section ends
  const x = useTransform(scrollYProgress, [0, 0.9], [0, scrollRange]);
  const fadeOut = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section ref={targetRef} id="services" className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-start pt-12 lg:pt-0 lg:items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16">

          {/* Left Title Section */}
          <div className="lg:w-1/3 w-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
                <span className="text-brand-blue">Our</span> <br />
                <span className="text-white">Services</span>
              </h2>
              <p className="hidden lg:block text-gray-500 text-lg max-w-sm leading-relaxed">
                We offer comprehensive digital solutions that transform your business and drive innovation across every touchpoint.
              </p>
            </motion.div>
          </div>

          {/* Right Scroll Section */}
          <div
            className="lg:w-2/3 w-full overflow-visible"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%)'
            }}
          >
            <motion.div
              ref={scrollRef}
              style={{ x, opacity: fadeOut }}
              className="flex gap-8 will-change-transform"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.1
                  }}
                  className="flex-shrink-0 w-[88vw] md:w-[480px] h-[380px] md:h-[550px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-6 md:p-10 flex flex-col justify-between relative group hover:border-brand-blue/50 transition-all duration-500"
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter opacity-100 group-hover:text-brand-blue transition-colors duration-300">
                        {service.id}
                      </span>
                      <HiArrowUpRight className="text-2xl md:text-3xl text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-10">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Footer: Capabilities & Tech Stack */}
                  <div className="grid grid-cols-2 gap-4 pt-6 md:pt-10 border-t border-white/5">
                    <div>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-brand-blue mb-2 md:mb-4 font-black">Capabilities</p>
                      <ul className="space-y-1.5 md:space-y-2">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-center gap-2 text-[9px] md:text-[11px] text-white font-bold uppercase tracking-wide">
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(59,125,221,0.6)]" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4 font-bold w-full text-right">Tech Stack</p>
                      <div className="flex gap-4 items-center justify-end text-xl text-gray-500">
                        {service.techStack.map((icon, i) => (
                          <span key={i} className="hover:text-white transition-colors">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Spacer for last card visibility */}
              <div className="flex-shrink-0 w-12 md:w-32" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
