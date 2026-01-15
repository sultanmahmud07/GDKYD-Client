"use client";
import React from "react";
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      // Using the number from your image: +86-13902617335
      url: "https://wa.me/8613902617335", 
      colorCls: "hover:bg-[#25D366]" // WhatsApp Green
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      name: "Email Us",
      // Using the email from your image: kyd@kuaiyuda.com
      url: "mailto:kyd@kuaiyuda.com", 
      colorCls: "hover:bg-[#EA4335]" // Standard Mail Red (or match your brand)
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/",
      colorCls: "hover:bg-[#0A66C2]" // LinkedIn Blue
    },
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-30 hidden md:flex flex-col gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-end pr-[2px]" 
        >
          {/* Label (Hidden by default, slides in on hover) */}
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

          {/* Icon Box */}
          <div 
            className={`flex items-center justify-center h-11 w-11 
                        bg-primary text-white text-xl 
                        rounded-l-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.2)] 
                        relative z-10 transition-all duration-300
                        ${item.colorCls} 
                        group-hover:w-12 group-hover:pr-1`}
          >
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;