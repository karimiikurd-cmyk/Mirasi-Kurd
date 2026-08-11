import React from 'react';
import { X, Info, BookCheck, Bookmark, HelpCircle, Type } from 'lucide-react';
import { KurdishStarMedallion, ParchmentCornerDecoration, KurdishOrnamentalDivider } from './KurdishPattern';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFavorites: () => void;
  fontSize: 'sm' | 'md' | 'lg';
  setFontSize: (size: 'sm' | 'md' | 'lg') => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onOpenFavorites,
  fontSize,
  setFontSize,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#faf6ed] border-2 border-[#c59b27] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col dir-rtl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#f0e6d2] px-5 py-3.5 border-b-2 border-[#d8c4a9] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <KurdishStarMedallion className="w-5 h-5" color="#801b22" />
            <h2 className="font-serif font-bold text-base text-[#2c1b0e]">
              «ڕێکخستنەکان»
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#ede3ce] hover:bg-[#801b22] text-[#3c2817] hover:text-white transition-colors"
            title="داخستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-5 overflow-y-auto space-y-5 relative">
          <ParchmentCornerDecoration />

          {/* 1. Font Size Control */}
          <div className="bg-[#f5efe0] p-4 rounded-xl border border-[#e2d2b8] space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold font-serif text-[#801b22]">
              <Type className="w-4 h-4" />
              <span>قەبارەی دەقی ئەپ:</span>
            </div>
            <p className="text-xs text-[#5c4433] font-serif">
              بۆ خوێندنەوەی ئاسانتر لەسەر هەموو شاشەکان دەتوانیت قەبارەی دەقەکە بگۆڕیت.
            </p>
            <div className="flex items-center gap-2 pt-1 font-serif text-xs font-bold">
              <button
                onClick={() => setFontSize('sm')}
                className={`flex-1 py-2 rounded-lg border transition-all ${
                  fontSize === 'sm'
                    ? 'bg-[#801b22] text-white border-[#801b22]'
                    : 'bg-[#faf6ed] text-[#3c2817] border-[#d8c4a9]'
                }`}
              >
                بچووک
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`flex-1 py-2 rounded-lg border transition-all ${
                  fontSize === 'md'
                    ? 'bg-[#801b22] text-white border-[#801b22]'
                    : 'bg-[#faf6ed] text-[#3c2817] border-[#d8c4a9]'
                }`}
              >
                ئاسایی
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`flex-1 py-2 rounded-lg border transition-all ${
                  fontSize === 'lg'
                    ? 'bg-[#801b22] text-white border-[#801b22]'
                    : 'bg-[#faf6ed] text-[#3c2817] border-[#d8c4a9]'
                }`}
              >
                گەورە
              </button>
            </div>
          </div>

          {/* 2. «دەربارەی ئەپ» */}
          <div className="bg-[#f5efe0] p-4 rounded-xl border border-[#e2d2b8] space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold font-serif text-[#801b22]">
              <Info className="w-4 h-4" />
              <span>«دەربارەی ئەپ»</span>
            </div>
            <p className="text-xs text-[#2c1b0e] leading-relaxed font-serif">
              ئەپڵیکەیشنی <strong>«میراثی کورد»</strong> پەرتووکخانەیەکی دیجیتاڵیی ڕەسەن و گەنجینەیەکی فەرهەنگییە بە ئامانجی ناساندن و پاراستنی مێژوو، ئەدەب، داستان، شاعیران، زانایان و کەسایەتییە دیارەکانی کوردستان.
            </p>
          </div>

          {/* 3. «سەرچاوەکان» */}
          <div className="bg-[#f5efe0] p-4 rounded-xl border border-[#e2d2b8] space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold font-serif text-[#801b22]">
              <BookCheck className="w-4 h-4" />
              <span>«سەرچاوەکان»</span>
            </div>
            <p className="text-xs text-[#2c1b0e] leading-relaxed font-serif">
              هەموو زانیارییە مێژوویی و ئەدەبییەکان لە کتێبە باوەڕپێکراوەکان وەک «مێژووی کورد و کوردستان»ی محەمەد ئامێن زەکی بەگ، «دیوانی نالی»، «مەم و زێن»ی ئەحمەدی خانی و سەرچاوە فۆلکلۆرییەکان وەرگیراون.
            </p>
          </div>

          {/* 4. «دڵخوازەکان» Link */}
          <div className="bg-[#f5efe0] p-4 rounded-xl border border-[#e2d2b8] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold font-serif text-[#801b22]">
                <Bookmark className="w-4 h-4 fill-current" />
                <span>«دڵخوازەکان»</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenFavorites();
                }}
                className="px-3 py-1 bg-[#801b22] text-white text-xs font-serif font-bold rounded-lg hover:bg-[#671217] transition-colors"
              >
                بینینی دڵخوازەکان
              </button>
            </div>
            <p className="text-xs text-[#5c4433] font-serif">
              سەرجەم بابەتە پاشەکەوتکراوەکانی تۆ لەسەر ئامێرەکەت هەڵگیراون.
            </p>
          </div>

          {/* 5. «ڕێنمایی بەکارهێنان» */}
          <div className="bg-[#f5efe0] p-4 rounded-xl border border-[#e2d2b8] space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold font-serif text-[#801b22]">
              <HelpCircle className="w-4 h-4" />
              <span>«ڕێنمایی بەکارهێنان»</span>
            </div>
            <ul className="list-disc list-inside text-xs text-[#2c1b0e] space-y-1 font-serif">
              <li>بەکارھێنانی بەشەکانی خوارەوە بۆ هاتوچۆ لە نێوان پەڕەکان.</li>
              <li>داگرتنی نیشانەی دڵخوازەکان بۆ پاشەکەوتکردنی بڕگە دڵخوازەکانت.</li>
              <li>بەکارھێنانی بەشی «گەڕان» بۆ دۆزینەوەی دەستبەجێی ناو و ناونیشانەکان.</li>
            </ul>
          </div>

          <KurdishOrnamentalDivider />
        </div>
      </div>
    </div>
  );
};
