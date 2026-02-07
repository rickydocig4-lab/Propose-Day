
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

interface AlmostQuestionSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const AlmostQuestionSlide: React.FC<AlmostQuestionSlideProps> = ({ onNext, onPrev }) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < 1) {
      const timer = setTimeout(() => setLineIndex(1), 2500);
      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  return (
    <div className="h-full w-full bg-[#fdf2f2] flex flex-col items-center justify-center relative p-8">
      
      {/* Peeking Kitties */}
      <motion.div 
        className="absolute -top-4 -left-4 w-40 h-40"
        initial={{ x: -50, y: -50 }}
        animate={{ x: 0, y: 0 }}
      >
        <KittyIllustration type="peek" className="w-full h-full rotate-45" />
      </motion.div>

      <motion.div 
        className="absolute -bottom-4 -right-4 w-40 h-40"
        initial={{ x: 50, y: 50 }}
        animate={{ x: 0, y: 0 }}
      >
        <KittyIllustration type="peek" className="w-full h-full -rotate-[135deg]" />
      </motion.div>

      <div className="max-w-2xl text-center space-y-12">
        <div className="h-32 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {lineIndex >= 0 && (
              <motion.p
                key="line1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-light text-pink-400 italic mb-4"
              >
                “I thought of a thousand ways to say this…”
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
             {lineIndex >= 1 && (
              <motion.p
                key="line2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-handwritten font-bold text-pink-600"
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center p-6 bg-pink-500 rounded-full shadow-2xl shadow-pink-300 text-white font-bold text-xl transition-all"
          >
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-50 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            <span className="relative flex items-center gap-3">
              Keep Going <Heart fill="white" className="animate-bounce" />
            </span>
          </motion.button>
        )}
      </div>

      <div className="absolute bottom-10 left-10">
        <button onClick={onPrev} className="p-3 bg-white text-pink-300 rounded-full hover:bg-pink-50 transition-colors shadow-sm">
          <ChevronLeft />
        </button>
      </div>

      <div className="absolute bottom-10 right-10 text-right opacity-60">
        <p className="text-sm font-medium text-pink-500">
          "My heart belongs to you, always."
        </p>
      </div>
    </div>
  );
};
