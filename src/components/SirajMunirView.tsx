import React, { useState, useMemo } from 'react';
import {
  SheikhOthmanWork,
  SIRAJ_MUNIR_WORKS,
  SIRAJ_MUNIR_SECTIONS
} from '../data/sheikhOthman';
import { ParchmentCornerDecoration, KurdishStarMedallion, KurdishOrnamentalDivider } from './KurdishPattern';
import { Sparkles, Search, Copy, Check, Share2, BookOpen, X, ChevronRight, ChevronLeft, Scroll, Compass, ShieldCheck } from 'lucide-react';

interface SirajMunirViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

export const SirajMunirView: React.FC<SirajMunirViewProps> = ({
  onOpenShareModal,
  onBackToProfile
}) => {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWork, setActiveWork] = useState<SheikhOthmanWork | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Filter works based on section and search query
  const filteredWorks = useMemo(() => {
    return SIRAJ_MUNIR_WORKS.filter((work) => {
      let matchesSection = true;
      if (selectedSection === 'intro-and-allegiance') {
        matchesSection = work.id === 'sm-intro-dibache' || work.id === 'sm-katib-journey-full';
      } else if (selectedSection === 'karamat-hawraman') {
        matchesSection = work.id === 'sm-karamat-01-07' || work.id === 'sm-karamat-08-15';
      } else if (selectedSection === 'karamat-spiritual') {
        matchesSection = work.id === 'sm-karamat-16-25';
      } else if (selectedSection === 'karamat-disciples') {
        matchesSection = work.id === 'sm-karamat-26-35';
      } else if (selectedSection === 'karamat-international') {
        matchesSection = work.id === 'sm-karamat-36-45' || work.id === 'sm-karamat-46-55';
      } else if (selectedSection === 'tasawwuf-defense') {
        matchesSection = work.id === 'sm-tasawwuf-defense';
      }

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        work.title.toLowerCase().includes(q) ||
        work.author.toLowerCase().includes(q) ||
        work.incipit.toLowerCase().includes(q) ||
        work.fullText.toLowerCase().includes(q) ||
        (work.notes && work.notes.toLowerCase().includes(q)) ||
        (work.theme && work.theme.toLowerCase().includes(q)) ||
        (work.pages && work.pages.toLowerCase().includes(q));

      return matchesSection && matchesSearch;
    });
  }, [selectedSection, searchQuery]);

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
      {/* Header Banner - Siraj al-Munir dedicated theme */}
      <div className="bg-[#f2efe9] border-2 border-[#1c2d4a] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        {onBackToProfile && (
          <button
            onClick={onBackToProfile}
            className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1c2d4a] text-white hover:bg-[#131f33] text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>گەڕانەوە بۆ پرۆفایلی حەزرەتی شێخ عوسمان</span>
          </button>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1c2d4a] text-white flex items-center justify-center font-bold shadow-md shrink-0 overflow-hidden border-2 border-[#c59b27]">
              <img
                src="/figures/sheikh-othman-sirajaddin.svg"
                alt="شێخ عوسمان"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-2xl">✨</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#1c2d4a] text-white">
                  پەڕتووکی سێیەم
                </span>
                <span className="text-xs text-[#801b22] font-bold">
                  تەواوی ٥٥ کەراماتەکانی حەزرەتی پیر
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2c1b0e] leading-tight">
                پەڕتووکی «سِراجِ مُنير در کَراماتِ حضرتِ پیر»
              </h1>
              <p className="text-xs sm:text-sm text-[#5c4433] mt-1 max-w-2xl leading-relaxed">
                بەرهەمی زانستیی مامۆستا مەلا عەبدوڵڵا فەنایی • وەرگێڕانی کامل کاملی • بەسەرهاتی تەمەسسوکی کاتب، بینینی صوڕەتی میسالی، کەراماتی نێودەوڵەتی، دەربەندیخان، کەشتیی بەڕازیل و بەڵگەی شەرعی.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
            <div className="px-3.5 py-2 rounded-xl bg-[#1c2d4a]/10 border border-[#1c2d4a]/30 text-center">
              <span className="block text-xs font-bold text-[#1c2d4a]">ژمارەی بەشەکان</span>
              <span className="text-lg font-extrabold text-[#1c2d4a]">
                {SIRAJ_MUNIR_WORKS.length} بەشی گشتگیر
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SIRAJ_MUNIR_SECTIONS.map((sec) => {
          const isActive = selectedSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-2xs ${
                isActive
                  ? 'bg-[#1c2d4a] text-white border-2 border-[#c59b27] shadow-sm'
                  : 'bg-[#f4efe6] text-[#3c2817] hover:bg-[#e9e0d0] border border-[#d8c4a9]'
              }`}
            >
              <span>{sec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Search Input Filter */}
      <div className="bg-[#faf6ed] border-2 border-[#d8c4a9] rounded-2xl p-3 shadow-2xs">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="گەڕان لە نێو ٥٥ کەراماتەکان، ناوەکان (دەربەندیخان، بەڕازیل، کۆساڵان، ئەمیر نیزام، فەنایی...)..."
            className="w-full bg-white border border-[#d8c4a9] focus:border-[#1c2d4a] rounded-xl px-4 py-2.5 pl-10 text-xs sm:text-sm font-serif text-[#2c1b0e] focus:outline-none"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-[#801b22] hover:bg-black/5 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7a6452]" />
          )}
        </div>
      </div>

      {/* Results Count Strip */}
      <div className="flex items-center justify-between text-xs text-[#7a6452] px-1 font-medium">
        <span>
          پیشاندانی {filteredWorks.length} بابەت لە سەرجەم {SIRAJ_MUNIR_WORKS.length} بەشی سراج منیر
        </span>
        {searchQuery && (
          <span className="text-[#801b22] font-bold">
            فلتەر کراوە بەپێی: «{searchQuery}»
          </span>
        )}
      </div>

      {/* Works Grid Cards */}
      {filteredWorks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setActiveWork(work)}
              className="group bg-[#fbf8f2] hover:bg-white border-2 border-[#d8c4a9] hover:border-[#1c2d4a] rounded-2xl p-5 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 border-b border-[#ebdcc9] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1c2d4a] text-white flex items-center justify-center text-xs font-bold">
                      {work.number || '★'}
                    </span>
                    <span className="text-[11px] font-bold text-[#1c2d4a] bg-[#1c2d4a]/10 px-2 py-0.5 rounded-md">
                      {work.theme ? work.theme.slice(0, 35) + '...' : work.section}
                    </span>
                  </div>
                  {work.pages && (
                    <span className="text-[11px] text-[#801b22] font-medium bg-[#801b22]/10 px-2 py-0.5 rounded-md">
                      لاپەڕە {work.pages}
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-base text-[#2c1b0e] group-hover:text-[#1c2d4a] transition-colors line-clamp-2 leading-snug">
                  «{work.title}»
                </h3>

                <p className="text-xs text-[#5c4433] leading-relaxed line-clamp-3 font-serif bg-[#f5efe0]/60 p-2.5 rounded-xl border border-[#e8dccb]">
                  {work.incipit}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#7a6452] pt-1">
                  <span className="font-medium text-[#1c2d4a]">✍️ {work.author}</span>
                  <span>🌐 {work.language}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#ebdcc9] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1c2d4a] group-hover:translate-x-[-4px] transition-transform inline-flex items-center gap-1">
                  خوێندنەوەی تەواوی دەق ←
                </span>
                <Sparkles className="w-4 h-4 text-[#c59b27] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-12 text-center text-[#7a6452]">
          <p className="font-serif text-sm">هیچ بەشێک بەم ناونیشانە نەدۆزرایەوە.</p>
        </div>
      )}

      {/* Reading Modal for Active Work */}
      {activeWork && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          onClick={() => setActiveWork(null)}
        >
          <div
            className="bg-[#faf6ed] border-2 border-[#1c2d4a] rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <ParchmentCornerDecoration />

            {/* Modal Header */}
            <div className="bg-gradient-to-l from-[#1c2d4a] to-[#121e33] text-white p-5 border-b-2 border-[#c59b27] shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#c59b27] text-[#1c2d4a]">
                      {activeWork.theme || activeWork.section}
                    </span>
                    {activeWork.pages && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/15 text-[#f5efe0]">
                        لاپەڕە {activeWork.pages}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/10 text-[#eedecb]">
                      کتێبی سراج منیر (کتێبی سێیەم)
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-[#f5efe0] leading-snug">
                    {activeWork.title}
                  </h2>
                  <p className="text-xs text-[#d8e0ec] font-serif">
                    نووسەر/ڕاگەیەنەر: {activeWork.author} • زمان: {activeWork.language}
                  </p>
                </div>

                <button
                  onClick={() => setActiveWork(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Controls Bar: Font Size & Actions */}
            <div className="bg-[#f0e8d8] border-b border-[#d8c4a9] px-5 py-2.5 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#3c2817]">
                <span>قەبارەی دەق:</span>
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    fontSize === 'normal' ? 'bg-[#1c2d4a] text-white' : 'bg-white/80 hover:bg-white'
                  }`}
                >
                  ئاسایی
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    fontSize === 'large' ? 'bg-[#1c2d4a] text-white' : 'bg-white/80 hover:bg-white'
                  }`}
                >
                  گەورە
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    fontSize === 'xlarge' ? 'bg-[#1c2d4a] text-white' : 'bg-white/80 hover:bg-white'
                  }`}
                >
                  زۆر گەورە
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(activeWork.fullText)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#faf6ed] border border-[#d8c4a9] text-xs font-bold text-[#1c2d4a] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>کۆپی کرا!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>کۆپیکردنی دەق</span>
                    </>
                  )}
                </button>

                {onOpenShareModal && (
                  <button
                    onClick={() =>
                      onOpenShareModal(
                        activeWork.title,
                        `${activeWork.title}\n\n${activeWork.fullText.slice(0, 300)}...`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1c2d4a] hover:bg-[#121e33] text-white text-xs font-bold transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>هاوبەشکردن</span>
                  </button>
                )}
              </div>
            </div>

            {/* Modal Body: Scrollable Text */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {activeWork.notes && (
                <div className="bg-[#1c2d4a]/5 border-r-4 border-[#1c2d4a] p-4 rounded-xl text-xs sm:text-sm text-[#1c2d4a] font-serif leading-relaxed">
                  <span className="font-bold block mb-1">تێبینی و تایبەتمەندی:</span>
                  {activeWork.notes}
                </div>
              )}

              <div
                className={`text-[#2c1b0e] leading-[2.1] whitespace-pre-line font-serif bg-white/70 p-6 rounded-2xl border border-[#ebdcc9] shadow-inner ${
                  fontSize === 'normal'
                    ? 'text-sm sm:text-base'
                    : fontSize === 'large'
                    ? 'text-base sm:text-lg'
                    : 'text-lg sm:text-xl'
                }`}
              >
                {activeWork.fullText}
              </div>

              <KurdishOrnamentalDivider />
            </div>

            {/* Modal Footer: Prev / Next Navigation */}
            <div className="bg-[#f0e8d8] border-t border-[#d8c4a9] p-4 flex items-center justify-between gap-3 shrink-0">
              {prevWork ? (
                <button
                  onClick={() => setActiveWork(prevWork)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#faf6ed] border border-[#d8c4a9] text-xs font-bold text-[#1c2d4a] transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span className="line-clamp-1 max-w-[150px] sm:max-w-xs">
                    بەشی پێشوو: {prevWork.title}
                  </span>
                </button>
              ) : (
                <div />
              )}

              {nextWork ? (
                <button
                  onClick={() => setActiveWork(nextWork)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1c2d4a] hover:bg-[#121e33] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span className="line-clamp-1 max-w-[150px] sm:max-w-xs">
                    بەشی دواتر: {nextWork.title}
                  </span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}

      <KurdishOrnamentalDivider />
    </div>
  );
};
