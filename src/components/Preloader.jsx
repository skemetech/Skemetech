import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [text, setText] = useState('');
  const fullText = "Innovating Software. Empowering Businesses.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing Background Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px]"
        />

        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 mb-8"
        >
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(59,125,221,0.5)]"
          />
        </motion.div>

        {/* Typing Text */}
        <div className="min-h-[4rem] flex items-center justify-center px-6">
          <motion.p 
            className="text-white/60 text-[10px] md:text-base font-medium tracking-[0.2em] uppercase text-center max-w-[280px] md:max-w-none leading-relaxed"
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-3 md:h-4 bg-brand-blue ml-1 align-middle"
            />
          </motion.p>
        </div>

        {/* Animated Loading Bar */}
        <div className="absolute bottom-[-100px] w-32 md:w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-brand-blue to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
