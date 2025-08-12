import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, MapPin, FileText, Hammer } from 'lucide-react';

const ProcessSteps = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: MessageCircle,
      title: 'Anfrage',
      description: 'Sie kontaktieren uns per Telefon, E-Mail oder über unser Kontaktformular. Wir besprechen Ihre Wünsche und Vorstellungen.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Vor-Ort-Besichtigung',
      description: 'Unser Experte besucht Sie kostenfrei vor Ort, nimmt Maß und berät Sie ausführlich zu den Möglichkeiten.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FileText,
      title: 'Angebot',
      description: 'Sie erhalten ein detailliertes, transparentes Angebot mit allen Leistungen und Materialien. Ohne versteckte Kosten.',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Hammer,
      title: 'Umsetzung',
      description: 'Nach Ihrer Zusage setzen wir Ihr Projekt fachgerecht und termingerecht um. Sie haben immer einen festen Ansprechpartner.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => {
              if (!prev.includes(stepIndex)) {
                return [...prev, stepIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unser <span className="text-green-600">Ablauf</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zur finalen Umsetzung – so läuft Ihr Projekt bei uns ab. 
            Transparent, professionell und immer mit Ihnen im Dialog.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Animated Progress Line */}
          <div 
            className="hidden lg:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-green-400 to-green-600 transform -translate-x-1/2 transition-all duration-1000 ease-out"
            style={{ 
              height: `${(visibleSteps.length / steps.length) * 100}%`
            }}
          ></div>

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  data-step={index}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className={`transform transition-all duration-700 delay-${index * 200} ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0'
                    }`}>
                      <div className={`inline-block p-6 rounded-2xl ${step.bgColor} mb-6 lg:mb-0`}>
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg mx-auto lg:mx-0 ${isEven ? 'lg:ml-auto' : ''}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 delay-${index * 200} ${
                      isVisible 
                        ? 'bg-green-500 scale-110' 
                        : 'bg-gray-300 scale-100'
                    }`}></div>
                  </div>

                  {/* Text Content */}
                  <div className={`w-full lg:w-5/12 mt-6 lg:mt-0`}>
                    <div className={`transform transition-all duration-700 delay-${index * 300} ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0'
                    }`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center mb-4 lg:hidden">
                          <span className="text-3xl font-bold text-green-600 mr-4">{index + 1}</span>
                          <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <h3 className="hidden lg:block text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;