import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const MapSection = () => {
  const [activeTab, setActiveTab] = useState('map');

  const contactInfo = {
    address: {
      street: 'Ritterstraße 49',
      city: '47228 Duisburg',
      coordinates: { lat: 51.3776, lng: 6.8027 }
    },
    hours: [
      { day: 'Montag - Freitag', time: '07:00 - 17:00 Uhr' },
      { day: 'Samstag', time: '08:00 - 14:00 Uhr' },
      { day: 'Sonntag', time: 'Nach Vereinbarung' }
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
            Finden Sie <span className="text-green-600">uns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besuchen Sie uns in Duisburg oder vereinbaren Sie einen Termin für eine 
            kostenlose Besichtigung vor Ort in unserem Servicegebiet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map/Contact Tabs */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('map')}
                className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'map'
                    ? 'bg-white text-green-600 shadow-md'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Karte & Anfahrt
              </button>
              <button
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'form'
                    ? 'bg-white text-green-600 shadow-md'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Kontaktformular
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'map' && (
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interaktive Karte</h3>
                  <p className="text-gray-600 mb-4">
                    Hier würde normalerweise eine Google Maps Integration erscheinen
                  </p>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="font-semibold text-gray-900">{contactInfo.address.street}</div>
                    <div className="text-gray-600">{contactInfo.address.city}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'form' && (
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktformular</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gewünschte Leistung
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200">
                        <option>Bitte wählen...</option>
                        <option>Pflasterarbeiten</option>
                        <option>Terrassen</option>
                        <option>Gartengestaltung</option>
                        <option>Sichtschutz</option>
                        <option>Teichbau</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dateien hochladen
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors duration-200">
                      <div className="text-gray-600">
                        <p>Bilder oder Pläne hier hineinziehen</p>
                        <p className="text-sm">oder klicken zum Auswählen</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten entsprechend der{' '}
                      <a href="#" className="text-green-600 hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            )}
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
    </section>
  );
};

export default MapSection;