import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Father's Church</h3>
            <p className="mb-4 text-white/80">
              Come just as you are, there is room for everyone.
            </p>
            <div className="flex space-x-4">
              <a href=" https://www.facebook.com/TheFathersChurch" className="text-white hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@TheFathersChurch" className="text-white hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['home', 'mission', 'services', 'events', 'cta'].map((item, index) => (
                <Link
                  key={index}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
              <a href="#" className="text-white/80 hover:text-gold-400 transition-colors">
                Sermons
              </a>
              <a href="#" className="text-white/80 hover:text-gold-400 transition-colors">
                Ministries
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-gold-400 mt-0.5" />
                <div>
                  <p className="font-semibold">Sunday Services</p>
                  <p className="text-white/80">9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-gold-400 mt-0.5" />
                <div>
                  <p className="font-semibold">Wednesday Service</p>
                  <p className="text-white/80">6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-gold-400 mt-0.5" />
                <div>
                  <p className="font-semibold">Throneroom (1st Fridays)</p>
                  <p className="text-white/80">6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold-400 mt-0.5" />
                <p className="text-white/80">Eden Centre<br />Jahi District, Abuja</p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-gold-400 mt-0.5" />
                <p className="text-white/80">+234 703 158 8404</p>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-gold-400 mt-0.5" />
                <p className="text-white/80">info@fatherschurchonline.org</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Father's Church. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;