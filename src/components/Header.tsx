"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Phone } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Start" },
    { href: "/speisekarte", label: "Speisekarte" },
    { href: "/galerie", label: "Galerie" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const cleanPhone = siteConfig.phone.replace(/\s+/g, "");

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-brand-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Left aligned on both mobile & desktop */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile Right Call Action */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${cleanPhone}`}
            className="flex items-center gap-1.5 text-brand-primary bg-brand-primary/10 active:bg-brand-primary/20 px-3.5 py-1.5 rounded-full font-bold text-xs transition-colors shadow-sm border border-brand-primary/20"
            aria-label="Anrufen"
          >
            <Phone className="w-3.5 h-3.5 fill-brand-primary/20" />
            <span>Anrufen</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors pb-0.5 border-b-2 ${
                isActive(link.href)
                  ? "text-brand-primary border-brand-primary font-semibold"
                  : "text-brand-text hover:text-brand-primary border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservierung"
            className="ml-2 bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors shadow-sm text-sm"
          >
            Tisch reservieren
          </Link>
        </nav>
      </div>
    </header>
  );
}
