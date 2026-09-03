import React, { useState, useMemo } from 'react';
import {
  SheikhOthmanWork,
  ALL_SHEIKH_OTHMAN_WORKS,
  SHEIKH_OTHMAN_SECTIONS
} from '../data/sheikhOthman';
import { ParchmentCornerDecoration, KurdishStarMedallion, KurdishOrnamentalDivider } from './KurdishPattern';
import { Feather, Search, Copy, Check, Share2, BookOpen, X, ChevronRight, ChevronLeft, Sparkles, Scroll, Heart } from 'lucide-react';

interface SheikhOthmanViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

export const SheikhOthmanView: React.FC<SheikhOthmanViewProps> = ({
  onOpenShareModal,
  onBackToProfile
}) => {
  const [selectedSection, setSelectedSection] = useState<string>('هەموویان');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('هەموو زمانەکان');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWork, setActiveWork] = useState<SheikhOthmanWork | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const languages = ['هەموو زمانەکان', 'کوردی (هەورامی)', 'کوردی (سۆرانی)', 'فارسی', 'عەرەبی'];

  // Filter works based on section, language and search query
  const filteredWorks = useMemo(() => {
    return ALL_SHEIKH_OTHMAN_WORKS.filter((work) => {
      const matchesSection =
        selectedSection === 'هەموویان' || work.section === selectedSection;

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

  // Navigate between works in detail view
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
      {/* Header Banner */}
      <div className="bg-[#f2efe6] border-2 border-[#1e4d2b] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        {onBackToProfile && (
          <button
            onClick={onBackToProfile}
            className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1e4d2b] text-white hover:bg-[#163a20] text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>گەڕانەوە بۆ پرۆفایلی حەزرەتی شێخ عوسمان</span>
          </button>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1e4d2b] text-white flex items-center justify-center font-bold shadow-md shrink-0 overflow-hidden border-2 border-[#c59b27]">
              <img
                src="/figures/sheikh-othman-sirajaddin.svg"
                alt="شێخ عوسمان سراج الدین نەقشبەندی"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-bold text-[#1e4d2b] bg-[#1e4d2b]/10 px-2.5 py-0.5 rounded-full border border-[#1e4d2b]/20">
                  کتێبی «سراج القلوب» و یادنامەی «بر پهنه یاد» • حەزرەتی شێخ عوسمان (قدس سره)
                </span>
                <span className="text-xs text-[#163a20] font-sans">
                  {ALL_SHEIKH_OTHMAN_WORKS.length} بەش، دەق و شیعری بەڵگەنامەیی
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a2e1d]">
                📚 کتێبی سراج القلوب، رسالەکان و ئەشعاری شێخ عوسمان سراج الدین
              </h1>
              <p className="text-xs text-[#445b48] mt-1 max-w-2xl leading-relaxed">
                دەقی تەواوی پەڕتووکی «سراج القلوب»، چوار ڕیسالەی عیرفانی (شُهُبٌ ثاقِبَة، نەسیحەت، ڕابیتە، وەڵامی شێخ نزیه)، تەفسیری سوورەی تین، نامە مێژووییەکان و شاکارە ئەشعارەکانی حەزرەتی شێخ لە «بر پهنه یاد».
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center bg-[#faf8f2] p-3 rounded-2xl border border-[#c9d6cb] text-center shrink-0">
            <KurdishStarMedallion className="w-6 h-6 mb-1" color="#1e4d2b" />
            <span className="text-[11px] font-bold text-[#1e4d2b]">دەقی ڕەسەن و کامل</span>
            <span className="text-[10px] text-[#556e58]">سراج القلوب و بر پهنه یاد</span>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Section */}
      <div className="bg-white border border-[#c9d6cb] rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="گەڕان لە ناونیشان، دەقی شیعر، شاعیر، تەفسیر..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-9 pl-4 py-2 text-sm bg-[#faf8f2] border border-[#c9d6cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4d2b] transition-all"
            />
            <Search className="w-4 h-4 text-[#556e58] absolute right-3 top-3" />
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
            <span className="text-xs text-[#556e58] font-bold ml-1">زمان:</span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedLanguage === lang
                    ? 'bg-[#1e4d2b] text-white font-bold'
                    : 'bg-[#faf8f2] text-[#445b48] hover:bg-[#e8f0e9] border border-[#d8e2d9]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-[#edf2ee]">
          <button
            onClick={() => setSelectedSection('هەموویان')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              selectedSection === 'هەموویان'
                ? 'bg-[#1e4d2b] text-white shadow-xs'
                : 'bg-[#faf8f2] text-[#445b48] hover:bg-[#e8f0e9] border border-[#d8e2d9]'
            }`}
          >
            <span>هەموو بەشەکان</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedSection === 'هەموویان'
                  ? 'bg-white/20 text-white'
                  : 'bg-black/5 text-[#556e58]'
              }`}
            >
              {ALL_SHEIKH_OTHMAN_WORKS.length}
            </span>
          </button>

          {SHEIKH_OTHMAN_SECTIONS.filter((s) => s.id !== 'all').map((sec) => {
            const isSelected = selectedSection === sec.title;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.title)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1e4d2b] text-white shadow-xs'
                    : 'bg-[#faf8f2] text-[#445b48] hover:bg-[#e8f0e9] border border-[#d8e2d9]'
                }`}
              >
                <span>{sec.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#556e58]'
                  }`}
                >
                  {sec.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWorks.length === 0 ? (
          <div className="col-span-full py-12 text-center bg-white border border-[#c9d6cb] rounded-2xl p-6">
            <BookOpen className="w-12 h-12 text-[#8b9e8f] mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-bold text-[#1a2e1d]">هیچ دەقێک نەدۆزرایەوە</h3>
            <p className="text-xs text-[#556e58] mt-1">
              تکایە وشەی گەڕانەکەت بگۆڕە یان فلتەرەکان پاک بکەرەوە.
            </p>
          </div>
        ) : (
          filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setActiveWork(work)}
              className="bg-white border border-[#c9d6cb] hover:border-[#1e4d2b] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-[#1e4d2b] opacity-0 group-hover:opacity-100 transition-all" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-[#1e4d2b] bg-[#e8f0e9] px-2 py-0.5 rounded-md">
                    {work.section}
                  </span>
                  <span className="text-[10px] text-[#556e58] bg-[#faf8f2] px-2 py-0.5 rounded-md border border-[#d8e2d9]">
                    {work.language}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1a2e1d] group-hover:text-[#1e4d2b] transition-colors leading-snug">
                  {work.title}
                </h3>

                <p className="text-xs text-[#556e58] mt-1 mb-2 font-sans flex items-center gap-1">
                  <Feather className="w-3.5 h-3.5 text-[#1e4d2b]" />
                  <span>دانەر / شاعیر: {work.author}</span>
                </p>

                <div className="bg-[#faf8f2] p-3 rounded-xl border border-[#e5ede6] mt-2 mb-3">
                  <p className="text-xs text-[#2d4731] line-clamp-3 leading-relaxed font-serif">
                    «{work.incipit}»
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#edf2ee] text-xs text-[#556e58]">
                <span className="text-[11px] text-[#718874]">
                  {work.year ? work.year : 'دەقی پەڕتووکی بر پهنه یاد'}
                </span>
                <span className="font-bold text-[#1e4d2b] group-hover:underline flex items-center gap-1">
                  <span>خوێندنەوەی تەواو</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reading Modal */}
      {activeWork && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#fdfbf7] border-2 border-[#1e4d2b] rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
            <ParchmentCornerDecoration />

            {/* Modal Header */}
            <div className="p-5 border-b border-[#c9d6cb] bg-[#f2efe6] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1e4d2b] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                  <Scroll className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-bold text-[#1e4d2b] bg-[#e8f0e9] px-2 py-0.5 rounded-md">
                      {activeWork.section}
                    </span>
                    <span className="text-[10px] text-[#556e58] bg-white px-2 py-0.5 rounded-md border border-[#c9d6cb]">
                      {activeWork.language}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#1a2e1d]">
                    {activeWork.title}
                  </h2>
                  <p className="text-xs text-[#445b48]">
                    شاعیر / دانەر: <span className="font-bold">{activeWork.author}</span>
                    {activeWork.year ? ` • ${activeWork.year}` : ''}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() =>
                    onOpenShareModal?.(
                      activeWork.title,
                      `${activeWork.title}\nشاعیر: ${activeWork.author}\n\n${activeWork.fullText}\n\n(سەرچاوە: کتێبی بر پهنه یاد)`
                    )
                  }
                  className="p-2 text-[#445b48] hover:text-[#1e4d2b] hover:bg-[#e8f0e9] rounded-xl transition-all cursor-pointer"
                  title="هاوبەشکردن"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleCopy(activeWork.fullText)}
                  className="p-2 text-[#445b48] hover:text-[#1e4d2b] hover:bg-[#e8f0e9] rounded-xl transition-all cursor-pointer"
                  title="کۆپیکردنی دەق"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setActiveWork(null)}
                  className="p-2 text-gray-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                  title="داخستن"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Font scaling controls */}
            <div className="px-6 py-2 bg-[#faf8f2] border-b border-[#e5ede6] flex items-center justify-between text-xs text-[#556e58]">
              <span className="font-sans">قەبارەی دەق:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-0.5 rounded-md ${
                    fontSize === 'normal'
                      ? 'bg-[#1e4d2b] text-white font-bold'
                      : 'bg-white border border-[#c9d6cb] hover:bg-[#e8f0e9]'
                  }`}
                >
                  ئاسایی
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-0.5 rounded-md ${
                    fontSize === 'large'
                      ? 'bg-[#1e4d2b] text-white font-bold'
                      : 'bg-white border border-[#c9d6cb] hover:bg-[#e8f0e9]'
                  }`}
                >
                  گەورە
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-0.5 rounded-md ${
                    fontSize === 'xlarge'
                      ? 'bg-[#1e4d2b] text-white font-bold'
                      : 'bg-white border border-[#c9d6cb] hover:bg-[#e8f0e9]'
                  }`}
                >
                  زۆر گەورە
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {activeWork.theme && (
                <div className="bg-[#e8f0e9] border border-[#c9d6cb] rounded-xl p-3 text-xs text-[#1e4d2b]">
                  <span className="font-bold">بابەت و مانا: </span>
                  {activeWork.theme}
                </div>
              )}

              <div
                className={`whitespace-pre-line leading-loose text-[#1a2e1d] font-serif bg-white p-6 rounded-2xl border border-[#e5ede6] shadow-2xs ${
                  fontSize === 'normal'
                    ? 'text-base'
                    : fontSize === 'large'
                    ? 'text-lg'
                    : 'text-xl'
                }`}
              >
                {activeWork.fullText}
              </div>

              {activeWork.notes && (
                <div className="bg-[#f5f1e6] border border-[#dcd3be] rounded-xl p-3 text-xs text-[#615336]">
                  <span className="font-bold">تێبینی و سەرچاوەی مێژوویی: </span>
                  {activeWork.notes}
                </div>
              )}
            </div>

            {/* Modal Footer with Navigation */}
            <div className="p-4 border-t border-[#c9d6cb] bg-[#f2efe6] flex items-center justify-between gap-3">
              <button
                disabled={!prevWork}
                onClick={() => prevWork && setActiveWork(prevWork)}
                className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  prevWork
                    ? 'bg-white border border-[#c9d6cb] text-[#1e4d2b] hover:bg-[#e8f0e9]'
                    : 'opacity-40 cursor-not-allowed bg-transparent text-gray-400'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
                <span>دەقی پێشوو</span>
              </button>

              <span className="text-xs text-[#556e58] font-sans">
                {currentWorkIndex + 1} لە {filteredWorks.length}
              </span>

              <button
                disabled={!nextWork}
                onClick={() => nextWork && setActiveWork(nextWork)}
                className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  nextWork
                    ? 'bg-white border border-[#c9d6cb] text-[#1e4d2b] hover:bg-[#e8f0e9]'
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

      <KurdishOrnamentalDivider />
    </div>
  );
};
