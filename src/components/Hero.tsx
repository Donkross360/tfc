import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// import heroBg from '../assets/images/1.png';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(75, 73, 73, 0.6), rgba(107, 105, 105, 0.7)), url("/assets/images/2.png")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-900/60"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Find Your <span className="text-gold-500">Purpose</span> and <span className="text-gold-500">Community</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            <span className="text-gold-500">welcome! </span>There is room for you, regardless of where you are in your faith journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="cta"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-md text-lg transition-all shadow-lg"
              >
                Join Us This Sunday
              </motion.button>
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-md text-lg transition-all"
              >
                Service Times
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Link
          to="mission"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;