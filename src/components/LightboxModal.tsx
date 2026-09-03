import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  ExternalLink, 
  Share2, 
  Tag, 
  MapPin, 
  Calendar, 
  Camera, 
  ZoomIn, 
  ZoomOut,
  Maximize2,
  Info
} from 'lucide-react';
import { SmartImage } from './SmartImage';

export interface LightboxImageItem {
  id?: string;
  url: string;
  caption?: string;
  title?: string;
  figureName?: string;
  category?: string;
  region?: string;
  era?: string;
  source?: string;
  sourceUrl?: string;
  license?: string;
  author?: string;
  photographer?: string;
  year?: string;
  hasRealPhoto?: boolean;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImageItem[];
  currentIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange,
  onOpenShareModal,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(currentIndex);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    setActiveIdx(currentIndex);
    setIsZoomed(false);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handlePrev(); // RTL: Right arrow goes to previous
      if (e.key === 'ArrowLeft') handleNext();  // RTL: Left arrow goes to next
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIdx, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[activeIdx] || images[0];

  const handlePrev = () => {
    const nextIdx = activeIdx === 0 ? images.length - 1 : activeIdx - 1;
    setActiveIdx(nextIdx);
    if (onIndexChange) onIndexChange(nextIdx);
    setIsZoomed(false);
  };

  const handleNext = () => {
    const nextIdx = activeIdx === images.length - 1 ? 0 : activeIdx + 1;
    setActiveIdx(nextIdx);
    if (onIndexChange) onIndexChange(nextIdx);
    setIsZoomed(false);
  };

  const title = currentImage.title || currentImage.figureName || currentImage.caption || 'وێنەی مێژوویی';
  const caption = currentImage.caption || currentImage.title;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in dir-rtl font-serif"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] bg-[#1a1612] border-4 border-[#c59b27] rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto text-[#ebe5df]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 bg-[#2a1315] border-b-2 border-[#c59b27] flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2 min-w-0">
            <Camera className="w-5 h-5 text-[#c59b27] shrink-0" />
            <h3 className="font-extrabold text-sm sm:text-base truncate text-[#f5efe0]">
              {title}
            </h3>
            {images.length > 1 && (
              <span className="text-xs font-bold bg-[#c59b27]/20 text-[#e0b553] px-2.5 py-0.5 rounded-full border border-[#c59b27]/30 shrink-0">
                {activeIdx + 1} لە {images.length}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenShareModal && (
              <button
                onClick={() =>
                  onOpenShareModal(
                    title,
                    `وێنەی مێژوویی: ${title} - ${caption || ''}`,
                    currentImage.url
                  )
                }
                className="p-2 rounded-xl bg-white/10 hover:bg-[#1b4332] text-white transition-colors"
                title="هاوبەشکردن"
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title={isZoomed ? 'بچووککردنەوە' : 'گەورەکردنەوە'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#801b22] text-white transition-colors"
              title="داخستن (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 bg-black/80 flex items-center justify-center p-3 sm:p-6 min-h-[300px] max-h-[58vh] overflow-auto">
          <div className={`relative transition-all duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'max-h-[52vh]'}`}>
            <SmartImage
              src={currentImage.url}
              alt={title}
              fallbackTitle={title}
              fallbackSubtitle="وێنەی ڕاستەقینەی بەڵگەدار بەردەست نییە"
              category={currentImage.category}
              objectFit="contain"
              containerClassName="max-h-[52vh] max-w-full rounded-2xl border border-[#c59b27]/40 shadow-2xl"
              showZoomOnHover={false}
            />
          </div>

          {/* RTL Gallery Nav Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#801b22] text-white border border-white/20 transition-all shadow-xl z-20"
                title="وێنەی پێشوو"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#801b22] text-white border border-white/20 transition-all shadow-xl z-20"
                title="وێنەی داهاتوو"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails Ribbon if Gallery */}
        {images.length > 1 && (
          <div className="p-2 bg-[#241e19] border-t border-[#3e3228] flex items-center gap-2 overflow-x-auto scrollbar-none justify-center">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveIdx(idx);
                  if (onIndexChange) onIndexChange(idx);
                }}
                className={`w-14 h-10 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                  activeIdx === idx ? 'border-[#c59b27] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <SmartImage src={img.url} alt={img.title || ''} objectFit="cover" showZoomOnHover={false} />
              </div>
            ))}
          </div>
        )}

        {/* Metadata Details Drawer */}
        <div className="p-4 bg-[#241e19] border-t-2 border-[#c59b27]/60 space-y-3 text-xs overflow-y-auto max-h-[25vh]">
          {/* Badge & Caption */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 ${
                currentImage.hasRealPhoto !== false
                  ? 'bg-[#1b4332] text-white border border-[#2d6a4f]'
                  : 'bg-[#801b22] text-white border border-[#a32831]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
              {currentImage.hasRealPhoto !== false
                ? 'وێنەی ڕاستەقینەی بەڵگەدار'
                : 'وێنەی هونەری / مێژوویی (وێنەی فۆتۆ بەردەست نییە)'}
            </span>

            {currentImage.category && (
              <span className="text-xs font-bold bg-[#c59b27]/20 text-[#e0b553] px-2.5 py-1 rounded-lg border border-[#c59b27]/30">
                پۆلێن: {currentImage.category}
              </span>
            )}
          </div>

          {caption && (
            <p className="text-sm font-medium text-[#f5efe0] leading-relaxed">
              {caption}
            </p>
          )}

          {/* Grid Metadata Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[11px] pt-2 border-t border-[#3e3228] text-[#d9cbb3]">
            {currentImage.source && (
              <div>
                <span className="text-[#c59b27] font-bold block mb-0.5">سەرچاوە:</span>
                <span className="flex items-center gap-1">
                  {currentImage.source}
                  {currentImage.sourceUrl && (
                    <a
                      href={currentImage.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c59b27] hover:underline inline-flex items-center gap-0.5"
                      title="سەردانی بەستەری سەرچاوە بکه"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </span>
              </div>
            )}

            {currentImage.license && (
              <div>
                <span className="text-[#c59b27] font-bold block mb-0.5">مۆڵەت / License:</span>
                <span>{currentImage.license}</span>
              </div>
            )}

            {(currentImage.author || currentImage.photographer) && (
              <div>
                <span className="text-[#c59b27] font-bold block mb-0.5">وێنەگر / دروستکەر:</span>
                <span>{currentImage.author || currentImage.photographer}</span>
              </div>
            )}

            {(currentImage.year || currentImage.era) && (
              <div>
                <span className="text-[#c59b27] font-bold block mb-0.5">ساڵ / سەردەم:</span>
                <span>{currentImage.year || currentImage.era}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
