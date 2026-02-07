
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

interface FeelingsShapeSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const FeelingsShapeSlide: React.FC<FeelingsShapeSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
      
      {/* Star Field */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 5 }}
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random()})`
            }}
            className="absolute text-white"
          >
            <Star size={Math.random() * 6} fill="white" />
          </motion.div>
        ))}
      </div>

      {/* Moon and Kitty */}
      <motion.div 
        className="relative z-10 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-64 h-64 bg-yellow-50 rounded-full blur-[2px] shadow-[0_0_80px_rgba(255,255,100,0.3)] flex items-center justify-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
             <KittyIllustration type="sleep" className="w-40 h-40 animate-float" />
          </div>
        </div>
      </motion.div>

      {/* Text Container */}
      <div className="text-center z-20 px-6 max-w-xl">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-white/80 text-xl font-light tracking-wide mb-4"
        >
          If feelings had a shape,
        </motion.p>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="text-4xl md:text-5xl font-handwritten text-pink-300 leading-relaxed"
        >
          mine would quietly spell your name — <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Smriti.</span>
        </motion.h3>
      </div>

      <motion.div 
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <p className="text-xs tracking-widest text-white/60 uppercase">
          "The stars shine brighter when I'm with you."
        </p>
      </motion.div>

      <div className="absolute bottom-10 w-full flex justify-center gap-24 px-10">
        <button onClick={onPrev} className="p-3 bg-white/10 text-white/60 rounded-full hover:bg-white/20 transition-colors">
          <ChevronLeft />
        </button>
        <button onClick={onNext} className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:scale-110">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
