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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Schöner Garten"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent"></div>
      </div>

      {/* Animated Plant Growth SVG */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <PlantGrowthSVG isVisible={isVisible} />
      </div>

      {/* Master Badge */}
      <div className="absolute top-24 right-8 hidden lg:block">
        <MasterBadge />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* Key Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Meisterbetrieb</h3>
              <p className="text-white/80">Qualität und Expertise seit 2025</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Persönlicher Service</h3>
              <p className="text-white/80">Ihr Ansprechpartner von A bis Z</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">50km</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Regionaler Service</h3>
              <p className="text-white/80">Duisburg + 50 km Umkreis</p>
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