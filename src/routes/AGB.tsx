import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-28 pb-10 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-6 sm:p-8">
            <div className="mb-6">
              <div className="h-1 w-20 bg-green-600 rounded"></div>
            </div>
            <section className="space-y-6 text-gray-800 leading-relaxed">
              <h1 className="text-3xl font-bold">Allgemeine Geschäftsbedingungen (AGB)</h1>
              <p>
                Dies ist ein Platzhaltertext für Ihre AGB. Hier beschreiben Sie u. a.
                Vertragsabschluss, Leistungen, Preise, Zahlungsbedingungen, Ausführungsfristen,
                Gewährleistung, Haftung, Eigentumsvorbehalt und Gerichtsstand.
              </p>
              <h2 className="text-2xl font-semibold">Leistungsumfang</h2>
              <p>
                Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot und der
                Auftragsbestätigung. Änderungen und Zusatzleistungen bedürfen der schriftlichen
                Vereinbarung.
              </p>
              <h2 className="text-2xl font-semibold">Zahlungsbedingungen</h2>
              <p>
                Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen ohne
                Abzug fällig. Bei Zahlungsverzug behalten wir uns vor, gesetzliche Verzugszinsen
                zu berechnen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer hideLinks />
    </div>
  );
};

export default AGB;


