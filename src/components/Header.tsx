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
            <div 
              onClick={() => {
                document.getElementById('hero')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/images/glt logo.png" 
                alt="GLT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-green-700 hover:text-green-800' 
                    : 'text-white hover:text-green-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-green-700 hover:text-green-800' 
                  : 'text-white hover:text-green-300'
              }`}
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