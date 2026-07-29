"use client";

import React, { useState, useEffect } from "react";

export default function SafeEmailLink({ className = "", children, textOnly = false }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Dynamic assembly at client runtime to prevent scraper bots from finding it in SSR raw HTML
    const user = "kyd";
    const domain = "kuaiyuda.com";
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) {
    // Return placeholder during SSR / hydration to avoid flashing layout
    return <span className={className}>...</span>;
  }

  if (textOnly) {
    return <span className={className}>{email}</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {children}
      {!children && email}
    </a>
  );
}
