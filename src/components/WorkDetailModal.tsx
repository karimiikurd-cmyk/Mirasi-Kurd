import React from 'react';
import { DetailedWork, LiteratureWork } from '../types';
import { ParchmentCornerDecoration } from './KurdishPattern';
import { BookOpen, X, ShieldCheck, Scale, ExternalLink, Calendar, User, Share2 } from 'lucide-react';

interface WorkDetailModalProps {
  work: DetailedWork | LiteratureWork;
  onClose: () => void;
  onOpenShareModal?: (title: string, text: string, url?: string) => void;
}

export function WorkDetailModal({ work, onClose, onOpenShareModal }: WorkDetailModalProps) {
  const isDetailed = 'copyrightStatus' in work;
  const copyrightStatus = isDetailed ? (work as DetailedWork).copyrightStatus : 'Public Domain (مایەی گشتی)';
  const excerpt = 'publicExcerpt' in work ? (work as LiteratureWork).publicExcerpt : (work as DetailedWork).excerpt;
  const fullText = work.fullText;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-serif">
      <div className="bg-[#fcfaf7] dark:bg-[#1a1612] border-2 border-[#c59b27] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#e2d5c3] dark:border-[#382d24] flex items-center justify-between bg-[#f5efe0] dark:bg-[#241e19]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#c59b27]" />
            <span className="font-extrabold text-sm text-[#2c1b0e] dark:text-[#ebe5df]">
              دەقی ئەدەبی و مێژوویی
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eae1d0] dark:bg-[#382d24] text-[#2c1b0e] dark:text-[#ebe5df] flex items-center justify-center hover:bg-[#8c2318] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Title & Author */}
          <div>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#8c2318] text-white inline-block mb-2">
              {'workType' in work ? work.workType : 'بەرهەم'}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2c1b0e] dark:text-[#ebe5df]">
              {work.title}
            </h2>
            <p className="text-sm font-bold text-[#8c7a6b] dark:text-[#c4b5a5] mt-1 flex items-center gap-2">
              <User className="w-4 h-4 text-[#c59b27]" /> نووسەر / خاوەن دەق: {work.author}
            </p>
          </div>

          {/* Excerpt / Full Text Display Box */}
          <div className="bg-[#f5efe0] dark:bg-[#241e19] border border-[#d3c2a3] dark:border-[#42362b] p-5 rounded-2xl relative">
            <ParchmentCornerDecoration />
            <p className="text-sm sm:text-base leading-relaxed text-[#2c1b0e] dark:text-[#ebe5df] whitespace-pre-line font-serif italic">
              {fullText || excerpt}
            </p>
          </div>

          {/* Copyright Status & Copyright Rules Notice */}
          <div className="p-3 bg-[#eae1d0]/60 dark:bg-[#2c241d]/80 rounded-xl border border-[#d3c2a3] dark:border-[#42362b] text-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-[#2c1b0e] dark:text-[#ebe5df]">
              <Scale className="w-4 h-4 text-[#c59b27]" />
              <span>مافی لەبەرگرتنەوە (Copyright): <strong className="text-[#8c2318] dark:text-[#c59b27]">{copyrightStatus}</strong></span>
            </div>
            <p className="text-[#736254] dark:text-[#a89887] text-[11px]">
              {copyrightStatus.includes('Public Domain')
                ? 'ئەم دەقە کەوتووەتە ژێر مافی گشتی (Public Domain) و بەکارهێنانی ئازادە.'
                : 'ئەم دەقە بەپێی یاسای مافی لەبەرگرتنەوە پارێزراوە؛ تەنها پارچەی کورت بۆ مەبەستی فێربوون و ئاماژەدان نیشان دراوە.'}
            </p>
          </div>

          {/* Source Information */}
          <div className="text-xs text-[#5c4a3e] dark:text-[#c4b5a5] space-y-1 border-t border-[#e2d5c3] dark:border-[#382d24] pt-3">
            <p>
              سەرچاوەی بڵاوکردنەوە: <strong className="text-[#2c1b0e] dark:text-[#ebe5df]">{('source' in work && work.source) ? work.source : 'سەرچاوەی بەڵگەدار لە ئەرشیفی ئەدەبی کوردی'}</strong>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            {onOpenShareModal && (
              <button
                onClick={() =>
                  onOpenShareModal(
                    work.title,
                    `«${work.title}» - ${work.author}\n\n${excerpt}`
                  )
                }
                className="px-4 py-2 bg-[#1b4332] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-[#2d6a4f] transition-colors"
              >
                <Share2 className="w-4 h-4" /> هاوبەشکردن
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#eae1d0] dark:bg-[#382d24] text-[#2c1b0e] dark:text-[#ebe5df] rounded-xl text-xs font-bold hover:bg-[#d8cbb5] transition-colors"
            >
              داخستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
