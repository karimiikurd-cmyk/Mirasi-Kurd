import React, { useState, useMemo } from 'react';
import { ZhaniGalChapter, ALL_ZHANI_GAL_CHAPTERS, ZHANI_GAL_NOVEL } from '../data/zhaniGal';
import { ParchmentCornerDecoration } from './KurdishPattern';
import {
  BookOpen,
  Search,
  Copy,
  Check,
  Share2,
  X,
  ChevronRight,
  ChevronLeft,
  Filter,
  Sparkles,
  MapPin,
  Users,
  Clock,
  Bookmark,
  Eye,
  Info,
  Layers
} from 'lucide-react';

interface ZhaniGalNovelViewProps {
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onBackToProfile?: () => void;
}

const CHAPTER_GROUPS = [
  { id: 'all', label: 'هەموو ١٩ بەشەکە', range: [1, 19] },
  { id: 'group1', label: 'بەشەکانی ١ تا ٥ (دەستپێکی کارەسات و دەستگیرکردن)', range: [1, 5] },
  { id: 'group2', label: 'بەشەکانی ٦ تا ١٠ (ماڵی لاوە و یادەوەرییەکانی زیندان)', range: [6, 10] },
  { id: 'group3', label: 'بەشەکانی ١١ تا ١٥ (گەشت بەرەو دێ و بۆردومانی چایخانە)', range: [11, 15] },
  { id: 'group4', label: 'بەشەکانی ١٦ تا ١٩ (ناودۆڵان، حەقیقەت و بانگەوازی خەبات)', range: [16, 19] },
];

