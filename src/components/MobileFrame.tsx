import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
  isDeviceFrame: boolean;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children, isDeviceFrame }) => {
  if (!isDeviceFrame) {
    return <div className="min-h-screen bg-[#faf6ed] text-[#3c2817] font-sans dir-rtl">{children}</div>;
  }

  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="min-h-screen bg-[#1e150d] py-6 px-2 flex items-center justify-center dir-rtl">
      {/* Android Device Outer Body */}
      <div className="relative w-full max-w-[430px] h-[880px] max-h-[92vh] bg-[#2d1f14] rounded-[48px] p-3 shadow-2xl border-4 border-[#523d2b] flex flex-col overflow-hidden">
        
        {/* Device Speaker & Camera Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#120a04] rounded-full z-50 flex items-center justify-center gap-2 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1b1008] border border-[#3c2817]" />
          <div className="w-10 h-1 bg-[#23160c] rounded-full" />
        </div>

        {/* Android Status Bar */}
        <div className="bg-[#fbf8f1] text-[#3c2817] px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-bold select-none border-b border-[#e5d2b8] z-40 rounded-t-[36px]">
          <span>{timeString}</span>
          <div className="flex items-center gap-1.5 opacity-80">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Screen Inner Viewport */}
        <div className="relative flex-1 bg-[#faf6ed] text-[#3c2817] overflow-y-auto rounded-b-[36px] flex flex-col">
          {children}
        </div>

        {/* Android Home Navigation Bar Line */}
        <div className="bg-[#faf6ed] pb-2 pt-1 flex justify-center items-center rounded-b-[36px]">
          <div className="w-32 h-1 bg-[#3c2817]/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
