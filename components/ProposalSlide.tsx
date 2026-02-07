import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

export const ProposalSlide: React.FC = () => {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <div className="h-full w-full bg-gradient-to-t from-[#fff0f5] to-[#fffafa] flex flex-col items-center justify-center p-6 relative overflow-hidden fade-in">
      {!answered ? (
        <div className="text-center z-10 space-y-12 max-w-2xl fade-in">
          <div className="flex justify-center gap-6 animate-float">
            <KittyIllustration type="hug" className="w-36 h-36 shadow-xl border-4 border-white" />
            <KittyIllustration type="cute" className="w-28 h-28 mt-12 shadow-xl border-4 border-white" />
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-handwritten font-bold text-pink-600 drop-shadow-sm">
              Smriti,
            </h1>
            <p className="text-3xl md:text-5xl text-gray-700 font-light italic leading-tight">
              will you be my girlfriend?
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button
              onClick={handleYes}
              className="w-full md:w-auto px-16 py-5 bg-pink-500 text-white rounded-full text-3xl font-bold shadow-xl hover:bg-pink-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4"
            >
              Yes! 💕
            </button>
            
            <button
              onClick={handleYes}
              className="w-full md:w-auto px-16 py-5 bg-pink-50 text-pink-500 rounded-full text-3xl font-bold shadow-lg hover:bg-pink-100 transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4 border-2 border-pink-200"
            >
              Absolutely Yes! 😼💞
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center z-10 space-y-10 p-12 bg-white/80 backdrop-blur-lg rounded-[4rem] border-2 border-pink-200 shadow-2xl relative max-w-lg fade-in">
          <div className="relative animate-float">
             <KittyIllustration type="hug" className="w-56 h-56 mx-auto border-8 border-pink-100 bg-white" />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-handwritten font-bold text-pink-600">
              YAY! Best Day Ever! 💖
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              I promise to always keep the kittens happy, the coffee warm, and your heart full of love. 
            </p>
          </div>
          
          <div className="inline-block px-10 py-4 bg-pink-100 rounded-2xl text-pink-600 font-bold border border-pink-200 text-2xl shadow-inner font-handwritten hover:scale-105 transition-transform">
            I love you, Smriti! ❤️
          </div>
        </div>
      )}

      {answered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={`heart-${i}`}
              style={{ 
                left: `${Math.random() * 100}vw`,
                bottom: '-50px',
                animation: `floatUp ${3 + Math.random() * 2}s linear forwards`,
                animationDelay: `${Math.random() * 2}s`
              }}
              className="absolute text-pink-500"
            >
              <Heart fill="currentColor" size={20 + Math.random() * 40} />
            </div>
          ))}
          <style>{`
            @keyframes floatUp {
              to { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};