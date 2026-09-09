import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Aastha Restaurant",
  description: "Einblicke in unser Restaurant und unsere authentischen indischen Gerichte.",
};

export default function GaleriePage() {
  // Placeholder images
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Galerie</h1>
        <p className="text-xl text-brand-text-muted">Einblicke in unser Restaurant und unsere Gerichte.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
            <img 
              src={src} 
              alt={`Aastha Restaurant Galerie ${idx + 1}`} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-brand-text-muted">
        <p>Folgen Sie uns auf Instagram für weitere aktuelle Eindrücke!</p>
      </div>
    </div>
  );
}
