"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const pathname = usePathname();
  const isFullFooter = pathname === "/" || pathname?.startsWith("/kontakt");

  if (isFullFooter) {
    return (
      <footer className="bg-brand-bg-dark text-white pt-16 pb-24 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-2xl mb-6 text-brand-secondary">Aastha Restaurant</h3>
              <p className="text-white/80 leading-relaxed max-w-xs">
                Echte Indische Küche in ruhiger und gemütlicher Atmosphäre.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-brand-secondary">Kontakt</h4>
              <address className="not-italic text-white/80 space-y-3">
                <p>{siteConfig.address}</p>
                <p>
                  Tel:{" "}
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-brand-secondary transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-secondary transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-brand-secondary">Öffnungszeiten</h4>
              <div className="text-white/80 space-y-3">
                <p>{siteConfig.hours.daily}</p>
                <p className="text-brand-secondary">{siteConfig.hours.lunch}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutzerklarung" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Compact footer for all other pages
  return (
    <footer className="bg-brand-bg-dark text-white py-4 pb-20 md:pb-4 border-t border-white/10 text-xs">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2.5 text-white/70">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name} · {siteConfig.address}
        </p>
        <div className="flex items-center gap-4 text-white/60">
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          <span>·</span>
          <Link href="/datenschutzerklarung" className="hover:text-white transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
