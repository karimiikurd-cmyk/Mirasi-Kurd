import React from 'react';
import { HistoricalFigure, SourceStatusType } from '../types';
import { KurdishStarMedallion } from './KurdishPattern';
import { MapPin, Calendar, BookOpen, ShieldCheck, HelpCircle, CheckCircle2, Bookmark } from 'lucide-react';

interface HistoricalFigureCardProps {
  key?: React.Key;
  figure: HistoricalFigure;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onSelect: (figure: HistoricalFigure) => void;
}

export function HistoricalFigureCard({
  figure,
  isFavorite,
  onToggleFavorite,
  onSelect,
}: HistoricalFigureCardProps) {
  // Source status badge styling
  const getStatusBadge = (status: SourceStatusType) => {
    switch (status) {
      case 'پشتڕاستکراو':
        return {
          bg: 'bg-[#1b4332]/10 text-[#1b4332] border-[#1b4332]/30',
          icon: CheckCircle2,
          label: 'پشتڕاستکراو',
        };
      case 'بەهێز پشتیوانی دەکرێت':
        return {
          bg: 'bg-[#0f4c81]/10 text-[#0f4c81] border-[#0f4c81]/30',
          icon: ShieldCheck,
          label: 'بەهێز پشتیوانی دەکرێت',
        };
      case 'لە سەرچاوەکاندا جیاوازی هەیە':
        return {
          bg: 'bg-[#801b22]/10 text-[#801b22] border-[#801b22]/30',
          icon: HelpCircle,
          label: 'لە سەرچاوەکاندا جیاوازی هەیە',
        };
      case 'ناسراوە بە پەیوەندی بە مێژووی کورد':
        return {
          bg: 'bg-[#c59b27]/20 text-[#634902] border-[#c59b27]/40',
          icon: ShieldCheck,
          label: 'پەیوەندیدار بە مێژووی کورد',
        };
      default:
        return {
          bg: 'bg-gray-100 text-gray-700 border-gray-300',
          icon: HelpCircle,
          label: status,
        };
    }
  };

  const statusInfo = getStatusBadge(figure.kurdishIdentityStatus);
  const StatusIcon = statusInfo.icon;

  return (
    <div
      onClick={() => onSelect(figure)}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-[#c59b27]/30 hover:border-[#801b22] transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden group border-t-4 border-t-[#801b22]"
    >
      {/* Background subtle manuscript geometry */}
      <div className="absolute top-2 left-2 text-[#c59b27] opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity">
        <KurdishStarMedallion className="w-16 h-16" color="#c59b27" />
      </div>

      <div>
        {/* Header Row: Category Badge & Favorite Button */}
        <div className="flex items-center justify-between gap-2 mb-3 z-10 relative">
          <span className="text-[11px] font-bold font-serif text-[#801b22] bg-[#801b22]/10 px-2.5 py-1 rounded-md border border-[#801b22]/20">
            {figure.category}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold font-serif text-[#1b4332] bg-[#1b4332]/10 px-2 py-0.5 rounded border border-[#1b4332]/20">
              «{figure.period}»
            </span>

            <button
              onClick={(e) => onToggleFavorite(e, figure.id)}
              className="p-1.5 rounded-lg bg-[#f5efe0] hover:bg-[#e2d2b8] text-[#801b22] transition-colors"
              title="زیادکردن بۆ دڵخوازەکان"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-[#801b22]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title and Alternate Names */}
        <div className="mb-2">
          <h3 className="font-serif font-extrabold text-lg text-[#2c1b0e] group-hover:text-[#801b22] transition-colors">
            {figure.name}
          </h3>
          {figure.kurdishName && figure.kurdishName !== figure.name && (
            <p className="text-xs text-[#671217] font-serif font-medium mt-0.5">
              {figure.kurdishName}
            </p>
          )}
        </div>

        {/* Key Info Metadata Pills */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#523d2c] font-serif mb-3">
          {(figure.birthYear || figure.deathYear) && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{figure.birthYear || '?'} - {figure.deathYear || '?'}</span>
            </span>
          )}

          {figure.region && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#801b22]" />
              <span>{figure.cityOrPlace || figure.region}</span>
            </span>
          )}
        </div>

        {/* Short Biography excerpt */}
        <p className="text-xs text-[#3c2817] font-serif leading-relaxed line-clamp-3 mb-4">
          {figure.biography}
        </p>
      </div>

      {/* Footer Row: Source Status Tag & Read More Button */}
      <div className="pt-3 border-t border-[#f0e6d2] flex items-center justify-between gap-2 mt-auto">
        <div
          className={`flex items-center gap-1 text-[10px] font-bold font-serif px-2 py-0.5 rounded-md border ${statusInfo.bg}`}
          title="دۆخی سەرچاوە مێژووییەکان"
        >
          <StatusIcon className="w-3 h-3" />
          <span>{statusInfo.label}</span>
        </div>

        <button className="py-1.5 px-3 bg-[#f5efe0] text-[#801b22] border border-[#801b22]/40 rounded-lg text-xs font-serif font-bold group-hover:bg-[#801b22] group-hover:text-white transition-all shadow-2xs">
          زیاتر بخوێنەوە
        </button>
      </div>
    </div>
  );
}
