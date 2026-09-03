import React from 'react';
import { Home, Users, BookOpen, Search, History, Compass, Landmark, Camera, Feather } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      id: 'home' as ActiveTab,
      label: 'سەرەتا',
      icon: Home,
    },
    {
      id: 'timeline' as ActiveTab,
      label: 'مێژوو',
      icon: History,
    },
    {
      id: 'political' as ActiveTab,
      label: 'سیاسییەکان',
      icon: Landmark,
    },
    {
      id: 'people' as ActiveTab,
      label: 'کەسایەتییەکان',
      icon: Users,
    },
    {
      id: 'regions' as ActiveTab,
      label: 'ناوچەکان',
      icon: Compass,
    },
    {
      id: 'gallery' as ActiveTab,
      label: 'وێنەکان',
      icon: Camera,
    },
    {
      id: 'stories' as ActiveTab,
      label: 'چیرۆکەکان',
      icon: BookOpen,
    },
    {
      id: 'search' as ActiveTab,
      label: 'گەڕان',
      icon: Search,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 dark:bg-[#1A1612]/95 backdrop-blur-lg border-t-2 border-[#C5A059] shadow-lg max-w-5xl mx-auto px-1 sm:px-2 py-1.5 transition-all">
      <div className="flex items-center justify-between overflow-x-auto scrollbar-none gap-0.5 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 sm:px-2.5 rounded-xl transition-all duration-200 relative shrink-0 ${
                isActive
                  ? 'text-[#800020] dark:text-[#E2B049] font-extrabold'
                  : 'text-[#3E2723] dark:text-[#C4B5A5] hover:text-[#800020] dark:hover:text-[#E2B049] font-medium'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-[#C5A059]/20 border border-[#C5A059] rounded-xl -z-10 shadow-2xs" />
              )}
              <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 mb-0.5 transition-transform ${isActive ? 'scale-110 text-[#800020] dark:text-[#E2B049]' : ''}`} />
              <span className="text-[10px] font-serif tracking-tight leading-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

