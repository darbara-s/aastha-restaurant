import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Aastha Restaurant",
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl mb-8">Impressum</h1>
      
      <div className="prose prose-stone max-w-none text-brand-text-muted space-y-6">
        <p>
          <strong>Angaben gemäß § 5 TMG</strong><br />
          Indische Aastha Restaurant<br />
          Parkaue 35 / Ecke Möllendorffstraße<br />
          10367 Berlin<br />
          Deutschland
        </p>

        <p>
          <strong>Vertreten durch:</strong><br />
          [Name des Inhabers - NEEDS CLIENT INPUT]
        </p>

        <p>
          <strong>Kontakt:</strong><br />
          Telefon: 030 85735738<br />
          E-Mail: info@aastha-restaurant.de
        </p>

        <p>
          <strong>Umsatzsteuer-ID:</strong><br />
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          [DE-Nummer - NEEDS CLIENT INPUT]
        </p>

        <h3>Haftungsausschluss (Disclaimer)</h3>
        <p><strong>Haftung für Inhalte</strong></p>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </div>
    </div>
  );
}
