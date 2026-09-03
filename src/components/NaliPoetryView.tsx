import React, { useState, useMemo } from 'react';
import { NaliPoem } from '../types';
import { ALL_NALI_POEMS } from '../data/nali';
import { ParchmentCornerDecoration, KurdishStarMedallion, KurdishOrnamentalDivider } from './KurdishPattern';
import { Feather, Search, Copy, Check, Share2, BookOpen, X, ChevronRight, ChevronLeft, Filter, Sparkles } from 'lucide-react';

interface NaliPoetryViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

const KURDISH_ALPHABET = [
  'هەموویان',
  'ا',
  'ب',
  'پ',
  'ت',
  'ج',
  'چ',
  'ح',
  'خ',
  'د',
  'ر',
  'ڕ',
  'ز',
  'ژ',
  'س',
  'ش',
  'ع',
  'ف',
  'ق',
  'ک',
  'گ',
  'ل',
  'ڵ',
  'م',
  'ن',
  'و',
  'ه',
  'ی'
];

function isLetterMatch(poemLetter: string, selectedTab: string): boolean {
  if (selectedTab === 'هەموویان') return true;

  const pLetter = poemLetter.trim();

  if (selectedTab === 'ا') {
    return pLetter === 'ئەلِف' || pLetter === 'ا' || pLetter === 'ئ' || pLetter.startsWith('ا') || pLetter.startsWith('ئ');
  }
  if (selectedTab === 'و') return pLetter === 'و' || pLetter === 'ۆ';
  if (selectedTab === 'ه') return pLetter === 'ه' || pLetter === 'ە' || pLetter === 'هە';
  if (selectedTab === 'ی') return pLetter === 'ی' || pLetter === 'ێ';

  return pLetter === selectedTab;
}

