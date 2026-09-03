import React, { useEffect, useState } from 'react';
import { HistoricalFigure, SourceItem } from '../types';
import { KurdishStarMedallion, ParchmentCornerDecoration, KurdishOrnamentalDivider } from './KurdishPattern';
import { FigureGallerySection } from './FigureGallerySection';
import { SmartImage } from './SmartImage';
import { LightboxModal, LightboxImageItem } from './LightboxModal';
import { 
  X, 
  MapPin, 
  Calendar, 
  BookOpen, 
  ShieldCheck, 
  HelpCircle, 
  Bookmark, 
  Award, 
  ExternalLink,
  Users,
  Compass,
  AlertTriangle,
  Landmark,
  FileText
} from 'lucide-react';

interface HistoricalFigureModalProps {
  figure: HistoricalFigure | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  allFigures?: HistoricalFigure[];
  onSelectRelatedFigure?: (fig: HistoricalFigure) => void;
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onOpenDiwanNali?: () => void;
  onOpenDiwanKhani?: () => void;
  onOpenDiwanSherko?: () => void;
  onOpenDiwanSheikhOthman?: () => void;
  onOpenSirajAlQulub?: () => void;
  onOpenBarPahnayeYad?: () => void;
  onOpenSirajMunir?: () => void;
  onOpenZhaniGal?: () => void;
}

