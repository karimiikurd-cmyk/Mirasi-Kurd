import React, { useState } from 'react';
import { Share2, Copy, Check, X, Bookmark, ExternalLink } from 'lucide-react';

interface ShareModalProps {
  title: string;
  text: string;
  url?: string;
  onClose: () => void;
}

export function ShareModal({ title, text, url = window.location.href, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullContent = `${title}\n\n${text}\n\nسەرچاوە: «میراثی کورد»\n${url}`;
    navigator.clipboard.writeText(fullContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-serif">
      <div className="bg-[#fcfaf7] dark:bg-[#1a1612] border-2 border-[#c59b27] rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e2d5c3] dark:border-[#382d24] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#c59b27] text-[#2c1b0e] flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </span>
            <h3 className="text-base font-extrabold text-[#2c1b0e] dark:text-[#ebe5df]">
              هاوبەشکردنی زانیاری
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eae1d0] dark:bg-[#382d24] text-[#2c1b0e] dark:text-[#ebe5df] flex items-center justify-center hover:bg-[#8c2318] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preview Card */}
        <div className="p-4 bg-[#f5efe0] dark:bg-[#241e19] border border-[#d3c2a3] dark:border-[#42362b] rounded-2xl space-y-2">
          <h4 className="font-bold text-sm text-[#2c1b0e] dark:text-[#ebe5df]">
            {title}
          </h4>
          <p className="text-xs text-[#5c4a3e] dark:text-[#c4b5a5] line-clamp-3 leading-relaxed">
            {text}
          </p>
          <p className="text-[10px] text-[#8c7a6b] pt-1">
            مێژوو و کەلتووری کورد - «میراثی کورد»
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleWebShare}
              className="w-full py-3 bg-[#1b4332] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#2d6a4f] transition-colors shadow-sm"
            >
              <Share2 className="w-4 h-4" /> هاوبەشکردن ڕاستەوخۆ (نێرەرەکان / سۆشیال میدیا)
            </button>
          )}

          <button
            onClick={handleCopy}
            className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors border ${
              copied
                ? 'bg-[#1b4332] text-white border-[#1b4332]'
                : 'bg-[#f5efe0] dark:bg-[#241e19] text-[#2c1b0e] dark:text-[#ebe5df] border-[#d3c2a3] dark:border-[#42362b] hover:bg-[#eae1d0]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" /> دەقەکە کۆپی کرایە نێو یادگە!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#c59b27]" /> کۆپیکردنی دەق و بەستەر
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
