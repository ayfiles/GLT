import { useState } from 'react';
import { 
  Hammer, 
  TreePine, 
  Shield, 
  Scissors,
  Car,
  FileText,
  Heart,
  Calendar,
  Snowflake
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Hammer,
      title: 'Pflasterarbeiten',
      description: 'Einfahrten, Wege und Terrassen in höchster Qualität',
      color: 'from-stone-500 to-stone-600'
    },
    {
      icon: Car,
      title: 'Terrassenbau',
      description: 'Individuelle Terrassen aus Stein, Holz oder WPC',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Zaun- und Sichtschutzbau',
      description: 'Sichtschutz und Zäune für mehr Privatsphäre',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: TreePine,
      title: 'Verlegung von Rollrasen',
      description: 'Sofort grüne Flächen – fachgerecht und schnell',
      color: 'from-lime-500 to-lime-600'
    },
    {
      icon: Scissors,
      title: 'Heckenschnitt & Baumfällung',
      description: 'Pflege und Entfernung von Hecken und Bäumen',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Garten Neu- & Umgestaltung',
      description: 'Komplette Neuanlage oder Umgestaltung Ihres Gartens',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FileText,
      title: 'Mauer- und Treppenbau',
      description: 'Stabile Mauern und stilvolle Treppen für Ihren Garten',
      color: 'from-stone-400 to-stone-600'
    },
    {
      icon: Calendar,
      title: 'Jahreszeiten-Gartenpflege',
      description: 'Pflege für Ihren Garten – das ganze Jahr über',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Snowflake,
      title: 'Streu- und Winterdienst',
      description: 'Sicher durch den Winter – wir übernehmen den Streudienst',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-green-600">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zur finalen Umsetzung – wir bieten Ihnen 
            das komplette Spektrum des Garten- und Landschaftsbaus aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 text-center">
                  {/* Icon with leaf animation */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Animated leaf on hover */}
                    {hoveredService === index && (
                      <div className="absolute -top-2 -right-2 animate-pulse">
                        <div className="w-6 h-6 bg-green-400 rounded-full opacity-80 transform rotate-45"></div>
                        <div className="absolute top-1 left-1 w-4 h-4 bg-green-500 rounded-full transform -rotate-12"></div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;