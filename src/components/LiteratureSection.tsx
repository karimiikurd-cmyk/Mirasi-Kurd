import React, { useState } from 'react';
import { LiteratureWork } from '../types';
import { INITIAL_LITERATURE } from '../data/literature';
import { BookOpen, Feather, Scroll, Copy, Check } from 'lucide-react';
import { KurdishOrnamentalDivider, ParchmentCornerDecoration, KurdishStarMedallion } from './KurdishPattern';

export const LiteratureSection: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<LiteratureWork | null>(INITIAL_LITERATURE[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 dir-rtl">
      {/* Header */}
      <div className="bg-[#f5efe0] border-2 border-[#c59b27] rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <ParchmentCornerDecoration />
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#801b22] text-white flex items-center justify-center font-bold">
            <Feather className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-[#2c1b0e]">
              «ئەدەب و هونەری کوردی»
            </h2>
            <p className="text-xs text-[#671217] font-serif">
              شاکارە ئەدەبییەکان، غەزەل و پەخشانی کلاسیک و نوێ
            </p>
          </div>
        </div>
      </div>

      {/* Grid Layout: Works List and Reader */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Works List */}
        <div className="space-y-3 md:col-span-1">
          <h3 className="text-sm font-bold font-serif text-[#801b22] flex items-center gap-1.5 px-1">
            <Scroll className="w-4 h-4" />
            <span>نوسراوە و شیعرە هەڵبژێردراوەکان</span>
          </h3>

          <div className="space-y-2">
            {INITIAL_LITERATURE.map((work) => {
              const isSelected = selectedWork?.id === work.id;
              return (
                <div
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer font-serif ${
                    isSelected
                      ? 'bg-[#faf6ed] border-[#801b22] shadow-sm'
                      : 'bg-[#f5efe0]/80 border-[#e2d2b8] hover:border-[#c59b27]'
                  }`}
                >
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#801b22]/10 text-[#801b22] inline-block mb-1">
                    {work.workType}
                  </span>
                  <h4 className="text-sm font-bold text-[#2c1b0e] mb-1">
                    {work.title}
                  </h4>
                  <p className="text-xs text-[#671217]">
                    نووسەر/شاعیر: {work.author}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Work Detail Reader */}
        <div className="md:col-span-2 bg-[#faf6ed] border-2 border-[#c59b27] rounded-2xl p-6 shadow-md relative min-h-[350px] flex flex-col justify-between">
          <ParchmentCornerDecoration />

          {selectedWork ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#e5d2b8] pb-3">
                <div>
                  <span className="text-xs font-bold text-[#801b22] font-serif bg-[#801b22]/10 px-2.5 py-1 rounded-md">
                    {selectedWork.workType}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#2c1b0e] mt-1">
                    {selectedWork.title}
                  </h3>
                  <p className="text-xs text-[#671217] font-serif">
                    داڕێژەر: {selectedWork.author} | {selectedWork.historicalPeriod}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(selectedWork.publicExcerpt, selectedWork.id)}
                  className="p-2 rounded-xl bg-[#f0e6d2] hover:bg-[#801b22] hover:text-white text-[#801b22] transition-colors flex items-center gap-1 text-xs font-serif font-bold"
                  title="کۆپیکردنی دەقەکە"
                >
                  {copiedId === selectedWork.id ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === selectedWork.id ? 'کۆپی کرا' : 'کۆپی'}</span>
                </button>
              </div>

              <p className="text-xs text-[#5c4433] font-serif bg-[#f5efe0] p-3 rounded-lg border border-[#e2d2b8]">
                {selectedWork.shortDescription}
              </p>

              {/* Calligraphy Callout Display */}
              <div className="my-4 p-6 bg-[#f5efe0]/90 border-2 border-[#c59b27]/60 rounded-xl shadow-inner text-center font-serif leading-loose text-base sm:text-lg text-[#2c1b0e] whitespace-pre-line tracking-wide">
                <KurdishStarMedallion className="w-6 h-6 mx-auto mb-3" color="#801b22" />
                {selectedWork.publicExcerpt}
                <KurdishStarMedallion className="w-6 h-6 mx-auto mt-3" color="#801b22" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12 text-[#7a6452]">
              <BookOpen className="w-12 h-12 text-[#c59b27] mb-2" />
              <p className="font-serif text-sm">بەرهەمێک هەڵبژێرە بۆ خوێندنەوە</p>
            </div>
          )}

          <KurdishOrnamentalDivider />
        </div>
      </div>
    </div>
  );
};
