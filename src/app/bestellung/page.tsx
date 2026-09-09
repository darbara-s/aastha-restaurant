"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  MapPin,
  Minus,
  Plus,
  Trash2,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
  Package,
  ArrowRight,
  Clock,
  ChefHat,
} from "lucide-react";

type Step = "summary" | "details" | "confirmation";

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  pickupTime: string;
  notes: string;
  honeypot: string; // spam prevention
}

export default function BestellungPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, totalCount, totalAmount } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<Step>("summary");
  const [loading, setLoading] = useState(false);
  const [orderRef, setOrderRef] = useState("");
  const [details, setDetails] = useState<CustomerDetails>({
    name: "",
    email: "",
    phone: "",
    pickupTime: "",
    notes: "",
    honeypot: "",
  });

  const formattedTotal = totalAmount.toFixed(2).replace(".", ",");

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (bot filled the hidden field)
    if (details.honeypot) return;

    setLoading(true);

    const ref = `AA-${Date.now().toString().slice(-6)}`;

    try {
      const orderPayload = {
        orderRef: ref,
        customer: {
          name: details.name,
          email: details.email,
          phone: details.phone,
          pickupTime: details.pickupTime,
          notes: details.notes,
        },
        items: cart.map((item) => ({
          name: item.name,
          variant: item.variant,
          quantity: item.quantity,
          price: item.priceFormatted,
          lineTotal: (item.price * item.quantity).toFixed(2).replace(".", ","),
        })),
        totalAmount: formattedTotal,
        submittedAt: new Date().toISOString(),
      };

      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
    } catch (err) {
      console.error("Order email failed:", err);
    } finally {
      setOrderRef(ref);
      clearCart();
      setLoading(false);
      setStep("confirmation");
    }
  };

  // ──────────────────────────────── STEP 1: SUMMARY ──────────────────────────────────
  if (step === "summary") {
    if (cart.length === 0) {
      return (
        <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center gap-5">
          <ShoppingBag className="w-14 h-14 text-brand-text-muted opacity-40" />
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-text">Ihr Warenkorb ist leer</h2>
            <p className="text-brand-text-muted text-sm mt-1">Fügen Sie Gerichte aus der Speisekarte hinzu.</p>
          </div>
          <button
            onClick={() => router.push("/speisekarte")}
            className="bg-brand-primary text-white font-bold px-6 py-3 rounded-2xl hover:bg-brand-primary/90 transition-colors shadow-md flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Zur Speisekarte
          </button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-brand-bg pb-28">
        <div className="container mx-auto max-w-xl px-4 py-4 space-y-3">
          {/* Header */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="w-8 h-8 rounded-xl border border-brand-border bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-brand-text" />
            </button>
            <div>
              <h1 className="font-display text-xl font-bold text-brand-text">Bestellübersicht</h1>
              <p className="text-[11px] text-brand-text-muted">{totalCount} Artikel im Warenkorb</p>
            </div>
          </div>

          {/* Compact Pickup Badge */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2 text-xs text-emerald-800">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="font-bold text-emerald-900">Selbstabholung:</span>{" "}
              <span className="text-emerald-700">Parkaue 35, 10367 Berlin</span>
            </div>
          </div>

          {/* Scrollable Compact Items List */}
          <div className="bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden">
            <div className="max-h-[48vh] overflow-y-auto divide-y divide-gray-100 px-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-2 py-2.5">
                  <div className="flex-1 min-w-0 pr-1">
                    <p className="text-xs font-semibold text-brand-text truncate leading-tight">
                      {item.itemNumber && (
                        <span className="font-bold text-brand-primary mr-1">#{item.itemNumber}</span>
                      )}
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-[11px] text-brand-text-muted truncate mt-0.5">{item.variant}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-5 h-5 bg-white text-gray-700 rounded flex items-center justify-center text-xs hover:bg-gray-100 active:scale-95 transition-transform shadow-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-bold text-xs text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-5 h-5 bg-emerald-700 text-white rounded flex items-center justify-center text-xs hover:bg-emerald-800 active:scale-95 transition-transform shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-extrabold text-xs text-brand-primary w-14 text-right whitespace-nowrap">
                      {(item.price * item.quantity).toFixed(2).replace(".", ",")} €
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-rose-500 transition-colors p-0.5"
                      aria-label="Entfernen"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Total Row */}
          <div className="bg-white rounded-xl border border-brand-border px-3.5 py-2.5 flex items-center justify-between shadow-xs text-sm">
            <span className="font-bold text-brand-text">Gesamtbetrag</span>
            <span className="font-extrabold text-lg text-brand-primary">{formattedTotal} €</span>
          </div>

          <p className="text-center text-[11px] text-brand-text-muted">
            Bezahlung erfolgt bei Abholung im Restaurant (Bar oder Karte).
          </p>
        </div>

        {/* Sticky Bottom Floating CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3.5 bg-brand-bg/95 backdrop-blur-md border-t border-brand-border z-40 flex justify-center">
          <div className="w-full max-w-xl">
            <button
              onClick={() => setStep("details")}
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-all"
            >
              Weiter zur Abholung <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────── STEP 2: DETAILS ──────────────────────────────────
  if (step === "details") {
    return (
      <div className="min-h-screen bg-brand-bg pb-28">
        <div className="container mx-auto max-w-xl px-4 py-4 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setStep("summary")}
              className="w-8 h-8 rounded-xl border border-brand-border bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-brand-text" />
            </button>
            <div>
              <h1 className="font-display text-xl font-bold text-brand-text">Ihre Kontaktdaten</h1>
              <p className="text-[11px] text-brand-text-muted">Für die Abholbestätigung</p>
            </div>
          </div>

          {/* Mini-Summary Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs">
            <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
              <Package className="w-4 h-4" />
              {totalCount} Artikel · Selbstabholung
            </span>
            <span className="font-extrabold text-emerald-900 text-sm">{formattedTotal} €</span>
          </div>

          <form id="details-form" onSubmit={handleDetailsSubmit} className="space-y-3.5">
            {/* Honeypot — hidden field for spam prevention */}
            <input
              type="text"
              name="website"
              value={details.honeypot}
              onChange={(e) => setDetails({ ...details, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            {/* Compact Form Cards with non-caps labels matching reservation theme */}
            <div className="bg-white rounded-2xl border border-brand-border p-4 shadow-xs space-y-3">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Vollständiger Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="z.B. Maria Mustermann"
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  E-Mail-Adresse *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="maria@beispiel.de"
                    value={details.email}
                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Telefonnummer *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="030 / 123 456 789"
                    value={details.phone}
                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Pickup Time */}
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Gewünschte Abholzeit (optional)
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="z.B. 18:30 Uhr"
                    value={details.pickupTime}
                    onChange={(e) => setDetails({ ...details, pickupTime: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-brand-text mb-1">
                  Anmerkungen (optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="z.B. Allergie-Hinweise, besondere Wünsche..."
                    value={details.notes}
                    onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Pickup Info Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2 text-xs text-amber-800">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
              <div>
                <p className="font-bold">Abholung bei uns im Restaurant</p>
                <p className="mt-0.5">Parkaue 35, 10367 Berlin — Mo–So 11:30–22:00 Uhr</p>
              </div>
            </div>
          </form>
        </div>

        {/* Sticky Bottom Floating CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3.5 bg-brand-bg/95 backdrop-blur-md border-t border-brand-border z-40 flex justify-center">
          <div className="w-full max-w-xl">
            <button
              type="submit"
              form="details-form"
              disabled={loading}
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-all disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="animate-spin w-5 h-5 border-2 border-white/40 border-t-white rounded-full" />
                  Bestellung wird gesendet…
                </>
              ) : (
                <>
                  <ChefHat className="w-5 h-5" />
                  Abholung jetzt bestätigen
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────── STEP 3: CONFIRMATION ──────────────────────────────────
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md space-y-4">
        {/* Success card */}
        <div className="bg-white rounded-3xl border border-brand-border shadow-xl p-6 text-center space-y-4">
          <div className="relative mx-auto w-16 h-16">
            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-60" />
            <div className="relative w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-emerald-600" />
            </div>
          </div>

          <div>
            <h1 className="font-display text-xl font-extrabold text-brand-text">
              Bestellung eingegangen!
            </h1>
            <p className="text-xs text-brand-text-muted mt-1">
              Bestellnummer: <span className="font-extrabold text-brand-primary">{orderRef}</span>
            </p>
          </div>

          {/* Status badge */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 flex items-center gap-3 text-left">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
              <ChefHat className="w-4 h-4 text-amber-700 animate-pulse" />
            </div>
            <div>
              <p className="font-bold text-amber-900 text-xs">Ihre Bestellung wird zubereitet</p>
              <p className="text-[11px] text-amber-700 mt-0.5">Das Restaurant hat Ihre Anfrage erhalten</p>
            </div>
          </div>

          {/* Confirmation details */}
          <div className="bg-gray-50 rounded-2xl p-3.5 text-left space-y-2 text-xs border border-gray-100">
            <div className="flex items-center gap-2 text-brand-text">
              <User className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span className="font-semibold">{details.name}</span>
            </div>
            <div className="flex items-center gap-2 text-brand-text-muted">
              <Mail className="w-3.5 h-3.5 text-brand-primary/60 shrink-0" />
              <span>{details.email}</span>
            </div>
            <div className="flex items-center gap-2 text-brand-text-muted">
              <Phone className="w-3.5 h-3.5 text-brand-primary/60 shrink-0" />
              <span>{details.phone}</span>
            </div>
            {details.pickupTime && (
              <div className="flex items-center gap-2 text-brand-text-muted">
                <Clock className="w-3.5 h-3.5 text-brand-primary/60 shrink-0" />
                <span>Abholung: {details.pickupTime}</span>
              </div>
            )}
            <div className="pt-2 border-t border-gray-200 flex items-center gap-2 text-brand-text-muted">
              <MapPin className="w-3.5 h-3.5 text-brand-primary/60 shrink-0" />
              <span>Parkaue 35, 10367 Berlin</span>
            </div>
          </div>

          <p className="text-[11px] text-brand-text-muted leading-relaxed">
            Bitte bringen Sie Ihre Bestellnummer zur Abholung mit. Bezahlung erfolgt bar oder mit Karte im Restaurant.
          </p>
        </div>

        {/* Back to menu */}
        <button
          onClick={() => router.push("/speisekarte")}
          className="w-full py-3 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all shadow-xs text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zur Speisekarte
        </button>
      </div>
    </div>
  );
}