export const ZhaniGalNovelView: React.FC<ZhaniGalNovelViewProps> = ({
  onOpenShareModal,
  onBackToProfile,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeChapter, setActiveChapter] = useState<ZhaniGalChapter | null>(null);
  const [showNovelInfo, setShowNovelInfo] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Filter chapters based on selected group and search
  const filteredChapters = useMemo(() => {
    return ALL_ZHANI_GAL_CHAPTERS.filter((chapter) => {
      const activeGroupObj = CHAPTER_GROUPS.find((g) => g.id === selectedGroup);
      const matchesGroup =
        !activeGroupObj ||
        selectedGroup === 'all' ||
        (chapter.chapterNumber >= activeGroupObj.range[0] &&
          chapter.chapterNumber <= activeGroupObj.range[1]);

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        chapter.title.toLowerCase().includes(q) ||
        (chapter.subtitle && chapter.subtitle.toLowerCase().includes(q)) ||
        chapter.chapterNumber.toString() === q ||
        chapter.summary.toLowerCase().includes(q) ||
        chapter.keyCharacters.some((char) => char.toLowerCase().includes(q)) ||
        chapter.locations.some((loc) => loc.toLowerCase().includes(q)) ||
        chapter.fullText.toLowerCase().includes(q);

      return matchesGroup && matchesSearch;
    });
  }, [selectedGroup, searchQuery]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Navigate between chapters in detail view
  const currentChapterIndex = activeChapter
    ? ALL_ZHANI_GAL_CHAPTERS.findIndex((c) => c.id === activeChapter.id)
    : -1;
  const prevChapter = currentChapterIndex > 0 ? ALL_ZHANI_GAL_CHAPTERS[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex >= 0 && currentChapterIndex < ALL_ZHANI_GAL_CHAPTERS.length - 1
      ? ALL_ZHANI_GAL_CHAPTERS[currentChapterIndex + 1]
      : null;

  return (
    <div className="space-y-6 dir-rtl font-serif animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="bg-[#f5efe0] border-2 border-[#b8860b] rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <ParchmentCornerDecoration />

        {onBackToProfile && (
          <button
            onClick={onBackToProfile}
            className="mb-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2e5d34] text-white hover:bg-[#234728] text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>گەڕانەوە بۆ پرۆفایلی ئیبراهیم ئەحمەد</span>
          </button>
        )}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#2e5d34] text-white flex items-center justify-center font-bold shadow-md shrink-0 overflow-hidden border-2 border-[#b8860b]">
              <img
                src="/people/ibrahim_ahmad.jpg"
                alt="ئیبراهیم ئەحمەد"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback to text icon if image not available
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold text-[#2e5d34] bg-[#2e5d34]/15 px-3 py-1 rounded-full border border-[#2e5d34]/30">
                  شاکاری ڕۆماننووسیی کوردی (١٩٥٦ ز)
                </span>
                <span className="text-xs text-[#805010] font-sans font-bold bg-[#b8860b]/15 px-2.5 py-1 rounded-full">
                  ١٩ بەشی ڕێکخراو و تەواو
                </span>
                <span className="text-xs text-[#6e5845] font-sans">
                  نووسینی: مامۆستا ئیبراهیم ئەحمەد
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2c1b0e] tracking-tight">
                📖 ڕۆمانی نەمر «ژانی گەل»
              </h1>
              <p className="text-xs sm:text-sm text-[#5c4433] mt-2 max-w-3xl leading-relaxed">
                دەقی تەواو و پۆلێنکراوی سەرجەم ١٩ بەشەکەی ڕۆمانی بەناوبانگی «ژانی گەل»؛ داستانی تراژیدیی «جوامێر»، «کاڵێ» و «هیوا» کە ژانی لەدایکبوونی کۆرپەیەک دەکاتە هێمای ژانی لەدایکبوونی نەتەوەیەک بەرەو ئازادی.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-stretch sm:self-auto justify-end">
            <button
              onClick={() => setShowNovelInfo(!showNovelInfo)}
              className="px-4 py-2.5 rounded-xl bg-white/80 hover:bg-white text-[#2c1b0e] border border-[#b8860b]/40 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Info className="w-4 h-4 text-[#b8860b]" />
              <span>پێناسە و گرنگیی ڕۆمانەکە</span>
            </button>

            {onOpenShareModal && (
              <button
                onClick={() =>
                  onOpenShareModal(
                    'ڕۆمانی ژانی گەل - ئیبراهیم ئەحمەد',
                    'خوێندنەوەی دەقی تەواوی ١٩ بەشەکەی ڕۆمانی نەمر «ژانی گەل» لە بەرهەمەکانی مامۆستا ئیبراهیم ئەحمەد.'
                  )
                }
                className="p-2.5 rounded-xl bg-[#b8860b] hover:bg-[#996e08] text-white transition-all shadow-xs cursor-pointer"
                title="هاوبەشکردنی ڕۆمان"
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Novel Introduction Collapse Box */}
        {showNovelInfo && (
          <div className="mt-6 pt-6 border-t border-[#b8860b]/30 bg-[#faf6ed] rounded-2xl p-5 text-sm text-[#422c1b] leading-relaxed space-y-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-[#2e5d34] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b8860b]" />
                <span>دەربارەی شاکاری «ژانی گەل» و پەیامە مێژووییەکەی</span>
              </h3>
              <button
                onClick={() => setShowNovelInfo(false)}
                className="text-xs text-[#755940] hover:text-black cursor-pointer"
              >
                داخستن ✕
              </button>
            </div>
            <p>
              مامۆستا ئیبراهیم ئەحمەد (١٩١٤ - ٢٠٠٠) لە ساڵی ١٩٥٦ لە شاری سلێمانی ئەم ڕۆمانە ناوازەیەی نووسیوە. «ژانی گەل» بە یەکەمین ڕۆمانی مۆدێرن و ڕاستەقینەی کوردی دادەنرێت لە باشووری کوردستان کە بە پێوەرە هونەرییە باوەکانی ڕۆماننووسی نووسراوە.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/70 p-3 rounded-xl border border-[#b8860b]/20">
                <h4 className="font-bold text-xs text-[#b8860b] mb-1">کەسایەتییە سەرەکییەکان:</h4>
                <p className="text-xs text-[#523d2c]">
                  • <strong>جوامێر:</strong> مامۆستایەکی بێتاوان کە قوربانیی ستەمکاریی دەسەڵاتە و ١٠ ساڵ زیندان دەکرێت.<br />
                  • <strong>کاڵێ:</strong> هاوسەری جوامێر کە بە دەم ژانی منداڵبوونەوە بەبێ مامان گیان دەسپێرێت.<br />
                  • <strong>هیوا:</strong> کۆرپەی لەدایکبوو کە هێمای ئومێد و بەرەبەیانی نەتەوەیە.<br />
                  • <strong>لاوە:</strong> ئامۆزای جوامێر کە ١٠ ساڵ نامەی هیوابەخش بۆ جوامێر دەنێرێت تا نەڕووخێت.
                </p>
              </div>
              <div className="bg-white/70 p-3 rounded-xl border border-[#b8860b]/20">
                <h4 className="font-bold text-xs text-[#2e5d34] mb-1">واتای سیمبۆلیکی ناوی ڕۆمانەکە:</h4>
                <p className="text-xs text-[#523d2c]">
                  ژانی منداڵبوونی کاڵێ تەنیا ئازارێکی جەستەیی تاکەکەسی نییە؛ بەڵکو هێمای ئەو ژان و قوربانیدانە گەورەیەیە کە گەلێک دەیدات تا کۆرپەی ئازادی و دادپەروەری لەدایک ببێت («ژانی گەل»).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-[#e0d6c4] rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#8a7a67] absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="گەڕان لەناو هەموو بەشەکانی ڕۆمان، کەسایەتییەکان، دێڕ و شوێنەکان..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[#d8ccb6] focus:border-[#2e5d34] focus:ring-2 focus:ring-[#2e5d34]/20 outline-none text-xs sm:text-sm text-[#2c1b0e] placeholder-[#94836f] bg-[#fcfaf7]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8a7a67] hover:text-black cursor-pointer"
            >
              سڕینەوە
            </button>
          )}
        </div>

        {/* Group Selector Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-[#8a7a67] shrink-0 ml-1 hidden sm:block" />
          {CHAPTER_GROUPS.map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroup(grp.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedGroup === grp.id
                  ? 'bg-[#2e5d34] text-white shadow-xs'
                  : 'bg-[#f4eee1] text-[#5e4b38] hover:bg-[#eae1d0]'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Grid Header */}
      <div className="flex items-center justify-between text-xs text-[#6e5845] px-2">
        <span>
          پیشاندانی <strong>{filteredChapters.length}</strong> لە کۆی{' '}
          <strong>{ALL_ZHANI_GAL_CHAPTERS.length}</strong> بەشی ڕۆمان
        </span>
        {searchQuery && (
          <span className="text-[#2e5d34] font-bold">
            ئەنجامی گەڕان بۆ: «{searchQuery}»
          </span>
        )}
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredChapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => setActiveChapter(chapter)}
            className="group bg-[#fcfaf6] hover:bg-white border-2 border-[#e6dcce] hover:border-[#b8860b] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-[#2e5d34]/15 text-[#2e5d34] font-extrabold text-sm flex items-center justify-center border border-[#2e5d34]/30">
                  {chapter.chapterNumber}
                </span>
                <span className="text-[11px] text-[#805010] bg-[#b8860b]/10 px-2 py-0.5 rounded-md font-sans flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {chapter.readTime}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-base text-[#2c1b0e] group-hover:text-[#2e5d34] transition-colors leading-snug">
                  {chapter.title}
                </h3>
                {chapter.subtitle && (
                  <p className="text-xs text-[#826a56] font-medium mt-1 leading-normal">
                    {chapter.subtitle}
                  </p>
                )}
              </div>

              <p className="text-xs text-[#523d2c] leading-relaxed line-clamp-3 bg-[#f5efe0]/50 p-2.5 rounded-xl border border-[#e6dcce]/60">
                {chapter.summary}
              </p>

              {/* Characters & Locations tags */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-[#6b5542]">
                  <Users className="w-3 h-3 text-[#2e5d34] shrink-0" />
                  <span className="font-bold">کەسایەتییەکان:</span>
                  <span>{chapter.keyCharacters.join('، ')}</span>
                </div>
                {chapter.locations.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-[#6b5542]">
                    <MapPin className="w-3 h-3 text-[#b8860b] shrink-0" />
                    <span className="font-bold">شوێنەکان:</span>
                    <span>{chapter.locations.join('، ')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#eee5d8] flex items-center justify-between">
              <span className="text-xs font-bold text-[#2e5d34] group-hover:text-[#1e3e23] flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                خوێندنەوەی بەشی {chapter.chapterNumber}
              </span>
              <ChevronLeft className="w-4 h-4 text-[#b8860b] transform group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center py-12 bg-[#f9f6f0] rounded-2xl border border-dashed border-[#d2c2ad] space-y-3">
          <BookOpen className="w-10 h-10 text-[#a8957e] mx-auto opacity-70" />
          <h4 className="font-bold text-[#2c1b0e]">هیچ بەشێک نەدۆزرایەوە!</h4>
          <p className="text-xs text-[#6e5845]">
            تکایە وشەی گەڕانەکەت بگۆڕە یان فلتەری بەشەکان بخەرە سەر «هەموو ١٩ بەشەکە».
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGroup('all');
            }}
            className="px-4 py-2 rounded-xl bg-[#2e5d34] text-white text-xs font-bold cursor-pointer"
          >
            پاککردنەوەی گەڕان
          </button>
        </div>
      )}

      {/* Full Chapter Reader Modal */}
      {activeChapter && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div
            className="bg-[#faf6ed] border-2 border-[#b8860b] rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ParchmentCornerDecoration />

            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-[#e2d5c0] bg-[#f4eee1] flex items-center justify-between gap-4 z-10 shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#2e5d34] text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                  {activeChapter.chapterNumber}
                </span>
                <div>
                  <h2 className="font-extrabold text-base sm:text-xl text-[#2c1b0e]">
                    {activeChapter.title}
                  </h2>
                  {activeChapter.subtitle && (
                    <p className="text-xs text-[#705642] font-medium">
                      {activeChapter.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Font size buttons */}
                <div className="hidden sm:flex items-center bg-white/70 rounded-xl p-1 border border-[#d8ccb6]">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      fontSize === 'normal' ? 'bg-[#2e5d34] text-white' : 'text-[#5c4433]'
                    }`}
                    title="قەبارەی ئاسایی"
                  >
                    ئاسایی
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      fontSize === 'large' ? 'bg-[#2e5d34] text-white' : 'text-[#5c4433]'
                    }`}
                    title="قەبارەی گەورە"
                  >
                    گەورە
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      fontSize === 'xlarge' ? 'bg-[#2e5d34] text-white' : 'text-[#5c4433]'
                    }`}
                    title="قەبارەی زۆر گەورە"
                  >
                    زۆر گەورە
                  </button>
                </div>

                <button
                  onClick={() => handleCopy(activeChapter.fullText)}
                  className="p-2 rounded-xl bg-white/80 hover:bg-white text-[#2c1b0e] border border-[#d8ccb6] text-xs font-bold transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
                  title="لەبەرگرتنەوەی دەقی بەشەکە"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#755f4c]" />
                  )}
                </button>

                {onOpenShareModal && (
                  <button
                    onClick={() =>
                      onOpenShareModal(
                        activeChapter.title,
                        `خوێندنەوەی ${activeChapter.title} لە ڕۆمانی ژانی گەل نووسینی ئیبراهیم ئەحمەد:\n\n${activeChapter.summary}`
                      )
                    }
                    className="p-2 rounded-xl bg-white/80 hover:bg-white text-[#2c1b0e] border border-[#d8ccb6] text-xs font-bold transition-all shadow-2xs cursor-pointer"
                    title="هاوبەشکردنی ئەم بەشە"
                  >
                    <Share2 className="w-4 h-4 text-[#755f4c]" />
                  </button>
                )}

                <button
                  onClick={() => setActiveChapter(null)}
                  className="p-2 rounded-xl bg-[#801b22]/10 hover:bg-[#801b22] text-[#801b22] hover:text-white transition-all cursor-pointer"
                  title="داخستنی پەنجەرە"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Chapter Content */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#22160d]">
              {/* Summary and Metadata Header inside Reader */}
              <div className="bg-[#f2e9d7] border border-[#dccbb0] rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#6e5845]">
                  <span className="font-bold text-[#2e5d34] flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5" />
                    پوختەی ئەم بەشە:
                  </span>
                  <span className="font-sans font-medium">{activeChapter.readTime}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#453122] leading-relaxed">
                  {activeChapter.summary}
                </p>
                <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#6e5845] border-t border-[#e2d4bc]">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#2e5d34]" />
                    <span><strong>کەسایەتییەکان:</strong> {activeChapter.keyCharacters.join('، ')}</span>
                  </div>
                  {activeChapter.locations.length > 0 && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#b8860b]" />
                      <span><strong>شوێنەکان:</strong> {activeChapter.locations.join('، ')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Full Text Paragraphs */}
              <div
                className={`space-y-5 leading-loose text-justify font-serif ${
                  fontSize === 'normal'
                    ? 'text-sm sm:text-base'
                    : fontSize === 'large'
                    ? 'text-base sm:text-lg'
                    : 'text-lg sm:text-xl'
                }`}
              >
                {activeChapter.fullText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="indent-4 sm:indent-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer: Previous / Next Navigation */}
            <div className="p-4 border-t border-[#e2d5c0] bg-[#f4eee1] flex items-center justify-between gap-3 z-10 shrink-0">
              {prevChapter ? (
                <button
                  onClick={() => setActiveChapter(prevChapter)}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#2e5d34] hover:text-white text-[#2c1b0e] border border-[#d8ccb6] text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>بەشی پێشوو: {prevChapter.chapterNumber}</span>
                </button>
              ) : (
                <div />
              )}

              <span className="text-xs text-[#705642] font-medium font-sans">
                بەشی {activeChapter.chapterNumber} لە کۆی ١٩
              </span>

              {nextChapter ? (
                <button
                  onClick={() => setActiveChapter(nextChapter)}
                  className="px-3.5 py-2 rounded-xl bg-[#2e5d34] hover:bg-[#204225] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>بەشی دواتر: {nextChapter.chapterNumber}</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
