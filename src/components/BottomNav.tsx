import React from 'react';
import { Home, Users, BookOpen, Search, History, Compass } from 'lucide-react';
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
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-lg border-t-2 border-[#C5A059] shadow-lg max-w-5xl mx-auto px-1 sm:px-2 py-1.5 transition-all">
      <div className="flex items-center justify-around gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 sm:px-3 rounded-xl transition-all duration-200 relative ${
                isActive
                  ? 'text-[#800020] font-extrabold'
                  : 'text-[#3E2723] hover:text-[#800020] font-medium'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-[#C5A059]/20 border border-[#C5A059] rounded-xl -z-10 shadow-2xs" />
              )}
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-0.5 transition-transform ${isActive ? 'scale-110 text-[#800020]' : ''}`} />
              <span className="text-[10px] sm:text-[11px] font-serif tracking-tight leading-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
