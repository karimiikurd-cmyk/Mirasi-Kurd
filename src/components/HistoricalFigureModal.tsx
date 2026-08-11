import React, { useEffect } from 'react';
import { HistoricalFigure, SourceItem } from '../types';
import { KurdishStarMedallion, ParchmentCornerDecoration, KurdishOrnamentalDivider } from './KurdishPattern';
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
}

export function HistoricalFigureModal({
  figure,
  onClose,
  isFavorite,
  onToggleFavorite,
  allFigures = [],
  onSelectRelatedFigure,
}: HistoricalFigureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!figure) return null;

  // Find related figures objects
  const relatedFigures = (figure.relatedFigureIds || [])
    .map((id) => allFigures.find((f) => f.id === id))
    .filter((f): f is HistoricalFigure => f !== undefined);

  const isDisputed =
    figure.kurdishIdentityStatus === 'لە سەرچاوەکاندا جیاوازی هەیە' ||
    figure.kurdishIdentityStatus === 'پێویستی بە لێکۆڵینەوەی زیاتر هەیە' ||
    Boolean(figure.disputeNote);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div
        className="bg-[#faf6ed] border-4 border-[#c59b27] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative font-serif text-[#3c2817] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <ParchmentCornerDecoration />

        {/* Modal Top Header Bar */}
        <div className="bg-[#801b22] text-[#f5efe0] p-6 relative border-b-4 border-[#c59b27] overflow-hidden">
          {/* Subtle background ornament */}
          <div className="absolute left-4 top-2 opacity-15 pointer-events-none">
            <KurdishStarMedallion className="w-32 h-32" color="#ffffff" />
          </div>

          <div className="flex items-start justify-between gap-4 z-10 relative">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-[#c59b27] text-[#2c1b0e] px-3 py-0.5 rounded-full shadow-xs">
                  {figure.category}
                </span>
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

            {/* Top Action Buttons */}
            <div className="flex items-center gap-2">
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
          {/* Disputed Identity Historical Notice Box if needed */}
          {isDisputed ? (
            <div className="bg-[#801b22]/10 border-2 border-[#801b22] rounded-2xl p-4 flex items-start gap-3 text-xs text-[#2c1b0e]">
              <AlertTriangle className="w-5 h-5 text-[#801b22] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-[#801b22] text-sm">
                  تێبینییەکی مێژوویی:
                </h4>
                <p className="leading-relaxed">
                  لەبارەی ناسنامەی کوردیی ئەم کەسایەتییە لە نێوان سەرچاوە مێژووییەکاندا جیاوازی هەیە. ئەپەکە ئەم جیاوازییە بە شێوەیەکی بێلایەن پیشان دەدات.
                </p>
                {figure.disputeNote && (
                  <p className="font-medium text-[#671217] pt-1">
                    {figure.disputeNote}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-[#1b4332]/10 border border-[#1b4332]/30 rounded-2xl p-3.5 flex items-center justify-between text-xs text-[#1b4332]">
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>دۆخی سەرچاوەی مێژوویی: «{figure.kurdishIdentityStatus}»</span>
              </div>
              <span className="text-[11px] text-[#1b4332]/80">پشتڕاستکراوە بە سەرچاوەی ئەکادیمی</span>
            </div>
          )}

          {/* Section: Biography «ژیاننامە» */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-[#801b22] flex items-center gap-2 border-b border-[#e2d2b8] pb-1.5">
              <BookOpen className="w-5 h-5" />
              <span>«ژیاننامە»</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#2c1b0e] whitespace-pre-line text-justify">
              {figure.biography}
            </p>
          </section>

          {/* Section: Key Achievements «دەستکەوتەکان» */}
          {figure.achievements && figure.achievements.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[#801b22] flex items-center gap-2 border-b border-[#e2d2b8] pb-1.5">
                <Award className="w-5 h-5" />
                <span>«دەستکەوت و کارە مێژووییەکان»</span>
              </h3>
              <ul className="space-y-2">
                {figure.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2c1b0e] bg-white/70 border border-[#d8c4a9] p-3 rounded-xl shadow-2xs">
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
              <h3 className="text-lg font-bold text-[#801b22] flex items-center gap-2 border-b border-[#e2d2b8] pb-1.5">
                <FileText className="w-5 h-5" />
                <span>«بەرهەم و داڕشتنە نووسراوەکان»</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {figure.works.map((work, idx) => (
                  <span key={idx} className="bg-[#f5efe0] border border-[#c59b27] px-3 py-1.5 rounded-xl text-xs font-bold text-[#2c1b0e]">
                    «{work}»
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Section: Related Places «شوێنە پەیوەندیدارەکان» */}
          {figure.relatedPlaces && figure.relatedPlaces.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[#801b22] flex items-center gap-2 border-b border-[#e2d2b8] pb-1.5">
                <Landmark className="w-5 h-5" />
                <span>«شوێنە پەیوەندیدارەکان»</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {figure.relatedPlaces.map((place, idx) => (
                  <span key={idx} className="flex items-center gap-1 bg-[#1b4332]/10 border border-[#1b4332]/30 px-3 py-1 rounded-lg text-xs font-bold text-[#1b4332]">
                    <MapPin className="w-3 h-3 text-[#1b4332]" />
                    <span>{place}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Section: Historical Importance «گرنگیی مێژوویی» */}
          <section className="space-y-2 bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-4">
            <h3 className="text-base font-bold text-[#801b22] flex items-center gap-2 mb-1">
              <Compass className="w-5 h-5" />
              <span>«گرنگیی مێژوویی»</span>
            </h3>
            <p className="text-xs leading-relaxed text-[#2c1b0e]">
              {figure.historicalImportance}
            </p>
          </section>

          {/* Section: Sources List «سەرچاوەکان» */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#801b22] flex items-center gap-2 border-b border-[#e2d2b8] pb-1.5">
              <BookOpen className="w-5 h-5" />
              <span>«سەرچاوە مێژوویی و ئەکادیمییەکان»</span>
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {figure.sources.map((src: SourceItem, idx) => (
                <div key={idx} className="bg-white border border-[#d8c4a9] p-3 rounded-xl flex items-start justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#801b22]">«{src.title}»</span>
                      <span className="text-[10px] font-bold bg-[#c59b27]/20 text-[#634902] px-2 py-0.5 rounded">
                        {src.sourceType}
                      </span>
                    </div>
                    {(src.author || src.publication || src.year) && (
                      <p className="text-[#671217] text-[11px]">
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
                      className="p-1.5 bg-[#f5efe0] hover:bg-[#801b22] hover:text-white rounded-lg text-[#801b22] transition-colors flex-shrink-0"
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
              <h3 className="text-lg font-bold text-[#801b22] flex items-center gap-2 border-b border-[#e2d2b8] pb-1.5">
                <Users className="w-5 h-5" />
                <span>«کەسایەتییە پەیوەندیدارەکان»</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedFigures.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedFigure && onSelectRelatedFigure(rel)}
                    className="bg-white border border-[#d8c4a9] hover:border-[#801b22] p-3 rounded-xl cursor-pointer transition-all hover:bg-[#f5efe0] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-[#2c1b0e]">{rel.name}</h4>
                      <p className="text-[10px] text-[#801b22]">{rel.category} - «{rel.period}»</p>
                    </div>
                    <span className="text-xs font-bold text-[#801b22] font-serif">→</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <KurdishOrnamentalDivider />
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f5efe0] p-4 border-t-2 border-[#c59b27] flex items-center justify-between">
          <span className="text-xs text-[#671217] font-bold">
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
