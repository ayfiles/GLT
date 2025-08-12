import React from 'react';
import { Award, Users, Heart, MapPin } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Meisterbetrieb seit 2025',
      description: 'Qualifizierte Ausbildung und höchste handwerkliche Standards garantieren erstklassige Ergebnisse für Ihr Projekt.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Users,
      title: 'Persönlicher Ansprechpartner',
      description: 'Von der ersten Beratung bis zur finalen Abnahme – ein fester Ansprechpartner begleitet Sie durchgängig.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Engagiertes Team',
      description: 'Leidenschaft für Garten- und Landschaftsbau trifft auf jahrelange Erfahrung und moderne Arbeitsmethoden.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Regional verwurzelt',
      description: 'Als Duisburger Unternehmen kennen wir die lokalen Gegebenheiten und sind schnell vor Ort.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Warum <span className="text-green-600">GLT</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diese Werte machen uns zu Ihrem verlässlichen Partner für 
            alle Garten- und Landschaftsbauprojekte in Duisburg und Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="mt-6 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Überzeugt? Lassen Sie uns sprechen!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute einen kostenlosen Beratungstermin und erfahren Sie, 
            wie wir Ihre Gartenprojekte zum Leben erwecken können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg">
              Kostenlosen Termin vereinbaren
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Referenzen ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;