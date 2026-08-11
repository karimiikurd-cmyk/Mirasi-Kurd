import React, { useState } from 'react';
import { Story } from '../types';
import { X, Bookmark, MapPin, Clock, Scroll, BookOpen, Volume2, VolumeX } from 'lucide-react';
import { KurdishOrnamentalDivider, ParchmentCornerDecoration, KurdishStarMedallion } from './KurdishPattern';

interface StoryDetailModalProps {
  story: Story | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({
  story,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!story) return null;

  const toggleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(story.fullStory);
        utterance.lang = 'ku'; // Kurdish Sorani if voice engine available
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#faf6ed] border-2 border-[#c59b27] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col dir-rtl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#f0e6d2] px-5 py-3 border-b-2 border-[#d8c4a9] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <KurdishStarMedallion className="w-5 h-5" color="#1b4332" />
            <span className="font-serif font-bold text-sm text-[#1b4332]">
              چیرۆک و ئەفسانە کەلتوورییەکان
            </span>
          </div>

          <div className="flex items-center gap-2">
            {'speechSynthesis' in window && (
              <button
                onClick={toggleSpeech}
                className={`p-1.5 rounded-xl border border-[#d8c4a9] transition-all flex items-center gap-1 text-xs font-bold ${
                  isPlayingAudio ? 'bg-[#801b22] text-white animate-pulse' : 'bg-[#ede3ce] text-[#3c2817]'
                }`}
                title="خوێندنەوەی دەنگی"
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="hidden sm:inline">
                  {isPlayingAudio ? 'وەستاندن' : 'دەنگ'}
                </span>
              </button>
            )}

            <button
              onClick={(e) => onToggleFavorite(e, story.id)}
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

        {/* Scrollable Story Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 relative">
          <ParchmentCornerDecoration />

          {/* Title & Metadata */}
          <div className="border-b border-[#e5d2b8] pb-4">
            <span className="inline-block px-3 py-1 rounded-md bg-[#1b4332]/15 border border-[#1b4332]/30 text-[#1b4332] text-xs font-bold font-serif mb-2">
              {story.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#2c1b0e] mb-2">
              {story.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#5c4433]">
              {story.region && (
                <div className="flex items-center gap-1 bg-[#f5efe0] px-2.5 py-1 rounded border border-[#e2d2b8]">
                  <MapPin className="w-3.5 h-3.5 text-[#801b22]" />
                  <span>ناوچە: {story.region}</span>
                </div>
              )}
              <div className="flex items-center gap-1 bg-[#f5efe0] px-2.5 py-1 rounded border border-[#e2d2b8]">
                <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>کاتی خوێندنەوە: {story.readTimeMinutes} خولەک</span>
              </div>
            </div>
          </div>

          {/* Historical / Cultural Context */}
          {story.historicalContext && (
            <div className="bg-[#f5efe0] border-r-4 border-[#c59b27] p-4 rounded-l-xl text-xs sm:text-sm text-[#3c2817] font-serif leading-relaxed">
              <span className="font-bold text-[#801b22] block mb-1">
                «زانیاری و ڕوانگەی مێژوویی»
              </span>
              <p>{story.historicalContext}</p>
            </div>
          )}

          {/* Full Story Content */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-[#1b4332] flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
              <BookOpen className="w-5 h-5" />
              <span>«دەقی بەسەرهاتەکە»</span>
            </h3>

            <div className="text-base sm:text-lg text-[#2c1b0e] leading-loose font-serif bg-[#f5efe0]/80 p-5 rounded-xl border border-[#e2d2b8] whitespace-pre-line text-justify">
              {story.fullStory}
            </div>
          </div>

          {/* Moral or Theme */}
          {story.moralOrTheme && (
            <div className="bg-[#1b4332]/10 border border-[#1b4332]/30 p-3.5 rounded-xl text-xs sm:text-sm font-serif text-[#1b4332]">
              <span className="font-bold block mb-0.5">پەند و پەیامی داستان:</span>
              <span>{story.moralOrTheme}</span>
            </div>
          )}

          {/* Sources */}
          {story.sources.length > 0 && (
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#801b22] font-serif block">سەرچاوەکان:</span>
              <ul className="list-disc list-inside text-xs text-[#5c4433] space-y-0.5 font-serif">
                {story.sources.map((src, idx) => (
                  <li key={idx}>{src}</li>
                ))}
              </ul>
            </div>
          )}

          <KurdishOrnamentalDivider />
        </div>
      </div>
    </div>
  );
};
