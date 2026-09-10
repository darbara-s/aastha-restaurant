"use client";

import { useState, useMemo, useEffect } from "react";
import {
  foodMenu,
  drinksMenu,
  lunchOfferGroups,
  allergenLegend,
  MenuItem,
  DrinkItem,
  LunchItem,
  MenuTab,
  SpiceLevel,
} from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { Plus, Minus, Info, Clock, Check } from "lucide-react";

const FOOD_CATEGORIES = [
  "Alle",
  "Indian Street Food",
  "Suppen",
  "Salate & Raita",
  "Pakoras – Vorspeisen",
  "Brot & Beilagen",
  "Vegan",
  "Vegetarisch",
  "Biryani",
  "Hähnchengerichte",
  "Lammgerichte",
  "Tandoor Gerichte",
  "Kindergerichte",
  "Entengerichte",
  "Thalis",
  "Fischgerichte",
  "Platten",
  "Desserts",
];

const DRINK_CATEGORIES = [
  "Alle",
  "Non-Alcoholic Drinks",
  "Alcoholic Beverages",
];

export default function SpeisekartePage() {
  const [activeTab, setActiveTab] = useState<MenuTab>("speisekarte");
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [activeLunchOffer, setActiveLunchOffer] = useState<string>("all");
  const [activeLunchCategory, setActiveLunchCategory] = useState<string>("Alle");

  // Read ?tab= from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = (params.get("tab") as MenuTab) || "speisekarte";
    if (tab !== activeTab) {
      setActiveTab(tab);
      setActiveCategory("Alle");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function switchTab(tab: MenuTab) {
    setActiveTab(tab);
    setActiveCategory("Alle");
    setActiveLunchOffer("all");
    setActiveLunchCategory("Alle");
  }

  // Filtered food items (Search bar & diet filters removed per request)
  const filteredFood = useMemo(() => {
    return foodMenu.filter((item) => {
      if (activeCategory !== "Alle" && item.category !== activeCategory) return false;
      return true;
    });
  }, [activeCategory]);

  const groupedFood = useMemo(() => {
    const g: Record<string, MenuItem[]> = {};
    filteredFood.forEach((item) => {
      if (!g[item.category]) g[item.category] = [];
      g[item.category].push(item);
    });
    return g;
  }, [filteredFood]);

  // Filtered drinks
  const filteredDrinks = useMemo(() => {
    return drinksMenu.filter((item) => {
      if (activeCategory !== "Alle" && item.category !== activeCategory) return false;
      return true;
    });
  }, [activeCategory]);

  const groupedDrinks = useMemo(() => {
    const g: Record<string, DrinkItem[]> = {};
    filteredDrinks.forEach((item) => {
      if (!g[item.category]) g[item.category] = [];
      g[item.category].push(item);
    });
    return g;
  }, [filteredDrinks]);

  // Filtered Lunch Offers
  const filteredLunchGroups = useMemo(() => {
    return lunchOfferGroups
      .filter((group) =>
        activeLunchOffer === "all" ? true : group.id === activeLunchOffer
      )
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if (
            activeLunchCategory !== "Alle" &&
            item.category !== activeLunchCategory
          )
            return false;
          return true;
        }),
      }));
  }, [activeLunchOffer, activeLunchCategory]);

  const currentCategories =
    activeTab === "speisekarte"
      ? FOOD_CATEGORIES
      : activeTab === "getranke"
      ? DRINK_CATEGORIES
      : [];

  return (
    <div className="min-h-screen bg-brand-bg pb-32 md:pb-20">
      {/* Sticky Sub-Header Bar (Tab switcher + Category pills) */}
      <div className="bg-white border-b border-brand-border pt-3 pb-0 px-4 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto max-w-5xl">
          {/* Top Tab Switcher */}
          <div className="flex gap-1 mb-3">
            {(["speisekarte", "getranke", "tagesmenu"] as MenuTab[]).map((tab) => (
              <button
                key={tab}
                id={`tab-${tab}`}
                onClick={() => switchTab(tab)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-brand-primary text-white shadow"
                    : "text-brand-text-muted hover:bg-brand-bg hover:text-brand-text"
                }`}
              >
                {tab === "speisekarte"
                  ? "🍽 Speisekarte"
                  : tab === "getranke"
                  ? "🥤 Getränke"
                  : "☀️ Tagesmenü"}
              </button>
            ))}
          </div>

          {/* Category horizontal scroll — for food & drinks */}
          {activeTab !== "tagesmenu" && (
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
              {currentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border transition-colors flex-shrink-0 ${
                    activeCategory === cat
                      ? "bg-brand-primary text-white border-brand-primary font-bold shadow-sm"
                      : "bg-white text-brand-text border-brand-border hover:border-brand-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Category horizontal scroll — for Tagesmenü */}
          {activeTab === "tagesmenu" && (
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
              {[
                { id: "all", label: "Alle Angebote" },
                { id: "angebot-1", label: "Mittagsangebot 1" },
                { id: "angebot-2", label: "Mittagsangebot 2" },
                { id: "angebot-3", label: "Mittagsangebot 3" },
                { id: "angebot-4", label: "Mittagsangebot 4" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveLunchOffer(opt.id)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border transition-colors flex-shrink-0 ${
                    activeLunchOffer === opt.id
                      ? "bg-brand-primary text-white border-brand-primary font-bold shadow-sm"
                      : "bg-white text-brand-text border-brand-border hover:border-brand-primary/50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 pt-6">
        {/* ======================== SPEISEKARTE ======================== */}
        {activeTab === "speisekarte" && (
          <div className="space-y-10">
            {Object.entries(groupedFood).map(([category, items]) => (
              <section key={category}>
                <h2 className="font-display text-xl md:text-2xl font-bold mb-4 text-brand-text pb-2 border-b-2 border-brand-primary/20">
                  {category}
                </h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <FoodCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ======================== GETRÄNKE ======================== */}
        {activeTab === "getranke" && (
          <div className="space-y-10">
            {Object.entries(groupedDrinks).map(([category, items]) => (
              <section key={category}>
                <h2 className="font-display text-xl md:text-2xl font-bold mb-4 text-brand-text pb-2 border-b-2 border-brand-primary/20">
                  {category}
                </h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <DrinkCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ======================== TAGESMENÜ ======================== */}
        {activeTab === "tagesmenu" && (
          <>
            <div className="mb-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
              <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 text-sm md:text-base">
                  Mittagsangebot (Mo–Fr, 11:30–16:00 Uhr, außer Feiertagen)
                </p>
                <p className="text-xs md:text-sm text-amber-800 mt-1 leading-relaxed">
                  Nur für Selbstabholer. Alle Hauptgerichte servieren wir mit Basmatireis, Bhatura-Brot & Salat.
                </p>
              </div>
            </div>

            {/* Sub Filter by Meat/Veg */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
              {["Alle", "Vegetarisch", "Chicken", "Lamm", "Suppe"].map(
                (subCat) => (
                  <button
                    key={subCat}
                    onClick={() => setActiveLunchCategory(subCat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                      activeLunchCategory === subCat
                        ? "bg-brand-primary text-white border-brand-primary"
                        : "bg-white text-brand-text border-brand-border"
                    }`}
                  >
                    {subCat}
                  </button>
                )
              )}
            </div>

            <div className="space-y-10">
              {filteredLunchGroups.map((group) =>
                group.items.length > 0 ? (
                  <section key={group.id}>
                    <h2 className="font-display text-xl md:text-2xl font-bold mb-4 text-brand-text pb-2 border-b-2 border-brand-primary/20">
                      {group.title}
                    </h2>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <LunchItemCard key={item.id} item={item} />
                      ))}
                    </div>
                  </section>
                ) : null
              )}
            </div>
          </>
        )}

        {/* Allergen Legend */}
        <div className="mt-16 pt-6 border-t border-brand-border">
          <h4 className="font-bold mb-3 text-xs md:text-sm text-brand-text-muted uppercase tracking-wider">
            Allergene & Zusatzstoffe
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 text-[11px] text-brand-text-muted">
            {Object.entries(allergenLegend).map(([k, v]) => (
              <div key={k}>
                <span className="font-bold text-brand-text mr-1">{k}:</span>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpiceBadge({ spiceLevel, isSpicy }: { spiceLevel?: SpiceLevel; isSpicy?: boolean }) {
  const level = spiceLevel || (isSpicy ? "scharf" : undefined);
  if (!level) return null;

  switch (level) {
    case "pikant":
      return (
        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded uppercase">
          Pikant
        </span>
      );
    case "leicht scharf":
      return (
        <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded uppercase">
          Leicht scharf
        </span>
      );
    case "mittelscharf":
      return (
        <span className="text-[10px] font-bold text-amber-900 bg-orange-100 border border-orange-300 px-1.5 py-0.5 rounded uppercase">
          Mittelscharf
        </span>
      );
    case "scharf":
      return (
        <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded uppercase">
          Scharf
        </span>
      );
    case "mild":
      return (
        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded uppercase">
          Mild
        </span>
      );
    default:
      return null;
  }
}

function FoodCard({ item }: { item: MenuItem }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const qty = getItemQuantity(item.id);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex justify-between items-start md:items-center gap-3 bg-white rounded-2xl border border-brand-border p-3.5 md:p-4 hover:shadow-md transition-all group">
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 flex-wrap mb-1">
          <span className="text-[11px] font-extrabold text-brand-primary bg-brand-primary/10 px-1.5 py-0.5 rounded">
            #{item.id}
          </span>
          {item.isVeg && (
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
              VEG
            </span>
          )}
          <SpiceBadge spiceLevel={item.spiceLevel} isSpicy={item.isSpicy} />
        </div>
        <h3 className="font-bold text-brand-text text-sm md:text-base leading-snug">
          {item.name}
        </h3>
        {item.description && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-left w-full focus:outline-none cursor-pointer group/desc active:opacity-80"
            title="Klicken zum Ausklappen"
          >
            <p
              className={`text-xs text-brand-text-muted mt-0.5 leading-relaxed transition-all ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {item.description}
            </p>
          </button>
        )}
        {item.allergens && (
          <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
            <Info className="w-3 h-3 shrink-0" />
            <span>Allergene: {item.allergens}</span>
          </div>
        )}
      </div>

      {/* Right Column: Price & Minimal Add to Cart CTA */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="font-extrabold text-brand-primary text-sm md:text-base whitespace-nowrap">
          {item.price} €
        </span>

        {qty === 0 ? (
          <button
            onClick={() =>
              addToCart({
                menuId: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
                itemNumber: item.id,
              })
            }
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
            aria-label={`${item.name} hinzufügen`}
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        ) : (
          <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-300 rounded-xl p-0.5 shadow-sm">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="w-7 h-7 bg-white text-emerald-800 rounded-lg flex items-center justify-center font-bold text-xs hover:bg-emerald-100 active:scale-95 transition-transform shadow-xs"
              aria-label="Ein Element entfernen"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-5 text-center font-extrabold text-xs text-emerald-900">
              {qty}
            </span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center font-bold text-xs hover:bg-emerald-800 active:scale-95 transition-transform shadow-xs"
              aria-label="Ein weiteres Element hinzufügen"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function DrinkCard({ item }: { item: DrinkItem }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-3.5 md:p-4 hover:shadow-md transition-all">
      <div className="mb-2">
        <h3 className="font-bold text-brand-text text-sm md:text-base">{item.name}</h3>
        {item.description && (
          <p className="text-xs text-brand-text-muted mt-0.5">{item.description}</p>
        )}
      </div>

      <div className="space-y-2 pt-1 border-t border-gray-100">
        {item.variants.map((v) => {
          const qty = getItemQuantity(item.id, v.size);
          return (
            <div key={v.size} className="flex items-center justify-between gap-3 py-1">
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-brand-text">{v.size}</span>
                {v.info && (
                  <span className="text-[11px] text-brand-text-muted leading-snug">{v.info}</span>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-extrabold text-brand-primary text-xs md:text-sm whitespace-nowrap">
                  {v.price} €
                </span>

                {qty === 0 ? (
                  <button
                    onClick={() =>
                      addToCart({
                        menuId: item.id,
                        name: item.name,
                        variant: v.size,
                        price: v.price,
                        category: item.category,
                      })
                    }
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 active:scale-95 transition-transform"
                  >
                    <Plus className="w-3 h-3" /> Add
                  </button>
                ) : (
                  <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-300 rounded-lg p-0.5">
                    <button
                      onClick={() => updateQuantity(`${item.id}-${v.size}`, -1)}
                      className="w-6 h-6 bg-white text-emerald-800 rounded flex items-center justify-center font-bold text-xs hover:bg-emerald-100 active:scale-95 transition-transform"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-4 text-center font-extrabold text-xs text-emerald-900">
                      {qty}
                    </span>
                    <button
                      onClick={() => updateQuantity(`${item.id}-${v.size}`, 1)}
                      className="w-6 h-6 bg-emerald-700 text-white rounded flex items-center justify-center font-bold text-xs hover:bg-emerald-800 active:scale-95 transition-transform"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LunchItemCard({ item }: { item: LunchItem }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const qty = getItemQuantity(item.id);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex justify-between items-start md:items-center gap-3 bg-white rounded-2xl border border-brand-border p-3.5 md:p-4 hover:shadow-md transition-all">
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 flex-wrap mb-1">
          <span className="text-xs font-extrabold text-brand-text-muted">
            #{item.number}
          </span>
          <span className="text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded">
            {item.category}
          </span>
          <SpiceBadge spiceLevel={item.spiceLevel} isSpicy={item.isSpicy} />
        </div>
        <h3 className="font-bold text-brand-text text-sm md:text-base leading-snug">{item.name}</h3>
        {item.description && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-left w-full focus:outline-none cursor-pointer active:opacity-80"
            title="Klicken zum Ausklappen"
          >
            <p
              className={`text-xs text-brand-text-muted mt-0.5 leading-relaxed transition-all ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {item.description}
            </p>
          </button>
        )}
        {item.allergens && (
          <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
            <Info className="w-3 h-3 shrink-0" />
            <span>Allergene: {item.allergens}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="font-extrabold text-brand-primary text-sm md:text-base whitespace-nowrap">
          {item.price} €
        </span>

        {qty === 0 ? (
          <button
            onClick={() =>
              addToCart({
                menuId: item.id,
                name: `[Mittagsangebot] ${item.name}`,
                price: item.price,
                category: "Mittagsangebot",
                itemNumber: item.number,
              })
            }
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        ) : (
          <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-300 rounded-xl p-0.5 shadow-sm">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="w-7 h-7 bg-white text-emerald-800 rounded-lg flex items-center justify-center font-bold text-xs hover:bg-emerald-100 active:scale-95 transition-transform shadow-xs"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-5 text-center font-extrabold text-xs text-emerald-900">
              {qty}
            </span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center font-bold text-xs hover:bg-emerald-800 active:scale-95 transition-transform shadow-xs"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