export function HistoricalFigureModal({
  figure,
  onClose,
  isFavorite,
  onToggleFavorite,
  allFigures = [],
  onSelectRelatedFigure,
  onOpenShareModal,
  onOpenDiwanNali,
  onOpenDiwanKhani,
  onOpenDiwanSherko,
  onOpenDiwanSheikhOthman,
  onOpenSirajAlQulub,
  onOpenBarPahnayeYad,
  onOpenSirajMunir,
  onOpenZhaniGal,
}: HistoricalFigureModalProps) {
  const [isHeroLightboxOpen, setIsHeroLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!figure) return null;

  const heroLightboxImages: LightboxImageItem[] = [
    {
      url: figure.imageResource || '',
      title: figure.name,
      caption: `${figure.name} - ${figure.category} (${figure.period})`,
      figureName: figure.name,
      category: figure.category,
      hasRealPhoto: figure.hasRealPhoto,
      source: figure.photoSourceNote || 'سەرچاوەی مێژوویی',
    },
  ];

  // Find related figures objects
  const relatedFigures = (figure.relatedFigureIds || [])
    .map((id) => allFigures.find((f) => f.id === id))
    .filter((f): f is HistoricalFigure => f !== undefined);


  const isDisputed =
    figure.kurdishIdentityStatus === 'لە سەرچاوەکاندا جیاوازی هەیە' ||
    figure.kurdishIdentityStatus === 'پێویستی بە لێکۆڵینەوەی زیاتر هەیە' ||
    Boolean(figure.disputeNote);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs animate-fade-in overflow-y-auto font-serif">
      <div
        className="bg-[#faf6ed] dark:bg-[#1a1612] border-4 border-[#c59b27] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#3c2817] dark:text-[#ebe5df] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <ParchmentCornerDecoration />

        {/* Modal Top Header Bar */}
        <div className="bg-[#801b22] dark:bg-[#2a1315] text-[#f5efe0] p-6 relative border-b-4 border-[#c59b27] overflow-hidden">
          {/* Subtle background ornament */}
          <div className="absolute left-4 top-2 opacity-15 pointer-events-none">
            <KurdishStarMedallion className="w-32 h-32" color="#ffffff" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10 relative">
            <div className="flex items-start gap-4">
              {/* Portrait Box */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#c59b27] shadow-lg bg-[#ede3ce] relative group">
                <SmartImage
                  src={figure.imageResource}
                  fallbackSrcs={figure.gallery?.map((g) => g.url)}
                  alt={figure.name}
                  fallbackTitle={figure.name}
                  fallbackSubtitle="وێنەی فۆتۆگرافی بەردەست نییە"
                  category={figure.category}
                  onClick={() => setIsHeroLightboxOpen(true)}
                  showZoomOnHover={true}
                  objectFit="cover"
                />
              </div>

              {/* Hero Lightbox Modal */}
              {isHeroLightboxOpen && (
                <LightboxModal
                  isOpen={isHeroLightboxOpen}
                  onClose={() => setIsHeroLightboxOpen(false)}
                  images={heroLightboxImages}
                />
              )}


              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-[#c59b27] text-[#2c1b0e] px-3 py-0.5 rounded-full shadow-xs">
                    {figure.category}
                  </span>
                  {figure.politicalSubcategory && (
                    <span className="text-xs font-bold bg-[#1b4332] text-white px-3 py-0.5 rounded-full shadow-xs">
                      {figure.politicalSubcategory}
                    </span>
                  )}
                  <span className="text-xs font-bold bg-white/20 text-[#f5efe0] px-3 py-0.5 rounded-full border border-white/30">
                    «{figure.period}»
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                  {figure.name}
                </h2>

                {figure.kurdishName && figure.kurdishName !== figure.name && (
                  <p className="text-sm text-[#f5efe0]/90 font-medium">
                    {figure.kurdishName}
                  </p>
                )}

                {figure.alternateNames && figure.alternateNames.length > 0 && (
                  <p className="text-xs text-[#f5efe0]/70 mt-1">
                    ناوەکانی تر: {figure.alternateNames.join('، ')}
                  </p>
                )}
              </div>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              {onOpenShareModal && (
                <button
                  onClick={() =>
                    onOpenShareModal(
                      figure.name,
                      `کەسایەتی مێژوویی: ${figure.name} (${figure.period}) - ${figure.biography.slice(0, 150)}...`
                    )
                  }
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
                  title="هاوبەشکردن"
                >
                  <Landmark className="w-5 h-5 text-[#c59b27]" />
                </button>
              )}

              <button
                onClick={(e) => onToggleFavorite(e, figure.id)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
                title="زیادکردن بۆ دڵخوازەکان"
              >
                <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-[#c59b27] text-[#c59b27]' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
                title="داخستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Meta Strip */}
          <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-white/20 text-xs text-[#f5efe0]/90">
            {(figure.birthYear || figure.deathYear) && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c59b27]" />
                <span>ساڵی لەدایکبوون/کۆچی دوایی: {figure.birthYear || '?'} - {figure.deathYear || '?'}</span>
              </span>
            )}

            {figure.region && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                <span>شوێن / دەڤەر: {figure.cityOrPlace ? `${figure.cityOrPlace} (${figure.region})` : figure.region}</span>
              </span>
            )}
          </div>
        </div>

        {/* Modal Body Scroll Content */}
        <div className="p-6 space-y-6 flex-1">
          {/* Photo Verification Status Notice */}
          {figure.hasRealPhoto === false ? (
            <div className="bg-[#8c2318]/10 border border-[#8c2318]/40 p-3 rounded-2xl flex items-center gap-2.5 text-xs text-[#8c2318] dark:text-[#ff998a]">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>تێبینیی وێنە: وێنەی ڕاستەقینەی بەڵگەدار بەردەست نییە (وێنەی هونەری/سیمبولی ڕاستەقینە).</span>
            </div>
          ) : figure.photoSourceNote ? (
            <div className="bg-[#1b4332]/10 border border-[#1b4332]/30 p-2.5 rounded-xl flex items-center gap-2 text-xs text-[#1b4332] dark:text-[#88d4ab]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>وێنەی بەڵگەدار: {figure.photoSourceNote}</span>
            </div>
          ) : null}

          {/* Disputed Identity Historical Notice Box if needed */}
          {isDisputed ? (
            <div className="bg-[#801b22]/10 border-2 border-[#801b22] rounded-2xl p-4 flex items-start gap-3 text-xs text-[#2c1b0e] dark:text-[#ebe5df]">
              <AlertTriangle className="w-5 h-5 text-[#801b22] dark:text-[#ff998a] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-[#801b22] dark:text-[#ff998a] text-sm">
                  لەبارەی ناسنامەی کوردیی ئەم کەسایەتییە لە سەرچاوەکاندا جیاوازی هەیە:
                </h4>
                <p className="leading-relaxed">
                  تێبینیی ئەکادیمی: لە نێوان سەرچاوە مێژووییەکاندا بۆچوونی جیاواز تۆمار کراوە. ئەپەکە بە شێوەیەکی بێلایەن و ڕاستگۆیانە ئەم زانیارییانە بۆ لێکۆڵەران دەخاتە ڕوو.
                </p>
                {figure.disputeNote && (
                  <p className="font-medium text-[#671217] dark:text-[#ffc1b8] pt-1">
                    {figure.disputeNote}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-[#1b4332]/10 border border-[#1b4332]/30 rounded-2xl p-3.5 flex items-center justify-between text-xs text-[#1b4332] dark:text-[#88d4ab]">
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>دۆخی سەرچاوەی مێژوویی: «{figure.kurdishIdentityStatus}»</span>
              </div>
              <span className="text-[11px] opacity-80">پشتڕاستکراوە بە سەرچاوەی ئەکادیمی</span>
            </div>
          )}

          {/* Section: Political Role & Events (if applicable) */}
          {figure.politicalRole && (
            <section className="bg-[#2a1b12] text-[#f5efe0] p-4 rounded-2xl border border-[#c59b27] space-y-3">
              <h3 className="text-sm font-bold text-[#c59b27] flex items-center gap-2">
                <Landmark className="w-4 h-4" />
                <span>ڕووداو و ڕۆڵی سیاسی</span>
              </h3>
              <p className="text-xs leading-relaxed text-[#f5efe0]/90">
                {figure.politicalRole}
              </p>

              {figure.politicalEvents && figure.politicalEvents.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#c59b27]/30">
                  <span className="text-[11px] font-bold text-[#c59b27]">ڕووداوە سیاسییە سەرەکییەکان:</span>
                  <div className="grid grid-cols-1 gap-2">
                    {figure.politicalEvents.map((event, idx) => (
                      <div key={idx} className="bg-[#1c130d] p-2.5 rounded-xl border border-[#c59b27]/20 text-xs space-y-1">
                        <div className="flex items-center justify-between font-bold text-[#c59b27]">
                          <span>{event.title}</span>
                          <span className="text-[10px] bg-[#c59b27]/20 px-2 py-0.5 rounded text-[#f5efe0]">{event.year}</span>
                        </div>
                        <p className="text-[11px] text-[#d9cbb3]">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Section: Biography «ژیاننامە» */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 border-b border-[#e2d2b8] dark:border-[#382d24] pb-1.5">
              <BookOpen className="w-5 h-5" />
              <span>«ژیاننامە»</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#2c1b0e] dark:text-[#ebe5df] whitespace-pre-line text-justify">
              {figure.biography}
            </p>
          </section>

          {/* Special Entry Card for Diwan Nali */}
          {figure.id === 'nali' && (
            <div
              onClick={() => {
                onClose();
                onOpenDiwanNali?.();
              }}
              className="group bg-gradient-to-r from-[#801b22] to-[#5c1217] text-white p-5 rounded-2xl border-2 border-[#c59b27] shadow-lg hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between my-3"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#c59b27] text-[#2c1b0e] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                  📚
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#f5efe0] group-hover:text-white transition-colors">
                    📚 دیوان و اشعار نالی
                  </h3>
                  <p className="text-xs text-[#e2d2b8] mt-0.5 leading-normal">
                    سەرجەم هۆنراوە و غەزەلیاتی نالی بەپێی پیتی ئەلفوبێی سورانی
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#2c1b0e] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                خوێندنەوەی دیوان ←
              </span>
            </div>
          )}

          {/* Special Entry Card for Diwan Khani */}
          {(figure.id === 'ahmad-khani' || figure.id === 'ahmad-i-khani') && (
            <div
              onClick={() => {
                onClose();
                onOpenDiwanKhani?.();
              }}
              className="group bg-gradient-to-r from-[#801b22] to-[#5c1217] text-white p-5 rounded-2xl border-2 border-[#c59b27] shadow-lg hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between my-3"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#c59b27] text-[#2c1b0e] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                  📚
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#f5efe0] group-hover:text-white transition-colors">
                    📚 دیوان / اشعار ئەحمەدی خانی
                  </h3>
                  <p className="text-xs text-[#e2d2b8] mt-0.5 leading-normal">
                    سەرجەم هۆنراوەکان، غەزەلیات و دیوانی شاعیر ئەحمەدی خانی
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#2c1b0e] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                خوێندنەوەی دیوان ←
              </span>
            </div>
          )}

          {/* Special Entry Card for Diwan Sherko Bekas */}
          {figure.id === 'sherko-bekas' && (
            <div
              onClick={() => {
                onClose();
                onOpenDiwanSherko?.();
              }}
              className="group bg-gradient-to-r from-[#801b22] to-[#5c1217] text-white p-5 rounded-2xl border-2 border-[#c59b27] shadow-lg hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between my-3"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#c59b27] text-[#2c1b0e] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                  📚
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#f5efe0] group-hover:text-white transition-colors">
                    📚 دیوان / اشعار شێرکۆ بێکەس
                  </h3>
                  <p className="text-xs text-[#e2d2b8] mt-0.5 leading-normal">
                    سەرجەم هۆنراوەکان، دەربەندی پەپوولە، بۆننامە و دیوانی شاعیر شێرکۆ بێکەس
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#2c1b0e] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                خوێندنەوەی دیوان ←
              </span>
            </div>
          )}

          {/* Special Entry Cards for Sheikh Othman Sirajaddin (Separate: Siraj al-Qulub & Bar Pahnaye Yad) */}
          {figure.id === 'sheikh-othman-sirajaddin' && (
            <div className="space-y-3 my-3">
              {/* Card 1: کتێبی سراج القلوب و رسالەکان */}
              <div
                onClick={() => {
                  onClose();
                  if (onOpenSirajAlQulub) {
                    onOpenSirajAlQulub();
                  } else {
                    onOpenDiwanSheikhOthman?.();
                  }
                }}
                className="group bg-gradient-to-r from-[#1e4d2b] to-[#14351d] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#c59b27] shadow-md hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#c59b27] text-[#14351d] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                    📖
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-[#c59b27] bg-white/10 px-2 py-0.5 rounded-md">
                        پەڕتووکی ڕەسەن
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#f5efe0] group-hover:text-white transition-colors">
                      📖 پەڕتووکی «سراج القلوب» و رسالە عیرفانییەکان
                    </h3>
                    <p className="text-xs text-[#d8e8dc] mt-0.5 leading-normal">
                      دەقی تەواوی سراج القلوب، بیرەوەرییەکان، چوار رسالە (شُهُبٌ ثاقِبَة، نەسیحەت، ڕابیتە، وەڵامی شێخ نزیه) و نامە مێژووییەکان
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#14351d] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                  خوێندنەوەی سراج القلوب ←
                </span>
              </div>

              {/* Card 2: یادنامەی بر پهنه یاد (ئەشعار، مرثیە و تەفسیری تین) */}
              <div
                onClick={() => {
                  onClose();
                  if (onOpenBarPahnayeYad) {
                    onOpenBarPahnayeYad();
                  } else {
                    onOpenDiwanSheikhOthman?.();
                  }
                }}
                className="group bg-gradient-to-r from-[#5c3a1e] to-[#3d2412] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#d4a359] shadow-md hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#d4a359] text-[#3d2412] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                    📜
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-[#d4a359] bg-white/10 px-2 py-0.5 rounded-md">
                        دیوان و یادنامە
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#fdf8f2] group-hover:text-white transition-colors">
                      📜 یادنامەی «بر پهنه یاد» (ئەشعار، مرثیە و تەفسیر)
                    </h3>
                    <p className="text-xs text-[#eedecb] mt-0.5 leading-normal">
                      ئەشعار و قەسایدەکانی حەزرەتی شێخ و مەولانا خالد، پەندنامەی کوردی، شیوەن و مرثیەکان، و تەفسیری عیرفانیی سوورەی تین
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-2 bg-[#d4a359] hover:bg-[#e2b56e] text-[#3d2412] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                  خوێندنەوەی بر پهنه یاد ←
                </span>
              </div>

              {/* Card 3: پەڕتووکی «سراجِ منیر» (٥٥ کەراماتەکانی حەزرەتی پیر) */}
              <div
                onClick={() => {
                  onClose();
                  if (onOpenSirajMunir) {
                    onOpenSirajMunir();
                  } else {
                    onOpenDiwanSheikhOthman?.();
                  }
                }}
                className="group bg-gradient-to-r from-[#1c2d4a] to-[#121f33] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#3b82f6]/40 shadow-md hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#c59b27] text-[#1c2d4a] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                    ✨
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-[#c59b27] bg-white/10 px-2 py-0.5 rounded-md">
                        پەڕتووکی کەرامات (نوێ)
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#f5efe0] group-hover:text-white transition-colors">
                      ✨ پەڕتووکی «سراجِ منیر» (کەراماتەکانی حەزرەتی پیر)
                    </h3>
                    <p className="text-xs text-[#d0dced] mt-0.5 leading-normal">
                      ٥٥ کەراماتی حەزرەتی شێخ، ڕزگارکردنی کرێکاری دەربەندیخان، کەشتیی بەڕازیل لە لوبنان، بینینی صوڕەتی میسالی و تەمەسسوکی کاتب (مامۆستا فەنایی)
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#1c2d4a] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                  خوێندنەوەی سراج منیر ←
                </span>
              </div>
            </div>
          )}

          {/* Special Entry Card for Ibrahim Ahmad: ڕۆمانی ژانی گەل */}
          {figure.id === 'ibrahim-ahmad' && (
            <div className="space-y-3 my-3">
              <div
                onClick={() => {
                  onClose();
                  onOpenZhaniGal?.();
                }}
                className="group bg-gradient-to-r from-[#1c3e23] via-[#27532f] to-[#15321c] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#b8860b] shadow-md hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#b8860b] text-[#1c3e23] flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                    📖
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-[#b8860b] bg-white/10 px-2 py-0.5 rounded-md">
                        شاکاری ئەدەبیی کوردی (١٩ بەشی تەواو)
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#f5efe0] group-hover:text-white transition-colors">
                      📖 خوێندنەوەی ڕۆمانی نەمر «ژانی گەل»
                    </h3>
                    <p className="text-xs text-[#d3e6d8] mt-0.5 leading-normal">
                      دەقی تەواوی هەموو ١٩ بەشەکەی ڕۆمانی بەناوبانگی «ژانی گەل» بە ڕیزبەندی، پێناسە، پوختە و لێکۆڵینەوەی ئەدەبی
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-2 bg-[#b8860b] hover:bg-[#d6aa32] text-[#1c3e23] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                  خوێندنەوەی ژانی گەل ←
                </span>
              </div>
            </div>
          )}

          {/* Section: Image Gallery «گەلەری وێنەکان» */}
          <FigureGallerySection gallery={figure.gallery} figureName={figure.name} />

          {/* Section: Key Achievements «دەستکەوتەکان» */}
          {figure.achievements && figure.achievements.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 border-b border-[#e2d2b8] dark:border-[#382d24] pb-1.5">
                <Award className="w-5 h-5" />
                <span>«دەستکەوت و کارە مێژووییەکان»</span>
              </h3>
              <ul className="space-y-2">
                {figure.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2c1b0e] dark:text-[#ebe5df] bg-white/70 dark:bg-[#241e19] border border-[#d8c4a9] dark:border-[#42362b] p-3 rounded-xl shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-[#801b22] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Section: Works if applicable «بەرهەمەکان» */}
          {figure.works && figure.works.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 border-b border-[#e2d2b8] dark:border-[#382d24] pb-1.5">
                <FileText className="w-5 h-5" />
                <span>«بەرهەم و داڕشتنە نووسراوەکان»</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {figure.works.map((work, idx) => (
                  <span key={idx} className="bg-[#f5efe0] dark:bg-[#241e19] border border-[#c59b27] px-3 py-1.5 rounded-xl text-xs font-bold text-[#2c1b0e] dark:text-[#ebe5df]">
                    «{work}»
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Section: Related Places «شوێنە پەیوەندیدارەکان» */}
          {figure.relatedPlaces && figure.relatedPlaces.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 border-b border-[#e2d2b8] dark:border-[#382d24] pb-1.5">
                <Landmark className="w-5 h-5" />
                <span>«شوێنە پەیوەندیدارەکان»</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {figure.relatedPlaces.map((place, idx) => (
                  <span key={idx} className="flex items-center gap-1 bg-[#1b4332]/10 dark:bg-[#1b4332]/30 border border-[#1b4332]/30 px-3 py-1 rounded-lg text-xs font-bold text-[#1b4332] dark:text-[#88d4ab]">
                    <MapPin className="w-3 h-3" />
                    <span>{place}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Section: Historical Importance «گرنگیی مێژوویی» */}
          <section className="space-y-2 bg-[#f5efe0] dark:bg-[#241e19] border-2 border-[#c59b27] rounded-2xl p-4">
            <h3 className="text-base font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 mb-1">
              <Compass className="w-5 h-5" />
              <span>«گرنگیی مێژوویی»</span>
            </h3>
            <p className="text-xs leading-relaxed text-[#2c1b0e] dark:text-[#ebe5df]">
              {figure.historicalImportance}
            </p>
          </section>

          {/* Section: Sources List «سەرچاوەکان» */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 border-b border-[#e2d2b8] dark:border-[#382d24] pb-1.5">
              <BookOpen className="w-5 h-5" />
              <span>«سەرچاوە مێژوویی و ئەکادیمییەکان»</span>
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {figure.sources.map((src: SourceItem, idx) => (
                <div key={idx} className="bg-white dark:bg-[#241e19] border border-[#d8c4a9] dark:border-[#42362b] p-3 rounded-xl flex items-start justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#801b22] dark:text-[#c59b27]">«{src.title}»</span>
                      <span className="text-[10px] font-bold bg-[#c59b27]/20 text-[#634902] dark:text-[#e0b553] px-2 py-0.5 rounded">
                        {src.sourceType}
                      </span>
                    </div>
                    {(src.author || src.publication || src.year) && (
                      <p className="text-[#671217] dark:text-[#c4b5a5] text-[11px]">
                        {src.author && `نووسەر/ئامادەکار: ${src.author}`}
                        {src.publication && ` | چاپی: ${src.publication}`}
                        {src.year && ` (${src.year})`}
                      </p>
                    )}
                  </div>
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#f5efe0] dark:bg-[#1a1612] hover:bg-[#801b22] hover:text-white rounded-lg text-[#801b22] dark:text-[#c59b27] transition-colors flex-shrink-0"
                      title="سەردانی سەرچاوە بکە"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Related Historical Figures «کەسایەتییە پەیوەندیدارەکان» */}
          {relatedFigures.length > 0 && (
            <section className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-[#801b22] dark:text-[#c59b27] flex items-center gap-2 border-b border-[#e2d2b8] dark:border-[#382d24] pb-1.5">
                <Users className="w-5 h-5" />
                <span>«کەسایەتییە پەیوەندیدارەکان»</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedFigures.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedFigure && onSelectRelatedFigure(rel)}
                    className="bg-white dark:bg-[#241e19] border border-[#d8c4a9] dark:border-[#42362b] hover:border-[#801b22] p-3 rounded-xl cursor-pointer transition-all hover:bg-[#f5efe0] dark:hover:bg-[#2c241d] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-[#2c1b0e] dark:text-[#ebe5df]">{rel.name}</h4>
                      <p className="text-[10px] text-[#801b22] dark:text-[#c59b27]">{rel.category} - «{rel.period}»</p>
                    </div>
                    <span className="text-xs font-bold text-[#801b22] dark:text-[#c59b27]">←</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <KurdishOrnamentalDivider />
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f5efe0] dark:bg-[#241e19] p-4 border-t-2 border-[#c59b27] flex items-center justify-between">
          <span className="text-xs text-[#671217] dark:text-[#c59b27] font-bold">
            میراثی کورد - ئەنسایکڵۆپیدیای مێژوویی
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#801b22] hover:bg-[#671217] text-white font-bold text-xs rounded-xl shadow-sm transition-all"
          >
            داخستن
          </button>
        </div>
      </div>
    </div>
  );
}

