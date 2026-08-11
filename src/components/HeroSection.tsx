import React from 'react';
import { HeroPatternOverlay, KurdishStarMedallion, ParchmentCornerDecoration } from './KurdishPattern';
import { Search, Compass, BookMarked, Scroll } from 'lucide-react';

interface HeroSectionProps {
  onSearchClick: () => void;
  onExplorePeople: () => void;
  onExploreStories: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchClick,
  onExplorePeople,
  onExploreStories,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f5efe0] via-[#ede3ce] to-[#f5efe0] border-2 border-[#c59b27]/60 shadow-md p-6 sm:p-8 text-center text-[#3c2817] my-4">
      {/* Background Kurdish carpet geometric pattern */}
      <HeroPatternOverlay />
      <ParchmentCornerDecoration />

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#801b22]/10 border border-[#801b22]/30 text-[#801b22] text-xs font-bold font-serif mb-4 shadow-2xs">
        <KurdishStarMedallion className="w-4 h-4" color="#801b22" />
        <span>پەرتووکخانەی دیجیتالی کەلتووری</span>
        <KurdishStarMedallion className="w-4 h-4" color="#801b22" />
      </div>

      {/* Titles */}
      <h1 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-[#2c1b0e] mb-2 leading-tight">
        «میراثی کورد»
      </h1>
      <p className="text-base sm:text-lg font-medium font-serif text-[#671217] max-w-xl mx-auto mb-6">
        «گەنجینەی مێژوو، ئەدەب و کەلتووری کورد»
      </p>

      {/* Decorative Line */}
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c59b27] to-transparent mx-auto rounded-full mb-6" />

      {/* Quick Search Bar trigger */}
      <div 
        onClick={onSearchClick}
        className="max-w-md mx-auto bg-[#faf6ed] hover:bg-white border-2 border-[#d8c4a9] hover:border-[#801b22] rounded-xl p-3 shadow-sm cursor-pointer transition-all flex items-center justify-between gap-3 text-[#7a6452] mb-6 group"
      >
        <div className="flex items-center gap-2.5">
          <Search className="w-5 h-5 text-[#801b22] group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium font-serif">
            بگەڕێ بۆ ناو، چیرۆک، شاعیر، نووسەر...
          </span>
        </div>
        <span className="text-xs font-bold text-white bg-[#801b22] px-2.5 py-1 rounded-lg">
          گەڕان
        </span>
      </div>

      {/* Hero Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onExplorePeople}
          className="inline-flex items-center gap-2 bg-[#801b22] hover:bg-[#671217] text-white font-bold font-serif px-5 py-2.5 rounded-xl shadow-md border border-[#c59b27]/50 transition-all hover:scale-[1.02] active:scale-95 text-sm"
        >
          <Compass className="w-4 h-4" />
          <span>کەسایەتییەکان</span>
        </button>
        <button
          onClick={onExploreStories}
          className="inline-flex items-center gap-2 bg-[#1b4332] hover:bg-[#143225] text-white font-bold font-serif px-5 py-2.5 rounded-xl shadow-md border border-[#c59b27]/50 transition-all hover:scale-[1.02] active:scale-95 text-sm"
        >
          <Scroll className="w-4 h-4" />
          <span>چیرۆک و ئەفسانەکان</span>
        </button>
      </div>
    </div>
  );
};
