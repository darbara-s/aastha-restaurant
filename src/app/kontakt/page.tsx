import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, Clock, Navigation, Smartphone } from "lucide-react";

export default function KontaktPage() {
  return (
    <div className="min-h-[85vh] bg-brand-bg py-8 md:py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" /> Aastha Restaurant Berlin
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-brand-text">
            Kontakt & Anfahrt
          </h1>
          <p className="text-sm md:text-base text-brand-text-muted">
            Wir freuen uns auf Ihren Besuch! Rufen Sie uns an oder nutzen Sie die Anfahrtskarte.
          </p>
        </div>

        {/* Quick Action Touch Buttons (Mobile First) */}
        <div className="grid grid-cols-3 gap-3 md:hidden">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="flex flex-col items-center justify-center p-3.5 bg-white rounded-2xl border border-brand-border shadow-sm active:bg-brand-bg transition-colors"
          >
            <Phone className="w-6 h-6 text-brand-primary mb-1" />
            <span className="text-xs font-bold text-brand-text">Anrufen</span>
          </a>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3.5 bg-white rounded-2xl border border-brand-border shadow-sm active:bg-brand-bg transition-colors"
          >
            <Navigation className="w-6 h-6 text-brand-secondary mb-1" />
            <span className="text-xs font-bold text-brand-text">Route</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex flex-col items-center justify-center p-3.5 bg-white rounded-2xl border border-brand-border shadow-sm active:bg-brand-bg transition-colors"
          >
            <Mail className="w-6 h-6 text-brand-accent mb-1" />
            <span className="text-xs font-bold text-brand-text">E-Mail</span>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Info Column */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-brand-border shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-text">Adresse</h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-2.5 bg-brand-bg hover:bg-brand-border/40 text-brand-text font-semibold text-xs rounded-xl flex items-center justify-center gap-2 border border-brand-border transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-primary" /> Route in Google Maps öffnen
              </a>
            </div>

            {/* Phone & Contact Card */}
            <div className="bg-white p-6 rounded-3xl border border-brand-border shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-secondary/15 flex items-center justify-center text-brand-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-text">Telefon & Mobil</h3>
                  <p className="text-xs text-brand-text-muted">Täglich erreichbar</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-brand-border bg-brand-bg/40 hover:bg-white text-sm font-semibold text-brand-text transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Tel: {siteConfig.phone}</span>
                </a>
                <a
                  href={`tel:${siteConfig.mobile.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-brand-border bg-brand-bg/40 hover:bg-white text-sm font-semibold text-brand-text transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Mobil: {siteConfig.mobile}</span>
                </a>
              </div>
              <div className="pt-1 text-xs text-brand-text-muted flex justify-between border-t border-brand-border/60">
                <span>Fax: {siteConfig.fax}</span>
                <a href={`mailto:${siteConfig.email}`} className="text-brand-primary font-semibold hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-brand-border shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-text">Öffnungszeiten</h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                    Täglich geöffnet
                  </span>
                </div>
              </div>
              <div className="space-y-1.5 pt-2 text-sm">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-brand-text-muted">Montag – Sonntag:</span>
                  <span className="font-bold text-brand-text">{siteConfig.hours.daily}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-brand-text-muted">Mittagsmenü:</span>
                  <span className="font-semibold text-brand-primary">{siteConfig.hours.lunch}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-[380px] md:h-auto min-h-[380px] rounded-3xl overflow-hidden border border-brand-border bg-white shadow-sm relative">
            <iframe
              src={siteConfig.mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aastha Restaurant Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
