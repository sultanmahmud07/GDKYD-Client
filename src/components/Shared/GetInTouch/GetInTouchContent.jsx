"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, FaWhatsapp, FaFacebookF, FaLinkedinIn, 
  FaMapMarkerAlt 
} from "react-icons/fa"; 
import { MdOutlineMailOutline } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

import ContactForm from "../../../components/Shared/ContactFrom/ContactFrom";

const GetInTouchContent = ({ translations, formLabels, locale }) => {
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-12 md:py-24 bg-[#F3F4F6]">
      <div className="main_container">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          
          {/* --- LEFT SIDE: Contact Info --- */}
          <div className="bg-gradient-to-br from-[#064a9b] to-[#252B42] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{translations.title}</h2>
              <p className="text-blue-100 text-sm md:text-base mb-8 leading-relaxed">
                {translations.description} <span className="font-bold text-white">KYD</span>.
              </p>

              <div className="space-y-6">
                <div className="mb-6">
                   <h6 className="text-lg font-bold text-white mb-2 border-b border-white/20 pb-2 inline-block">
                     {translations.office}
                   </h6>
                </div>

                {/* --- CLICKABLE LINKS START HERE --- */}
                
                {/* Phone - Click to Call */}
                <InfoItem 
                  icon={<FaPhoneAlt />} 
                  label={translations.callLabel} 
                  value="+86-13902617335" 
                  href="tel:+8613902617335" 
                />

                {/* WhatsApp - Click to Chat */}
                <InfoItem 
                  icon={<FaWhatsapp />} 
                  label={translations.wpLabel} 
                  value="+86-13902617335"
                  href="https://wa.me/8613902617335" 
                />

                {/* Email - Click to Mail */}
                <InfoItem 
                  icon={<MdOutlineMailOutline />} 
                  label={translations.mailLabel} 
                  value="kyd@kuaiyuda.com" 
                  href="mailto:kyd@kuaiyuda.com"
                />

                {/* Address - Click to Google Maps */}
                <InfoItem 
                  icon={<FaMapMarkerAlt />} 
                  label="Location" 
                  value={translations.address}
                  // Google Maps Search Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("No.321 Dongshen Road, Tangxia Town, Dongguan City, Guangdong Province")}`}
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-10 mt-10">
              <p className="text-blue-200 text-sm mb-4">{translations.socialText}</p>
              <div className="flex gap-3 flex-wrap">
                <SocialLink href="https://x.com/KYD_Precision" icon={<FaSquareXTwitter />} />
                <SocialLink href="https://www.facebook.com/guangdongkyd" icon={<FaFacebookF />} />
                <SocialLink href="https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/" icon={<FaLinkedinIn />} />
                <SocialLink href="https://www.tiktok.com/@kyd_precision_machinery" icon={<IoLogoTiktok />} />
                <SocialLink href="https://api.whatsapp.com/send?phone=+86-13902617335" icon={<RiWhatsappFill />} />
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
             <div className="max-w-lg mx-auto w-full">
                <h3 className="text-2xl font-bold text-[#252B42] mb-6">Send us a Message</h3>
                <ContactForm
                  locale={locale}
                  name={formLabels.name}
                  phone={formLabels.phone}
                  email={formLabels.email}
                  product={formLabels.product}
                  note={formLabels.note}
                />
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// --- UPDATED HELPER: Handles Links ---
const InfoItem = ({ icon, label, value, href }) => {
  const content = (
    <>
      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-inner border border-white/10 group-hover:bg-white group-hover:text-[#064a9b] transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-blue-200 uppercase tracking-wider">{label}</p>
        <p className="text-white font-medium md:text-lg group-hover:underline decoration-blue-300 underline-offset-4 transition-all">
          {value}
        </p>
      </div>
    </>
  );

  return href ? (
    <a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className="flex items-start gap-4 group cursor-pointer"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-4 group">
      {content}
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[#053a7a] flex items-center justify-center text-white hover:bg-white hover:text-[#064a9b] transition-all duration-300 shadow-lg border border-white/10"
  >
    {icon}
  </a>
);

export default GetInTouchContent;