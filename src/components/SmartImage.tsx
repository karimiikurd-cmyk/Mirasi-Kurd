import React, { useState, useEffect, useMemo } from 'react';
import { ShieldCheck, Image as ImageIcon, ZoomIn, Info } from 'lucide-react';
import { KurdishStarMedallion } from './KurdishPattern';

export interface SmartImageProps {
  src?: string;
  fallbackSrcs?: string[];
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  category?: string;
  hasRealPhoto?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  showZoomOnHover?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrcs = [],
  alt,
  className = '',
  containerClassName = '',
  fallbackTitle,
  fallbackSubtitle = 'وێنەی ڕاستەقینە بەردەست نییە (وێنەی ڕەمزی)',
  category,
  onClick,
  showZoomOnHover = true,
  objectFit = 'cover',
}) => {
  // Build a deduplicated list of non-empty candidate image URLs
  const candidateUrls = useMemo(() => {
    const list: string[] = [];
    if (src && src.trim() !== '') {
      list.push(src.trim());
    }
    if (fallbackSrcs && fallbackSrcs.length > 0) {
      fallbackSrcs.forEach(s => {
        if (s && s.trim() !== '' && !list.includes(s.trim())) {
          list.push(s.trim());
        }
      });
    }
    return list;
  }, [src, fallbackSrcs]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(candidateUrls.length === 0);
  const [isLoading, setIsLoading] = useState(candidateUrls.length > 0);

  // Reset indices whenever candidateUrls change
  useEffect(() => {
    setCurrentIndex(0);
    setHasError(candidateUrls.length === 0);
    setIsLoading(candidateUrls.length > 0);
  }, [candidateUrls]);

  const handleImageError = () => {
    if (currentIndex + 1 < candidateUrls.length) {
      // Try next candidate fallback URL
      setCurrentIndex(prev => prev + 1);
      setIsLoading(true);
    } else {
      // All candidate URLs failed
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const displayTitle = fallbackTitle || alt;
  const currentSrc = candidateUrls[currentIndex];

  if (hasError || !currentSrc) {
    return (
      <div
        onClick={onClick}
        className={`relative w-full h-full bg-[#1e1510] dark:bg-[#140e0b] border border-[#c59b27]/40 flex flex-col items-center justify-center p-3 text-center text-[#f5efe0] overflow-hidden select-none min-h-[100px] ${
          onClick ? 'cursor-pointer group' : ''
        } ${containerClassName}`}
      >
        {/* Background gradient & motif */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1b12] via-[#1a110a] to-[#2a1b12] opacity-90" />
        <div className="absolute top-1 left-1 opacity-20 pointer-events-none">
          <KurdishStarMedallion className="w-12 h-12 text-[#c59b27]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1.5 max-w-[90%]">
          <div className="w-8 h-8 rounded-full bg-[#c59b27]/20 border border-[#c59b27]/50 flex items-center justify-center text-[#c59b27] shrink-0">
            <KurdishStarMedallion className="w-4 h-4" />
          </div>

          {category && (
            <span className="text-[9px] font-bold bg-[#801b22]/80 text-white px-2 py-0.5 rounded-full border border-[#c59b27]/30">
              {category}
            </span>
          )}

          <span className="text-xs font-serif font-bold text-[#f5efe0] line-clamp-1 leading-tight">
            {displayTitle}
          </span>

          <span className="text-[10px] text-[#e2d2b8]/80 font-serif line-clamp-1 flex items-center gap-1">
            <Info className="w-3 h-3 text-[#c59b27] shrink-0 inline" />
            {fallbackSubtitle}
          </span>
        </div>

        {onClick && showZoomOnHover && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
            <ZoomIn className="w-5 h-5 text-white drop-shadow-md" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden w-full h-full ${
        onClick ? 'cursor-pointer group' : ''
      } ${containerClassName}`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#3a281c] animate-pulse flex items-center justify-center z-10">
          <ImageIcon className="w-6 h-6 text-[#c59b27]/50 animate-bounce" />
        </div>
      )}

      <img
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={`w-full h-full object-${objectFit} transition-transform duration-300 ${
          onClick && showZoomOnHover ? 'group-hover:scale-105' : ''
        } ${className}`}
        loading="lazy"
      />

      {/* Hover Zoom Prompt if Clickable */}
      {onClick && showZoomOnHover && !isLoading && (
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
            <ZoomIn className="w-3.5 h-3.5 text-[#c59b27]" /> تەماشاکردنی گەورەتر
          </span>
        </div>
      )}
    </div>
  );
};

