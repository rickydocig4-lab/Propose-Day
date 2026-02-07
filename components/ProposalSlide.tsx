
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Stars } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration.tsx';

export const ProposalSlide: React.FC = () => {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <div className="h-full w-full bg-gradient-to-t from-[#fff0f5] to-[#fffafa] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Falling Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, x: `${Math.random() * 100}vw`, rotate: 0 }}
            animate={{ y: '110vh', rotate: 360, x: [`${Math.random() * 100}vw`, `${(Math.random() * 100) - 10}vw`] }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, ease: 'linear', delay: Math.random() * 10 }}
            className="absolute opacity-40"
          >
            <div className={`w-4 h-6 rounded-full rounded-br-none blur-[1px] transform ${i % 2 === 0 ? 'bg-pink-300' : 'bg-rose-200'}`}></div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div 
            key="proposal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center z-10 space-y-12 max-w-2xl"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="flex justify-center gap-6"
            >
              <KittyIllustration type="hug" className="w-36 h-36 shadow-xl border-4 border-white" />
              <KittyIllustration type="cute" className="w-28 h-28 mt-12 shadow-xl border-4 border-white" />
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-handwritten font-bold text-pink-600 drop-shadow-sm">
                Smriti,
              </h1>
              <p className="text-3xl md:text-5xl text-gray-700 font-light italic leading-tight">
                will you be my girlfriend?
              </p>
            </div>

            <div className="flex flex-col md:row gap-8 justify-center items-center">
              <motion.button
                onClick={handleYes}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-16 py-5 bg-pink-500 text-white rounded-full text-3xl font-bold shadow-[0_15px_30px_rgba(236,72,153,0.3)] hover:bg-pink-600 transition-all flex items-center justify-center gap-4 relative group"
              >
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="text-yellow-400 fill-yellow-400" size={32} />
                </div>
                Yes! 💕
              </motion.button>
              
              <motion.button
                onClick={handleYes}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-16 py-5 bg-pink-50 text-pink-500 rounded-full text-3xl font-bold shadow-lg hover:bg-pink-100 transition-all flex items-center justify-center gap-4 border-2 border-pink-200"
              >
                Absolutely Yes! 😼💞
              </motion.button>
            </div>

            <div className="opacity-40 pt-16">
              <p className="text-lg font-medium text-pink-400 italic font-handwritten">
                "Forever starts with one word..."
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center z-10 space-y-10 p-12 bg-white/80 backdrop-blur-lg rounded-[4rem] border-2 border-pink-200 shadow-2xl relative max-w-lg"
          >
            {/* Celebration Message */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: -20 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-full text-center"
            >
              <span className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-xl text-xl animate-bounce inline-block">
                She said yes! 💍✨
              </span>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="relative"
            >
               <KittyIllustration type="hug" className="w-56 h-56 mx-auto border-8 border-pink-100 bg-white" />
               <motion.div 
                 className="absolute -top-6 -right-6 text-7xl"
                 animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
               >
                 💍
               </motion.div>
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-handwritten font-bold text-pink-600">
                YAY! Best Day Ever! 💖
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                I promise to always keep the kittens happy, the coffee warm, and your heart full of love. 
              </p>
            </div>
            
            <div className="flex justify-center gap-4 py-4">
               <KittyIllustration type="sit" className="w-16 h-16 shadow-md" />
               <KittyIllustration type="cute" className="w-16 h-16 shadow-md" />
               <KittyIllustration type="peek" className="w-16 h-16 shadow-md" />
            </div>

            <motion.div 
              className="inline-block px-10 py-4 bg-pink-100 rounded-2xl text-pink-600 font-bold border border-pink-200 text-2xl shadow-inner font-handwritten"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              I love you, Smriti! ❤️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti & Hearts on Success */}
      {answered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              initial={{ 
                y: '100vh', 
                x: `${Math.random() * 100}vw`, 
                scale: Math.random() + 0.5,
                opacity: 1
              }}
              animate={{ 
                y: '-20vh', 
                x: `${(Math.random() - 0.5) * 60 + 50}vw`,
                opacity: 0,
                rotate: 360
              }}
              transition={{ 
                duration: 4 + Math.random() * 4, 
                ease: "easeOut",
                delay: Math.random() * 3
              }}
              className={`absolute ${i % 3 === 0 ? 'text-pink-500' : i % 3 === 1 ? 'text-red-400' : 'text-rose-300'}`}
            >
              <Heart fill="currentColor" size={20 + Math.random() * 40} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
