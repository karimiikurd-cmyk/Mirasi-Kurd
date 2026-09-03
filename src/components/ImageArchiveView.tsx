import React, { useState } from 'react';
import { ImageItem } from '../types';
import { GALLERY_ITEMS } from '../data/gallery';
import { ParchmentCornerDecoration } from './KurdishPattern';
import { Camera, Image as ImageIcon, Search, ShieldCheck, Info } from 'lucide-react';
import { SmartImage } from './SmartImage';
import { LightboxModal, LightboxImageItem } from './LightboxModal';

interface ImageArchiveViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
}

export function ImageArchiveView({ onOpenShareModal }: ImageArchiveViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('هەموو وێنەکان');
  const [selectedRegion, setSelectedRegion] = useState<string>('هەموو ناوچەکان');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const categories = [
    'هەموو وێنەکان',
    'کەسایەتییەکان',
    'کەسایەتییە سیاسییەکان',
    'شاعیران',
    'شوێنە مێژووییەکان',
    'بەڵگەنامەکان',
  ];

  const regions = [
    'هەموو ناوچەکان',
    'کوردستانی عێراق',
    'کوردستانی باکوور',
    'کوردستانی ڕۆژهەڵات',
    'کوردستانی ڕۆژئاوا',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'هەموو وێنەکان' || item.category === selectedCategory;

    const matchesRegion =
      selectedRegion === 'هەموو ناوچەکان' ||
      (item.region && item.region.includes(selectedRegion));

    const matchesSearch =
      !searchQuery ||
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.figureName && item.figureName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.imageSource.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesRegion && matchesSearch;
  });

  const lightboxImages: LightboxImageItem[] = filteredItems.map((item) => ({
    id: item.id,
    url: item.imageUrl,
    caption: item.caption,
    title: item.figureName || item.caption,
    figureName: item.figureName,
    category: item.category,
    region: item.region,
    era: item.era,
    source: item.imageSource,
    photographer: item.photographer,
    license: item.license,
    hasRealPhoto: item.hasRealPhoto,
  }));

  return (
    <div className="space-y-6 animate-fade-in font-serif">
      {/* Header Banner */}
      <div className="bg-[#1b263b] text-[#f5efe0] border-4 border-[#c59b27] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 rounded-lg bg-[#c59b27] text-[#1b263b] flex items-center justify-center font-bold">
            <Camera className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
            ئەرشیفی فۆتۆگرافی و بەڵگەنامەیی
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f5efe0] mb-2">
          «ئەرشیفی وێنە ڕاستەقینەکان»
        </h2>
        <p className="text-xs sm:text-sm text-[#f5efe0]/85 leading-relaxed max-w-2xl">
          کۆکراوەی وێنە بەڵگەدارەکانی کەسایەتییەکان، شاعیران، سەرکردە سیاسییەکان، شوێنە مێژووییەکان و دەستنووسە دەگمەنەکانی کوردستان بە ئاماژەدان بە سەرچاوە و مافی لەبەرگرتنەوە.
        </p>

        <div className="mt-4 p-3 bg-[#0d1b2a]/80 border border-[#c59b27]/40 rounded-xl flex items-start gap-2 text-xs text-[#d9cbb3]">
          <ShieldCheck className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
          <p>
            پابەندبوونی ئەرشیف: هیچ وێنەیەکی بەرهەمهێنراوی ژیریی دەستکرد (AI) وەک وێنەی ڕاستەقینەی مێژوویی بڵاوناکرێتەوە. سەرجەم وێنەکان بەڵگەداری سەرچاوە مێژووییەکانن.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#fcfaf7] dark:bg-[#241e19] border border-[#d3c2a3] dark:border-[#42362b] p-4 rounded-2xl shadow-sm space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b]" />
          <input
            type="text"
            placeholder="گەڕان لە ناو وێنەکان، کەسایەتییەکان یان شوێنەکان..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 bg-[#f5efe0] dark:bg-[#1a1612] border border-[#d3c2a3] dark:border-[#42362b] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1b263b] text-[#2c1b0e] dark:text-[#ebe5df]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#1b263b] text-white border-[#1b263b] shadow-sm'
                    : 'bg-[#f5efe0] dark:bg-[#1a1612] text-[#5c4a3e] dark:text-[#c4b5a5] border-[#d3c2a3] dark:border-[#42362b] hover:bg-[#eae1d0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Region Filter */}
        <div className="pt-2 border-t border-[#e2d5c3] dark:border-[#382d24] flex items-center gap-3">
          <span className="text-xs font-bold text-[#5c4a3e] dark:text-[#c4b5a5]">ناوچە:</span>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedRegion === reg
                    ? 'bg-[#c59b27] text-[#1b263b] font-bold'
                    : 'bg-[#eae1d0] dark:bg-[#2c241d] text-[#5c4a3e] dark:text-[#c4b5a5]'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIdx(idx)}
              className="group bg-[#fcfaf7] dark:bg-[#241e19] border border-[#d3c2a3] dark:border-[#42362b] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer relative flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#e0d5c1] dark:bg-[#1a1612]">
                <SmartImage
                  src={item.imageUrl}
                  alt={item.caption}
                  fallbackTitle={item.figureName || item.caption}
                  fallbackSubtitle="وێنەی بەڵگەدار"
                  category={item.category}
                  showZoomOnHover={true}
                  objectFit="cover"
                />

                <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-[#f5efe0] text-[10px] px-2 py-0.5 rounded-full border border-white/20 pointer-events-none">
                  {item.category}
                </span>

                {item.hasRealPhoto ? (
                  <span className="absolute bottom-2 left-2 bg-[#1b4332]/90 text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 pointer-events-none">
                    <ShieldCheck className="w-3 h-3" /> وێنەی بەڵگەدار
                  </span>
                ) : (
                  <span className="absolute bottom-2 left-2 bg-[#8c2318]/90 text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 pointer-events-none">
                    <Info className="w-3 h-3" /> وێنەی هونەری
                  </span>
                )}
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs font-bold text-[#2c1b0e] dark:text-[#ebe5df] line-clamp-2 leading-snug">
                  {item.caption}
                </p>

                <div className="text-[11px] text-[#736254] dark:text-[#a89887] space-y-0.5 border-t border-[#e2d5c3] dark:border-[#382d24] pt-2">
                  <div className="flex items-center justify-between">
                    <span>سەرچاوە:</span>
                    <span className="font-semibold text-[#2c1b0e] dark:text-[#ebe5df] truncate max-w-[140px]">
                      {item.imageSource}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#fcfaf7] dark:bg-[#241e19] border border-dashed border-[#d3c2a3] dark:border-[#42362b] p-10 rounded-2xl text-center space-y-3">
          <ImageIcon className="w-10 h-10 text-[#8c7a6b] mx-auto" />
          <h3 className="text-base font-bold text-[#2c1b0e] dark:text-[#ebe5df]">
            هیچ وێنەیەک بەپێی ئەم داواکارییە نەدۆزرایەوە
          </h3>
          <button
            onClick={() => {
              setSelectedCategory('هەموو وێنەکان');
              setSelectedRegion('هەموو ناوچەکان');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#1b263b] text-white rounded-xl text-xs font-bold hover:bg-[#2a3a58] transition-colors"
          >
            لابردنی فلتەرەکان
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeImageIdx !== null && (
        <LightboxModal
          isOpen={activeImageIdx !== null}
          onClose={() => setActiveImageIdx(null)}
          images={lightboxImages}
          currentIndex={activeImageIdx}
          onIndexChange={(newIdx) => setActiveImageIdx(newIdx)}
          onOpenShareModal={onOpenShareModal}
        />
      )}
    </div>
  );
}

