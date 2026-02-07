import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

interface HeroSlideProps {
  onNext: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#ffe4e1] via-[#fff0f5] to-[#e6e6fa] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-pink-300 rounded-full blur-[120px] animate-heartbeat opacity-20"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${Math.random() * 100}vw`, rotate: 0, scale: 0.5 }}
            animate={{ 
              y: '-10vh', 
              rotate: 360, 
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              scale: [0.5, 1, 0.5] 
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: 'linear', 
              delay: Math.random() * 5 
            }}
            className="absolute opacity-30 text-pink-400"
          >
            {i % 2 === 0 ? <Heart size={20 + Math.random() * 30} fill="currentColor" /> : <Sparkles size={15 + Math.random() * 20} />}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative z-10 text-center px-6 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <KittyIllustration type="peek" className="mx-auto w-36 h-36 shadow-2xl border-4 border-white bg-white/50 backdrop-blur-sm" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 text-pink-500"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart fill="currentColor" size={24} />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500 mb-6 font-handwritten"
          variants={itemVariants}
        >
          Hey Smriti 💕
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl font-light text-gray-700 italic mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Something special awaits... <br/> and it all starts right here.
        </motion.p>

        <motion.div
          className="bg-white/40 backdrop-blur-md px-8 py-4 rounded-3xl inline-block mb-12 shadow-xl border border-white/60"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-lg font-medium text-pink-600 italic">
            "Every heartbeat tells a story of you."
          </p>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={onNext}
        className="absolute bottom-10 flex flex-col items-center gap-3 group cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ y: 5 }}
      >
        <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Tap to Begin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-3 bg-white/80 rounded-full shadow-lg text-pink-500 border border-pink-100 group-hover:bg-pink-500 group-hover:text-white transition-all"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </div>
  );
};