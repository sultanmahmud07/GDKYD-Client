import React from "react";
import { MdSettings } from "react-icons/md"; // Optional: Add an icon if you want

const CommonLoader = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      
      {/* --- The Animated Spinner --- */}
      <div className="relative flex items-center justify-center w-20 h-20">
        
        {/* 1. Outer Ring (Slow Spin) */}
        <div className="absolute inset-0 w-full h-full border-4 border-[#064a9b]/20 border-t-[#064a9b] rounded-full animate-spin"></div>
        
        {/* 2. Inner Ring (Fast Spin - Reverse direction simulation via styling) */}
        <div className="absolute w-12 h-12 border-4 border-gray-100 border-b-[#4177B7] rounded-full animate-[spin_1.5s_linear_infinite]"></div>
        
        {/* 3. Center Core (Pulse) */}
        <div className="w-3 h-3 bg-[#064a9b] rounded-full animate-ping"></div>
        
      </div>

      {/* --- Loading Text --- */}
      <div className="flex items-center gap-1 text-[#064a9b] font-bold text-sm tracking-widest uppercase animate-pulse">
        <span>Loading</span>
        <span className="delay-75">.</span>
        <span className="delay-150">.</span>
        <span className="delay-300">.</span>
      </div>

    </div>
  );
};

export default CommonLoader;