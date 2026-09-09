"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Utensils, CalendarDays, MapPin } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  // Hide bottom navigation on summary and order process pages
  if (pathname?.startsWith("/bestellung")) {
    return null;
  }

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_16px_rgba(0,0,0,0.10)]">
      {/* Safe area for notched iPhones */}
      <div className="flex items-center h-16" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {/* Home */}
        <Link
          href="/"
          id="bottom-nav-home"
          className={`flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors ${
            pathname === "/" ? "text-brand-primary" : "text-gray-400 active:text-brand-primary"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">Start</span>
        </Link>

        {/* Menu */}
        <Link
          href="/speisekarte"
          id="bottom-nav-menu"
          className={`flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors ${
            isActive("/speisekarte") || isActive("/getrankekarte") || isActive("/tagesmenu")
              ? "text-brand-primary"
              : "text-gray-400 active:text-brand-primary"
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">Speisekarte</span>
        </Link>

        {/* Reservation */}
        <Link
          href="/reservierung"
          id="bottom-nav-reservation"
          className={`flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors ${
            isActive("/reservierung") ? "text-brand-primary" : "text-gray-400 active:text-brand-primary"
          }`}
        >
          <CalendarDays className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">Reservierung</span>
        </Link>

        {/* Contact */}
        <Link
          href="/kontakt"
          id="bottom-nav-contact"
          className={`flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors ${
            isActive("/kontakt") ? "text-brand-primary" : "text-gray-400 active:text-brand-primary"
          }`}
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">Kontakt</span>
        </Link>
      </div>
    </nav>
  );
}
