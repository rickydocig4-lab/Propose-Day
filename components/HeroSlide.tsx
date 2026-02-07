import React from 'react';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

interface HeroSlideProps {
  onNext: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ onNext }) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#ffe4e1] via-[#fff0f5] to-[#e6e6fa] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-pink-300 rounded-full blur-[120px] animate-heartbeat opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl fade-in">
        <div className="mb-8">
          <div className="relative inline-block animate-float">
            <KittyIllustration type="peek" className="mx-auto w-36 h-36 shadow-2xl border-4 border-white bg-white/50 backdrop-blur-sm" />
            <div className="absolute -top-2 -right-2 text-pink-500 animate-pulse">
              <Heart fill="currentColor" size={24} />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500 mb-6 font-handwritten">
          Hey Smriti 💕
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-700 italic mb-10 leading-relaxed">
          Something special awaits... <br/> and it all starts right here.
        </p>

        <div className="bg-white/40 backdrop-blur-md px-8 py-4 rounded-3xl inline-block mb-12 shadow-xl border border-white/60 hover:scale-105 transition-transform duration-300">
          <p className="text-lg font-medium text-pink-600 italic">
            "Every heartbeat tells a story of you."
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute bottom-10 flex flex-col items-center gap-3 group cursor-pointer z-20 hover:translate-y-1 transition-transform"
      >
        <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Tap to Begin</span>
        <div className="p-3 bg-white/80 rounded-full shadow-lg text-pink-500 border border-pink-100 group-hover:bg-pink-500 group-hover:text-white transition-all">
          <ChevronDown size={28} className="animate-bounce" />
        </div>
      </button>
    </div>
  );
};