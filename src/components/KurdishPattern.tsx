import React from 'react';

/**
 * Traditional Kurdish Geometric Rug & Manuscript Decorative Motifs
 */

interface PatternProps {
  className?: string;
  color?: string;
}

export const KurdishStarMedallion: React.FC<PatternProps> = ({
  className = "w-6 h-6",
  color = "#801b22"
}) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 8-pointed traditional oriental/Kurdish rug star medallion */}
      <path 
        d="M50 5 L62 38 L95 50 L62 62 L50 95 L38 62 L5 50 L38 38 Z" 
        fill={color} 
        opacity="0.9"
      />
      <path 
        d="M50 20 L58 42 L80 50 L58 58 L50 80 L42 58 L20 50 L42 42 Z" 
        fill="#c59b27" 
      />
      <circle cx="50" cy="50" r="8" fill={color} />
      <circle cx="50" cy="50" r="4" fill="#faf6ed" />
    </svg>
  );
};

export const KurdishCarpetBorder: React.FC<PatternProps> = ({
  className = "w-full h-4",
  color = "#801b22"
}) => {
  return (
    <div className={`overflow-hidden flex items-center justify-center opacity-80 ${className}`}>
      <svg width="100%" h="16" viewBox="0 0 400 16" preserveAspectRatio="none">
        <pattern id="kurdishBorder" x="0" y="0" width="40" height="16" patternUnits="userSpaceOnUse">
          {/* Repeatable traditional diamond border */}
          <path d="M0 8 L10 0 L20 8 L10 16 Z" fill={color} />
          <path d="M20 8 L30 0 L40 8 L30 16 Z" fill="#1b4332" />
          <path d="M10 8 L20 3 L30 8 L20 13 Z" fill="#c59b27" />
          <circle cx="10" cy="8" r="2" fill="#faf6ed" />
          <circle cx="30" cy="8" r="2" fill="#faf6ed" />
        </pattern>
        <rect width="100%" height="16" fill="url(#kurdishBorder)" />
      </svg>
    </div>
  );
};

export const KurdishOrnamentalDivider: React.FC<{ title?: string; className?: string }> = ({
  title,
  className = "my-4"
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[2px] flex-1 bg-gradient-to-l from-[#c59b27] via-[#801b22] to-transparent rounded-full" />
      <KurdishStarMedallion className="w-5 h-5 flex-shrink-0" color="#801b22" />
      {title && (
        <span className="font-semibold text-sm text-[#801b22] px-2 whitespace-nowrap font-serif tracking-wide">
          {title}
        </span>
      )}
      <KurdishStarMedallion className="w-5 h-5 flex-shrink-0" color="#801b22" />
      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#c59b27] via-[#801b22] to-transparent rounded-full" />
    </div>
  );
};

export const ParchmentCornerDecoration: React.FC = () => {
  return (
    <>
      {/* Top Left Corner filigree */}
      <svg className="absolute top-1 left-1 w-8 h-8 text-[#c59b27] opacity-60 pointer-events-none" viewBox="0 0 40 40" fill="currentColor">
        <path d="M0,0 L16,0 L16,4 L4,4 L4,16 L0,16 Z" />
        <circle cx="8" cy="8" r="2" />
      </svg>
      {/* Top Right Corner filigree */}
      <svg className="absolute top-1 right-1 w-8 h-8 text-[#c59b27] opacity-60 pointer-events-none" viewBox="0 0 40 40" fill="currentColor">
        <path d="M40,0 L24,0 L24,4 L36,4 L36,16 L40,16 Z" />
        <circle cx="32" cy="8" r="2" />
      </svg>
      {/* Bottom Left Corner filigree */}
      <svg className="absolute bottom-1 left-1 w-8 h-8 text-[#c59b27] opacity-60 pointer-events-none" viewBox="0 0 40 40" fill="currentColor">
        <path d="M0,40 L16,40 L16,36 L4,36 L4,24 L0,24 Z" />
        <circle cx="8" cy="32" r="2" />
      </svg>
      {/* Bottom Right Corner filigree */}
      <svg className="absolute bottom-1 right-1 w-8 h-8 text-[#c59b27] opacity-60 pointer-events-none" viewBox="0 0 40 40" fill="currentColor">
        <path d="M40,40 L24,40 L24,36 L36,36 L36,24 L40,24 Z" />
        <circle cx="32" cy="32" r="2" />
      </svg>
    </>
  );
};

export const HeroPatternOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden mix-blend-multiply">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="kurdishHeroTile" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#3c2817" strokeWidth="1.5" />
            <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="none" stroke="#801b22" strokeWidth="1" />
            <circle cx="30" cy="30" r="4" fill="#c59b27" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kurdishHeroTile)" />
      </svg>
    </div>
  );
};
