import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Aastha Restaurant",
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl mb-8">Datenschutzerklärung</h1>
      
      <div className="prose prose-stone max-w-none text-brand-text-muted space-y-6">
        <p>
          Wir freuen uns sehr über Ihr Interesse an unserem Restaurant. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Indische Aastha Restaurant. Eine Nutzung der Internetseiten ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich.
        </p>

        <h3>1. Name und Anschrift des für die Verarbeitung Verantwortlichen</h3>
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
          Indische Aastha Restaurant<br />
          Parkaue 35 / Ecke Möllendorffstraße<br />
          10367 Berlin<br />
          Deutschland<br />
          Tel.: 030 85735738<br />
          E-Mail: info@aastha-restaurant.de
        </p>

        <h3>2. Erfassung von allgemeinen Daten und Informationen</h3>
        <p>
          Die Internetseite erfasst mit jedem Aufruf durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse).
        </p>

        <h3>3. Kontaktmöglichkeit über die Internetseite</h3>
        <p>
          Die Internetseite enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert.
        </p>
      </div>
    </div>
  );
}
