
import React from 'react';

type KittyType = 'cute' | 'peek' | 'hug' | 'sit' | 'sleep';

interface KittyIllustrationProps {
  type: KittyType;
  className?: string;
}

export const KittyIllustration: React.FC<KittyIllustrationProps> = ({ type, className = "" }) => {
  // We'll use high-quality themed kitten icons/emojis in a styled container
  const getKitty = () => {
    switch(type) {
      case 'cute': return "🐱✨";
      case 'peek': return "🐱🫣";
      case 'hug': return "🐱🫂";
      case 'sit': return "🐱🐾";
      case 'sleep': return "🐱💤";
      default: return "🐱";
    }
  };

  const getStyle = () => {
    switch(type) {
      case 'cute': return "bg-pink-100";
      case 'peek': return "bg-blue-50";
      case 'hug': return "bg-orange-50";
      case 'sit': return "bg-purple-50";
      case 'sleep': return "bg-indigo-50";
      default: return "bg-white";
    }
  };

  return (
    <div className={`flex items-center justify-center rounded-full text-5xl md:text-6xl shadow-inner ${getStyle()} ${className}`}>
      {getKitty()}
    </div>
  );
};
