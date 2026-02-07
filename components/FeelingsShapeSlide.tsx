import React from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { KittyIllustration } from './KittyIllustration';

interface FeelingsShapeSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const FeelingsShapeSlide: React.FC<FeelingsShapeSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden fade-in">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random()})`,
              opacity: Math.random() * 0.7 + 0.3
            }}
            className="absolute text-white"
          >
            <Star size={Math.random() * 6} fill="white" className="animate-pulse" />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mb-12">
        <div className="w-64 h-64 bg-yellow-50 rounded-full blur-[1px] shadow-[0_0_100px_rgba(255,255,200,0.4)] flex items-center justify-center relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-float">
             <KittyIllustration type="sleep" className="w-44 h-44 shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="text-center z-20 px-6 max-w-2xl">
        <p className="text-white/60 text-xl font-light tracking-widest mb-6 uppercase">
          If feelings had a shape,
        </p>
        <h3 className="text-5xl md:text-7xl font-handwritten text-pink-300 leading-tight">
          mine would quietly spell your name — <br/>
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] font-bold italic">Smriti.</span>
        </h3>
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