import React from 'react';
import { Bookmark, Settings, BookOpen, Smartphone, Maximize2 } from 'lucide-react';
import { KurdishStarMedallion } from './KurdishPattern';

interface TopHeaderProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
  onOpenSettings: () => void;
  fontSize: 'sm' | 'md' | 'lg';
  setFontSize: (size: 'sm' | 'md' | 'lg') => void;
  isDeviceFrame: boolean;
  setIsDeviceFrame: (val: boolean) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  favoriteCount,
  onOpenFavorites,
  onOpenSettings,
  fontSize,
  setFontSize,
  isDeviceFrame,
  setIsDeviceFrame,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#800020] text-[#F5F2ED] border-b-4 border-[#C5A059] shadow-md px-4 py-3 relative overflow-hidden transition-all">
      {/* Background geometric overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 z-10 relative">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-[#C5A059] flex items-center justify-center bg-[#F5F2ED]/10 rounded-sm rotate-45 overflow-hidden flex-shrink-0">
            <span className="-rotate-45 text-xl font-bold font-serif text-[#C5A059]">م</span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold font-serif tracking-tight text-[#F5F2ED] leading-none">
              میراثی کورد
            </h1>
            <p className="text-[11px] text-[#C5A059] font-medium mt-1">
              گەنجینەی مێژوو و ئەدەب
            </p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Font Size Selector */}
          <div className="hidden sm:flex items-center bg-[#F5F2ED]/10 p-0.5 rounded-lg border border-[#C5A059]/40 text-xs font-semibold">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'sm' ? 'bg-[#C5A059] text-[#2c1b0e] font-bold shadow-xs' : 'text-[#F5F2ED] hover:bg-[#F5F2ED]/20'
              }`}
              title="دەقی بچووک"
            >
              بچووک
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'md' ? 'bg-[#C5A059] text-[#2c1b0e] font-bold shadow-xs' : 'text-[#F5F2ED] hover:bg-[#F5F2ED]/20'
              }`}
              title="دەقی ئاسایی"
            >
              ئاسایی
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'lg' ? 'bg-[#C5A059] text-[#2c1b0e] font-bold shadow-xs' : 'text-[#F5F2ED] hover:bg-[#F5F2ED]/20'
              }`}
              title="دەقی گەورە"
            >
              گەورە
            </button>
          </div>

          {/* Toggle Device Frame View */}
          <button
            onClick={() => setIsDeviceFrame(!isDeviceFrame)}
            className="p-2 rounded-lg bg-[#F5F2ED]/10 border border-[#C5A059]/40 text-[#F5F2ED] hover:bg-[#C5A059] hover:text-[#2c1b0e] transition-all flex items-center gap-1 text-xs font-semibold"
            title={isDeviceFrame ? 'دیمەنی شاشەی تەواو' : 'دیمەنی مۆبایلی ئەندرۆید'}
          >
            {isDeviceFrame ? <Maximize2 className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
            <span className="hidden md:inline">
              {isDeviceFrame ? 'شاشەی تەواو' : 'مۆبایل'}
            </span>
          </button>

          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-lg bg-[#F5F2ED]/10 border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#2c1b0e] transition-all flex items-center gap-1.5"
            title="دڵخوازەکان"
          >
            <Bookmark className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold hidden sm:inline text-white">دڵخوازەکان</span>
            {favoriteCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-[#2c1b0e] bg-[#C5A059] rounded-full min-w-[18px]">
                {favoriteCount}
              </span>
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-lg bg-[#F5F2ED]/10 border border-[#C5A059]/40 text-[#F5F2ED] hover:bg-[#F5F2ED] hover:text-[#800020] transition-all"
            title="ڕێکخستنەکان"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
