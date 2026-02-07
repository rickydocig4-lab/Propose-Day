
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

interface HeroSlideProps {
  onNext: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ onNext }) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#ffe4e1] via-[#fff0f5] to-[#e6e6fa] overflow-hidden">
      
      {/* Background Heartbeat */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-pink-300 rounded-full blur-3xl animate-heartbeat opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${Math.random() * 100}vw`, rotate: 0 }}
            animate={{ y: '-10vh', rotate: 360 }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: 'linear', delay: Math.random() * 10 }}
            className="absolute opacity-40 text-pink-400"
          >
            <Heart size={16 + Math.random() * 24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <KittyIllustration type="peek" className="mx-auto mb-6 w-32 h-32" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hey Smriti 💕
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-light text-gray-700 italic mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          This is not just a website… <br className="hidden md:block"/> it’s a little piece of my heart.
        </motion.p>

        <motion.div
          className="bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full inline-block mb-16 shadow-sm border border-pink-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm font-medium text-pink-500 italic">
            "Every moment with you is a gift I cherish."
          </span>
        </motion.div>
      </div>

      {/* Swipe/Scroll Hint */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-12 flex flex-col items-center gap-2 group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-pink-400 font-medium tracking-widest text-xs uppercase animate-pulse">Swipe to Continue</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-pink-400 group-hover:text-pink-600 transition-colors" />
        </motion.div>
      </motion.button>
    </div>
  );
};
