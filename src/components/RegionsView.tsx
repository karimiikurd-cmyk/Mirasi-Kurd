import React, { useState } from 'react';
import { HistoricalFigure } from '../types';
import { HISTORICAL_FIGURES } from '../data/historicalFigures';
import { HistoricalFigureCard } from './HistoricalFigureCard';
import { HistoricalFigureModal } from './HistoricalFigureModal';
import { ParchmentCornerDecoration, KurdishOrnamentalDivider, KurdishStarMedallion } from './KurdishPattern';
import { MapPin, Compass, Landmark, Users, ChevronLeft, ArrowRight } from 'lucide-react';

interface RegionsViewProps {
  favoriteIds: string[];
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onNavigateToTimelineWithRegion?: (regionName: string) => void;
}

export function RegionsView({
  favoriteIds,
  onToggleFavorite,
  onNavigateToTimelineWithRegion,
}: RegionsViewProps) {
  const [selectedRegionKey, setSelectedRegionKey] = useState<string>('کوردستانی عێراق');
  const [selectedCity, setSelectedCity] = useState<string>('هەموو شارەکان');
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null);

  const regionDefinitions = [
    {
      id: 'کوردستانی عێراق',
      title: 'کوردستانی عێراق (باشوور)',
      cities: ['سلێمانی', 'هەولێر', 'دۆهۆک', 'کەرکووک', 'هەڵەبجە'],
      description: 'لانکەی مەلیکایەتی شێخ مەحمود، میرنشینی بابان، و بنکەی ژیانی نالی، ئیبراهیم ئەحمەد، ئیبن خەلەکان و شێرکۆ بێکەس.',
    },
    {
      id: 'کوردستانی باکوور',
      title: 'کوردستانی باکوور (تورکیا)',
      cities: ['بدلیس', 'بایەزید', 'شەمزینان', 'ئامەد (دیاربەکر)', 'جەزیرەی بۆتان'],
      description: 'ناوچەی شەرەفخانی بدلیسی، ئەحمەدی خانی، شێخ عوبەیدوڵڵای نەهری و جەلادەت بەدرخان.',
    },
    {
      id: 'کوردستانی ڕۆژهەڵات',
      title: 'کوردستانی ڕۆژهەڵات (ئێران)',
      cities: ['مەهاباد', 'سنە', 'کرماشان', 'ورمێ', 'هەمەدان'],
      description: 'مەڵبەند و پایەتختی کۆماری کوردستان لە مەهاباد، میرنشینی ئەردەڵان و شوێنی مەستوورەی ئەردەڵان، قازی محەممەد و خانای قوبادی.',
    },
    {
      id: 'کوردستانی ڕۆژئاوا',
      title: 'کوردستانی ڕۆژئاوا (سوریا)',
      cities: ['عەفرین', 'قامیشلۆ', 'کۆبانی'],
      description: 'مەڵبەندی ڕووناکبیری و خەباتی بەدرخانییەکان، دەرکردنی گۆڤاری هاوار لە دیمەشق و ناوچە کەلتوورییەکانی باکووری ڕۆژئاوا.',
    },
    {
      id: 'شام و میسر',
      title: 'شام، میسر و جەزیرە',
      cities: ['دیمەشق', 'قاهیرە', 'تکریت'],
      description: 'سەردەمی زێڕینی بنەماڵەی ئەیوبی و حکومڕانی سەلاحەدینی ئەیوبی لە قودس، قاهیرە و شام.',
    },
  ];

  const currentRegionDef = regionDefinitions.find((r) => r.id === selectedRegionKey) || regionDefinitions[0];

  // Filter historical figures by selected region and city
  const regionFigures = HISTORICAL_FIGURES.filter((fig) => {
    const matchesRegion =
      fig.region.includes(selectedRegionKey) ||
      (fig.cityOrPlace && fig.cityOrPlace.includes(selectedRegionKey)) ||
      fig.relatedPlaces.some((p) => p.includes(selectedRegionKey));

    const matchesCity =
      selectedCity === 'هەموو شارەکان' ||
      (fig.cityOrPlace && fig.cityOrPlace.includes(selectedCity)) ||
      fig.relatedPlaces.some((p) => p.includes(selectedCity));

    return matchesRegion && matchesCity;
  });

  return (
    <div className="space-y-6 animate-fade-in font-serif">
      {/* Region Header */}
      <div className="bg-[#1b4332] text-[#f5efe0] border-4 border-[#c59b27] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <ParchmentCornerDecoration />
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 rounded-lg bg-[#c59b27] text-[#2c1b0e] flex items-center justify-center font-bold">
            <Compass className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
            نەخشەی کەلتووری و جوغرافیایی
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          «ناوچەکان و کەسایەتییە مێژووییەکان»
        </h2>
        <p className="text-xs sm:text-sm text-[#f5efe0]/90 leading-relaxed max-w-xl">
          بگەڕێ لە نێوان ناوچە، هەرێم و شارە مێژووییەکانی کوردستاندا بۆ دۆزینەوەی ئەو کەسایەتی و سەرکردانەی له هەر ناوچەیەکدا ژیاون و خزمەتیان کردووە.
        </p>
      </div>

      {/* Region Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {regionDefinitions.map((reg) => {
          const isActive = selectedRegionKey === reg.id;
          return (
            <button
              key={reg.id}
              onClick={() => {
                setSelectedRegionKey(reg.id);
                setSelectedCity('هەموو شارەکان');
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#1b4332] text-white shadow-sm border-[#1b4332]'
                  : 'bg-white text-[#3c2817] hover:bg-[#f5efe0] border-[#d8c4a9]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{reg.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Region Overview Box */}
      <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-[#1b4332] flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#801b22]" />
              <span>«{currentRegionDef.title}»</span>
            </h3>
            <p className="text-xs text-[#3c2817] mt-1 leading-relaxed">
              {currentRegionDef.description}
            </p>
          </div>
        </div>

        {/* Cities Chips */}
        <div className="pt-2 border-t border-[#d8c4a9] flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-[#801b22]">شارە سەرەکییەکان:</span>
          <button
            onClick={() => setSelectedCity('هەموو شارەکان')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
              selectedCity === 'هەموو شارەکان'
                ? 'bg-[#801b22] text-white border-[#801b22]'
                : 'bg-white text-[#3c2817] border-[#d8c4a9]'
            }`}
          >
            هەموو شارەکان
          </button>
          {currentRegionDef.cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                selectedCity === city
                  ? 'bg-[#801b22] text-white border-[#801b22]'
                  : 'bg-white text-[#3c2817] border-[#d8c4a9]'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Regional Figures Listing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#d8c4a9] pb-2">
          <h3 className="text-base font-bold text-[#801b22] flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>کەسایەتییەکانی {selectedCity !== 'هەموو شارەکان' ? `شاری «${selectedCity}»` : `ناوچەی «${selectedRegionKey}»`} ({regionFigures.length})</span>
          </h3>

          {onNavigateToTimelineWithRegion && (
            <button
              onClick={() => onNavigateToTimelineWithRegion(selectedRegionKey)}
              className="text-xs font-bold text-[#1b4332] hover:text-[#143225] flex items-center gap-1"
            >
              <span>بینینی له هێڵی کاتی دا</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {regionFigures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regionFigures.map((fig) => (
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
          <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-8 text-center text-xs text-[#7a6452]">
            هیچ کەسایەتییەکی مێژوویی بڕواپێکراو بۆ ئەم شارە لە بنکەدراوەدا بەم ناوە دانەنراوە.
          </div>
        )}
      </div>

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
