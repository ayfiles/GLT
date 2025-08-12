import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Familie Müller',
      location: 'Duisburg-Meiderich',
      project: 'Komplette Gartenumgestaltung',
      rating: 5,
      text: 'GLT hat unseren Garten in eine wahre Oase verwandelt. Von der Planung bis zur Umsetzung war alles perfekt organisiert. Das Team ist sehr professionell und die Qualität der Arbeit übertrifft unsere Erwartungen.',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Thomas Schneider',
      location: 'Duisburg-Homberg',
      project: 'Terrasse und Pflasterarbeiten',
      rating: 5,
      text: 'Hervorragende Beratung und handwerklich einwandfreie Ausführung. Termine wurden zuverlässig eingehalten und das Ergebnis entspricht genau unseren Vorstellungen. Gerne wieder!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Sandra Weber',
      location: 'Duisburg-Rheinhausen',
      project: 'Vorgarten-Neugestaltung',
      rating: 5,
      text: 'Wir sind begeistert von unserem neuen Vorgarten! GLT hat kreative Ideen eingebracht und diese perfekt umgesetzt. Der Service war durchweg freundlich und kompetent.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Koch',
      location: 'Duisburg-Walsum',
      project: 'Teichanlage mit Sitzbereich',
      rating: 5,
      text: 'Die Zusammenarbeit mit GLT war von Anfang an sehr angenehm. Kompetente Beratung, faire Preise und eine Ausführung, die keine Wünsche offen lässt. Unser Gartenteich ist ein Traum geworden!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Familie Becker',
      location: 'Duisburg-Wedau',
      project: 'Sichtschutz und Bepflanzung',
      rating: 5,
      text: 'GLT hat uns einen wunderschönen Sichtschutz geschaffen, der perfekt in unseren Garten passt. Die Beratung war sehr detailliert und die Umsetzung erfolgte schnell und sauber.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Was unsere <span className="text-green-600">Kunden</span> sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lesen Sie authentische Bewertungen von zufriedenen Kunden aus Duisburg und Umgebung. 
            Ihre Zufriedenheit ist unser Maßstab für Qualität.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-green-100">
              <Quote className="w-16 h-16" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentTestimonial].location}
                  </p>
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="text-sm text-green-600 font-medium">
                Projekt: {testimonials[currentTestimonial].project}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 hover:text-green-600"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Vorherige
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 hover:text-green-600"
            >
              Nächste
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl font-bold text-green-600">5.0</div>
                <div>
                  {renderStars(5)}
                  <p className="text-gray-600 text-sm mt-1">Basierend auf Google Bewertungen</p>
                </div>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Alle Bewertungen auf Google ansehen
              </button>
            </div>
          </div>
        </div>

        {/* Auto-play indicator */}
        {isAutoPlaying && (
          <div className="text-center mt-8 text-gray-500 text-sm">
            Automatische Wiedergabe aktiv • Klicken Sie auf die Pfeile, um zu pausieren
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;