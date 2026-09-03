import React, { useState } from 'react';
import { Person } from '../types';
import { X, Bookmark, Calendar, MapPin, Award, BookOpen, Scroll, CheckCircle2, Quote } from 'lucide-react';
import { KurdishOrnamentalDivider, ParchmentCornerDecoration, KurdishStarMedallion } from './KurdishPattern';
import { FigureGallerySection } from './FigureGallerySection';
import { SmartImage } from './SmartImage';
import { LightboxModal, LightboxImageItem } from './LightboxModal';

interface PersonDetailModalProps {
  person: Person | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onOpenDiwanNali?: () => void;
  onOpenDiwanKhani?: () => void;
  onOpenDiwanSherko?: () => void;
  onOpenDiwanSheikhOthman?: () => void;
  onOpenSirajAlQulub?: () => void;
  onOpenBarPahnayeYad?: () => void;
  onOpenSirajMunir?: () => void;
  onOpenZhaniGal?: () => void;
}

export const PersonDetailModal: React.FC<PersonDetailModalProps> = ({
  person,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenDiwanNali,
  onOpenDiwanKhani,
  onOpenDiwanSherko,
  onOpenDiwanSheikhOthman,
  onOpenSirajAlQulub,
  onOpenBarPahnayeYad,
  onOpenSirajMunir,
  onOpenZhaniGal,
}) => {
  const [isHeroLightboxOpen, setIsHeroLightboxOpen] = useState(false);

  if (!person) return null;

  const heroLightboxImages: LightboxImageItem[] = [
    {
      url: person.imageResource || '',
      title: person.name,
      caption: `${person.name} (${person.birthYear} - ${person.deathYear}) - ${person.category}`,
      figureName: person.name,
      category: person.category,
      hasRealPhoto: person.hasRealPhoto,
      source: person.photoSourceNote || 'سەرچاوەی مێژوویی',
    },
  ];

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
              <SmartImage
                src={person.imageResource}
                fallbackSrcs={person.gallery?.map((g) => g.url)}
                alt={person.name}
                fallbackTitle={person.name}
                fallbackSubtitle="وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە"
                category={person.category}
                onClick={() => setIsHeroLightboxOpen(true)}
                showZoomOnHover={true}
                objectFit="cover"
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

          {/* Hero Lightbox Modal */}
          {isHeroLightboxOpen && (
            <LightboxModal
              isOpen={isHeroLightboxOpen}
              onClose={() => setIsHeroLightboxOpen(false)}
              images={heroLightboxImages}
            />
          )}

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

          {/* Special Entry Card for Diwan Nali */}
          {person.id === 'nali' && (
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

          {/* Special Entry Card for Diwan Ehmedê Xanî */}
          {(person.id === 'ahmad-khani' || person.id === 'ahmad-i-khani') && (
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
                    سەرجەم هۆنراوە و غەزەلیاتی ئەحمەدی خانی لە دیوانا ئەحمەدێ خانی
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#2c1b0e] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                خوێندنەوەی دیوان ←
              </span>
            </div>
          )}

          {/* Special Entry Card for Diwan Sherko Bekas */}
          {person.id === 'sherko-bekas' && (
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
                    سەرجەم هۆنراوە و بەرهەمەکانی شێرکۆ بێکەس (دەربەندی پەپوولە، بۆننامە، ملوانکە و دیوان)
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#2c1b0e] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                خوێندنەوەی دیوان ←
              </span>
            </div>
          )}

          {/* Special Entry Cards for Sheikh Othman Sirajaddin (Separate: Siraj al-Qulub & Bar Pahnaye Yad) */}
          {person.id === 'sheikh-othman-sirajaddin' && (
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
          {person.id === 'ibrahim-ahmad' && (
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
                      دەقی تەواوی هەموو ١٩ بەشەکەی ڕۆمانی بەناوبانگی «ژانی گەل» بە شێوەیەکی ڕێکخراو، پێناسە، پوختە و لێکۆڵینەوەی ئەدەبی
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-2 bg-[#b8860b] hover:bg-[#d6aa32] text-[#1c3e23] font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1">
                  خوێندنەوەی ژانی گەل ←
                </span>
              </div>
            </div>
          )}

          {/* Gallery Section */}
          <FigureGallerySection gallery={person.gallery} figureName={person.name} />

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
