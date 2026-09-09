"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Only show on mobile viewports on initial load
    const isMobile = window.innerWidth < 768;
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (!isMobile || hasSeenSplash) {
      setShow(false);
      return;
    }

    sessionStorage.setItem("hasSeenSplash", "true");

    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setShow(false), 500); // match fade-out duration
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg transition-opacity duration-500 ease-in-out ${
        animateOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-pulse flex flex-col items-center">
        <img 
          src={siteConfig.logo} 
          alt={siteConfig.name} 
          className="w-48 h-auto mb-8 drop-shadow-md" 
        />
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
