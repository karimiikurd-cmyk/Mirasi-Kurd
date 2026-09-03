import React, { useState, useMemo } from 'react';
import { SherkoPoem, ALL_SHERKO_POEMS, SHERKO_SECTIONS } from '../data/sherko';
import { ParchmentCornerDecoration, KurdishStarMedallion, KurdishOrnamentalDivider } from './KurdishPattern';
import { Feather, Search, Copy, Check, Share2, BookOpen, X, ChevronRight, ChevronLeft, Filter, Sparkles, Award } from 'lucide-react';

interface SherkoPoetryViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

export const SherkoPoetryView: React.FC<SherkoPoetryViewProps> = ({ onOpenShareModal, onBackToProfile }) => {
  const [selectedSection, setSelectedSection] = useState<string>('هەموویان');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePoem, setActivePoem] = useState<SherkoPoem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [poemFontSize, setPoemFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Filter poems based on section and search query
  const filteredPoems = useMemo(() => {
    return ALL_SHERKO_POEMS.filter((poem) => {
      const matchesSection = selectedSection === 'هەموویان' || poem.section === selectedSection;
      const q = searchQuery.trim().toLowerCase();

      const matchesSearch =
        q === '' ||
        poem.title.toLowerCase().includes(q) ||
        poem.incipit.toLowerCase().includes(q) ||
        poem.number.toString().includes(q) ||
        poem.fullText.toLowerCase().includes(q) ||
        (poem.notes && poem.notes.toLowerCase().includes(q)) ||
        (poem.theme && poem.theme.toLowerCase().includes(q));

      return matchesSection && matchesSearch;
    });
  }, [selectedSection, searchQuery]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Navigate between poems in detail view
  const currentPoemIndex = activePoem ? filteredPoems.findIndex((p) => p.id === activePoem.id) : -1;
  const prevPoem = currentPoemIndex > 0 ? filteredPoems[currentPoemIndex - 1] : null;
  const nextPoem = currentPoemIndex >= 0 && currentPoemIndex < filteredPoems.length - 1 ? filteredPoems[currentPoemIndex + 1] : null;

  return (
    <div className="space-y-6 dir-rtl font-serif animate-fade-in">
      {/* Header Banner */}
      <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        {onBackToProfile && (
          <button
            onClick={onBackToProfile}
            className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#801b22] text-white hover:bg-[#671217] text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>گەڕانەوە بۆ پرۆفایلی شێرکۆ بێکەس</span>
          </button>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#801b22] text-white flex items-center justify-center font-bold shadow-md shrink-0 overflow-hidden border-2 border-[#c59b27]">
              <img
                src="/figures/sherko-bekas.svg"
                alt="شێرکۆ بێکەس"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-bold text-[#801b22] bg-[#801b22]/10 px-2.5 py-0.5 rounded-full border border-[#801b22]/20">
                  دیوانی شێرکۆ بێکەس (١٩٤٠ - ٢٠١٣ ز)
                </span>
                <span className="text-xs text-[#671217] font-sans">
                  {ALL_SHERKO_POEMS.length} دەق و شیعری هەڵبژێردراوی دیوان
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2c1b0e]">
                📚 دیوان و اشعار شێرکۆ بێکەس
              </h1>
              <p className="text-xs text-[#5c4433] mt-1 max-w-2xl leading-relaxed">
                سەرجەم بەرهەمە سەرەکییەکان: دەربەندی پەپوولە، بۆننامە، ملوانکە، شاکارەکانی ڕوانگە و وەسیەتنامەی شاعیر بە دەقی ڕەسەنی کوردی.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center bg-[#faf6ed] p-3 rounded-2xl border border-[#d8c4a9] text-center shrink-0">
            <KurdishStarMedallion className="w-6 h-6 mb-1" color="#801b22" />
            <span className="text-[11px] font-bold text-[#801b22]">دەقی ڕەسەنی کوردی</span>
            <span className="text-[10px] text-[#7a6452]">دیوانی گشتی شێرکۆ بێکەس</span>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Section */}
      <div className="bg-[#faf6ed] border-2 border-[#d8c4a9] rounded-2xl p-4 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="گەڕان لە ناونیشان، دێڕەکان، دەق و بابەتەکانی دیوانی شێرکۆ بێکەس..."
            className="w-full pl-10 pr-11 py-2.5 bg-[#f5efe0] border border-[#d8c4a9] rounded-xl text-sm text-[#2c1b0e] placeholder-[#8c7a6b] focus:outline-none focus:border-[#801b22] focus:ring-1 focus:ring-[#801b22] transition-colors"
          />
          <Search className="w-5 h-5 text-[#8c7a6b] absolute right-3.5 top-3" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3.5 top-3 text-[#8c7a6b] hover:text-[#2c1b0e]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Section Tabs */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#7a6452] mb-2 font-sans font-bold">
            <Filter className="w-3.5 h-3.5 text-[#801b22]" />
            <span>بەش و دیوانەکان:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {SHERKO_SECTIONS.map((section) => {
              const count =
                section === 'هەموویان'
                  ? ALL_SHERKO_POEMS.length
                  : ALL_SHERKO_POEMS.filter((p) => p.section === section).length;
              const isSelected = selectedSection === section;

              return (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#801b22] text-white shadow-xs scale-102'
                      : 'bg-[#f5efe0] text-[#5c4433] hover:bg-[#e8dcce] border border-[#d8c4a9]'
                  }`}
                >
                  <span>{section}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#d8c4a9]/40 text-[#7a6452]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Poems Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[#7a6452] px-1">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#801b22]" />
            <span>پێشاندانی {filteredPoems.length} بەرهەم</span>
          </span>
          {searchQuery && (
            <span className="text-[#801b22] font-bold">
              ئەنجامی گەڕان بۆ: "{searchQuery}"
            </span>
          )}
        </div>

        {filteredPoems.length === 0 ? (
          <div className="text-center py-12 bg-[#faf6ed] rounded-2xl border border-dashed border-[#d8c4a9] p-6">
            <Feather className="w-12 h-12 text-[#d8c4a9] mx-auto mb-3 opacity-60" />
            <p className="text-sm font-bold text-[#5c4433]">هیچ شیعرێک نەدۆزرایەوە</p>
            <p className="text-xs text-[#8c7a6b] mt-1">تکایە وشەیەکی تر تاقی بکەرەوە یان فلتەرەکان لابدە.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSection('هەموویان');
              }}
              className="mt-3 px-4 py-1.5 bg-[#801b22] text-white text-xs rounded-xl font-bold hover:bg-[#671217] transition-colors"
            >
              پاککردنەوەی هەموو فلتەرەکان
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredPoems.map((poem) => (
              <div
                key={poem.id}
                onClick={() => setActivePoem(poem)}
                className="bg-[#faf6ed] hover:bg-[#f3ead7] border border-[#d8c4a9] hover:border-[#c59b27] rounded-2xl p-4 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#801b22] bg-[#801b22]/10 px-2 py-0.5 rounded-lg border border-[#801b22]/20">
                      {poem.section}
                    </span>
                    <span className="text-[11px] font-sans font-bold text-[#7a6452] bg-[#e8dcce] px-2 py-0.5 rounded-md">
                      #{poem.number}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-[#2c1b0e] group-hover:text-[#801b22] transition-colors mb-2 line-clamp-2">
                    {poem.title}
                  </h3>

                  <p className="text-xs text-[#6a5443] line-clamp-2 leading-relaxed bg-[#f5efe0] p-2.5 rounded-xl border border-[#e5d8c3] italic mb-3">
                    «{poem.incipit}»
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e5d8c3] flex items-center justify-between text-[11px] text-[#8c7a6b]">
                  <span className="flex items-center gap-1">
                    {poem.theme && (
                      <span className="truncate max-w-[150px]">{poem.theme}</span>
                    )}
                  </span>
                  <span className="text-[#801b22] font-bold group-hover:translate-x-[-2px] transition-transform flex items-center gap-0.5">
                    خوێندنەوەی تەواو ←
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Poem Modal */}
      {activePoem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in">
          <div
            className="bg-[#fcf9f2] border-2 border-[#c59b27] rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <ParchmentCornerDecoration />

            {/* Modal Header */}
            <div className="bg-[#f5efe0] border-b border-[#d8c4a9] p-4 sm:p-5 flex items-start justify-between gap-3 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-xs font-bold text-[#801b22] bg-[#801b22]/10 px-2.5 py-0.5 rounded-full border border-[#801b22]/20">
                    {activePoem.section}
                  </span>
                  <span className="text-xs font-sans font-bold text-[#7a6452] bg-[#e8dcce] px-2 py-0.5 rounded-md">
                    شیعری ژمارە {activePoem.number}
                  </span>
                  {activePoem.year && (
                    <span className="text-xs text-[#7a6452] bg-[#e8dcce]/60 px-2 py-0.5 rounded-md font-sans">
                      ساڵ: {activePoem.year}
                    </span>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#2c1b0e]">
                  {activePoem.title}
                </h2>
              </div>

              <button
                onClick={() => setActivePoem(null)}
                className="w-8 h-8 rounded-full bg-[#e8dcce] hover:bg-[#801b22] hover:text-white text-[#5c4433] flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Toolbar (Font Size, Copy, Share) */}
            <div className="bg-[#faf6ed] border-b border-[#e5d8c3] px-4 py-2 flex items-center justify-between gap-2 text-xs">
              {/* Font size selectors */}
              <div className="flex items-center gap-1 bg-[#f5efe0] p-1 rounded-lg border border-[#d8c4a9]">
                <button
                  onClick={() => setPoemFontSize('normal')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                    poemFontSize === 'normal'
                      ? 'bg-[#801b22] text-white'
                      : 'text-[#5c4433] hover:bg-[#e8dcce]'
                  }`}
                >
                  ئاسایی
                </button>
                <button
                  onClick={() => setPoemFontSize('large')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                    poemFontSize === 'large'
                      ? 'bg-[#801b22] text-white'
                      : 'text-[#5c4433] hover:bg-[#e8dcce]'
                  }`}
                >
                  گەورە
                </button>
                <button
                  onClick={() => setPoemFontSize('xlarge')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                    poemFontSize === 'xlarge'
                      ? 'bg-[#801b22] text-white'
                      : 'text-[#5c4433] hover:bg-[#e8dcce]'
                  }`}
                >
                  زۆر گەورە
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(`${activePoem.title}\n\n${activePoem.fullText}`)}
                  className="px-3 py-1.5 bg-[#f5efe0] hover:bg-[#e8dcce] text-[#5c4433] rounded-lg border border-[#d8c4a9] flex items-center gap-1.5 transition-colors font-bold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'لەبەرگیراوە' : 'کۆپیکردن'}</span>
                </button>

                {onOpenShareModal && (
                  <button
                    onClick={() =>
                      onOpenShareModal(
                        activePoem.title,
                        `${activePoem.title}\n\n${activePoem.fullText}\n\n- شێرکۆ بێکەس`
                      )
                    }
                    className="px-3 py-1.5 bg-[#801b22] hover:bg-[#671217] text-white rounded-lg flex items-center gap-1.5 transition-colors font-bold shadow-xs"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>هاوبەشکردن</span>
                  </button>
                )}
              </div>
            </div>

            {/* Modal Body: Poem Full Text */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
              {/* Poem Verses Box */}
              <div
                className={`bg-[#f5efe0] p-6 sm:p-8 rounded-2xl border border-[#d8c4a9] text-[#2c1b0e] whitespace-pre-line leading-loose text-center font-serif shadow-inner ${
                  poemFontSize === 'normal'
                    ? 'text-sm sm:text-base leading-8'
                    : poemFontSize === 'large'
                    ? 'text-base sm:text-lg leading-9'
                    : 'text-lg sm:text-xl leading-10 font-bold'
                }`}
              >
                {activePoem.fullText}
              </div>

              {/* Notes or Info */}
              {(activePoem.notes || activePoem.theme) && (
                <div className="bg-[#faf6ed] p-4 rounded-xl border border-[#e5d8c3] text-xs text-[#6a5443] space-y-1.5">
                  {activePoem.theme && (
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
                      <span className="font-bold text-[#801b22]">تەوەر و ناوەڕۆک:</span>
                      <span>{activePoem.theme}</span>
                    </div>
                  )}
                  {activePoem.notes && (
                    <div className="flex items-start gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#801b22] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#801b22]">تێبینی و سەرچاوە: </span>
                        <span>{activePoem.notes}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer (Prev / Next Navigation) */}
            <div className="bg-[#f5efe0] border-t border-[#d8c4a9] p-3 sm:p-4 flex items-center justify-between shrink-0">
              <button
                disabled={!prevPoem}
                onClick={() => prevPoem && setActivePoem(prevPoem)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                  prevPoem
                    ? 'bg-[#801b22] text-white hover:bg-[#671217] shadow-xs cursor-pointer'
                    : 'bg-[#e8dcce] text-[#a09080] cursor-not-allowed opacity-60'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
                <span>شیعری پێشوو</span>
              </button>

              <span className="text-xs text-[#7a6452] font-sans font-bold">
                {currentPoemIndex + 1} لە {filteredPoems.length}
              </span>

              <button
                disabled={!nextPoem}
                onClick={() => nextPoem && setActivePoem(nextPoem)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                  nextPoem
                    ? 'bg-[#801b22] text-white hover:bg-[#671217] shadow-xs cursor-pointer'
                    : 'bg-[#e8dcce] text-[#a09080] cursor-not-allowed opacity-60'
                }`}
              >
                <span>شیعری دواتر</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <KurdishOrnamentalDivider />
    </div>
  );
};
