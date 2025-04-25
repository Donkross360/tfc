import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'mission' },
    { title: 'Services', to: 'services' },
    { title: 'Events', to: 'events' },
    { title: 'Visit', to: 'cta' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer"
        >
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`font-medium cursor-pointer transition-colors hover:text-gold-500 ${
                isScrolled ? 'text-navy-800' : 'text-white'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <a 
            href="#cta" 
            className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            Give Online
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-navy-800 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-navy-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-navy-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideUp">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="text-navy-800 hover:text-gold-500 font-medium py-2 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <a 
                href="#" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-md transition-colors font-medium text-center"
              >
                Give Online
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;