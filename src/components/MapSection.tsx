import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const MapSection = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const contactInfo = {
    address: {
      street: 'Ritterstraße 49',
      city: '47228 Duisburg',
      coordinates: { lat: 51.3776, lng: 6.8027 }
    },
    hours: [
      { day: 'Montag - Freitag', time: '09:00 - 16:00 Uhr' },
      { day: 'Samstag', time: 'Geschlossen' },
      { day: 'Sonntag', time: 'Geschlossen' }
    ],
    contact: {
      phone: '0176 31697541',
      email: 'info@glt.de'
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nehmen Sie <span className="text-green-600">Kontakt</span> auf
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schreiben Sie uns Ihr Anliegen – wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kontaktformular */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 h-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktformular</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gewünschte Leistung
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200">
                        <option>Bitte wählen...</option>
                        <option>Pflasterarbeiten</option>
                        <option>Terrassenbau</option>
                        <option>Zaun- und Sichtschutzbau</option>
                        <option>Verlegung von Rollrasen</option>
                        <option>Heckenschnitt & Baumfällung</option>
                        <option>Garten Neu- & Umgestaltung</option>
                        <option>Mauer- und Treppenbau</option>
                        <option>Jahreszeiten-Gartenpflege</option>
                        <option>Streu- und Winterdienst</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      rows={3}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    ></textarea>
                  </div>

                  

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten entsprechend der{' '}
                      <button type="button" onClick={() => setIsPrivacyOpen(true)} className="text-green-600 hover:underline">
                        Datenschutzerklärung
                      </button>{' '}
                      zu. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-green-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start">
                <Clock className="w-8 h-8 text-green-600 mt-1 mr-4 flex-shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Öffnungszeiten</h3>
                  <div className="space-y-2">
                    {contactInfo.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="text-gray-900 font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direkter Kontakt</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.contact.phone}`}
                  className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-900 font-medium">{contactInfo.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.contact.email}`}
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-900 font-medium">{contactInfo.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicegebiet</h3>
              <p className="text-gray-700">
                Duisburg und Umkreis von <span className="font-semibold text-amber-600">50 km</span>
              </p>
              <div className="mt-3 text-sm text-gray-600">
                Kostenlose Anfahrt innerhalb des Servicegebiets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Datenschutzerklärung Lightbox */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Datenschutzerklärung</h3>
              <button aria-label="Schließen" onClick={() => setIsPrivacyOpen(false)} className="text-gray-500 hover:text-gray-800 px-2 py-1">✕</button>
            </div>
            <div className="p-6 space-y-4 text-gray-700">
              <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Angaben aus dem Kontaktformular werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
              <p>Verantwortlicher: Sinan Gültekin, GLT Garten- und Landschaftsbau, Ritterstraße 49, 47228 Duisburg. Kontakt: info@glt.de</p>
              <p>Weitere Informationen zu Speicherfristen, Betroffenenrechten (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit) und Beschwerderecht bei einer Aufsichtsbehörde finden Sie in unserer vollständigen Datenschutzerklärung.</p>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button onClick={() => setIsPrivacyOpen(false)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">Schließen</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MapSection;