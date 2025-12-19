"use client";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  // 1. Data structure for easy management
  const socialLinks = [
    {
      id: 1,
      icon: <FaSquareXTwitter />,
      name: "X (Twitter)",
      url: "https://x.com/KYD_Precision",
      colorCls: "hover:bg-black" // Optional specific brand colors
    },
    {
      id: 2,
      icon: <FaFacebookF />,
      name: "Facebook",
      url: "https://www.facebook.com/guangdongkyd",
      colorCls: "hover:bg-[#1877F2]"
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/",
      colorCls: "hover:bg-[#0A66C2]"
    },
  ];

  return (
    // Container: Centered vertically on the right edge
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-30 hidden md:flex flex-col gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          // 'group' class needed on parent to trigger hover on children
          className="group relative flex items-center justify-end pr-[2px]" 
        >
          {/* 2. The Label (Hidden by default, appears on hover) */}
          <span 
            className="absolute right-[100%] mr-3 px-3 py-1.5 
                       bg-slate-800 text-white text-sm font-medium rounded-md 
                       whitespace-nowrap shadow-sm pointer-events-none
                       opacity-0 translate-x-4 
                       group-hover:opacity-100 group-hover:translate-x-0 
                       transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            {item.name}
            {/* Tiny triangle pointing to the icon */}
            <span className="absolute top-1/2 -right-[4px] -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-slate-800"></span>
          </span>

          {/* 3. The Icon Box */}
          <div 
            className={`flex items-center justify-center h-11 w-11 
                        bg-primary text-white text-xl 
                        rounded-l-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.2)] 
                        relative z-10 transition-all duration-300
                        ${item.colorCls || 'hover:bg-secondary'} 
                        group-hover:w-12 group-hover:pr-1`} // Subtle expansion on hover
          >
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;