export const NaliPoetryView: React.FC<NaliPoetryViewProps> = ({ onOpenShareModal, onBackToProfile }) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('هەموویان');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePoem, setActivePoem] = useState<NaliPoem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Filter poems based on letter and search query
  const filteredPoems = useMemo(() => {
    return ALL_NALI_POEMS.filter((poem) => {
      const matchesLetter = isLetterMatch(poem.letter, selectedLetter);
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        poem.title.toLowerCase().includes(q) ||
        poem.letter.includes(q) ||
        poem.poemNumber.toString().includes(q) ||
        poem.fullText.toLowerCase().includes(q) ||
        poem.sourceFile.toLowerCase().includes(q);

      return matchesLetter && matchesSearch;
    });
  }, [selectedLetter, searchQuery]);

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
            <span>گەڕانەوە بۆ پرۆفایلی نالی</span>
          </button>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#801b22] text-white flex items-center justify-center font-bold shadow-md shrink-0">
              <Feather className="w-7 h-7 text-[#f5efe0]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#801b22] bg-[#801b22]/10 px-2.5 py-0.5 rounded-full border border-[#801b22]/20">
                  دیوانی نالی (١٧٩٧ - ١٨٥٥)
                </span>
                <span className="text-xs text-[#671217] font-sans">
                  {ALL_NALI_POEMS.length} غەزەل و پارچە شیعر
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2c1b0e]">
                «دیوانی نالی - بەپێی پیتی ئەلفوبێی سورانی»
              </h1>
              <p className="text-xs text-[#5c4433] mt-1 max-w-2xl leading-relaxed">
                سەرجەم غەزەلیات و شاعیرییەتی نالی بە ڕێکخستنی ئەلفوبێیی پیتی کۆتایی و دەستپێکی هۆنراوەکان، دەرهێنراو و دەستنیشانکراو لە سەرچاوە ڕەسەنەکانی دیوانی نالی.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center bg-[#faf6ed] p-3 rounded-2xl border border-[#d8c4a9] text-center shrink-0">
            <KurdishStarMedallion className="w-6 h-6 mb-1" color="#801b22" />
            <span className="text-[11px] font-bold text-[#801b22]">پۆلێنکردنی ٢٨ پیت</span>
            <span className="text-[10px] text-[#7a6452]">سورانی ڕەسەن</span>
          </div>
        </div>
      </div>

      {/* Search and Alphabet Filter Section */}
      <div className="bg-[#faf6ed] border-2 border-[#d8c4a9] rounded-2xl p-4 shadow-sm space-y-4">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بگەڕێ لە ناو دیوانی نالی (وشە، دێڕ، ژمارەی شیعر، پیت)..."
            className="w-full bg-white border-2 border-[#d8c4a9] focus:border-[#801b22] rounded-xl px-4 py-2.5 pl-10 text-sm font-serif text-[#2c1b0e] focus:outline-none shadow-inner transition-colors"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-[#801b22] hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#801b22]" />
          )}
        </div>

        {/* Alphabet filter chips */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#801b22]">
            <Filter className="w-3.5 h-3.5" />
            <span>فلتەرکردن بەپێی پیتی الفوبێی سورانی:</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {KURDISH_ALPHABET.map((letter) => {
              const isActive = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-[#801b22] text-white shadow-xs border border-[#801b22] scale-105'
                      : 'bg-[#f0e6d2] text-[#3c2817] hover:bg-[#e2d2b8] border border-[#d8c4a9]'
                  }`}
                >
                  {letter === 'هەموویان' ? 'هەموو پیتەکان' : `پیتی (${letter})`}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Poems Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-[#801b22] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#c59b27]" />
            <span>
              شیعرە دۆزراوەکان ({filteredPoems.length} غەزەل)
            </span>
          </h2>
          {selectedLetter !== 'هەموویان' && (
            <span className="text-xs bg-[#801b22]/10 text-[#801b22] font-bold px-2.5 py-0.5 rounded-full border border-[#801b22]/20">
              پیتی ({selectedLetter})
            </span>
          )}
        </div>

        {filteredPoems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPoems.map((poem) => (
              <div
                key={poem.id}
                onClick={() => setActivePoem(poem)}
                className="group bg-[#faf6ed] hover:bg-[#f5efe0] border-2 border-[#d8c4a9] hover:border-[#801b22] rounded-2xl p-4 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between relative overflow-hidden"
              >
                <ParchmentCornerDecoration />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#801b22] text-white font-sans">
                      {poem.title}
                    </span>
                    <span className="text-[10px] text-[#7a6452] bg-[#e2d2b8] px-2 py-0.5 rounded-md font-sans">
                      {poem.pages}
                    </span>
                  </div>

                  <div className="my-3 p-3 bg-[#f5efe0] border border-[#e2d2b8] rounded-xl font-serif text-sm leading-relaxed text-[#2c1b0e] text-center whitespace-pre-line group-hover:border-[#c59b27] transition-colors">
                    {poem.excerpt}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#671217] pt-2 border-t border-[#e2d2b8]/60 font-sans">
                  <span>سەرچاوە: {poem.sourceFile}</span>
                  <span className="font-serif font-bold text-[#801b22] group-hover:underline flex items-center gap-1">
                    خوێندنەوەی دەقی تەواو <ChevronLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center text-[#7a6452] space-y-2">
            <Sparkles className="w-8 h-8 text-[#c59b27] mx-auto" />
            <p className="font-serif text-sm">
              هیچ شعرێک بەم زانیارییە یان پیتە لە دیوانی نالیدا نەدۆزرایەوە.
            </p>
            <button
              onClick={() => {
                setSelectedLetter('هەموویان');
                setSearchQuery('');
              }}
              className="text-xs text-[#801b22] font-bold underline hover:text-[#671217]"
            >
              سڕینەوەی فلتەرەکان
            </button>
          </div>
        )}
      </div>

      {/* Poem Detail Modal View */}
      {activePoem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fade-in font-serif">
          <div className="bg-[#fcfaf7] dark:bg-[#1a1612] border-2 border-[#c59b27] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col justify-between">
            {/* Modal Header */}
            <div className="p-4 border-b border-[#e2d5c3] dark:border-[#382d24] flex items-center justify-between bg-[#f5efe0] dark:bg-[#241e19] sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <Feather className="w-5 h-5 text-[#801b22]" />
                <span className="font-extrabold text-sm text-[#2c1b0e] dark:text-[#ebe5df]">
                  دیوانی نالی - {activePoem.title}
                </span>
              </div>
              <button
                onClick={() => setActivePoem(null)}
                className="w-8 h-8 rounded-full bg-[#eae1d0] dark:bg-[#382d24] text-[#2c1b0e] dark:text-[#ebe5df] flex items-center justify-center hover:bg-[#801b22] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-7 space-y-5">
              {/* Poem Header Details */}
              <div className="text-center space-y-2 border-b border-[#e2d2b8] pb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#801b22] text-white inline-block shadow-2xs font-sans">
                  پیتی ({activePoem.letter}) | ژمارەی شیعر: {activePoem.poemNumber}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2c1b0e] dark:text-[#ebe5df]">
                  «{activePoem.title}»
                </h2>
                <p className="text-xs text-[#671217] dark:text-[#c59b27] font-sans">
                  شاعیر: نالی (حەکیم مەلا ئەحمەدی خاوێ) | {activePoem.sourceFile} ({activePoem.pages})
                </p>
              </div>

              {/* Calligraphy Verse Display Box */}
              <div className="bg-[#f5efe0] dark:bg-[#241e19] border-2 border-[#c59b27]/60 p-6 rounded-2xl relative shadow-inner text-center font-serif leading-loose text-base sm:text-lg text-[#2c1b0e] dark:text-[#ebe5df] whitespace-pre-line tracking-wide">
                <ParchmentCornerDecoration />
                <KurdishStarMedallion className="w-6 h-6 mx-auto mb-4" color="#801b22" />
                {activePoem.fullText}
                <KurdishStarMedallion className="w-6 h-6 mx-auto mt-4" color="#801b22" />
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#e2d2b8] dark:border-[#382d24]">
                <button
                  onClick={() => handleCopy(activePoem.fullText)}
                  className="px-3.5 py-2 rounded-xl bg-[#f0e6d2] hover:bg-[#801b22] hover:text-white text-[#801b22] transition-colors flex items-center gap-1.5 text-xs font-serif font-bold"
                >
                  {copied ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'کۆپی کرا!' : 'کۆپیکردنی دەقی شیعرەکە'}</span>
                </button>

                {onOpenShareModal && (
                  <button
                    onClick={() =>
                      onOpenShareModal(
                        activePoem.title,
                        `«${activePoem.title}» - دیوانی نالی\n\n${activePoem.fullText}`
                      )
                    }
                    className="px-3.5 py-2 bg-[#1b4332] hover:bg-[#143225] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Share2 className="w-4 h-4" /> هاوبەشکردنی شیعر
                  </button>
                )}
              </div>
            </div>

            {/* Modal Footer Navigation */}
            <div className="p-4 border-t border-[#e2d5c3] dark:border-[#382d24] flex items-center justify-between bg-[#f5efe0] dark:bg-[#241e19] rounded-b-3xl">
              <button
                disabled={!prevPoem}
                onClick={() => prevPoem && setActivePoem(prevPoem)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 ${
                  prevPoem
                    ? 'bg-[#801b22] text-white hover:bg-[#671217]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-4 h-4" /> شیعری پێشوو
              </button>

              <span className="text-xs font-sans text-[#7a6452]">
                {currentPoemIndex + 1} لە {filteredPoems.length}
              </span>

              <button
                disabled={!nextPoem}
                onClick={() => nextPoem && setActivePoem(nextPoem)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 ${
                  nextPoem
                    ? 'bg-[#801b22] text-white hover:bg-[#671217]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                شیعری داهاتوو <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <KurdishOrnamentalDivider />
    </div>
  );
};
