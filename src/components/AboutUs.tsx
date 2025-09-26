import React from 'react';
import { Award, Users, Heart, MapPin, Phone, Calendar } from 'lucide-react';
import teamImage from '../assets/team-image.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GLT-Gartenbau – Ihr Gartenbau-Meisterbetrieb für Qualität und Leidenschaft
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
          {/* Company Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Über uns</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Wir von GLT-Gartenbau sind ein Gartenbau-Meisterbetrieb, der mit Fachwissen, Erfahrung und viel Liebe zum Detail grüne Lebensräume gestaltet. Als Meisterbetrieb stehen wir für höchste handwerkliche Qualität, Zuverlässigkeit und individuelle Lösungen, die perfekt auf Ihre Wünsche zugeschnitten sind.
              </p>
              <p>
                Unser Leistungsspektrum reicht von der kreativen Gartenplanung über Pflaster- und Natursteinarbeiten bis hin zur Pflege und Neugestaltung von Grünanlagen. Dabei verbinden wir traditionelles Handwerk mit modernen Ideen und setzen auf nachhaltige Materialien und Lösungen.
              </p>
              <p>
                Ob kleiner Privatgarten oder große Außenanlage – wir begleiten Sie von der ersten Beratung bis zur fertigen Umsetzung und schaffen Gärten, die zum Verweilen und Wohlfühlen einladen.
              </p>
              <p>
                GLT-Gartenbau – Ihr Meisterbetrieb für Gartenbau mit Herz und Verstand.
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="w-full">
            <div className="w-full h-64 md:h-80 lg:h-[22rem] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img 
                src={teamImage} 
                alt="GLT Team" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>



        {/* Values Row below story + placeholder */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <Award className="w-8 h-8 text-amber-500 mb-2" />
              <h4 className="text-base font-semibold text-gray-900 mb-1">Meisterbetrieb</h4>
              <p className="text-gray-600 text-xs">
                Qualifizierte Ausbildung und höchste handwerkliche Standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <Users className="w-8 h-8 text-blue-500 mb-2" />
              <h4 className="text-base font-semibold text-gray-900 mb-1">Persönlicher Service</h4>
              <p className="text-gray-600 text-xs">
                Ein fester Ansprechpartner begleitet Sie kontinuierlich.
              </p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <Heart className="w-8 h-8 text-red-500 mb-2" />
              <h4 className="text-base font-semibold text-gray-900 mb-1">Engagiertes Team</h4>
              <p className="text-gray-600 text-xs">
                Leidenschaft und Erfahrung für Ihr Projekt.
              </p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <MapPin className="w-8 h-8 text-green-500 mb-2" />
              <h4 className="text-base font-semibold text-gray-900 mb-1">Regional verwurzelt</h4>
              <p className="text-gray-600 text-xs">
                Lokal vernetzt und schnell vor Ort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 