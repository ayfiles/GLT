import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz: React.FC = () => {
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
              <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
              <p>
                Dieser Text dient als Platzhalter für Ihre spätere Datenschutzerklärung. Hier
                erläutern Sie, welche personenbezogenen Daten verarbeitet werden, zu welchen
                Zwecken, auf welcher Rechtsgrundlage und wie lange diese gespeichert werden.
              </p>
              <h2 className="text-2xl font-semibold">Verantwortlicher</h2>
              <p>
                GLT Garten- und Landschaftsbau, Ritterstraße 49, 47228 Duisburg, E-Mail:
                info@glt-gartenbau.de, Telefon: 02065/9079713
              </p>
              <h2 className="text-2xl font-semibold">Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Widerspruch sowie Datenübertragbarkeit gemäß DSGVO. Wenden Sie
                sich hierzu an die oben genannte Kontaktadresse.
              </p>
              <h2 className="text-2xl font-semibold">Kontaktformular</h2>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten werden zur Bearbeitung Ihrer
                Anfrage verarbeitet. Die Daten werden nicht ohne Ihre Einwilligung an Dritte
                weitergegeben.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer hideLinks />
    </div>
  );
};

export default Datenschutz;


