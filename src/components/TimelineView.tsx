import React, { useState } from 'react';
import { HistoricalFigure, HistoricalPeriodType, SourceStatusType } from '../types';
import { HISTORICAL_FIGURES } from '../data/historicalFigures';
import { HistoricalFigureCard } from './HistoricalFigureCard';
import { HistoricalFigureModal } from './HistoricalFigureModal';
import { KurdishStarMedallion, ParchmentCornerDecoration, KurdishOrnamentalDivider } from './KurdishPattern';
import { 
  History, 
  Search, 
  Filter, 
  MapPin, 
  ShieldAlert, 
  Clock, 
  Sparkles, 
  ChevronLeft, 
  X,
  Compass,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface TimelineViewProps {
  favoriteIds: string[];
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  initialSearchQuery?: string;
  onSelectRegion?: (region: string) => void;
}

export function TimelineView({
  favoriteIds,
  onToggleFavorite,
  initialSearchQuery = '',
  onSelectRegion,
}: TimelineViewProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('هەموو سەردەمەکان');
  const [selectedCategory, setSelectedCategory] = useState<string>('هەموویان');
  const [selectedRegion, setSelectedRegion] = useState<string>('هەموویان');
  const [selectedStatus, setSelectedStatus] = useState<string>('هەموویان');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null);

  // Period list for timeline navigation
  const periods: { key: string; label: string; yearRange: string }[] = [
    { key: 'هەموو سەردەمەکان', label: 'هەموو سەردەمەکان', yearRange: 'سەرجەم سەردەمە مێژووییەکان' },
    { key: 'سەردەمی کۆن', label: 'سەردەمی کۆن', yearRange: 'پێش زایین - سەدەی ٦ ز' },
    { key: 'سەردەمی ناوەڕاست', label: 'سەردەمی ناوەڕاست', yearRange: 'سەدەی ٧ - ١٢ ز' },
    { key: 'سەردەمی ئەیوبییەکان', label: 'سەردەمی ئەیوبییەکان', yearRange: 'سەدەی ١٢ - ١٣ ز' },
    { key: 'سەدەکانی ١٦ و ١٧', label: 'سەدەکانی ١٦ و ١٧', yearRange: '١٥٠٠ - ١٧٠٠ ز' },
    { key: 'سەدەی ١٨', label: 'سەدەی ١٨', yearRange: '١٧٠٠ - ١٨٠٠ ز' },
    { key: 'سەدەی ١٩', label: 'سەدەی ١٩', yearRange: '١٨٠٠ - ١٩٠٠ ز' },
    { key: 'سەدەی ٢٠', label: 'سەدەی ٢٠', yearRange: '١٩٠٠ - ٢٠٠٠ ز' },
    { key: 'سەردەمی هاوچەرخ', label: 'سەردەمی هاوچەرخ', yearRange: '٢٠٠٠ تا ئەمڕۆ' },
  ];

  // Categories list
  const categories = [
    'هەموویان',
    'پادشا و فەرمانڕەواکان',
    'میر و ئەمیرەکان',
    'شێخ و زانایان',
    'شاعیران',
    'نووسەران',
    'زانایان',
    'کەسایەتییە کەلتوورییەکان',
  ];

  // Regions list
  const regions = [
    'هەموویان',
    'کوردستانی عێراق',
    'کوردستانی باکوور',
    'کوردستانی ڕۆژهەڵات',
    'کوردستانی ڕۆژئاوا',
    'شام و میسر',
  ];

  // Statuses list
  const statusOptions = [
    'هەموویان',
    'پشتڕاستکراو',
    'بەهێز پشتیوانی دەکرێت',
    'لە سەرچاوەکاندا جیاوازی هەیە',
    'ناسراوە بە پەیوەندی بە مێژووی کورد',
  ];

  // Filtered Figures
  const filteredFigures = HISTORICAL_FIGURES.filter((fig) => {
    const matchesPeriod =
      selectedPeriod === 'هەموو سەردەمەکان' || fig.period === selectedPeriod;

    const matchesCategory =
      selectedCategory === 'هەموویان' || fig.category === selectedCategory;

    const matchesRegion =
      selectedRegion === 'هەموویان' ||
      fig.region.includes(selectedRegion) ||
      (fig.cityOrPlace && fig.cityOrPlace.includes(selectedRegion));

    const matchesStatus =
      selectedStatus === 'هەموویان' || fig.kurdishIdentityStatus === selectedStatus;

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      fig.name.toLowerCase().includes(q) ||
      fig.kurdishName.toLowerCase().includes(q) ||
      (fig.alternateNames && fig.alternateNames.some((n) => n.toLowerCase().includes(q))) ||
      fig.biography.toLowerCase().includes(q) ||
      fig.period.toLowerCase().includes(q) ||
      fig.region.toLowerCase().includes(q) ||
      (fig.cityOrPlace && fig.cityOrPlace.toLowerCase().includes(q)) ||
      fig.category.toLowerCase().includes(q);

    return matchesPeriod && matchesCategory && matchesRegion && matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in font-serif">
      {/* Historical Section Hero Header */}
      <div className="bg-[#801b22] text-[#f5efe0] border-4 border-[#c59b27] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        
        {/* Background motif */}
        <div className="absolute left-3 top-2 opacity-10 pointer-events-none">
          <KurdishStarMedallion className="w-36 h-36" color="#ffffff" />
        </div>

        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#c59b27] text-[#2c1b0e] flex items-center justify-center font-bold">
              <History className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
              گەنجینەی مێژووی کورد
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            «مێژووی کەسایەتییەکان»
          </h2>

          <p className="text-xs sm:text-sm text-[#f5efe0]/90 max-w-2xl leading-relaxed">
            کۆکراوەی مێژوویی سەرکردە، میر، زانا، شاعیر و ڕووناکبیرانی کورد لە سەردەمی کۆن و ناوەڕاستەوە تا سەدەی بیستەم و سەردەمی هاوچەرخ بەپێی سەرچاوە زانستییەکان.
          </p>
        </div>
      </div>

      {/* Historical Search & Interactive Filters Bar */}
      <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-4 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بگەڕێ بۆ کەسایەتی، سەردەم، میرنشین، شار یان هۆز... (مێژووی ئەیوبی، بدلیس، خانی)"
            className="w-full bg-white border-2 border-[#d8c4a9] focus:border-[#801b22] rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm font-serif text-[#2c1b0e] focus:outline-none shadow-inner"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-[#801b22]"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#801b22]" />
          )}
        </div>

        {/* Chronological Timeline Ruler Tabs */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#801b22] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>هێڵی کاتیی سەردەمە مێژووییەکان:</span>
          </label>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {periods.map((p) => {
              const isActive = selectedPeriod === p.key;
              return (
                <button
                  key={p.key}
                  onClick={() => setSelectedPeriod(p.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex flex-col items-center gap-0.5 border ${
                    isActive
                      ? 'bg-[#801b22] text-white shadow-sm border-[#801b22]'
                      : 'bg-white text-[#3c2817] hover:bg-[#e2d2b8] border-[#d8c4a9]'
                  }`}
                >
                  <span>«{p.label}»</span>
                  <span className={`text-[10px] ${isActive ? 'text-[#c59b27]' : 'text-gray-500'}`}>
                    {p.yearRange}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter Chips: Category, Region, Status */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#d8c4a9]/60 text-xs">
          {/* Category Dropdown/Filter */}
          <div className="space-y-1">
            <span className="font-bold text-[#2c1b0e] block">هاوپۆل:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-[#d8c4a9] rounded-xl px-3 py-1.5 text-xs font-serif text-[#2c1b0e] focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div className="space-y-1">
            <span className="font-bold text-[#2c1b0e] block">ناوچە / دەڤەر:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-white border border-[#d8c4a9] rounded-xl px-3 py-1.5 text-xs font-serif text-[#2c1b0e] focus:outline-none"
            >
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Source Status Filter */}
          <div className="space-y-1">
            <span className="font-bold text-[#2c1b0e] block">دۆخی سەرچاوە:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-white border border-[#d8c4a9] rounded-xl px-3 py-1.5 text-xs font-serif text-[#2c1b0e] focus:outline-none"
            >
              {statusOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Header Summary */}
      <div className="flex items-center justify-between px-1 text-xs font-bold text-[#671217]">
        <span>دۆزراوەکان: ({filteredFigures.length} کەسایەتی)</span>
        {(selectedPeriod !== 'هەموو سەردەمەکان' || selectedCategory !== 'هەموویان' || selectedRegion !== 'هەموویان' || selectedStatus !== 'هەموویان' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedPeriod('هەموو سەردەمەکان');
              setSelectedCategory('هەموویان');
              setSelectedRegion('هەموویان');
              setSelectedStatus('هەموویان');
              setSearchQuery('');
            }}
            className="text-[#801b22] underline hover:text-[#671217]"
          >
            لابردنی فلتەرەکان
          </button>
        )}
      </div>

      {/* Figures Timeline Grid */}
      {filteredFigures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFigures.map((fig) => (
            <HistoricalFigureCard
              key={fig.id}
              figure={fig}
              isFavorite={favoriteIds.includes(fig.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={(f) => setSelectedFigure(f)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-[#801b22] mx-auto" />
          <p className="font-serif text-sm text-[#2c1b0e]">
            هیچ کەسایەتییەکی مێژوویی بەم پێوەرانە نەدۆزرایەوە.
          </p>
          <button
            onClick={() => {
              setSelectedPeriod('هەموو سەردەمەکان');
              setSelectedCategory('هەموویان');
              setSelectedRegion('هەموویان');
              setSelectedStatus('هەموویان');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#801b22] text-white text-xs font-bold rounded-xl shadow-xs"
          >
            نیشاندانی هەموو کەسایەتییەکان
          </button>
        </div>
      )}

      {/* Selected Figure Modal */}
      <HistoricalFigureModal
        figure={selectedFigure}
        onClose={() => setSelectedFigure(null)}
        isFavorite={selectedFigure ? favoriteIds.includes(selectedFigure.id) : false}
        onToggleFavorite={onToggleFavorite}
        allFigures={HISTORICAL_FIGURES}
        onSelectRelatedFigure={(rel) => setSelectedFigure(rel)}
      />

      <KurdishOrnamentalDivider />
    </div>
  );
}
