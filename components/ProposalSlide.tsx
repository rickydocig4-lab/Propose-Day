
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

export const ProposalSlide: React.FC = () => {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <div className="h-full w-full bg-gradient-to-t from-[#fff0f5] to-[#fffafa] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Falling Petals (Simulated) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, x: `${Math.random() * 100}vw`, rotate: 0 }}
            animate={{ y: '110vh', rotate: 360, x: `${Math.random() * 100}vw` }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: 'linear', delay: Math.random() * 5 }}
            className="absolute opacity-60"
          >
            <div className={`w-4 h-4 rounded-full rounded-br-none blur-[1px] ${i % 2 === 0 ? 'bg-pink-300' : 'bg-red-200'}`}></div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div 
            key="proposal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center z-10 space-y-12"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center gap-4"
            >
              <KittyIllustration type="hug" className="w-32 h-32" />
              <KittyIllustration type="cute" className="w-24 h-24 mt-8" />
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-handwritten font-bold text-pink-600">
                Smriti,
              </h1>
              <p className="text-3xl md:text-4xl text-gray-700 font-light italic">
                will you be my girlfriend?
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleYes}
                className="w-full md:w-auto px-12 py-4 bg-pink-500 text-white rounded-full text-2xl font-bold shadow-xl shadow-pink-200 hover:scale-110 hover:bg-pink-600 transition-all flex items-center gap-3 relative group"
              >
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="text-yellow-400" />
                </div>
                Yes 💕
              </button>
              <button
                onClick={handleYes}
                className="w-full md:w-auto px-12 py-4 bg-pink-400 text-white rounded-full text-2xl font-bold shadow-xl shadow-pink-200 hover:scale-110 hover:bg-pink-500 transition-all flex items-center gap-3 relative group"
              >
                <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="text-yellow-400" />
                </div>
                Obviously Yes 😼💞
              </button>
            </div>

            <div className="opacity-50 pt-12">
              <p className="text-sm font-medium text-pink-500 italic">
                "Forever starts with you."
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center z-10 space-y-8 p-12 bg-white/70 backdrop-blur-md rounded-[3rem] border-2 border-pink-200 shadow-2xl relative"
          >
            {/* Celebration Message */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-full text-center"
            >
              <span className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold shadow-lg text-lg animate-bounce inline-block">
                She said yes! Congratulations! 💍✨
              </span>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-8xl mb-4 relative"
            >
               <KittyIllustration type="hug" className="w-48 h-48 mx-auto border-4 border-yellow-300 bg-yellow-50" />
               <div className="absolute -top-4 -right-4 text-6xl animate-pulse">💍</div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-handwritten font-bold text-pink-600">
              YAY! Best. Day. Ever! 💖
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-md mx-auto leading-relaxed">
              I promise to always keep the kittens happy, the coffee warm, and your heart full of love. 
            </p>
            
            <div className="flex justify-center gap-4">
               <KittyIllustration type="sit" className="w-20 h-20" />
               <KittyIllustration type="cute" className="w-20 h-20" />
               <KittyIllustration type="peek" className="w-20 h-20" />
            </div>

            <motion.div 
              className="inline-block p-4 bg-pink-100 rounded-2xl text-pink-500 font-bold border border-pink-200"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              I love you, Smriti! ❤️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti & Hearts on Success */}
      {answered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Hearts */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              initial={{ 
                y: '100vh', 
                x: `${Math.random() * 100}vw`, 
                scale: Math.random() + 0.3,
                opacity: 1
              }}
              animate={{ 
                y: '-20vh', 
                x: `${(Math.random() - 0.5) * 50 + 50}vw`,
                opacity: 0,
                rotate: 360
              }}
              transition={{ 
                duration: 4 + Math.random() * 4, 
                ease: "easeOut",
                delay: Math.random() * 2
              }}
              className={`absolute ${i % 3 === 0 ? 'text-pink-500' : i % 3 === 1 ? 'text-red-400' : 'text-rose-300'}`}
            >
              <Heart fill="currentColor" size={15 + Math.random() * 30} />
            </motion.div>
          ))}
          {/* Confetti Squares */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              initial={{ 
                y: '100vh', 
                x: `${Math.random() * 100}vw`,
              }}
              animate={{ 
                y: '-10vh', 
                rotate: 720,
                x: `${Math.random() * 100}vw`,
              }}
              transition={{ 
                duration: 3 + Math.random() * 3, 
                ease: "linear",
                delay: Math.random() * 1
              }}
              className="absolute w-2 h-2"
              style={{
                backgroundColor: ['#FFC0CB', '#FF69B4', '#FFB6C1', '#FF1493', '#DB7093'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
