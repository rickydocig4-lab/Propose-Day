
import React from 'react';
import { motion } from 'framer-motion';
import { KittyIllustration } from './KittyIllustration.tsx';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface FavoritePersonSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const cards = [
  { text: "You make ordinary days feel special", emoji: "✨", delay: 0.2, type: 'hug' as const },
  { text: "Your smile fixes things I never talk about", emoji: "🌸", delay: 0.5, type: 'cute' as const },
  { text: "Somehow, you just feel like home", emoji: "🏠", delay: 0.8, type: 'sit' as const },
];

export const FavoritePersonSlide: React.FC<FavoritePersonSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-[#fffafa] p-6 overflow-y-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-handwritten text-pink-600 mb-2">Why You’re My Favorite Person</h2>
        <div className="h-1 w-24 bg-pink-200 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: card.delay, duration: 0.8, type: 'spring' }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-pink-100 flex flex-col items-center text-center border-b-8 border-pink-200 relative overflow-hidden group"
          >
            <div className="absolute -top-2 -right-2 p-6 text-4xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 rotate-12 group-hover:rotate-0">
              {card.emoji}
            </div>
            <KittyIllustration 
              type={card.type} 
              className="w-28 h-28 mb-8 shadow-inner"
            />
            <p className="text-2xl font-handwritten text-gray-700 leading-relaxed group-hover:text-pink-600 transition-colors">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 text-right hidden md:block">
        <p className="text-sm font-medium text-pink-300 italic">
          "You are my favorite thought."
        </p>
      </div>

      <div className="mt-16 flex justify-center gap-12 z-20">
        <button onClick={onPrev} className="p-4 bg-white text-pink-400 rounded-full hover:bg-pink-50 transition-all shadow-md hover:scale-110 border border-pink-100">
          <ChevronLeft size={24} />
        </button>
        <button onClick={onNext} className="p-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-xl hover:scale-110">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
