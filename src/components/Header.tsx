import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import gltLogo from '../assets/glt-logo.svg';

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
    { label: 'Über uns', href: '#about' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Ablauf', href: '#process' },
    { label: 'Referenzen', href: '#projects' },
    { label: 'Kontakt', href: '#contact' }
  ];

  const handleLogoClick = () => {
    const isHome = window.location.pathname === '/';
    if (!isHome) {
      window.location.href = '/';
      return;
    }
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5">
        <div className="flex justify-center items-center py-3 sm:py-5 relative">
          {/* Logo - Absolute positioned left */}
          <div className="absolute left-0 flex items-center space-x-3">
            <div 
              onClick={handleLogoClick}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src={gltLogo} 
                alt="GLT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-10 text-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className={`transition-colors duration-200 font-medium cursor-pointer ${
                  isScrolled 
                    ? 'text-green-700 hover:text-green-800' 
                    : 'text-white hover:text-green-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Absolute positioned right */}
          <div className="absolute right-0 flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md ring-1 ring-white/20 bg-white/10 backdrop-blur ${
                isScrolled 
                  ? 'text-green-700 hover:bg-green-50 hover:text-green-800 ring-green-200' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-3 shadow-lg rounded-b-2xl">
            <nav className="flex flex-col space-y-2 px-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 hover:text-green-700 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-green-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <a href="tel:017631697541" className="flex items-center text-green-700 px-3 py-2 rounded-lg hover:bg-green-50">
                  <Phone className="w-4 h-4 mr-2" />
                  0176 31697541
                </a>
                <a href="mailto:info@glt.de" className="flex items-center text-green-700 px-3 py-2 rounded-lg hover:bg-green-50">
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