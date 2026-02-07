
import React, { useState, useEffect, useRef } from 'react';
import { HeroSlide } from './components/HeroSlide.tsx';
import { FavoritePersonSlide } from './components/FavoritePersonSlide.tsx';
import { FeelingsShapeSlide } from './components/FeelingsShapeSlide.tsx';
import { AlmostQuestionSlide } from './components/AlmostQuestionSlide.tsx';
import { ProposalSlide } from './components/ProposalSlide.tsx';
import { MusicControl } from './components/MusicControl.tsx';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalSlides = 5;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio playback blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#fff5f8] text-gray-800 selection:bg-pink-200">
      <audio 
        ref={audioRef}
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" 
      />
      
      <MusicControl isPlaying={isPlaying} onToggle={handleToggleMusic} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-full w-full"
        >
          {currentSlide === 0 && <HeroSlide onNext={nextSlide} />}
          {currentSlide === 1 && <FavoritePersonSlide onNext={nextSlide} onPrev={prevSlide} />}
          {currentSlide === 2 && <FeelingsShapeSlide onNext={nextSlide} onPrev={prevSlide} />}
          {currentSlide === 3 && <AlmostQuestionSlide onNext={nextSlide} onPrev={prevSlide} />}
          {currentSlide === 4 && <ProposalSlide />}
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <motion.div 
            key={i} 
            initial={false}
            animate={{ 
              width: currentSlide === i ? 32 : 12,
              backgroundColor: currentSlide === i ? '#ec4899' : '#fbcfe8',
              opacity: currentSlide === i ? 1 : 0.6
            }}
            className="h-2 rounded-full shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
