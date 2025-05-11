import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            href="#hero" 
            className="text-white font-bold text-xl md:text-2xl flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Kognify Matrix Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full 
                hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300 flex items-center"
            >
              Get a Free Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full 
                text-center hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;