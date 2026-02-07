
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration.tsx';

interface AlmostQuestionSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const AlmostQuestionSlide: React.FC<AlmostQuestionSlideProps> = ({ onNext, onPrev }) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < 1) {
      const timer = setTimeout(() => setLineIndex(1), 3000);
      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  return (
    <div className="h-full w-full bg-[#fdf2f2] flex flex-col items-center justify-center relative p-8">
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-48 h-48 opacity-30 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <KittyIllustration type="peek" className="w-full h-full" />
      </motion.div>

      <motion.div 
        className="absolute -bottom-10 -right-10 w-48 h-48 opacity-30 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <KittyIllustration type="peek" className="w-full h-full" />
      </motion.div>

      <div className="max-w-3xl text-center space-y-16">
        <div className="min-h-[12rem] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {lineIndex >= 0 && (
              <motion.p
                key="line1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-3xl md:text-5xl font-light text-pink-400 italic mb-8 px-4"
              >
                “I thought of a thousand ways to say this…”
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
             {lineIndex >= 1 && (
              <motion.p
                key="line2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-handwritten font-bold text-pink-600 px-4"
              >
                “…but my heart keeps choosing you.”
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {lineIndex >= 1 && (
          <motion.button
            onClick={onNext}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-pink-500 rounded-full shadow-2xl shadow-pink-200 text-white font-bold text-2xl transition-all"
          >
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-2xl opacity-40 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            <span className="relative flex items-center gap-4">
              I have one more thing to ask... <Heart fill="white" className="animate-bounce" size={28} />
            </span>
          </motion.button>
        )}
      </div>

      <div className="absolute bottom-10 left-10">
        <button onClick={onPrev} className="p-4 bg-white text-pink-300 rounded-full hover:bg-pink-50 transition-all shadow-md border border-pink-100">
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute bottom-10 right-10 text-right opacity-40 hidden md:block">
        <p className="text-lg font-handwritten text-pink-500">
          "My heart belongs to you, always."
        </p>
      </div>
    </div>
  );
};
