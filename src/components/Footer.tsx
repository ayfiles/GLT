import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import gltLogo from '../assets/glt-logo.svg';

type FooterProps = { hideLinks?: boolean };

const Footer: React.FC<FooterProps> = ({ hideLinks }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img 
                  src={gltLogo} 
                  alt="GLT Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">GLT Garten- und Landschaftsbau</h3>
                <p className="text-green-400">Meisterbetrieb seit 2025</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Ihr zuverlässiger Partner für professionelle Garten- und Landschaftsbauprojekte 
              in Duisburg und Umgebung. Qualität, die überzeugt.
            </p>

            {/* Master Badge */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-4 inline-block">
              <div className="text-center">
                <div className="text-white font-bold text-lg">MEISTERBETRIEB</div>
                <div className="text-amber-100 text-sm">Handwerkskammer Düsseldorf</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Navigation</h4>
            <ul className="space-y-3">
              {hideLinks ? (
                <>
                  <li className="text-gray-500">Start</li>
                  <li className="text-gray-500">Leistungen</li>
                  <li className="text-gray-500">Referenzen</li>
                  <li className="text-gray-500">Ablauf</li>
                  <li className="text-gray-500">Kontakt</li>
                </>
              ) : (
                <>
                  <li><a href="/#hero" className="text-gray-300 hover:text-white transition-colors duration-200">Start</a></li>
                  <li><a href="/#services" className="text-gray-300 hover:text-white transition-colors duration-200">Leistungen</a></li>
                  <li><a href="/#projects" className="text-gray-300 hover:text-white transition-colors duration-200">Referenzen</a></li>
                  <li><a href="/#process" className="text-gray-300 hover:text-white transition-colors duration-200">Ablauf</a></li>
                  <li><a href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Kontakt</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Kontakt</h4>
            <div className="space-y-4">
              <a href="tel:020659079713" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                02065/9079713
              </a>
              <a href="tel:017631697541" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                0176 31697541
              </a>
              
              <a href="mailto:info@glt-gartenbau.de" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                info@glt-gartenbau.de
              </a>
            </div>

            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 GLT Garten- und Landschaftsbau. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              {hideLinks ? (
                <>
                  <span className="text-gray-500">Impressum</span>
                  <span className="text-gray-500">Datenschutz</span>
                  <span className="text-gray-500">AGB</span>
                </>
              ) : (
                <>
                  <a href="#/impressum" className="text-gray-400 hover:text-white transition-colors duration-200">Impressum</a>
                  <a href="#/datenschutz" className="text-gray-400 hover:text-white transition-colors duration-200">Datenschutz</a>
                  <a href="#/agb" className="text-gray-400 hover:text-white transition-colors duration-200">AGB</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;