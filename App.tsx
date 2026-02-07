import React, { useState, useEffect, useRef } from 'react';
import { HeroSlide } from './components/HeroSlide';
import { FavoritePersonSlide } from './components/FavoritePersonSlide';
import { FeelingsShapeSlide } from './components/FeelingsShapeSlide';
import { AlmostQuestionSlide } from './components/AlmostQuestionSlide';
import { ProposalSlide } from './components/ProposalSlide';
import { MusicControl } from './components/MusicControl';

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
        audioRef.current.play().catch(e => console.error("Audio playback blocked", e));
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

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <HeroSlide onNext={nextSlide} />;
      case 1: return <FavoritePersonSlide onNext={nextSlide} onPrev={prevSlide} />;
      case 2: return <FeelingsShapeSlide onNext={nextSlide} onPrev={prevSlide} />;
      case 3: return <AlmostQuestionSlide onNext={nextSlide} onPrev={prevSlide} />;
      case 4: return <ProposalSlide />;
      default: return null;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#fff5f8] text-gray-800 selection:bg-pink-200">
      <audio 
        ref={audioRef}
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" 
      />
      
      <MusicControl isPlaying={isPlaying} onToggle={handleToggleMusic} />

      <div key={currentSlide} className="h-full w-full fade-in">
        {renderSlide()}
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={`h-2 rounded-full shadow-sm transition-all duration-300 ${
              currentSlide === i ? 'w-8 bg-pink-500 opacity-100' : 'w-3 bg-pink-200 opacity-60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;