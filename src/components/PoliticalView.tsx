import React, { useState } from 'react';
import { HistoricalFigure, PoliticalSubcategoryType } from '../types';
import { HISTORICAL_FIGURES } from '../data/historicalFigures';
import { HistoricalFigureCard } from './HistoricalFigureCard';
import { HistoricalFigureModal } from './HistoricalFigureModal';
import { ParchmentCornerDecoration, KurdishOrnamentalDivider } from './KurdishPattern';
import { Landmark, ShieldAlert, Search, Filter, Sparkles, BookOpen, Clock, Users, Award, AlertTriangle, Scale } from 'lucide-react';

interface PoliticalViewProps {
  favoriteIds: string[];
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  initialSearchQuery?: string;
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
  onOpenDiwanNali?: () => void;
  onOpenDiwanKhani?: () => void;
  onOpenDiwanSherko?: () => void;
  onOpenDiwanSheikhOthman?: () => void;
  onOpenSirajAlQulub?: () => void;
  onOpenBarPahnayeYad?: () => void;
}

export function PoliticalView({
  favoriteIds,
  onToggleFavorite,
  initialSearchQuery = '',
  onOpenShareModal,
  onOpenDiwanNali,
  onOpenDiwanKhani,
  onOpenDiwanSherko,
  onOpenDiwanSheikhOthman,
  onOpenSirajAlQulub,
  onOpenBarPahnayeYad,
}: PoliticalViewProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('هەموو کەسایەتییە سیاسییەکان');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('هەموو سەردەمەکان');
  const [selectedRegion, setSelectedRegion] = useState<string>('هەموو ناوچەکان');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null);

  // Subcategories list
  const subcategories: { id: string; label: string }[] = [
    { id: 'هەموو کەسایەتییە سیاسییەکان', label: 'هەموو کەسایەتییە سیاسییەکان' },
    { id: 'فەرمانڕەوا و میرە کۆنەکان', label: 'فەرمانڕەوا و میرە کۆنەکان' },
    { id: 'سەرکردە سیاسییە مێژووییەکان', label: 'سەرکردە سیاسییە مێژووییەکان' },
    { id: 'ڕێبەرانی سیاسی', label: 'ڕێبەرانی سیاسی' },
    { id: 'دیپلۆماتەکان', label: 'دیپلۆمات و نوێنەران' },
    { id: 'کەسایەتییە سیاسییە هاوچەرخەکان', label: 'کەسایەتییە هاوچەرخەکان' },
    { id: 'کەسایەتییە سیاسییە ژنەکان', label: 'کەسایەتییە سیاسییە ژنەکان' },
  ];

  // Eras
  const periods = [
    'هەموو سەردەمەکان',
    'سەردەمی کۆن',
    'سەردەمی ناوەڕاست',
    'سەردەمی ئەیوبییەکان',
    'سەدەکانی ١٦ و ١٧',
    'سەدەی ١٨',
    'سەدەی ١٩',
    'سەدەی ٢٠',
    'سەردەمی هاوچەرخ',
  ];

  // Regions
  const regions = [
    'هەموو ناوچەکان',
    'کوردستانی عێراق',
    'کوردستانی باکوور',
    'کوردستانی ڕۆژهەڵات',
    'کوردستانی ڕۆژئاوا',
    'شام و میسر',
  ];

  // Filter figures for political section
  const politicalFigures = HISTORICAL_FIGURES.filter((fig) => {
    // Match political category or presence of political role/subcategory
    const isPolitical =
      fig.category === 'کەسایەتییە سیاسییەکان' ||
      fig.category === 'پادشا و فەرمانڕەواکان' ||
      fig.category === 'میر و ئەمیرەکان' ||
      !!fig.politicalSubcategory ||
      !!fig.politicalRole;

    if (!isPolitical) return false;

    const matchesSubcategory =
      selectedSubcategory === 'هەموو کەسایەتییە سیاسییەکان' ||
      fig.politicalSubcategory === selectedSubcategory ||
      (selectedSubcategory === 'کەسایەتییە سیاسییە ژنەکان' && fig.gender === 'ژن');

    const matchesPeriod =
      selectedPeriod === 'هەموو سەردەمەکان' || fig.period === selectedPeriod;

    const matchesRegion =
      selectedRegion === 'هەموو ناوچەکان' ||
      fig.region.includes(selectedRegion) ||
      (fig.cityOrPlace && fig.cityOrPlace.includes(selectedRegion));

    const matchesSearch =
      !searchQuery ||
      fig.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fig.kurdishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (fig.alternateNames && fig.alternateNames.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()))) ||
      (fig.politicalRole && fig.politicalRole.toLowerCase().includes(searchQuery.toLowerCase())) ||
      fig.biography.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSubcategory && matchesPeriod && matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in font-serif">
      {/* Header Banner */}
      <div className="bg-[#2a1b12] text-[#f5efe0] border-4 border-[#c59b27] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 rounded-lg bg-[#c59b27] text-[#2a1b12] flex items-center justify-center font-bold">
            <Landmark className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
            ئەرشیفی بەڵگەنامەیی و مێژوویی
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f5efe0] mb-2">
          «کەسایەتییە سیاسییەکان و مێژووی حوکمڕانی»
        </h2>
        <p className="text-xs sm:text-sm text-[#f5efe0]/85 leading-relaxed max-w-2xl">
          کۆکراوەی بەڵگەدار لەسەر فەرمانڕەوایان، میرەکان، ڕێبەرانی سیاسی، دیپلۆماتکاران و کەسایەتییە مێژوویییەکانی حوکمڕانی، بە زمانێکی زانستی و بێلایەنانە.
        </p>

        {/* Neutrality Note Banner */}
        <div className="mt-4 p-3 bg-[#1c130d]/80 border border-[#c59b27]/40 rounded-xl flex items-start gap-2.5 text-xs text-[#d9cbb3]">
          <Scale className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
          <p>
            تێبینیی ئەکادیمی: زانیارییەکانی ئەم بەشە لە سەرچاوە مێژوویییە باوەڕپێکراوەکان و توێژینەوە زانستییەکان وەرگیراون. لەو شوێنانەی کە ناسنامەی مێژوویی یان بۆچوونی سەرچاوەکان جیاوازە، بێلایەنیی زانستی پارێزراوە.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-[#fcfaf7] dark:bg-[#241e19] border border-[#d3c2a3] dark:border-[#42362b] p-4 rounded-2xl shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b]" />
          <input
            type="text"
            placeholder="گەڕان بەدوای کەسایەتیی سیاسی، ڕۆڵی سیاسی یان ڕووداو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 bg-[#f5efe0] dark:bg-[#1a1612] border border-[#d3c2a3] dark:border-[#42362b] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8c2318] text-[#2c1b0e] dark:text-[#ebe5df]"
          />
        </div>

        {/* Subcategories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {subcategories.map((sub) => {
            const isActive = selectedSubcategory === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcategory(sub.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#8c2318] text-white border-[#8c2318] shadow-sm'
                    : 'bg-[#f5efe0] dark:bg-[#1a1612] text-[#5c4a3e] dark:text-[#c4b5a5] border-[#d3c2a3] dark:border-[#42362b] hover:bg-[#eae1d0]'
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>

        {/* Period & Region Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[#e2d5c3] dark:border-[#382d24]">
          <div>
            <label className="block text-xs font-bold text-[#5c4a3e] dark:text-[#c4b5a5] mb-1">
              سەردەمی مێژوویی:
            </label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-3 py-2 bg-[#f5efe0] dark:bg-[#1a1612] border border-[#d3c2a3] dark:border-[#42362b] rounded-xl text-xs text-[#2c1b0e] dark:text-[#ebe5df]"
            >
              {periods.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#5c4a3e] dark:text-[#c4b5a5] mb-1">
              ناوچە و دەڤەر:
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 bg-[#f5efe0] dark:bg-[#1a1612] border border-[#d3c2a3] dark:border-[#42362b] rounded-xl text-xs text-[#2c1b0e] dark:text-[#ebe5df]"
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Figures Grid */}
      {politicalFigures.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {politicalFigures.map((figure) => (
            <HistoricalFigureCard
              key={figure.id}
              figure={figure}
              isFavorite={favoriteIds.includes(figure.id)}
              onToggleFavorite={onToggleFavorite}
              onClick={() => setSelectedFigure(figure)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#fcfaf7] dark:bg-[#241e19] border border-dashed border-[#d3c2a3] dark:border-[#42362b] p-10 rounded-2xl text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-[#8c7a6b] mx-auto" />
          <h3 className="text-base font-bold text-[#2c1b0e] dark:text-[#ebe5df]">
            هیچ کەسایەتییەکی سیاسی بەپێی ئەم فلتەرانە نەدۆزرایەوە
          </h3>
          <p className="text-xs text-[#736254] dark:text-[#a89887] max-w-md mx-auto">
            تکایە فلتەرەکان یان زاراوەی گەڕانەکەت بگۆڕە بۆ بینینی کەسایەتییەکانی تر.
          </p>
          <button
            onClick={() => {
              setSelectedSubcategory('هەموو کەسایەتییە سیاسییەکان');
              setSelectedPeriod('هەموو سەردەمەکان');
              setSelectedRegion('هەموو ناوچەکان');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#1b4332] text-white rounded-xl text-xs font-bold hover:bg-[#2d6a4f] transition-colors"
          >
            لابردنی فلتەرەکان
          </button>
        </div>
      )}

      {/* Modal View for Figure */}
      {selectedFigure && (
        <HistoricalFigureModal
          figure={selectedFigure}
          isFavorite={favoriteIds.includes(selectedFigure.id)}
          onToggleFavorite={onToggleFavorite}
          onClose={() => setSelectedFigure(null)}
          onOpenShareModal={onOpenShareModal}
          onOpenDiwanNali={onOpenDiwanNali}
          onOpenDiwanKhani={onOpenDiwanKhani}
          onOpenDiwanSherko={onOpenDiwanSherko}
          onOpenDiwanSheikhOthman={onOpenDiwanSheikhOthman}
          onOpenSirajAlQulub={onOpenSirajAlQulub}
          onOpenBarPahnayeYad={onOpenBarPahnayeYad}
        />
      )}
    </div>
  );
}
