import Link from "next/link";
import { siteConfig } from "@/data/site";
import { foodMenu } from "@/data/menu";
import { MapPin, Phone, Utensils, Leaf, Users } from "lucide-react";

export default function Home() {
  // Pick a few representative dishes for the homepage showcase
  const signatureDishes = foodMenu.filter(item =>
    ["Butter Chicken", "Palak Paneer", "Lamm Rogan Josh", "Chicken Tikka"].includes(item.name)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden bg-brand-bg-dark text-white">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-20 max-w-4xl mx-auto space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
            Echte Indische Küche
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
            {siteConfig.hours.daily}
          </p>
          
          <div className="pt-8 hidden md:grid grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link href="/speisekarte" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 py-3 px-4 rounded-md font-medium transition-all">
              Speisekarte
            </Link>
            <Link href="/speisekarte?tab=getranke" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 py-3 px-4 rounded-md font-medium transition-all">
              Getränke
            </Link>
            <Link href="/speisekarte?tab=tagesmenu" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 py-3 px-4 rounded-md font-medium transition-all">
              Tagesmenü
            </Link>
            <Link href="/reservierung" className="bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg py-3 px-4 rounded-md font-medium transition-all">
              Reservierung
            </Link>
          </div>
        </div>
      </section>

      {/* Über Uns */}
      <section className="py-24 px-4 bg-brand-bg">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-brand-text">Herzlich Willkommen im Aastha Restaurant</h2>
            <p className="text-lg leading-relaxed text-brand-text-muted">
              Unsere Gerichte werden stets frisch zubereitet. Gemüse und Salat werden aus frischen Zutaten hergestellt und unser Küchenchef würzt alle Speisen für den europäischen Geschmack pikant.
            </p>
            <p className="text-lg leading-relaxed text-brand-text-muted">
              Wir laden Sie zu uns herzlichst ein um die traditionelle indische Küche in ruhiger und gemütlicher Atmosphäre kennenzulernen. Die Zufriedenheit unserer Gäste liegt uns besonders am Herzen, deswegen legen wir großen Wert darauf Ihnen stets den besten Service und Qualität zu bieten.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <Utensils className="w-6 h-6 text-brand-secondary shrink-0 mt-1" />
                <span className="text-brand-text-muted text-lg">Wir bieten Ihnen traditionelle indische Küche mit gesunden und leckeren Gerichten an.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-brand-secondary shrink-0 mt-1" />
                <span className="text-brand-text-muted text-lg">Wir bedienen Sie schnell und sind stets bemüht die Bedürfnisse unserer Gäste zufriedenzustellen.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Was wir anbieten</h2>
          <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
            Unser Restaurant bietet Ihnen eine große Auswahl an vegetarischen und veganen Gerichten an. Selbstverständlich bereiten wir auch Huhn-, Ente-, Lamm- und Fischgerichte zu, sodass für jeden Geschmack etwas dabei ist.
          </p>
        </div>
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          <div className="p-8 text-center bg-brand-bg rounded-xl border border-brand-border">
            <Leaf className="w-12 h-12 text-brand-accent mx-auto mb-6" />
            <h3 className="font-display text-2xl mb-4">Vegetarisch & Vegan</h3>
            <p className="text-brand-text-muted">Neben Fleisch- und Fischgerichten bieten wir eine große Auswahl an vegetarischen und veganen Spezialitäten.</p>
          </div>
          <div className="p-8 text-center bg-brand-bg rounded-xl border border-brand-border">
            <Utensils className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
            <h3 className="font-display text-2xl mb-4">Über 100 Gerichte</h3>
            <p className="text-brand-text-muted">Stets frisch zubereitete Mahlzeiten zu moderaten Preisen. Bei uns wird jeder fündig.</p>
          </div>
          <div className="p-8 text-center bg-brand-bg rounded-xl border border-brand-border">
            <CalendarDays className="w-12 h-12 text-brand-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl mb-4">Mittagsmenü</h3>
            <p className="text-brand-text-muted">Von Montag bis Freitag (außer an Feiertagen) von 11:30 bis 16:00 Uhr bieten wir Ihnen unser spezielles Mittagsmenü.</p>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 px-4 bg-brand-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Unsere Empfehlungen</h2>
              <p className="text-xl text-brand-text-muted">Eine Auswahl der beliebtesten Gerichte unserer Gäste.</p>
            </div>
            <Link href="/speisekarte" className="hidden md:inline-flex items-center text-brand-primary font-medium hover:underline">
              Ganze Karte ansehen &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((dish) => (
              <Link href={`/speisekarte`} key={dish.id} className="group bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-xl transition-all">
                <div className="h-48 bg-brand-border/30 relative overflow-hidden flex items-center justify-center">
                  <Utensils className="w-10 h-10 text-brand-border opacity-60" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{dish.name}</h3>
                    <span className="font-medium text-brand-primary">{dish.price} €</span>
                  </div>
                  <p className="text-sm text-brand-text-muted line-clamp-2">{dish.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/speisekarte" className="inline-flex items-center justify-center w-full py-3 bg-brand-border/50 text-brand-text font-medium rounded-lg">
              Ganze Karte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Lunch Callout */}
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Mittagsangebot</h2>
          <p className="text-xl text-white/90 mb-8">
            Genießen Sie täglich wechselnde Gerichte mit Basmatireis, Bhatura-Brot, Salat und einer vegetarischen Daal-Beilage.
            <br />
            <span className="font-semibold block mt-2">{siteConfig.hours.lunch}</span>
          </p>
          <Link href="/tagesmenu" className="inline-block bg-white text-brand-primary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Tagesmenü ansehen
          </Link>
        </div>
      </section>

      {/* Map & Hours Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="font-display text-4xl">Besuchen Sie uns</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Adresse</h3>
                  <p className="text-brand-text-muted text-lg leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Kontakt</h3>
                  <p className="text-brand-text-muted text-lg">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center shrink-0">
                  <CalendarDays className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Öffnungszeiten</h3>
                  <p className="text-brand-text-muted text-lg">{siteConfig.hours.daily}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex gap-4">
              <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-brand-text text-white py-3 rounded-md font-medium hover:bg-brand-text/90 transition-colors">
                Route planen
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex-1 text-center bg-brand-border/50 text-brand-text py-3 rounded-md font-medium hover:bg-brand-border transition-colors">
                Anrufen
              </a>
            </div>
          </div>
          <div className="h-[400px] md:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-brand-border bg-gray-100 relative">
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
      </section>
    </>
  );
}

function CalendarDays(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
