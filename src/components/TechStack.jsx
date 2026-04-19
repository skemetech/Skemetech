import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, 
  FaDocker, FaGitAlt, FaMicrochip
} from 'react-icons/fa';
import { 
  SiTypescript, SiPostgresql, SiTailwindcss, 
  SiFramer, SiNextdotjs, SiGooglecloud,
  SiMongodb, SiFigma, SiFirebase, SiRedis, SiKubernetes
} from 'react-icons/si';

const techs = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'IoT', icon: <FaMicrochip />, color: '#E1E1E1' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Framer', icon: <SiFramer />, color: '#0055FF' },
  { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
];

const TechStack = () => {
  return (
    <section className="py-12 pb-24 lg:pb-12 bg-brand-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-left md:text-center w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-bold text-gray-500 uppercase tracking-widest px-4"
        >
          Our Technology Ecosystem
        </motion.p>
      </div>
      
      <div className="flex relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {[...techs, ...techs].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 transition-all duration-300 cursor-default group">
              <span 
                className="text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span className="text-xl font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
