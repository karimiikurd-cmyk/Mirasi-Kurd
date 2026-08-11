import React from 'react';
import { Person } from '../types';
import { Bookmark, ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { KurdishStarMedallion } from './KurdishPattern';

interface PersonCardProps {
  person: Person;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, personId: string) => void;
  onSelect: (person: Person) => void;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  person,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  return (
    <div 
      onClick={() => onSelect(person)}
      className="group relative bg-[#faf6ed] hover:bg-[#fffcf7] border-2 border-[#d8c4a9] hover:border-[#801b22] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle top corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#c59b27]/20 to-transparent rounded-bl-full pointer-events-none" />

      <div>
        {/* Header with Portrait and Category */}
        <div className="flex items-start gap-3.5 mb-3">
          {/* Portrait Image Placeholder */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#c59b27] bg-[#ede3ce] flex-shrink-0 shadow-xs">
            <img
              src={person.imageResource}
              alt={person.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Category badge */}
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#801b22]/10 border border-[#801b22]/20 text-[#801b22] text-[11px] font-bold font-serif mb-1">
              {person.category}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold font-serif text-[#2c1b0e] truncate group-hover:text-[#801b22] transition-colors">
              {person.name}
            </h3>

            {/* Alternate / Full Name */}
            {person.alternateName && (
              <p className="text-xs text-[#671217] truncate opacity-90 font-serif">
                {person.alternateName}
              </p>
            )}

            {/* Dates / Birthplace */}
            <div className="flex flex-wrap items-center gap-[#801b22] text-[11px] text-[#5c4433] mt-1.5 font-sans">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#c59b27]" />
                {person.birthYear} - {person.deathYear}
              </span>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => onToggleFavorite(e, person.id)}
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

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#3c2817] line-clamp-3 mb-4 leading-relaxed font-serif bg-[#f5efe0]/60 p-2.5 rounded-lg border border-[#e2d2b8]">
          {person.shortDescription}
        </p>
      </div>

      {/* Footer Read More Button */}
      <div className="pt-2 border-t border-[#e5d2b8] flex items-center justify-between text-xs font-bold text-[#801b22] group-hover:text-[#671217]">
        <span className="flex items-center gap-1.5 font-serif">
          <KurdishStarMedallion className="w-3.5 h-3.5" color="#801b22" />
          زياتر بخوێنەوە
        </span>
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
