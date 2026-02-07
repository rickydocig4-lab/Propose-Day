
import React from 'react';
import { motion } from 'framer-motion';
import { KittyIllustration } from './KittyIllustration';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface FavoritePersonSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const cards = [
  { text: "You make ordinary days feel special", emoji: "✨", delay: 0.2 },
  { text: "Your smile fixes things I never talk about", emoji: "🌸", delay: 0.5 },
  { text: "Somehow, you just feel like home", emoji: "🏠", delay: 0.8 },
];

export const FavoritePersonSlide: React.FC<FavoritePersonSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-[#fffafa] p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: card.delay, duration: 0.8, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-pink-100 flex flex-col items-center text-center border-b-4 border-pink-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
              {card.emoji}
            </div>
            <KittyIllustration 
              type={idx === 0 ? 'hug' : idx === 1 ? 'cute' : 'sit'} 
              className="w-24 h-24 mb-6"
            />
            <p className="text-2xl font-handwritten text-pink-600 leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h2 className="text-3xl font-handwritten text-gray-700 mb-8">Why You’re My Favorite Person</h2>
      </motion.div>

      <div className="absolute bottom-10 right-10 text-right">
        <p className="text-sm font-medium text-pink-400 italic">
          "You are my favorite thought."
        </p>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center gap-24 px-10">
        <button onClick={onPrev} className="p-3 bg-pink-50 text-pink-400 rounded-full hover:bg-pink-100 transition-colors shadow-sm">
          <ChevronLeft />
        </button>
        <button onClick={onNext} className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:scale-110">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
