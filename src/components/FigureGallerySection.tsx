import React, { useState } from 'react';
import { HistoricalFigureImage } from '../types';
import { Camera, Maximize2 } from 'lucide-react';
import { SmartImage } from './SmartImage';
import { LightboxModal, LightboxImageItem } from './LightboxModal';

interface FigureGallerySectionProps {
  gallery?: HistoricalFigureImage[];
  figureName: string;
}

export function FigureGallerySection({ gallery, figureName }: FigureGallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!gallery || gallery.length === 0) return null;

  const lightboxImages: LightboxImageItem[] = gallery.map((img) => ({
    url: img.url,
    caption: img.caption || figureName,
    title: figureName,
    figureName: figureName,
    category: img.type === 'photograph' ? 'وێنەی فۆتۆگرافی ڕاستەقینە' : 'وێنەی مێژوویی / هونەری',
    source: img.source,
    sourceUrl: img.sourceUrl,
    license: img.license,
    author: img.author,
    year: img.year,
    hasRealPhoto: img.type === 'photograph',
  }));

  return (
    <section className="space-y-3 font-serif">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-[#e2d2b8] dark:border-[#382d24] pb-2">
        <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#801b22] dark:text-[#c59b27]" />
          <span>«گەلەری وێنەکان»</span>
        </h3>
        <span className="text-xs font-bold bg-[#801b22]/10 dark:bg-[#c59b27]/20 text-[#801b22] dark:text-[#e0b553] px-2.5 py-0.5 rounded-full border border-[#801b22]/20 dark:border-[#c59b27]/30">
          {gallery.length} وێنەی بەڵگەدار
        </span>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {gallery.map((img, idx) => {
          const isPhoto = img.type === 'photograph';
          return (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="group relative bg-[#f5efe0] dark:bg-[#1a1612] border-2 border-[#d8c4a9] dark:border-[#42362b] hover:border-[#c59b27] dark:hover:border-[#c59b27] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 shadow-xs hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-4/3 w-full bg-[#e8decd] dark:bg-[#28221b] overflow-hidden">
                <SmartImage
                  src={img.url}
                  alt={img.caption || figureName}
                  fallbackTitle={figureName}
                  category={isPhoto ? 'فۆتۆ' : 'نیگار'}
                  showZoomOnHover={true}
                  objectFit="cover"
                />

                {/* Type Badge Overlay */}
                <div className="absolute top-2 right-2 z-10 pointer-events-none">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1 ${
                      isPhoto
                        ? 'bg-[#1b4332]/90 text-white border border-[#2d6a4f]'
                        : 'bg-[#801b22]/90 text-white border border-[#a32831]'
                    }`}
                  >
                    {isPhoto ? 'وێنەی ڕاستەقینە' : 'وێنەی هونەری / مێژوویی'}
                  </span>
                </div>
              </div>

              {/* Thumbnail Caption */}
              <div className="p-2.5 text-xs text-[#2c1b0e] dark:text-[#ebe5df] flex-1 flex flex-col justify-between">
                <p className="line-clamp-2 leading-tight text-[11px] font-medium">
                  {img.caption || figureName}
                </p>
                <div className="flex items-center justify-between text-[10px] text-[#671217] dark:text-[#c4b5a5] mt-1.5 pt-1 border-t border-[#e2d2b8] dark:border-[#332921]">
                  <span>{img.source || 'سەرچاوە'}</span>
                  {img.year && <span>{img.year}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <LightboxModal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          images={lightboxImages}
          currentIndex={selectedIndex}
          onIndexChange={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}
    </section>
  );
}

