import React, { useState } from 'react';
import { Person, Story } from '../types';
import { PersonCard } from './PersonCard';
import { StoryCard } from './StoryCard';
import { Bookmark, Users, BookOpen } from 'lucide-react';
import { KurdishOrnamentalDivider, ParchmentCornerDecoration } from './KurdishPattern';

interface FavoritesViewProps {
  favoriteIds: string[];
  people: Person[];
  stories: Story[];
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onSelectPerson: (person: Person) => void;
  onSelectStory: (story: Story) => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteIds,
  people,
  stories,
  onToggleFavorite,
  onSelectPerson,
  onSelectStory,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'people' | 'stories'>('people');

  const favoritedPeople = people.filter((p) => favoriteIds.includes(p.id));
  const favoritedStories = stories.filter((s) => favoriteIds.includes(s.id));

  return (
    <div className="space-y-6 dir-rtl animate-fade-in">
      {/* Top Banner */}
      <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <ParchmentCornerDecoration />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#801b22] text-white flex items-center justify-center font-bold">
            <Bookmark className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-[#2c1b0e]">
              «دڵخوازەکانی من»
            </h2>
            <p className="text-xs text-[#671217] font-serif">
              ئەو کەسایەتی و چیرۆکانەی هەڵتگرتوون
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#e5d2b8] pb-2 font-serif">
        <button
          onClick={() => setActiveSubTab('people')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeSubTab === 'people'
              ? 'bg-[#801b22] text-white shadow-xs'
              : 'bg-[#f0e6d2] text-[#3c2817] hover:bg-[#e2d2b8]'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>کەسایەتییەکان ({favoritedPeople.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('stories')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeSubTab === 'stories'
              ? 'bg-[#1b4332] text-white shadow-xs'
              : 'bg-[#f0e6d2] text-[#3c2817] hover:bg-[#e2d2b8]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>چیرۆکەکان ({favoritedStories.length})</span>
        </button>
      </div>

      {/* People Favorites */}
      {activeSubTab === 'people' && (
        <>
          {favoritedPeople.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favoritedPeople.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                  onSelect={onSelectPerson}
                />
              ))}
            </div>
          ) : (
            <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center text-[#7a6452] space-y-2">
              <Users className="w-10 h-10 mx-auto text-[#c59b27]" />
              <h3 className="text-base font-bold font-serif text-[#2c1b0e]">
                هیچ کەسایەتییەک لە دڵخوازەکاندا نییە
              </h3>
              <p className="text-xs font-serif">
                دەتوانیت بە داگرتنی دوگمەی دڵخوازەکان کاتێک سەیری کەسایەتییەکان دەکەیت، لێرە پاشەکەوتیان بکەیت.
              </p>
            </div>
          )}
        </>
      )}

      {/* Stories Favorites */}
      {activeSubTab === 'stories' && (
        <>
          {favoritedStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favoritedStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                  onSelect={onSelectStory}
                />
              ))}
            </div>
          ) : (
            <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center text-[#7a6452] space-y-2">
              <BookOpen className="w-10 h-10 mx-auto text-[#c59b27]" />
              <h3 className="text-base font-bold font-serif text-[#2c1b0e]">
                هیچ چیرۆکێک لە دڵخوازەکاندا نییە
              </h3>
              <p className="text-xs font-serif">
                دەتوانیت بە داگرتنی دوگمەی دڵخوازەکان کاتێک سەیری چیرۆکەکان دەکەیت، لێرە پاشەکەوتیان بکەیت.
              </p>
            </div>
          )}
        </>
      )}

      <KurdishOrnamentalDivider />
    </div>
  );
};
