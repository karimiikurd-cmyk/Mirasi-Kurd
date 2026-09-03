import React, { useState, useEffect } from 'react';
import { Person, Story, ActiveTab, DetailedWork, LiteratureWork } from './types';
import { INITIAL_PEOPLE } from './data/people';
import { INITIAL_STORIES } from './data/stories';
import { TopHeader } from './components/TopHeader';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { PersonCard } from './components/PersonCard';
import { PersonDetailModal } from './components/PersonDetailModal';
import { StoryCard } from './components/StoryCard';
import { StoryDetailModal } from './components/StoryDetailModal';
import { LiteratureSection } from './components/LiteratureSection';
import { FavoritesView } from './components/FavoritesView';
import { SettingsModal } from './components/SettingsModal';
import { MobileFrame } from './components/MobileFrame';
import { TimelineView } from './components/TimelineView';
import { RegionsView } from './components/RegionsView';
import { PoliticalView } from './components/PoliticalView';
import { ImageArchiveView } from './components/ImageArchiveView';
import { NaliPoetryView } from './components/NaliPoetryView';
import { KhaniPoetryView } from './components/KhaniPoetryView';
import { SherkoPoetryView } from './components/SherkoPoetryView';
import { SheikhOthmanView } from './components/SheikhOthmanView';
import { SirajAlQulubView } from './components/SirajAlQulubView';
import { BarPahnayeYadView } from './components/BarPahnayeYadView';
import { SirajMunirView } from './components/SirajMunirView';
import { ZhaniGalNovelView } from './components/ZhaniGalNovelView';
import { ALL_NALI_POEMS } from './data/nali';
import { ShareModal } from './components/ShareModal';
import { WorkDetailModal } from './components/WorkDetailModal';
import { KurdishStarMedallion, KurdishOrnamentalDivider, ParchmentCornerDecoration } from './components/KurdishPattern';
import { 
  Users, 
  BookOpen, 
  Search, 
  Compass, 
  Crown, 
  Feather, 
  PenTool, 
  Landmark, 
  ScrollText, 
  Sparkles,
  ChevronLeft,
  X,
  Filter,
  History,
  Camera,
  Share2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mira_favorites');
      return saved ? JSON.parse(saved) : ['sheikh-ubaydullah', 'mem-u-zin'];
    } catch {
      return ['sheikh-ubaydullah', 'mem-u-zin'];
    }
  });

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedWork, setSelectedWork] = useState<DetailedWork | LiteratureWork | null>(null);
  const [shareData, setShareData] = useState<{ title: string; text: string; url?: string } | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isDeviceFrame, setIsDeviceFrame] = useState(false);

  // Filters and Search
  const [searchQuery, setSearchQuery] = useState('');
  const [peopleCategoryFilter, setPeopleCategoryFilter] = useState<string>('هەموویان');
  const [storyCategoryFilter, setStoryCategoryFilter] = useState<string>('هەموویان');
  const [timelineRegionFilter, setTimelineRegionFilter] = useState<string>('');

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mira_favorites', JSON.stringify(favoriteIds));
    } catch (e) {
      console.error('Failed to save favorites to localStorage:', e);
    }
  }, [favoriteIds]);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenShare = (title: string, text: string, url?: string) => {
    setShareData({ title, text, url });
  };

  // Font size multiplier class
  const getFontSizeClass = () => {
    if (fontSize === 'sm') return 'text-xs';
    if (fontSize === 'lg') return 'text-base';
    return 'text-sm';
  };

  // Filtered People
  const filteredPeople = INITIAL_PEOPLE.filter((person) => {
    const matchesCategory =
      peopleCategoryFilter === 'هەموویان' ||
      (peopleCategoryFilter === 'شێخ و زانایان' && person.category === 'شێخ و زانایان') ||
      (peopleCategoryFilter === 'شاعیران' && person.category === 'شاعیران') ||
      (peopleCategoryFilter === 'نووسەران' && person.category === 'نووسەران') ||
      (peopleCategoryFilter === 'مێژوویی' && person.category.includes('مێژوویی')) ||
      (peopleCategoryFilter === 'کەلتووری' && person.category.includes('کەلتووری'));

    const matchesSearch =
      searchQuery.trim() === '' ||
      person.name.includes(searchQuery) ||
      (person.alternateName && person.alternateName.includes(searchQuery)) ||
      person.shortDescription.includes(searchQuery) ||
      person.biography.includes(searchQuery) ||
      person.category.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // Filtered Stories
  const filteredStories = INITIAL_STORIES.filter((story) => {
    const matchesCategory =
      storyCategoryFilter === 'هەموویان' || story.category === storyCategoryFilter;

    const matchesSearch =
      searchQuery.trim() === '' ||
      story.title.includes(searchQuery) ||
      story.shortDescription.includes(searchQuery) ||
      story.fullStory.includes(searchQuery) ||
      story.category.includes(searchQuery) ||
      (story.region && story.region.includes(searchQuery));

    return matchesCategory && matchesSearch;
  });

  // Home Categories Data
  const homeCategories = [
    {
      title: 'مێژووی کەسایەتییەکان',
      icon: History,
      count: 'سەردەمەکان',
      onClick: () => {
        setActiveTab('timeline');
      },
    },
    {
      title: 'کەسایەتییە سیاسییەکان',
      icon: Landmark,
      count: 'سیاسی و حوکمڕانی',
      onClick: () => {
        setActiveTab('political');
      },
    },
    {
      title: 'ئەرشیفی وێنەکان',
      icon: Camera,
      count: 'وێنەی بەڵگەدار',
      onClick: () => {
        setActiveTab('gallery');
      },
    },
    {
      title: 'شێخ و زانایان',
      icon: Crown,
      count: INITIAL_PEOPLE.filter((p) => p.category === 'شێخ و زانایان').length,
      onClick: () => {
        setPeopleCategoryFilter('شێخ و زانایان');
        setActiveTab('people');
      },
    },
    {
      title: 'شاعیران',
      icon: Feather,
      count: INITIAL_PEOPLE.filter((p) => p.category === 'شاعیران').length,
      onClick: () => {
        setPeopleCategoryFilter('شاعیران');
        setActiveTab('people');
      },
    },
    {
      title: 'ناوچەکان و نەخشە',
      icon: Compass,
      count: 'ناوچەکان',
      onClick: () => {
        setActiveTab('regions');
      },
    },
  ];

  return (
    <MobileFrame isDeviceFrame={isDeviceFrame}>
      <div className={`flex flex-col min-h-full pb-20 ${getFontSizeClass()}`}>
        {/* Sticky Top Bar */}
        <TopHeader
          favoriteCount={favoriteIds.length}
          onOpenFavorites={() => setActiveTab('favorites')}
          onOpenSettings={() => setIsSettingsOpen(true)}
          fontSize={fontSize}
          setFontSize={setFontSize}
          isDeviceFrame={isDeviceFrame}
          setIsDeviceFrame={setIsDeviceFrame}
        />

        {/* Main View Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-4 space-y-6">
          {/* ================= HOME TAB ================= */}
          {activeTab === 'home' && (
            <div className="space-y-6 animate-fade-in">
              {/* Cultural Hero Banner */}
              <HeroSection
                onSearchClick={() => setActiveTab('search')}
                onExplorePeople={() => {
                  setPeopleCategoryFilter('هەموویان');
                  setActiveTab('people');
                }}
                onExploreStories={() => setActiveTab('stories')}
              />

              {/* Category Cards Section */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold font-serif text-[#2c1b0e] flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#801b22]" />
                    <span>بەشەکانی ئەنسایکڵۆپیدیا</span>
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {homeCategories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={idx}
                        onClick={cat.onClick}
                        className="group bg-[#faf6ed] hover:bg-[#f5efe0] border-2 border-[#d8c4a9] hover:border-[#801b22] rounded-2xl p-4 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-sm flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[#801b22]/10 text-[#801b22] flex items-center justify-center group-hover:bg-[#801b22] group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <KurdishStarMedallion className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" color="#c59b27" />
                        </div>

                        <div>
                          <h3 className="font-serif font-bold text-sm text-[#2c1b0e] leading-snug group-hover:text-[#801b22]">
                            «{cat.title}»
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Featured People Section «کەسایەتییە دیارەکان» */}
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5d2b8] pb-2">
                  <h2 className="text-xl font-bold font-serif text-[#2c1b0e] flex items-center gap-2">
                    <KurdishStarMedallion className="w-5 h-5" color="#801b22" />
                    <span>«کەسایەتییە دیارەکان»</span>
                  </h2>

                  <button
                    onClick={() => {
                      setPeopleCategoryFilter('هەموویان');
                      setActiveTab('people');
                    }}
                    className="text-xs font-bold font-serif text-[#801b22] hover:text-[#671217] flex items-center gap-1"
                  >
                    <span>بینینی هەموویان</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INITIAL_PEOPLE.slice(0, 4).map((person) => (
                    <PersonCard
                      key={person.id}
                      person={person}
                      isFavorite={favoriteIds.includes(person.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelect={(p) => setSelectedPerson(p)}
                    />
                  ))}
                </div>
              </section>

              {/* Featured Story Callout */}
              <section className="bg-[#1b4332]/10 border-2 border-[#1b4332]/40 rounded-2xl p-5 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
                <ParchmentCornerDecoration />
                <div className="space-y-1 text-center sm:text-right">
                  <span className="text-xs font-bold font-serif text-[#1b4332] bg-[#1b4332]/20 px-2.5 py-0.5 rounded-md">
                    داستانی ڕۆژ
                  </span>
                  <h3 className="text-xl font-extrabold font-serif text-[#2c1b0e]">
                    «داستانی مەم و زێن»
                  </h3>
                  <p className="text-xs text-[#3c2817] font-serif max-w-lg">
                    شاکاری دڵداری و نیشتمانیی ئەحمەدی خانی لە جەزیرەی بۆتان.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStory(INITIAL_STORIES[0])}
                  className="bg-[#1b4332] hover:bg-[#143225] text-white font-serif font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all flex-shrink-0"
                >
                  خوێندنەوەی داستان
                </button>
              </section>

              <KurdishOrnamentalDivider />
            </div>
          )}

          {/* ================= HISTORICAL TIMELINE TAB «مێژووی کەسایەتییەکان» ================= */}
          {activeTab === 'timeline' && (
            <TimelineView
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              initialSearchQuery={timelineRegionFilter}
              onSelectRegion={(r) => {
                setTimelineRegionFilter(r);
              }}
              onOpenShareModal={handleOpenShare}
              onOpenDiwanNali={() => setActiveTab('nali')}
              onOpenDiwanKhani={() => setActiveTab('khani')}
              onOpenDiwanSherko={() => setActiveTab('sherko')}
              onOpenDiwanSheikhOthman={() => setActiveTab('siraj-al-qulub')}
              onOpenSirajAlQulub={() => setActiveTab('siraj-al-qulub')}
              onOpenBarPahnayeYad={() => setActiveTab('bar-pahnaye-yad')}
            />
          )}

          {/* ================= POLITICAL FIGURES TAB «کەسایەتییە سیاسییەکان» ================= */}
          {activeTab === 'political' && (
            <PoliticalView
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              onOpenShareModal={handleOpenShare}
              onOpenDiwanNali={() => setActiveTab('nali')}
              onOpenDiwanKhani={() => setActiveTab('khani')}
              onOpenDiwanSherko={() => setActiveTab('sherko')}
              onOpenDiwanSheikhOthman={() => setActiveTab('siraj-al-qulub')}
              onOpenSirajAlQulub={() => setActiveTab('siraj-al-qulub')}
              onOpenBarPahnayeYad={() => setActiveTab('bar-pahnaye-yad')}
            />
          )}

          {/* ================= IMAGE ARCHIVE GALLERY TAB «ئەرشیفی وێنەکان» ================= */}
          {activeTab === 'gallery' && (
            <ImageArchiveView
              onOpenShareModal={handleOpenShare}
            />
          )}

          {/* ================= REGIONS TAB «ناوچەکان» ================= */}
          {activeTab === 'regions' && (
            <RegionsView
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              onNavigateToTimelineWithRegion={(regionName) => {
                setTimelineRegionFilter(regionName);
                setActiveTab('timeline');
              }}
              onOpenDiwanNali={() => setActiveTab('nali')}
              onOpenDiwanKhani={() => setActiveTab('khani')}
              onOpenDiwanSherko={() => setActiveTab('sherko')}
              onOpenDiwanSheikhOthman={() => setActiveTab('siraj-al-qulub')}
              onOpenSirajAlQulub={() => setActiveTab('siraj-al-qulub')}
              onOpenBarPahnayeYad={() => setActiveTab('bar-pahnaye-yad')}
              onOpenSirajMunir={() => setActiveTab('siraj-munir')}
              onOpenZhaniGal={() => setActiveTab('zhani-gal')}
            />
          )}

          {/* ================= PEOPLE LIST TAB «کەسایەتییەکان» ================= */}
          {activeTab === 'people' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <ParchmentCornerDecoration />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#801b22] text-white flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-serif text-[#2c1b0e]">
                      «کەسایەتییەکان»
                    </h2>
                    <p className="text-xs text-[#671217] font-serif">
                      شەیخ و زانایان، شاعیران، نووسەران و سەرکردە مێژووییەکانی کورد
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Filtering Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-serif">
                <Filter className="w-4 h-4 text-[#801b22] flex-shrink-0" />
                {[
                  'هەموویان',
                  'شێخ و زانایان',
                  'شاعیران',
                  'نووسەران',
                  'مێژوویی',
                  'کەلتووری',
                ].map((chip) => {
                  const isActive = peopleCategoryFilter === chip;
                  return (
                    <button
                      key={chip}
                      onClick={() => setPeopleCategoryFilter(chip)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-[#801b22] text-white shadow-xs border border-[#801b22]'
                          : 'bg-[#f0e6d2] text-[#3c2817] hover:bg-[#e2d2b8] border border-[#d8c4a9]'
                      }`}
                    >
                      «{chip}»
                    </button>
                  );
                })}
              </div>

              {/* People Cards Grid */}
              {filteredPeople.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPeople.map((person) => (
                    <PersonCard
                      key={person.id}
                      person={person}
                      isFavorite={favoriteIds.includes(person.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelect={(p) => setSelectedPerson(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center text-[#7a6452]">
                  <p className="font-serif text-sm">
                    هیچ کەسایەتییەک لەم هاوپۆلەدا نەدۆزرایەوە.
                  </p>
                </div>
              )}

              <KurdishOrnamentalDivider />
            </div>
          )}

          {/* ================= STORIES TAB «چیرۆکەکان» ================= */}
          {activeTab === 'stories' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <ParchmentCornerDecoration />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1b4332] text-white flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-serif text-[#2c1b0e]">
                      «چیرۆک و ئەفسانەکان»
                    </h2>
                    <p className="text-xs text-[#1b4332] font-serif">
                      داستان، بەیت، لاوک و حیکایەتە ڕەسەنەکانی فۆلکلۆری کوردی
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Filtering Chips for Stories */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-serif">
                <Filter className="w-4 h-4 text-[#1b4332] flex-shrink-0" />
                {[
                  'هەموویان',
                  'چیرۆکی کۆن',
                  'ئەفسانە',
                  'چیرۆکی خەڵکی',
                  'چیرۆکی خۆشەویستی',
                  'چیرۆکی مێژوویی',
                ].map((chip) => {
                  const isActive = storyCategoryFilter === chip;
                  return (
                    <button
                      key={chip}
                      onClick={() => setStoryCategoryFilter(chip)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-[#1b4332] text-white shadow-xs border border-[#1b4332]'
                          : 'bg-[#f0e6d2] text-[#3c2817] hover:bg-[#e2d2b8] border border-[#d8c4a9]'
                      }`}
                    >
                      «{chip}»
                    </button>
                  );
                })}
              </div>

              {/* Stories Grid */}
              {filteredStories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredStories.map((story) => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      isFavorite={favoriteIds.includes(story.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelect={(s) => setSelectedStory(s)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-[#faf6ed] border-2 border-dashed border-[#d8c4a9] rounded-2xl p-10 text-center text-[#7a6452]">
                  <p className="font-serif text-sm">
                    هیچ داستانێک لەم هاوپۆلەدا نەدۆزرایەوە.
                  </p>
                </div>
              )}

              <KurdishOrnamentalDivider />
            </div>
          )}

          {/* ================= SEARCH TAB «گەڕان» ================= */}
          {activeTab === 'search' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <ParchmentCornerDecoration />
                <h2 className="text-2xl font-bold font-serif text-[#2c1b0e] mb-3 flex items-center gap-2">
                  <Search className="w-6 h-6 text-[#801b22]" />
                  <span>«گەڕانی گشتگیر»</span>
                </h2>

                {/* Input box */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="بگەڕێ بۆ ناو، چیرۆک، شاعیر، نووسەر..."
                    className="w-full bg-white border-2 border-[#d8c4a9] focus:border-[#801b22] rounded-xl px-4 py-3 pl-10 text-sm font-serif text-[#2c1b0e] focus:outline-none shadow-inner"
                    autoFocus
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
              </div>

              {/* Search Results */}
              <div className="space-y-6">
                {/* People Search Results */}
                <div>
                  <h3 className="text-base font-bold font-serif text-[#801b22] mb-3 flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
                    <Users className="w-4 h-4" />
                    <span>کەسایەتییە دۆزراوەکان ({filteredPeople.length})</span>
                  </h3>
                  {filteredPeople.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredPeople.map((person) => (
                        <PersonCard
                          key={person.id}
                          person={person}
                          isFavorite={favoriteIds.includes(person.id)}
                          onToggleFavorite={toggleFavorite}
                          onSelect={(p) => setSelectedPerson(p)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[#7a6452] font-serif bg-[#f5efe0] p-3 rounded-lg border border-[#e2d2b8]">
                      هیچ کەسایەتییەک نەدۆزرایەوە بەم گەڕانە.
                    </p>
                  )}
                </div>

                {/* Stories Search Results */}
                <div>
                  <h3 className="text-base font-bold font-serif text-[#1b4332] mb-3 flex items-center gap-2 border-b border-[#e5d2b8] pb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>چیرۆک و داستانە دۆزراوەکان ({filteredStories.length})</span>
                  </h3>
                  {filteredStories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredStories.map((story) => (
                        <StoryCard
                          key={story.id}
                          story={story}
                          isFavorite={favoriteIds.includes(story.id)}
                          onToggleFavorite={toggleFavorite}
                          onSelect={(s) => setSelectedStory(s)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[#7a6452] font-serif bg-[#f5efe0] p-3 rounded-lg border border-[#e2d2b8]">
                      هیچ داستانێک نەدۆزرایەوە بەم گەڕانە.
                    </p>
                  )}
                </div>
              </div>

              <KurdishOrnamentalDivider />
            </div>
          )}

          {/* ================= NALI DIWAN TAB «دیوانی نالی» ================= */}
          {activeTab === 'nali' && (
            <NaliPoetryView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= KHANI DIWAN TAB «دیوانی ئەحمەدی خانی» ================= */}
          {activeTab === 'khani' && (
            <KhaniPoetryView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= SHERKO BEKAS DIWAN TAB «دیوانی شێرکۆ بێکەس» ================= */}
          {activeTab === 'sherko' && (
            <SherkoPoetryView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= SIRAJ AL-QULUB TAB «کتێبی سراج القلوب و ڕیسالەکان» ================= */}
          {(activeTab === 'siraj-al-qulub' || activeTab === 'sheikh-othman') && (
            <SirajAlQulubView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= BAR PAHNAYE YAD TAB «یادنامەی بر پهنه یاد» ================= */}
          {activeTab === 'bar-pahnaye-yad' && (
            <BarPahnayeYadView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= SIRAJ MUNIR TAB «پەڕتووکی سراج منیر» ================= */}
          {activeTab === 'siraj-munir' && (
            <SirajMunirView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= ZHANI GAL TAB «ڕۆمانی ژانی گەل» ================= */}
          {activeTab === 'zhani-gal' && (
            <ZhaniGalNovelView
              onOpenShareModal={handleOpenShare}
              onBackToProfile={() => setActiveTab('people')}
            />
          )}

          {/* ================= LITERATURE TAB «ئەدەب و هونەر» ================= */}
          {activeTab === 'literature' && <LiteratureSection />}

          {/* ================= FAVORITES TAB «دڵخوازەکان» ================= */}
          {activeTab === 'favorites' && (
            <FavoritesView
              favoriteIds={favoriteIds}
              people={INITIAL_PEOPLE}
              stories={INITIAL_STORIES}
              onToggleFavorite={toggleFavorite}
              onSelectPerson={(p) => setSelectedPerson(p)}
              onSelectStory={(s) => setSelectedStory(s)}
            />
          )}
        </main>

        {/* Modals & Dialogs */}
        {selectedPerson && (
          <PersonDetailModal
            person={selectedPerson}
            onClose={() => setSelectedPerson(null)}
            isFavorite={favoriteIds.includes(selectedPerson.id)}
            onToggleFavorite={toggleFavorite}
            onOpenDiwanNali={() => {
              setSelectedPerson(null);
              setActiveTab('nali');
            }}
            onOpenDiwanKhani={() => {
              setSelectedPerson(null);
              setActiveTab('khani');
            }}
            onOpenDiwanSherko={() => {
              setSelectedPerson(null);
              setActiveTab('sherko');
            }}
            onOpenDiwanSheikhOthman={() => {
              setSelectedPerson(null);
              setActiveTab('siraj-al-qulub');
            }}
            onOpenSirajAlQulub={() => {
              setSelectedPerson(null);
              setActiveTab('siraj-al-qulub');
            }}
            onOpenBarPahnayeYad={() => {
              setSelectedPerson(null);
              setActiveTab('bar-pahnaye-yad');
            }}
            onOpenSirajMunir={() => {
              setSelectedPerson(null);
              setActiveTab('siraj-munir');
            }}
            onOpenZhaniGal={() => {
              setSelectedPerson(null);
              setActiveTab('zhani-gal');
            }}
          />
        )}

        {selectedStory && (
          <StoryDetailModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
            isFavorite={favoriteIds.includes(selectedStory.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {selectedWork && (
          <WorkDetailModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
            onOpenShareModal={handleOpenShare}
          />
        )}

        {shareData && (
          <ShareModal
            title={shareData.title}
            text={shareData.text}
            url={shareData.url}
            onClose={() => setShareData(null)}
          />
        )}

        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          onOpenFavorites={() => setActiveTab('favorites')}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />

        {/* Bottom Navigation Bar */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </MobileFrame>
  );
}
