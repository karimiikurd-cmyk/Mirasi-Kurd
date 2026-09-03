import React, { useState, useMemo } from 'react';
import { KhaniPoem } from '../data/khani/types';
import { ALL_KHANI_POEMS } from '../data/khani';
import { ParchmentCornerDecoration, KurdishStarMedallion } from './KurdishPattern';
import { Feather, Search, Copy, Check, Share2, BookOpen, X, ChevronRight, ChevronLeft, Filter, Sparkles } from 'lucide-react';

interface KhaniPoetryViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

const KHANI_SECTIONS = ['هەموویان', 'دیوان', 'تاریخا ئاڤاکرنێ', 'پاشبەند (مەشکووک)'];

export const KhaniPoetryView: React.FC<KhaniPoetryViewProps> = ({ onOpenShareModal, onBackToProfile }) => {
  const [selectedSection, setSelectedSection] = useState<string>('هەموویان');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePoem, setActivePoem] = useState<KhaniPoem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Filter poems based on section and search query
  const filteredPoems = useMemo(() => {
    return ALL_KHANI_POEMS.filter((poem) => {
      const matchesSection = selectedSection === 'هەموویان' || poem.section === selectedSection;
      const q = searchQuery.trim().toLowerCase();
      const poemFullText = poem.verses.map((v) => `${v.firstLine} ${v.secondLine || ''}`).join(' ');

      const matchesSearch =
        q === '' ||
        poem.title.toLowerCase().includes(q) ||
        poem.incipit.toLowerCase().includes(q) ||
        poem.number.toString().includes(q) ||
        poemFullText.toLowerCase().includes(q) ||
        (poem.notes && poem.notes.toLowerCase().includes(q));

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
            <span>گەڕانەوە بۆ پرۆفایلی ئەحمەدی خانی</span>
          </button>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#801b22] text-white flex items-center justify-center font-bold shadow-md shrink-0 overflow-hidden border-2 border-[#c59b27]">
              <img
                src="/figures/ahmad_i_khani_portrait.jpg"
                alt="ئەحمەدی خانی"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-bold text-[#801b22] bg-[#801b22]/10 px-2.5 py-0.5 rounded-full border border-[#801b22]/20">
                  دیوانا ئەحمەدێ خانی (١٦٥٠ - ١٧٠٧ ز)
                </span>
                <span className="text-xs text-[#671217] font-sans">
                  {ALL_KHANI_POEMS.length} بەرهەم و هەڵبەست
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2c1b0e]">
                📚 دیوان و اشعار ئەحمەدی خانی
              </h1>
              <p className="text-xs text-[#5c4433] mt-1 max-w-2xl leading-relaxed">
                کۆکراوەی تەواوی غەزەلیات، تاریخا ئاڤاکرنا مزگەفتان و شعرێن بەرگومان (پاشبەند) راستەوخۆ استخراج‌کراو لە دیوانی ڕەسەنی ئەحمەدی خانی.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center bg-[#faf6ed] p-3 rounded-2xl border border-[#d8c4a9] text-center shrink-0">
            <KurdishStarMedallion className="w-6 h-6 mb-1" color="#801b22" />
            <span className="text-[11px] font-bold text-[#801b22]">کرمانجیا ڕەسەن</span>
            <span className="text-[10px] text-[#7a6452]">دەقێ ئەصلیی PDF</span>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Section */}
      <div className="bg-[#faf6ed] border-2 border-[#d8c4a9] rounded-2xl p-4 shadow-sm space-y-4">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بگەڕێ لە ناو دیوانی ئەحمەدی خانی (عنوان، سەرەتا، بەش، مەتن، لۆ پەڕە)..."
            className="w-full bg-white border-2 border-[#d8c4a9] focus:border-[#801b22] rounded-xl px-4 py-2.5 pl-10 text-sm font-serif text-[#2c1b0e] focus:outline-none shadow-inner transition-colors"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7a6b] hover:text-[#801b22] transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b]" />
          )}
        </div>

        {/* Categories Bar */}
        <div>
          <div className="flex items-center gap-1.5 mb-2 text-xs font-bold text-[#801b22]">
            <Filter className="w-3.5 h-3.5" />
            <span>پۆلێنکردنی بەشەکان:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {KHANI_SECTIONS.map((sec) => {
              const count =
                sec === 'هەموویان'
                  ? ALL_KHANI_POEMS.length
                  : ALL_KHANI_POEMS.filter((p) => p.section === sec).length;

              const isSelected = selectedSection === sec;

              return (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#801b22] text-white shadow-xs border border-[#801b22]'
                      : 'bg-white text-[#2c1b0e] border border-[#d8c4a9] hover:bg-[#f2e8d3]'
                  }`}
                >
                  <span>{sec}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#e2d2b8] text-[#2c1b0e]'
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

      {/* Poems Count Indicator */}
      <div className="flex items-center justify-between text-xs text-[#671217] font-sans px-1">
        <span>
          پیشاندانی <b>{filteredPoems.length}</b> شیعر له <b>{ALL_KHANI_POEMS.length}</b>
        </span>
        {searchQuery && (
          <span className="text-[#801b22]">
            ئەنجامی گەڕان بۆ «{searchQuery}»
          </span>
        )}
      </div>

      {/* Poems Grid List */}
      {filteredPoems.length === 0 ? (
        <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center space-y-3">
          <BookOpen className="w-12 h-12 text-[#8c7a6b] mx-auto opacity-50" />
          <p className="text-base font-bold text-[#2c1b0e]">هیچ شیعرێک نەدۆزرایەوە</p>
          <p className="text-xs text-[#7a6452]">تکایە وشەی گەڕانەکەت بگۆڕە یان بەشێکی تر هەڵبژێرە.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSection('هەموویان');
            }}
            className="px-4 py-2 bg-[#801b22] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#671217] transition-colors cursor-pointer"
          >
            پاكکردنەوەی گەڕان
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPoems.map((poem) => (
            <div
              key={poem.id}
              onClick={() => setActivePoem(poem)}
              className="bg-[#faf6ed] border-2 border-[#d8c4a9] hover:border-[#801b22] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 border-b border-[#e2d2b8] pb-2.5">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#801b22] text-white shrink-0">
                    #{poem.number}
                  </span>
                  <span className="text-[11px] font-sans font-bold text-[#801b22] bg-[#c59b27]/20 px-2 py-0.5 rounded-md border border-[#c59b27]/30">
                    {poem.section}
                  </span>
                </div>

                {/* Title and incipit */}
                <div>
                  <h3 className="text-base font-bold text-[#2c1b0e] group-hover:text-[#801b22] transition-colors line-clamp-1">
                    {poem.title}
                  </h3>
                  {poem.pageReference && (
                    <span className="text-[10px] text-[#7a6452] font-sans mt-0.5 block">
                      پەڕە: {poem.pageReference}
                    </span>
                  )}
                  <p className="text-xs text-[#5c4433] mt-2 leading-relaxed bg-[#f5efe0] p-3 rounded-xl border border-[#e2d2b8] italic">
                    «{poem.incipit}»
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-4 pt-3 border-t border-[#e2d2b8] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#7a6452] font-sans">
                  {poem.verses.length} بەیت / دێڕ
                </span>
                <span className="font-bold text-[#801b22] group-hover:translate-x-[-2px] transition-transform flex items-center gap-1">
                  خوێندنەوەی کامڵ ←
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full Poem Reader Modal */}
      {activePoem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden my-auto">
            <ParchmentCornerDecoration />

            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#d8c4a9] bg-[#faf6ed] flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#801b22] text-white">
                    غەزەلی #{activePoem.number}
                  </span>
                  <span className="text-xs font-bold text-[#801b22] bg-[#c59b27]/20 px-2.5 py-0.5 rounded-md border border-[#c59b27]/30">
                    {activePoem.section}
                  </span>
                  {activePoem.pageReference && (
                    <span className="text-xs font-sans text-[#7a6452] bg-[#e2d2b8] px-2 py-0.5 rounded-md">
                      {activePoem.pageReference}
                    </span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#2c1b0e]">
                  {activePoem.title}
                </h2>
                {activePoem.notes && (
                  <p className="text-xs text-[#801b22] mt-1 font-sans font-bold">
                    * {activePoem.notes}
                  </p>
                )}
              </div>

              <button
                onClick={() => setActivePoem(null)}
                className="w-9 h-9 rounded-full bg-[#e2d2b8] hover:bg-[#801b22] text-[#2c1b0e] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Verses */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-4 bg-[#f5efe0]/80 divide-y divide-[#e2d2b8]/60">
              {activePoem.verses.map((verse, idx) => (
                <div key={idx} className="pt-4 first:pt-0">
                  <div className="bg-[#faf6ed] p-4 rounded-2xl border border-[#d8c4a9] shadow-2xs hover:border-[#c59b27] transition-colors">
                    <div className="flex items-center justify-between text-[10px] text-[#8c7a6b] font-sans mb-2 border-b border-[#e2d2b8]/40 pb-1">
                      <span>بەیت {idx + 1}</span>
                      <span className="text-[#801b22] font-bold">دیوانی ئەحمەدی خانی</span>
                    </div>
                    <div className="space-y-2 text-center sm:text-right">
                      <p className="text-base sm:text-lg font-bold text-[#2c1b0e] leading-relaxed">
                        {verse.firstLine}
                      </p>
                      {verse.secondLine && (
                        <p className="text-base sm:text-lg font-bold text-[#801b22] leading-relaxed sm:mr-8">
                          {verse.secondLine}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#d8c4a9] bg-[#faf6ed] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              {/* Navigation prev/next */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  disabled={!prevPoem}
                  onClick={() => prevPoem && setActivePoem(prevPoem)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                    prevPoem
                      ? 'bg-[#801b22] text-white hover:bg-[#671217] cursor-pointer'
                      : 'bg-[#e2d2b8] text-[#8c7a6b] opacity-50 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>شیعری پێشوو</span>
                </button>

                <button
                  disabled={!nextPoem}
                  onClick={() => nextPoem && setActivePoem(nextPoem)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                    nextPoem
                      ? 'bg-[#801b22] text-white hover:bg-[#671217] cursor-pointer'
                      : 'bg-[#e2d2b8] text-[#8c7a6b] opacity-50 cursor-not-allowed'
                  }`}
                >
                  <span>شیعری دواتر</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    const text = `${activePoem.title}\n\n` + activePoem.verses.map((v) => `${v.firstLine}\n${v.secondLine || ''}`).join('\n\n') + `\n\n— دیوانی ئەحمەدی خانی`;
                    handleCopy(text);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#e2d2b8] hover:bg-[#d8c4a9] text-[#2c1b0e] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'کۆپی کرا' : 'کۆپیکردنی دەق'}</span>
                </button>

                {onOpenShareModal && (
                  <button
                    onClick={() => {
                      const text = `${activePoem.title}\n\n` + activePoem.verses.map((v) => `${v.firstLine}\n${v.secondLine || ''}`).join('\n\n') + `\n\n— دیوانی ئەحمەدی خانی`;
                      onOpenShareModal(activePoem.title, text);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#c59b27] hover:bg-[#d6aa32] text-[#2c1b0e] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>بارکردن / بڵاوکردنەوە</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
