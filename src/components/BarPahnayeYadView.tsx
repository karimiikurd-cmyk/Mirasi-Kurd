import React, { useState, useMemo } from 'react';
import {
  SheikhOthmanWork,
  BAR_PAHNAYE_YAD_WORKS,
  BAR_PAHNAYE_YAD_SECTIONS
} from '../data/sheikhOthman';
import { ParchmentCornerDecoration, KurdishStarMedallion, KurdishOrnamentalDivider } from './KurdishPattern';
import { Feather, Search, Copy, Check, Share2, BookOpen, X, ChevronRight, ChevronLeft, Sparkles, Scroll, Heart } from 'lucide-react';

interface BarPahnayeYadViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

export const BarPahnayeYadView: React.FC<BarPahnayeYadViewProps> = ({
  onOpenShareModal,
  onBackToProfile
}) => {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('هەموو زمانەکان');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWork, setActiveWork] = useState<SheikhOthmanWork | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const languages = ['هەموو زمانەکان', 'کوردی (هەورامی)', 'کوردی (سۆرانی)', 'فارسی', 'عەرەبی'];

  // Filter works based on section, language and search query
  const filteredWorks = useMemo(() => {
    return BAR_PAHNAYE_YAD_WORKS.filter((work) => {
      let matchesSection = true;
      if (selectedSection === 'poems') {
        matchesSection = work.section === 'شیعرەکانی حەزرەتی شێخ و مەولانا' || work.id.startsWith('sheikh-') || work.id.startsWith('mawlana-') || work.id.startsWith('pand-');
      } else if (selectedSection === 'marathi-kurdish') {
        matchesSection = work.section === 'مرثیە و شیعرە کوردییەکان' || work.id.startsWith('mar-ku-');
      } else if (selectedSection === 'marathi-fa-ar') {
        matchesSection = work.section === 'مرثیە و شیعرە فارسی و عەرەبییەکان' || work.id.startsWith('mar-fa-') || work.id.startsWith('mar-ar-');
      } else if (selectedSection === 'tafsir') {
        matchesSection = work.section === 'تەفسیری سوورەی مبارەکی تین' || work.id.startsWith('tafsir-');
      } else if (selectedSection === 'tariqa-history') {
        matchesSection = work.section === 'نامە و دەقە عیرفانییەکان' || work.id.startsWith('hist-') || work.id.startsWith('let-');
      }

      const matchesLanguage =
        selectedLanguage === 'هەموو زمانەکان' || work.language.includes(selectedLanguage);

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        work.title.toLowerCase().includes(q) ||
        work.author.toLowerCase().includes(q) ||
        work.incipit.toLowerCase().includes(q) ||
        work.fullText.toLowerCase().includes(q) ||
        (work.notes && work.notes.toLowerCase().includes(q)) ||
        (work.theme && work.theme.toLowerCase().includes(q));

      return matchesSection && matchesLanguage && matchesSearch;
    });
  }, [selectedSection, selectedLanguage, searchQuery]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentWorkIndex = activeWork
    ? filteredWorks.findIndex((w) => w.id === activeWork.id)
    : -1;
  const prevWork = currentWorkIndex > 0 ? filteredWorks[currentWorkIndex - 1] : null;
  const nextWork =
    currentWorkIndex >= 0 && currentWorkIndex < filteredWorks.length - 1
      ? filteredWorks[currentWorkIndex + 1]
      : null;

  return (
    <div className="space-y-6 dir-rtl font-serif animate-fade-in">
      {/* Header Banner - Bar Pahnaye Yad dedicated theme */}
      <div className="bg-[#f5efe4] border-2 border-[#8b5a2b] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        {onBackToProfile && (
          <button
            onClick={onBackToProfile}
            className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8b5a2b] text-white hover:bg-[#6e4620] text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>گەڕانەوە بۆ پرۆفایلی حەزرەتی شێخ عوسمان</span>
          </button>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#8b5a2b] text-white flex items-center justify-center font-bold shadow-md shrink-0 overflow-hidden border-2 border-[#c59b27]">
              <img
                src="/figures/sheikh-othman-sirajaddin.svg"
                alt="بر پهنه یاد - حەزرەتی شێخ عوسمان"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-bold text-[#8b5a2b] bg-[#8b5a2b]/10 px-2.5 py-0.5 rounded-full border border-[#8b5a2b]/20">
                  📜 یادنامەی «بر پهنه یاد» • ئەشعار و مرثیەکان
                </span>
                <span className="text-xs text-[#8b5a2b] font-sans">
                  {BAR_PAHNAYE_YAD_WORKS.length} قەسیدە، مرثیە و تەفسیری عیرفانی
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2e1d12]">
                📜 یادنامەی «بر پهنه یاد»
              </h1>
              <p className="text-xs text-[#5c4333] mt-1 max-w-2xl leading-relaxed">
                سەرجەم ئەشعارەکانی حەزرەتی شێخ عوسمان و مەولانا خالید، پەندنامەی کوردی، شیوەن و مرثیەی شاعیرانی ناوداری کورد و عەجەم و عەرەب، تەفسیری سوورەی تین و مێژووی تەریقەت.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center bg-[#faf8f2] p-3 rounded-2xl border border-[#d6c7b2] text-center shrink-0">
            <KurdishStarMedallion className="w-6 h-6 mb-1" color="#8b5a2b" />
            <span className="text-[11px] font-bold text-[#8b5a2b]">دیوان و یادنامە</span>
            <span className="text-[10px] text-[#6e584a]">بر پهنه یاد</span>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Section */}
      <div className="bg-white border border-[#d6c7b2] rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="گەڕان لە ناونیشانی شیعر، شاعیر، دەقی مرثیە، تەفسیر..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-9 pl-4 py-2 text-sm bg-[#faf8f2] border border-[#d6c7b2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8b5a2b] transition-all"
            />
            <Search className="w-4 h-4 text-[#8b5a2b] absolute right-3 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                پاککردنەوە
              </button>
            )}
          </div>

          {/* Language filter chips */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
            <span className="text-xs text-[#8b5a2b] font-bold ml-1">زمان:</span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedLanguage === lang
                    ? 'bg-[#8b5a2b] text-white font-bold'
                    : 'bg-[#faf8f2] text-[#4d382b] hover:bg-[#f0e6da] border border-[#e2d4c3]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Section Tabs for Bar Pahnaye Yad */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2 border-t border-[#f0e6da]">
          {BAR_PAHNAYE_YAD_SECTIONS.map((sec) => {
            const isSelected = selectedSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`p-3 rounded-xl text-right transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#8b5a2b] text-white border-[#8b5a2b] shadow-sm'
                    : 'bg-[#faf8f2] text-[#3d2a1d] hover:bg-[#f0e8dc] border-[#e8ded0]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold ${isSelected ? 'text-white' : 'text-[#2e1d12]'}`}>
                    {sec.title}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-sans font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#8b5a2b]/10 text-[#8b5a2b]'
                    }`}
                  >
                    {sec.count}
                  </span>
                </div>
                <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-white/80' : 'text-[#7d6555]'}`}>
                  {sec.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Works */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            onClick={() => setActiveWork(work)}
            className="bg-white rounded-2xl p-5 border border-[#d6c7b2] hover:border-[#8b5a2b] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1.5 h-full bg-[#8b5a2b] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold text-[#8b5a2b] bg-[#f5ede3] px-2 py-0.5 rounded-md">
                  {work.section}
                </span>
                <span className="text-[11px] text-[#8a7262] font-sans">{work.language}</span>
              </div>

              <h3 className="text-base font-bold text-[#2e1d12] group-hover:text-[#8b5a2b] transition-colors leading-snug mb-1">
                {work.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-[#6e584a] mb-3">
                <Feather className="w-3.5 h-3.5 text-[#8b5a2b]" />
                <span>{work.author}</span>
                {work.pages && (
                  <>
                    <span>•</span>
                    <span className="font-sans text-[11px] text-[#8a7262]">لاپەڕە: {work.pages}</span>
                  </>
                )}
              </div>

              <p className="text-xs text-[#4d382b] line-clamp-3 bg-[#faf8f2] p-2.5 rounded-xl border border-[#ede2d4] leading-relaxed font-sans">
                {work.incipit || work.fullText.slice(0, 160) + '...'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f5ede3] flex items-center justify-between text-xs text-[#8b5a2b] font-bold">
              <span className="flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                <BookOpen className="w-3.5 h-3.5" />
                خوێندنەوەی هۆنراوە و دەق
              </span>
              <ChevronLeft className="w-4 h-4 text-[#a38c7b] group-hover:text-[#8b5a2b] transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-16 bg-[#faf8f2] rounded-3xl border border-dashed border-[#d6c7b2]">
          <BookOpen className="w-10 h-10 text-[#a38c7b] mx-auto mb-2" />
          <p className="text-base font-bold text-[#3d2a1d]">هیچ شیعر یان دەقێک نەدۆزرایەوە</p>
          <p className="text-xs text-[#6e584a] mt-1">تکایە گەڕانەکەت بگۆڕە یان فلتەرەکان لابدە.</p>
        </div>
      )}

      {/* Modal / Detail View for Reading the Full Poem / Text */}
      {activeWork && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="bg-[#faf8f2] border-2 border-[#8b5a2b] rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
            <ParchmentCornerDecoration />

            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#d6c7b2] bg-[#f2e9dc] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveWork(null)}
                  className="p-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-[#d6c7b2] transition-colors cursor-pointer"
                  title="داخستن"
                >
                  <X className="w-5 h-5" />
                </button>
                <div>
                  <span className="text-[10px] font-bold text-[#8b5a2b] bg-[#8b5a2b]/10 px-2 py-0.5 rounded-full">
                    {activeWork.section} • {activeWork.language}
                  </span>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#2e1d12] leading-snug">
                    {activeWork.title}
                  </h2>
                </div>
              </div>

              {/* Font controls and share */}
              <div className="flex items-center gap-1.5">
                <div className="hidden sm:flex items-center bg-white border border-[#d6c7b2] rounded-xl p-0.5 text-xs font-sans">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-1 rounded-lg cursor-pointer ${fontSize === 'normal' ? 'bg-[#8b5a2b] text-white font-bold' : 'text-gray-600'}`}
                  >
                    ئاسایی
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-1 rounded-lg cursor-pointer ${fontSize === 'large' ? 'bg-[#8b5a2b] text-white font-bold' : 'text-gray-600'}`}
                  >
                    گەورە
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`px-2 py-1 rounded-lg cursor-pointer ${fontSize === 'xlarge' ? 'bg-[#8b5a2b] text-white font-bold' : 'text-gray-600'}`}
                  >
                    زۆر گەورە
                  </button>
                </div>

                <button
                  onClick={() => handleCopy(`${activeWork.title}\n${activeWork.author}\n\n${activeWork.fullText}`)}
                  className="p-2 rounded-xl bg-white hover:bg-[#f2e9dc] border border-[#d6c7b2] text-[#8b5a2b] transition-colors cursor-pointer"
                  title="کۆپیکردنی دەق"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>

                {onOpenShareModal && (
                  <button
                    onClick={() =>
                      onOpenShareModal(
                        activeWork.title,
                        `${activeWork.title}\nنووسەر/شاعیر: ${activeWork.author}\nپەڕتووکی: بر پهنه یاد\n\n${activeWork.fullText.slice(0, 300)}...`
                      )
                    }
                    className="p-2 rounded-xl bg-[#8b5a2b] hover:bg-[#6e4620] text-white transition-colors cursor-pointer"
                    title="هاوبەشکردن"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 leading-relaxed font-serif">
              {/* Meta info card */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#d6c7b2] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <Feather className="w-4 h-4 text-[#8b5a2b]" />
                  <span className="font-bold text-[#2e1d12]">{activeWork.author}</span>
                </div>
                {activeWork.pages && (
                  <div className="text-[#6e584a] font-sans">
                    📚 لاپەڕەکانی سەرچاوە: <span className="font-bold text-[#8b5a2b]">{activeWork.pages}</span>
                  </div>
                )}
                <div className="text-[#6e584a] text-[11px]">
                  سەرچاوە: <span className="font-bold text-[#8b5a2b]">{activeWork.sourceFile}</span>
                </div>
              </div>

              {activeWork.notes && (
                <div className="bg-[#f7efe6] border border-[#e2cca8] rounded-2xl p-3 text-xs text-[#6e4620] leading-relaxed">
                  <span className="font-bold ml-1">تێبینی سەرچاوە:</span>
                  {activeWork.notes}
                </div>
              )}

              {/* The Full Text Display */}
              <div
                className={`bg-white rounded-2xl p-5 sm:p-7 border border-[#d6c7b2] whitespace-pre-wrap leading-loose text-[#2e1d12] shadow-inner selection:bg-[#c59b27]/30 ${
                  fontSize === 'normal'
                    ? 'text-sm sm:text-base'
                    : fontSize === 'large'
                    ? 'text-base sm:text-lg'
                    : 'text-lg sm:text-xl'
                }`}
                style={{ textAlign: 'right' }}
              >
                {activeWork.fullText}
              </div>

              <KurdishOrnamentalDivider />
            </div>

            {/* Modal Footer / Navigation between texts */}
            <div className="p-3 sm:p-4 border-t border-[#d6c7b2] bg-[#f2e9dc] flex items-center justify-between shrink-0">
              <button
                disabled={!prevWork}
                onClick={() => prevWork && setActiveWork(prevWork)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  prevWork
                    ? 'bg-white text-[#8b5a2b] border border-[#d6c7b2] hover:bg-[#f5ede3]'
                    : 'opacity-40 cursor-not-allowed bg-transparent text-gray-400'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
                <span>دەقی پێشوو</span>
              </button>

              <span className="text-xs text-[#6e584a] font-sans">
                {currentWorkIndex + 1} لە {filteredWorks.length}
              </span>

              <button
                disabled={!nextWork}
                onClick={() => nextWork && setActiveWork(nextWork)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  nextWork
                    ? 'bg-white text-[#8b5a2b] border border-[#d6c7b2] hover:bg-[#f5ede3]'
                    : 'opacity-40 cursor-not-allowed bg-transparent text-gray-400'
                }`}
              >
                <span>دەقی دواتر</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
