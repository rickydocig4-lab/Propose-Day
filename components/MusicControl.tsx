
import React from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 left-6 z-[100] p-4 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 group overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-pink-100/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      <div className="relative flex items-center gap-2">
        {isPlaying ? (
          <Music2 className="text-pink-500 animate-pulse" />
        ) : (
          <Music className="text-gray-400" />
        )}
        <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </div>
    </motion.button>
  );
};
