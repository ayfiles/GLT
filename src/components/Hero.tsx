import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Award } from 'lucide-react';
import PlantGrowthSVG from './PlantGrowthSVG';
import MasterBadge from './MasterBadge';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent"></div>
      </div>

      {/* Master Badge */}
      <div className="absolute bottom-8 right-8 hidden lg:block scale-90 origin-bottom-right">
        <MasterBadge />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-0">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ihr <span className="text-green-400">Meisterbetrieb</span> für<br />
            Garten- und Landschaftsbau<br />
            <span className="text-3xl md:text-4xl text-green-300">in Duisburg</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Von Pflasterarbeiten bis zu kompletten Gartenanlagen – wir realisieren Ihre Ideen 
            mit handwerklicher Präzision und kreativer Leidenschaft.
          </p>

          {/* Mobile Layout: Cards first, then Buttons */}
          <div className="flex flex-col">
            {/* Buttons - Mobile: order-2, Desktop: order-1 */}
            <div className="order-2 sm:order-1 flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-0">
              <button className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                <span className="flex items-center">
                  Kostenloses Angebot
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Rückrufservice
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;