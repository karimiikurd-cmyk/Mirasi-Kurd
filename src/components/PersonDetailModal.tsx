import React from 'react';
import { Person } from '../types';
import { X, Bookmark, Calendar, MapPin, Award, BookOpen, Scroll, CheckCircle2, Quote } from 'lucide-react';
import { KurdishOrnamentalDivider, ParchmentCornerDecoration, KurdishStarMedallion } from './KurdishPattern';

interface PersonDetailModalProps {
  person: Person | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
}

export const PersonDetailModal: React.FC<PersonDetailModalProps> = ({
  person,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#faf6ed] border-2 border-[#c59b27] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col dir-rtl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#f0e6d2] px-5 py-3 border-b-2 border-[#d8c4a9] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <KurdishStarMedallion className="w-5 h-5" color="#801b22" />
            <span className="font-serif font-bold text-sm text-[#801b22]">
              پەرتووکخانەی ئەنسایکڵۆپیدیای کەلتووری
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => onToggleFavorite(e, person.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                isFavorite
                  ? 'bg-[#801b22] text-white shadow-xs'
                  : 'bg-[#ede3ce] text-[#801b22] hover:bg-[#801b22] hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
              <span>دڵخوازەکان</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#ede3ce] hover:bg-[#801b22] text-[#3c2817] hover:text-white transition-colors"
              title="داخستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 relative">
          <ParchmentCornerDecoration />

          {/* Hero Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-right border-b border-[#e5d2b8] pb-6">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-[#c59b27] shadow-md bg-[#ede3ce] flex-shrink-0">
              <img
                src={person.imageResource}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-2">
              <span className="inline-block px-3 py-1 rounded-md bg-[#801b22]/15 border border-[#801b22]/30 text-[#801b22] text-xs font-bold font-serif">
                {person.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#2c1b0e]">
                {person.name}
              </h2>

              {person.alternateName && (
                <p className="text-sm font-serif text-[#671217]">
                  {person.alternateName}
                </p>
              )}

              {/* Profile Metadata */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-[#5c4433] pt-2">
                <div className="flex items-center gap-1.5 bg-[#f5efe0] px-2.5 py-1 rounded-lg border border-[#e2d2b8]">
                  <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>ساڵی لەدایکبوون و وەفات: {person.birthYear} - {person.deathYear}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f5efe0] px-2.5 py-1 rounded-lg border border-[#e2d2b8]">
                  <MapPin className="w-3.5 h-3.5 text-[#1b4332]" />
                  <span>شوێنی لەدایکبوون: {person.birthPlace}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section if available */}
          {person.quote && (
            <div className="relative bg-[#f5efe0] border-r-4 border-[#801b22] p-4 rounded-l-xl text-[#3c2817] font-serif italic text-sm sm:text-base leading-relaxed shadow-2xs">
              <Quote className="w-5 h-5 text-[#801b22] opacity-40 mb-1" />
              <p>{person.quote}</p>
            </div>
          )}

          {/* 1. žiyanama (Biography) */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#801b22] flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
              <Scroll className="w-5 h-5" />
              <span>«ژیاننامە»</span>
            </h3>
            <p className="text-sm sm:text-base text-[#2c1b0e] leading-relaxed font-serif bg-[#f5efe0]/80 p-4 rounded-xl border border-[#e2d2b8]">
              {person.biography}
            </p>
          </section>

          {/* 2. berhemekan (Works) */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#801b22] flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
              <BookOpen className="w-5 h-5" />
              <span>«بەرهەمەکان»</span>
            </h3>
            <ul className="space-y-2 font-serif text-sm text-[#2c1b0e]">
              {person.works.map((work, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#f5efe0]/80 p-2.5 rounded-lg border border-[#e2d2b8]">
                  <CheckCircle2 className="w-4 h-4 text-[#1b4332] mt-0.5 flex-shrink-0" />
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. karigery u beshdary (Contribution) */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#801b22] flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
              <Award className="w-5 h-5" />
              <span>«کاریگەری و بەشداری»</span>
            </h3>
            <p className="text-sm sm:text-base text-[#2c1b0e] leading-relaxed font-serif bg-[#f5efe0]/80 p-4 rounded-xl border border-[#e2d2b8]">
              {person.contribution}
            </p>
          </section>

          {/* 4. gringyy mizhouyy (Historical Importance) */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#801b22] flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
              <KurdishStarMedallion className="w-5 h-5" color="#801b22" />
              <span>«گرنگیی مێژوویی»</span>
            </h3>
            <p className="text-sm sm:text-base text-[#2c1b0e] leading-relaxed font-serif bg-[#f5efe0]/80 p-4 rounded-xl border border-[#e2d2b8]">
              {person.historicalImportance}
            </p>
          </section>

          {/* 5. serchawekan (Sources) */}
          <section className="space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#801b22] flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
              <Scroll className="w-4 h-4" />
              <span>«سەرچاوەکان»</span>
            </h3>
            <ul className="list-disc list-inside text-xs text-[#5c4433] space-y-1 font-serif bg-[#f5efe0]/50 p-3 rounded-lg border border-[#e2d2b8]">
              {person.sources.map((src, idx) => (
                <li key={idx}>{src}</li>
              ))}
            </ul>
          </section>

          <KurdishOrnamentalDivider />
        </div>
      </div>
    </div>
  );
};
