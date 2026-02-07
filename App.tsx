
import React, { useState, useEffect, useRef } from 'react';
import { HeroSlide } from './components/HeroSlide';
import { FavoritePersonSlide } from './components/FavoritePersonSlide';
import { FeelingsShapeSlide } from './components/FeelingsShapeSlide';
import { AlmostQuestionSlide } from './components/AlmostQuestionSlide';
import { ProposalSlide } from './components/ProposalSlide';
import { MusicControl } from './components/MusicControl';
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

  // Handle keyboard navigation
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
        {currentSlide === 0 && (
          <motion.div
            key="slide0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <HeroSlide onNext={nextSlide} />
          </motion.div>
        )}
        {currentSlide === 1 && (
          <motion.div
            key="slide1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <FavoritePersonSlide onNext={nextSlide} onPrev={prevSlide} />
          </motion.div>
        )}
        {currentSlide === 2 && (
          <motion.div
            key="slide2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <FeelingsShapeSlide onNext={nextSlide} onPrev={prevSlide} />
          </motion.div>
        )}
        {currentSlide === 3 && (
          <motion.div
            key="slide3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <AlmostQuestionSlide onNext={nextSlide} onPrev={prevSlide} />
          </motion.div>
        )}
        {currentSlide === 4 && (
          <motion.div
            key="slide4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <ProposalSlide />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-pink-500' : 'w-4 bg-pink-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
