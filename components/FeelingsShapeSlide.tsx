
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration.tsx';

interface FeelingsShapeSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const FeelingsShapeSlide: React.FC<FeelingsShapeSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
      
      {/* Star Field */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
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

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Moon and Kitty */}
      <motion.div 
        className="relative z-10 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <div className="w-64 h-64 bg-yellow-50 rounded-full blur-[1px] shadow-[0_0_100px_rgba(255,255,200,0.4)] flex items-center justify-center relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
             <motion.div
               animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             >
               <KittyIllustration type="sleep" className="w-44 h-44 shadow-2xl" />
             </motion.div>
          </div>
          <div className="w-56 h-56 bg-yellow-100/50 rounded-full blur-xl"></div>
        </div>
      </motion.div>

      {/* Text Container */}
      <div className="text-center z-20 px-6 max-w-2xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-white/60 text-xl font-light tracking-widest mb-6 uppercase"
        >
          If feelings had a shape,
        </motion.p>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="text-5xl md:text-7xl font-handwritten text-pink-300 leading-tight"
        >
          mine would quietly spell your name — <br/>
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] font-bold italic">Smriti.</span>
        </motion.h3>
      </div>

      <div className="mt-20 flex justify-center gap-12 z-20">
        <button onClick={onPrev} className="p-4 bg-white/5 text-white/40 rounded-full hover:bg-white/10 transition-all border border-white/10">
          <ChevronLeft size={24} />
        </button>
        <button onClick={onNext} className="p-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-110">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
