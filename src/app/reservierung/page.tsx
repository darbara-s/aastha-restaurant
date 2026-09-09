"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  Users,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export default function ReservierungPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [guests, setGuests] = useState("2");
  const today = new Date();
  const todayFormatted = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
  const [date, setDate] = useState(todayFormatted);
  const [time, setTime] = useState("18:30");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seating, setSeating] = useState("egal");
  const [notes, setNotes] = useState("");

  const timeSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate DD/MM/YYYY format
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (step === 1 && (!datePattern.test(date) || !time)) return;
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, guests, date, time, seating, notes }),
      });
    } catch (err) {
      console.error("Reservation email failed:", err);
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] bg-brand-bg py-8 md:py-16 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Online Reservierung
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-2">
            Tisch reservieren
          </h1>
          <p className="text-sm md:text-base text-brand-text-muted">
            In wenigen Schritten Ihren Platz im Aastha Restaurant sichern.
          </p>
        </div>

        {/* Submitted Success State */}
        {submitted ? (
          <div className="bg-white rounded-3xl border border-brand-border p-8 md:p-10 shadow-lg text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-text mb-2">
                Reservierung angefragt!
              </h2>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Vielen Dank, <strong className="text-brand-text">{name}</strong>. Wir haben Ihre Anfrage erhalten und melden uns in Kürze zur Bestätigung.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-brand-bg rounded-2xl p-4 text-left space-y-2.5 text-sm border border-brand-border/60">
              <div className="flex justify-between items-center text-brand-text">
                <span className="text-brand-text-muted flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-primary" /> Personen
                </span>
                <span className="font-semibold">{guests} Gäste</span>
              </div>
              <div className="flex justify-between items-center text-brand-text">
                <span className="text-brand-text-muted flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-primary" /> Datum
                </span>
                <span className="font-semibold">{date}</span>
              </div>
              <div className="flex justify-between items-center text-brand-text">
                <span className="text-brand-text-muted flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-primary" /> Uhrzeit
                </span>
                <span className="font-semibold">{time} Uhr</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="w-full py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-primary/90 transition-colors shadow"
            >
              Weitere Reservierung
            </button>
          </div>
        ) : (
          /* Multi-step Form Card */
          <div className="bg-white rounded-3xl border border-brand-border shadow-md overflow-hidden">
            {/* Step Progress Bar */}
            <div className="bg-brand-bg/50 px-6 py-3 border-b border-brand-border flex items-center justify-between text-xs font-semibold text-brand-text-muted">
              <span>Schritt {step} von 2</span>
              <div className="flex gap-1.5">
                <div
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    step >= 1 ? "bg-brand-primary" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    step >= 2 ? "bg-brand-primary" : "bg-gray-200"
                  }`}
                />
              </div>
            </div>

            {/* Step 1: Guests, Date & Time */}
            {step === 1 && (
              <form onSubmit={handleNext} className="p-6 md:p-8 space-y-7">
                {/* Guests */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-brand-text">
                    <Users className="w-4 h-4 text-brand-primary" /> Wie viele Personen?
                  </label>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {guestOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setGuests(opt)}
                        className={`h-12 rounded-xl font-bold text-sm border transition-all active:scale-95 flex items-center justify-center ${
                          guests === opt
                            ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                            : "bg-white text-brand-text border-brand-border hover:border-brand-primary/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-3">
                  <label htmlFor="date" className="flex items-center gap-2 text-sm font-bold text-brand-text">
                    <Calendar className="w-4 h-4 text-brand-primary" /> An welchem Tag?
                  </label>
                  <input
                    id="date"
                    type="text"
                    inputMode="numeric"
                    placeholder="TT/MM/JJJJ"
                    value={date}
                    onChange={(e) => {
                      // Auto-insert slashes as user types
                      let val = e.target.value.replace(/[^\d]/g, "");
                      if (val.length >= 3) val = val.slice(0, 2) + "/" + val.slice(2);
                      if (val.length >= 6) val = val.slice(0, 5) + "/" + val.slice(5);
                      setDate(val.slice(0, 10));
                    }}
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-border bg-white text-brand-text font-medium text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                  />
                  <p className="text-xs text-brand-text-muted">Format: TT/MM/JJJJ – z.B. {todayFormatted}</p>
                </div>

                {/* Time Slot Chips */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-brand-text">
                    <Clock className="w-4 h-4 text-brand-primary" /> Um wie viel Uhr?
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`py-2.5 rounded-xl font-medium text-xs border transition-all active:scale-95 flex items-center justify-center ${
                          time === slot
                            ? "bg-brand-primary text-white border-brand-primary shadow-sm font-bold"
                            : "bg-white text-brand-text border-brand-border hover:border-brand-primary/50"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating preference */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-brand-text-muted">
                    Sitzplatz-Wunsch
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "egal", label: "Egal" },
                      { id: "innen", label: "Innenbereich" },
                      { id: "terrasse", label: "Terrasse" },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSeating(opt.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                          seating === opt.id
                            ? "bg-brand-secondary/15 text-brand-secondary border-brand-secondary font-semibold"
                            : "bg-white text-brand-text-muted border-brand-border"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!date}
                  className="w-full py-4 bg-brand-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-4 active:scale-[0.99]"
                >
                  Weiter zu Ihren Kontaktdaten <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-sm font-bold text-brand-text">
                      <User className="w-4 h-4 text-brand-primary" /> Vollständiger Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Maria Muster"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-border bg-white text-brand-text text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-sm font-bold text-brand-text">
                      <Phone className="w-4 h-4 text-brand-primary" /> Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0176 12345678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-border bg-white text-brand-text text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-sm font-bold text-brand-text">
                      <Mail className="w-4 h-4 text-brand-primary" /> E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maria@beispiel.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-border bg-white text-brand-text text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                    />
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-sm font-bold text-brand-text">
                      <MessageSquare className="w-4 h-4 text-brand-primary" /> Anmerkungen (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="z.B. Kinderstuhl benötigt, Geburtstag..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3.5 px-5 border border-brand-border text-brand-text font-semibold rounded-2xl hover:bg-gray-50 flex items-center justify-center gap-1.5 transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" /> Zurück
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-brand-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-colors shadow-md active:scale-[0.99] text-base"
                  >
                    Reservierung Absenden
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Contact fallback */}
        <div className="mt-8 text-center text-xs text-brand-text-muted">
          Lieber telefonisch buchen? Rufen Sie uns direkt an:{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="font-bold text-brand-primary underline"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
