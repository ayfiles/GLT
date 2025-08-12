import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Start', href: '#hero' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Über uns', href: '#about' },
    { label: 'Ablauf', href: '#process' },
    { label: 'Kundenstimmen', href: '#testimonials' },
    { label: 'Kontakt', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GLT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-green-800">GLT Garten- und Landschaftsbau</h1>
              <p className="text-sm text-green-600">Meisterbetrieb seit 2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a href="tel:017631697541" className="flex items-center text-green-700 hover:text-green-800">
                <Phone className="w-4 h-4 mr-1" />
                0176 31697541
              </a>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Angebot anfordern
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-3">
                <a href="tel:017631697541" className="flex items-center text-green-700 px-4 py-2">
                  <Phone className="w-4 h-4 mr-2" />
                  0176 31697541
                </a>
                <a href="mailto:info@glt.de" className="flex items-center text-green-700 px-4 py-2">
                  <Mail className="w-4 h-4 mr-2" />
                  info@glt.de
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;