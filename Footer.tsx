import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Github } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link 
              href="#hero" 
              className="text-white font-bold text-xl md:text-2xl flex items-center mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Kognify Matrix Labs
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming visions into digital reality with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Custom Website Development</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">AI Integration</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">3D Website Design</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">ERP Solutions</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">CRM Development</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-purple-400 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:Contact-KML@kognifymatrixlabs.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact-KML@kognifymatrixlabs.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-purple-400 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+919663190849" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +91 9663190849
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Kognify Matrix Labs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;