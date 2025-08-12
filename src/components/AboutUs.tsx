import React from 'react';
import { Award, Users, Heart, MapPin, Phone, Calendar } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Über <span className="text-green-600">GLT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr Meisterbetrieb für Garten- und Landschaftsbau in Duisburg. 
            Seit 2025 setzen wir Ihre Gartenträume mit handwerklicher Präzision und kreativer Leidenschaft um.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
          {/* Company Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Unsere Geschichte</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                GLT Garten- und Landschaftsbau wurde 2025 mit dem Ziel gegründet, 
                außergewöhnliche Gartenprojekte in Duisburg und Umgebung zu realisieren. 
                Als Meisterbetrieb setzen wir auf höchste Qualitätsstandards und 
                innovative Lösungen für jeden Garten.
              </p>
              <p>
                Unser Team vereint jahrelange Erfahrung mit modernen Arbeitsmethoden 
                und einer tiefen Leidenschaft für Garten- und Landschaftsbau. 
                Wir verstehen, dass jeder Garten einzigartig ist und gestalten 
                maßgeschneiderte Lösungen für Ihre individuellen Wünsche.
              </p>
              <p>
                Als regional verwurzeltes Unternehmen kennen wir die lokalen 
                Gegebenheiten und sind schnell vor Ort. Von der ersten Beratung 
                bis zur finalen Abnahme begleiten wir Sie persönlich durch 
                Ihr gesamtes Projekt.
              </p>
            </div>
          </div>

          {/* Placeholder image (Team) */}
          <div className="w-full">
            <div className="w-full h-64 md:h-80 lg:h-[22rem] bg-gray-200/70 rounded-2xl border border-gray-300/40 shadow-inner flex items-center justify-center text-gray-600">
              <span className="text-sm md:text-base">Teamfoto folgt</span>
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