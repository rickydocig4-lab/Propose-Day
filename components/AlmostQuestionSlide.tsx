import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft } from 'lucide-react';

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
    <div className="h-full w-full bg-[#fdf2f2] flex flex-col items-center justify-center relative p-8 fade-in">
      <div className="max-w-3xl text-center space-y-16">
        <div className="min-h-[12rem] flex flex-col items-center justify-center">
          {lineIndex === 0 ? (
            <p className="text-3xl md:text-5xl font-light text-pink-400 italic mb-8 px-4 fade-in">
              “I thought of a thousand ways to say this…”
            </p>
          ) : (
            <p className="text-5xl md:text-7xl font-handwritten font-bold text-pink-600 px-4 fade-in">
              “…but my heart keeps choosing you.”
            </p>
          )}
        </div>

        {lineIndex >= 1 && (
          <button
            onClick={onNext}
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-pink-500 rounded-full shadow-2xl shadow-pink-200 text-white font-bold text-2xl transition-all hover:scale-105 active:scale-95 fade-in"
          >
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-2xl opacity-40 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
            <span className="relative flex items-center gap-4">
              I have one more thing to ask... <Heart fill="white" className="animate-bounce" size={28} />
            </span>
          </button>
        )}
      </div>

      <div className="absolute bottom-10 left-10">
        <button onClick={onPrev} className="p-4 bg-white text-pink-300 rounded-full hover:bg-pink-50 transition-all shadow-md border border-pink-100">
          <ChevronLeft size={24} />
        </button>
      </div>
    </div>
  );
};