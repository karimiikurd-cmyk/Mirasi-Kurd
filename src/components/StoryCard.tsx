import React from 'react';
import { Story } from '../types';
import { Bookmark, BookOpen, MapPin, Clock } from 'lucide-react';
import { KurdishStarMedallion } from './KurdishPattern';

interface StoryCardProps {
  story: Story;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, storyId: string) => void;
  onSelect: (story: Story) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  return (
    <div 
      onClick={() => onSelect(story)}
      className="group relative bg-[#faf6ed] hover:bg-[#fffcf7] border-2 border-[#d8c4a9] hover:border-[#1b4332] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Category & Favorite Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-md bg-[#1b4332]/10 border border-[#1b4332]/20 text-[#1b4332] text-xs font-bold font-serif">
            {story.category}
          </span>

          <button
            onClick={(e) => onToggleFavorite(e, story.id)}
            className={`p-2 rounded-xl transition-all ${
              isFavorite
                ? 'bg-[#801b22] text-white shadow-xs'
                : 'bg-[#f0e6d2] text-[#801b22] hover:bg-[#801b22] hover:text-white'
            }`}
            title="زیادکردن بۆ دڵخوازەکان"
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-serif text-[#2c1b0e] group-hover:text-[#1b4332] transition-colors mb-2">
          {story.title}
        </h3>

        {/* Region & Time */}
        <div className="flex items-center gap-3 text-xs text-[#5c4433] mb-3 font-serif">
          {story.region && (
            <span className="flex items-center gap-1 bg-[#f5efe0] px-2 py-0.5 rounded border border-[#e2d2b8]">
              <MapPin className="w-3 h-3 text-[#801b22]" />
              {story.region}
            </span>
          )}
          <span className="flex items-center gap-1 bg-[#f5efe0] px-2 py-0.5 rounded border border-[#e2d2b8]">
            <Clock className="w-3 h-3 text-[#c59b27]" />
            خوێندنەوە: {story.readTimeMinutes} خولەک
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#3c2817] line-clamp-3 mb-4 leading-relaxed font-serif bg-[#f5efe0]/60 p-3 rounded-lg border border-[#e2d2b8]">
          {story.shortDescription}
        </p>
      </div>

      {/* Footer Read Action */}
      <div className="pt-3 border-t border-[#e5d2b8] flex items-center justify-between text-xs font-bold text-[#1b4332] group-hover:text-[#143225]">
        <span className="flex items-center gap-1.5 font-serif">
          <BookOpen className="w-4 h-4" />
          خوێندنەوەی بەسەرهات
        </span>
        <span className="px-3 py-1 bg-[#1b4332] text-white rounded-lg shadow-2xs text-xs font-serif font-bold group-hover:bg-[#143225] transition-colors">
          خوێندنەوە
        </span>
      </div>
    </div>
  );
};
