import React from 'react';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für Ihr <span className="text-amber-300">Traumprojekt</span>?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Ihre Gartenträume verwirklichen. 
            Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="tel:017631697541"
            className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Phone className="w-10 h-10 text-amber-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold text-lg mb-2">Anrufen</h3>
            <p className="text-green-100 text-sm">Sofortige Beratung</p>
            <div className="text-amber-300 font-medium mt-2">0176 31697541</div>
          </a>

          <a
            href="mailto:info@glt.de"
            className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Mail className="w-10 h-10 text-amber-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold text-lg mb-2">E-Mail</h3>
            <p className="text-green-100 text-sm">Detaillierte Anfrage</p>
            <div className="text-amber-300 font-medium mt-2">info@glt.de</div>
          </a>

          <button className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
            <MessageCircle className="w-10 h-10 text-amber-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-green-100 text-sm">Schnelle Nachricht</p>
            <div className="text-amber-300 font-medium mt-2">Chat starten</div>
          </button>

          <button className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
            <Calendar className="w-10 h-10 text-amber-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold text-lg mb-2">Termin</h3>
            <p className="text-green-100 text-sm">Online buchen</p>
            <div className="text-amber-300 font-medium mt-2">Jetzt buchen</div>
          </button>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mb-6">
            Kostenloses Angebot anfordern
          </button>
          
          <div className="text-green-100 text-lg">
            <p className="mb-2">✓ Kostenlose Erstberatung und Besichtigung</p>
            <p className="mb-2">✓ Unverbindliches, detailliertes Angebot</p>
            <p>✓ Persönlicher Ansprechpartner von A bis Z</p>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Unser Servicegebiet</h3>
            <p className="text-green-100 text-lg mb-6">
              Wir sind in Duisburg und im Umkreis von 50 km für Sie da
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white font-medium">
              <div>Duisburg</div>
              <div>Oberhausen</div>
              <div>Mülheim</div>
              <div>Essen</div>
              <div>Düsseldorf</div>
              <div>Krefeld</div>
              <div>Moers</div>
              <div>Dinslaken</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;